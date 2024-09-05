import "../styles/panda.css";

import { ThemeProvider } from "next-themes";
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
            <body>
                <ThemeProvider attribute="class" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
