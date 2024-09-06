import "../styles/panda.css";
import "../styles/global.css";

import { ThemeProvider } from "next-themes";
import React from "react";

import { css, cx } from "~styled-system/css";

import { fontClassName } from "../styles/fonts";

interface RootLayoutProperties {
    children: React.ReactNode;
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
            <body>
                <ThemeProvider attribute="class" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
