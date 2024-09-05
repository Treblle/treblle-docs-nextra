import nextra from 'nextra'

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  codeHighlight: true
})

export default withNextra({
  reactStrictMode: true,
  swcMinify: true,
})

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error)
})
