import type { Metadata } from "next";

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const seoConfig = defineMetadata({
    metadataBase: new URL("https://docs.treblle.com"),
    title: {
        template: "%s - Treblle",
        default: "Treblle - Innovating Today, ShAPIng Tomorrow",
    },
    description:
        "Treblle helps engineering and product teams build, ship and understand their REST APIs in one single place",
    openGraph: {
        images: "/og-image.png",
        url: "https://docs.treblle.com",
    },
    manifest: "/site.webmanifest",
    twitter: {
        site: "@treblleapi",
        creator: "@treblleapi",
    },
});

export default seoConfig;
