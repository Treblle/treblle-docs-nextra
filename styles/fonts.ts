import { Inter as InterFont, Poppins as PoppinsFont } from "next/font/google";

import { cx } from "~styled-system/css";

export const Poppins = PoppinsFont({
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const Inter = InterFont({
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-inter",
});

export const fontClassName = cx(Inter.variable, Poppins.variable);
