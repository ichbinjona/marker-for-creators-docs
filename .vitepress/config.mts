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
    ['link', { rel: 'icon', type: 'image/png', href: '/MarkerForCreatorsAppLogo.png' }],
    ['meta', { name: 'theme-color', content: '#ff6b35' }],
  ],

  themeConfig: {
    logo: '/MarkerForCreatorsAppLogo.png',
    siteTitle: 'Marker for Creators',

    // Top navigation
    nav: [
      { text: 'Workflow', link: '/workflow/' },
      { text: 'Features', link: '/features/marker-types-and-presets' },
      { text: 'Companion App', link: '/companion-app/' },
      { text: 'Examples', link: '/example-workflows/' },
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'Setup Guide', link: '/getting-started/setup' },
        ]
      },
      {
        text: 'The Marker Workflow',
        items: [
          { text: 'Overview', link: '/workflow/' },
          { text: 'Recording & Marking', link: '/workflow/recording-and-marking' },
          { text: 'Importing Your Session', link: '/workflow/importing' },
        ]
      },
      {
        text: 'Features',
        collapsed: false,
        items: [
          { text: 'Marker Types & Presets', link: '/features/marker-types-and-presets' },
          { text: 'Marker Notes', link: '/features/marker-notes' },
          { text: 'Apple Watch', link: '/features/apple-watch' },
          { text: 'Timelines & Clips', link: '/features/timelines-and-clips' },
          { text: 'Camera Setup', link: '/features/camera-setup' },
          { text: 'Session Management', link: '/features/session-management' },
          { text: 'Advanced Settings', link: '/features/advanced-settings' },
        ]
      },
      {
        text: 'Companion App',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/companion-app/' },
        ]
      },
      {
        text: 'Example Workflows',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/example-workflows/' },
          { text: 'Video Podcast', link: '/example-workflows/video-podcast' },
          { text: 'Sports Videography', link: '/example-workflows/sports-videography' },
          { text: 'Event Highlights', link: '/example-workflows/event-highlights' },
          { text: 'Documentary', link: '/example-workflows/documentary' },
          { text: 'Conference', link: '/example-workflows/conference' },
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Common Issues', link: '/troubleshooting/' },
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
