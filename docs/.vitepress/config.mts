import { defineConfig } from 'vitepress'

const script = (base: string, title: string, changelog = true) => ({
  text: title,
  collapsed: true,
  items: [
    { text: 'Overview', link: `/${base}/` },
    { text: 'Installation', link: `/${base}/installation` },
    { text: 'Configuration', link: `/${base}/configuration` },
    ...(changelog ? [{ text: 'Changelog', link: `/${base}/changelog` }] : []),
  ],
})

export default defineConfig({
  title: 'Filthy Lytiez Docs',
  description: 'Documentation for the Filthy Lytiez FiveM scripts',
  appearance: 'dark',
  base: '/script-documentation/',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/script-documentation/images/logo.webp' }]],
  themeConfig: {
    logo: '/images/logo.webp',
    siteTitle: 'Filthy Lytiez',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Scripts', link: '/#scripts' },
      { text: 'Help', link: '/troubleshooting/common-issues' },
      { text: 'Discord', link: 'https://discord.gg/7CHvRKs4KK' },
      { text: 'Store', link: 'https://filthylytiez.tebex.io/' },
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'community_bridge', link: '/guide/community-bridge' },
        ],
      },
      {
        text: 'Scripts',
        items: [
          script('towscenarios', 'Tow Scenarios'),
          script('winch', 'Winch System'),
          script('pawnshop', 'Pawnshop'),
          script('moneywash', 'Money Wash'),
          script('ammunation', 'Ammunation', false),
          script('engineswap', 'Engine Swap and Dyno', false),
          script('recycling', 'Recycle System (Free)', false),
          script('addcreator', 'Ad Creator (Free)', false),
        ],
      },
      {
        text: 'Help',
        items: [
          { text: 'Common issues', link: '/troubleshooting/common-issues' },
          { text: 'FAQ', link: '/troubleshooting/faq' },
          { text: 'Support', link: '/troubleshooting/support' },
        ],
      },
    ],
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/7CHvRKs4KK' },
    ],
    outline: { level: [2, 3] },
    footer: { message: 'Filthy Lytiez Development', copyright: '© 2026' },
  },
})
