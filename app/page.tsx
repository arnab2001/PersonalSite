import HomeClient from '@/components/home/HomeClient'
import { getFeaturedHashnodePosts } from '@/lib/hashnode'

export const metadata = {
  alternates: {
    canonical: '/'
  }
}

export const revalidate = 300

export default async function Home() {
  const featuredPosts = await getFeaturedHashnodePosts(3)

  return <HomeClient featuredPosts={featuredPosts} />
}
