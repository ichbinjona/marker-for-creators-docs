import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Marker for Creators',
  description: 'User documentation for Marker for Creators and Marker for Creators Companion',

  // Clean URLs (no .html extension)
  cleanUrls: true,

  // Sitemap
  sitemap: {
    hostname: 'https://docs.markerforcreators.com'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ff6b35' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Marker for Creators',

    // Top navigation
    nav: [
      { text: 'iOS App', link: '/ios-app/overview' },
      { text: 'Companion', link: '/companion/overview' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Changelog', link: '/changelog/' },
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
        ]
      },
      {
        text: 'iOS App',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/ios-app/overview' },
        ]
      },
      {
        text: 'Companion (Mac & PC)',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/companion/overview' },
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'Frequently Asked Questions', link: '/faq/' },
        ]
      },
      {
        text: 'Changelog',
        items: [
          { text: 'What\'s New', link: '/changelog/' },
        ]
      },
    ],

    // Built-in search (no backend needed)
    search: {
      provider: 'local'
    },

    // Edit link (for future GitHub editing)
    editLink: {
      pattern: 'https://github.com/ichbinjona/marker-for-creators-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ichbinjona/marker-for-creators-docs' }
    ],

    footer: {
      message: 'Marker for Creators Documentation',
      copyright: 'Copyright © 2026 Marker for Creators'
    },

    // Last updated timestamp
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short'
      }
    }
  },

  // Git-based last updated
  lastUpdated: true,
})
