# Google Analytics Event Tracking Guide

This document outlines all the custom events being tracked on your portfolio site.

## 📊 Tracked Events Summary

### 1. **Project Clicks** (`project_click`)
**Where**: Works page (`/works`)
**Triggers**: When a user clicks on any project card
**Data Captured**:
- `project_title`: Name of the project
- `project_slug`: URL slug of the project
- `event_category`: "engagement"
- `event_label`: Project title

**Example Event**:
```javascript
{
  event: 'project_click',
  project_title: 'OptiSchema',
  project_slug: 'optischema',
  event_category: 'engagement'
}
```

### 2. **Resume Clicks** (`resume_click`)
**Where**:
- Navbar (desktop)
- Mobile menu

**Triggers**: When a user clicks the Resume link
**Data Captured**:
- `click_source`: "navbar" or "mobile_menu"
- `event_category`: "conversion"
- `event_label`: "Resume Download/View"

**Example Event**:
```javascript
{
  event: 'resume_click',
  click_source: 'navbar',
  event_category: 'conversion'
}
```

### 3. **GitHub Profile Clicks** (`github_click`)
**Where**:
- Navbar (desktop)
- Mobile menu

**Triggers**: When a user clicks the GitHub link
**Data Captured**:
- `click_source`: "navbar" or "mobile_menu"
- `event_category`: "engagement"
- `event_label`: "GitHub Profile"
- `outbound`: true

### 4. **Blog Post Clicks** (`blog_click`)
**Where**:
- Homepage featured posts section
- Blog listing page (`/blog`)

**Triggers**: When a user clicks on any blog post card
**Data Captured**:
- `blog_title`: Title of the blog post
- `blog_url`: Full URL to Hashnode post
- `event_category`: "engagement"
- `event_label`: Blog post title
- `outbound`: true

**Example Event**:
```javascript
{
  event: 'blog_click',
  blog_title: 'CodeCompass.AI: Empower Your Team with Instant Project Insights',
  blog_url: 'https://arnab2001.hashnode.dev/codecompassai-...',
  event_category: 'engagement',
  outbound: true
}
```

### 5. **Email Clicks** (`email_click`)
**Where**: Homepage contact section
**Triggers**: When a user clicks the email address link
**Data Captured**:
- `event_category`: "conversion"
- `event_label`: "Contact Email"

### 6. **Social Media Clicks** (`social_click`)
**Where**: Homepage socials section
**Platforms Tracked**:
- Dev.to
- Instagram
- Discord
- Facebook
- Twitter
- Hashnode

**Triggers**: When a user clicks any social media link
**Data Captured**:
- `platform`: Name of the platform (e.g., "Instagram", "Twitter")
- `url`: Full URL to the social profile
- `event_category`: "engagement"
- `event_label`: Platform name
- `outbound`: true

**Example Event**:
```javascript
{
  event: 'social_click',
  platform: 'Instagram',
  url: 'https://www.instagram.com/arnab.chatterjee.0/',
  event_category: 'engagement',
  outbound: true
}
```

## 📈 How to View Events in Google Analytics

### Real-time Events
1. Go to **Reports** → **Real-time** → **Event count by Event name**
2. Open your site in another tab
3. Click on various elements (blog posts, resume, projects, etc.)
4. Watch events appear in real-time!

### Historical Events
1. Go to **Reports** → **Engagement** → **Events**
2. You'll see all event names with total counts
3. Click on any event to see:
   - Event count over time
   - Top parameters (which blog posts, which projects, etc.)
   - User demographics

### Custom Reports
Create custom exploration reports to answer questions like:
- Which blog posts drive the most engagement?
- Do mobile users click Resume more than desktop users?
- Which social platform gets the most clicks?
- What's the conversion path from blog → project → resume?

## 🎯 Key Metrics to Monitor

### Engagement Metrics
- **Most Clicked Projects**: Which projects interest visitors most?
- **Popular Blog Posts**: Which Hashnode articles drive traffic back?
- **Social Platform Preference**: Where does your audience engage most?

### Conversion Metrics
- **Resume Click Rate**: % of visitors who view your resume
- **Email Click Rate**: % of visitors interested in hiring you
- **Project-to-Resume Flow**: Do people view projects then click resume?

### Traffic Quality
- **Outbound Click Rate**: Are visitors engaging with your external content?
- **Multi-page Engagement**: Do visitors explore multiple projects?
- **Return Visitor Behavior**: Different patterns vs first-time visitors?

## 🔧 Technical Implementation

All tracking uses the utility functions in `/lib/analytics.ts`:

```typescript
// Track a project click
trackProjectClick(projectTitle, projectSlug)

// Track a blog post click
trackBlogClick(blogTitle, blogUrl)

// Track resume download
trackResumeClick(source) // 'navbar' or 'mobile_menu'

// Track GitHub profile view
trackGithubClick(source)

// Track email contact
trackEmailClick()

// Track social media click
trackSocialClick(platform, url)
```

## 📊 Expected Event Volume (Estimates)

Based on typical portfolio traffic:
- **Page Views**: 100-500/month
- **Blog Clicks**: 20-30% of visitors (20-150/month)
- **Project Clicks**: 40-60% of visitors (40-300/month)
- **Resume Clicks**: 10-20% of visitors (10-100/month)
- **Social Clicks**: 5-15% of visitors (5-75/month)

## 🚀 Performance Impact

- **Zero blocking**: All events fire asynchronously
- **No delays**: Tracking doesn't slow down user interactions
- **Cached scripts**: Google Analytics scripts are cached by browsers
- **Minimal data**: Each event adds ~1KB to analytics payload

## 📱 Mobile vs Desktop Tracking

All events track the same way on mobile and desktop, with one exception:
- Resume/GitHub clicks include `click_source` to distinguish navbar vs mobile menu

This helps you understand:
- Do mobile users engage differently?
- Should mobile menu be reorganized?
- Are certain CTAs more effective on mobile?

## 🎨 Custom Dashboards (Recommended)

Create a custom dashboard in GA4 with:

1. **Engagement Overview Card**
   - Total events this week
   - Top 5 clicked projects
   - Top 3 clicked blog posts

2. **Conversion Funnel Card**
   - Visitors → Project Views → Resume Clicks
   - Blog Readers → Email Clicks

3. **Traffic Quality Card**
   - Avg events per session
   - Bounce rate
   - Pages per session

## 🔍 Debugging Events

To test if events are firing:

1. Open DevTools (F12)
2. Go to **Network** tab
3. Filter by "google-analytics" or "gtag"
4. Click on various elements
5. You should see network requests with your event data

Alternatively, use **Google Analytics Debugger** Chrome extension for detailed event logs.

---

**Last Updated**: 2026-02-08
**Analytics ID**: G-SBK1WGQF16
