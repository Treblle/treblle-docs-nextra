import { useRouter } from "next/router";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";

import seoConfig from "./seo.config";
import { Icon } from "./theme/icons";

const config: DocsThemeConfig = {
    logo: <Icon icon="LogoPositive" height="28px" width="100px" />,
    project: {
        link: "https://github.com/Treblle/treblle-docs-nextra",
    },
    chat: {
        link: "https://discord.com/invite/hgt78mXwzv",
    },
    docsRepositoryBase: "https://github.com/Treblle/treblle-docs-nextra",
    footer: {
        text: "©Treblle. All Rights Reserved.",
    },
    nextThemes: {
        defaultTheme: "system",
    },
    themeSwitch: {},
    useNextSeoProps() {
        const { route } = useRouter();
        const { url, images } = seoConfig.openGraph;

        if (route === "/") {
            return { titleTemplate: "%s - Treblle" };
        }

        return {
            titleTemplate: seoConfig.title.template,
            openGraph: { url, images: [{ url: `${url}${images}` }] },
        };
    },
    head: () => {
        const { frontMatter: meta } = useConfig();
        const { title } = meta;

        return (
            <>
                <meta httpEquiv="Content-Language" content="en" />
                <meta name="description" content={meta.description || seoConfig.description} />
                <meta
                    name="og:title"
                    content={title ? title + " – Treblle" : seoConfig.title.default}
                />
                <meta name="og:description" content={meta.description || seoConfig.description} />
                <meta name="og:image" content={seoConfig.openGraph.images} />
                <meta name="og:url" content={seoConfig.openGraph.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={seoConfig.twitter.site} />
                <meta name="twitter:creator" content={seoConfig.twitter.creator} />
                <meta name="apple-mobile-web-app-title" content="Treblle" />
            </>
        );
    },
};

export default config;
