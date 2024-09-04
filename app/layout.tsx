import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

import { ReactNode } from "react";

interface LayoutProperties {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProperties) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
