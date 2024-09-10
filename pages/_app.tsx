// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import "../styles/global.css";
import "../styles/panda.css";

import type { ElementType } from "react";

import { Inter, Poppins } from "../styles/fonts";

interface MyAppProperties {
    Component: ElementType;
    pageProps: Record<string, unknown>;
}

export default function MyApp({ Component, pageProps }: MyAppProperties) {
    return (
        <>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>
                {`
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        font-family: ${Poppins.style.fontFamily};
                    }

                    body {
                        font-family: ${Inter.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </>
    );
}
