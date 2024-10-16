import nextra from "nextra";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    defaultShowCopyCode: true,
    search: {
        codeblocks: true,
    },
    codeHighlight: true,
    transformPageMap(pageMap) {
     
          pageMap = [
            ...pageMap,
            // {
            //   name: 'virtual-page',
            //   route: '/virtual-page',
            //   frontMatter: { sidebarTitle: 'Virtual Page' }
            // }
          ]
    
        return pageMap
      },
      latex: true,
});

export default withNextra({
    reactStrictMode: true,
    swcMinify: true,
});

process.on("unhandledRejection", (error) => {
    console.log("unhandledRejection", error);
});
