import "../styles/panda.css";

import type { ReactNode } from "react";

import { css, cx } from "~styled-system/css";

import { fontClassName } from "../styles/fonts";

interface RootLayoutProperties {
    children: ReactNode;
}

export default function RootLayout(properties: RootLayoutProperties) {
    const { children } = properties;
    return (
        <html
            lang="en"
            className={cx(fontClassName, css({ overflowX: "hidden", fontFamily: "body" }))}
            suppressHydrationWarning
        >
            <head>
                <title>Treblle Documentation</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
