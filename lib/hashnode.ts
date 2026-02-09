export interface HashnodeBlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  link: string // External Hashnode URL
  coverImage?: string
  tags: string[]
  publishedAt: string
  author: string
  readTimeMinutes?: number
}

const HASHNODE_USERNAME = 'arnab2001'
const HASHNODE_GRAPHQL_URL = 'https://gql.hashnode.com'

// Cache the feed for 5 minutes
const REVALIDATE_SECONDS = 300
let cachedFeed: HashnodeBlogPost[] | null = null
let lastFetchTime = 0
const CACHE_DURATION = REVALIDATE_SECONDS * 1000

export async function getHashnodeBlogPosts(): Promise<HashnodeBlogPost[]> {
  const now = Date.now()

  // Return cached data if still fresh
  if (cachedFeed && now - lastFetchTime < CACHE_DURATION) {
    return cachedFeed
  }

  try {
    const query = `
      query Publication {
        publication(host: "${HASHNODE_USERNAME}.hashnode.dev") {
          posts(first: 20) {
            edges {
              node {
                id
                title
                brief
                slug
                url
                content {
                  markdown
                }
                coverImage {
                  url
                }
                tags {
                  name
                }
                publishedAt
                author {
                  name
                }
                readTimeInMinutes
              }
            }
          }
        }
      }
    `

    const response = await fetch(HASHNODE_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
      next: { revalidate: REVALIDATE_SECONDS }
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.errors) {
      throw new Error(`GraphQL error: ${JSON.stringify(data.errors)}`)
    }

    const posts: HashnodeBlogPost[] = data.data?.publication?.posts?.edges.map((edge: any) => {
      const node = edge.node
      return {
        id: node.id,
        slug: node.slug,
        title: node.title,
        description: node.brief || '',
        content: node.content?.markdown || '',
        link: node.url,
        coverImage: node.coverImage?.url,
        tags: node.tags?.map((tag: any) => tag.name) || [],
        publishedAt: node.publishedAt,
        author: node.author?.name || 'Arnab Chatterjee',
        readTimeMinutes: node.readTimeInMinutes
      }
    }) || []

    // Update cache
    cachedFeed = posts
    lastFetchTime = now

    return posts
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error)
    // Return cached data if available, otherwise empty array
    return cachedFeed || []
  }
}

export async function getFeaturedHashnodePosts(limit: number = 3): Promise<HashnodeBlogPost[]> {
  const posts = await getHashnodeBlogPosts()
  return posts.slice(0, limit)
}

export async function getHashnodePostBySlug(slug: string): Promise<HashnodeBlogPost | null> {
  const posts = await getHashnodeBlogPosts()
  return posts.find(post => post.slug === slug) || null
}
