import Image from "next/image";

import { sva } from "~styled-system/css";

export default function LandingPage() {
    const classes = styles();

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <a href="https://treblle.com">
                    <Image
                        src="/logo-negative.svg"
                        alt="Treblle Logo"
                        className={classes.logo}
                        width={100}
                        height={28}
                    />
                </a>

                <nav className={classes.navActions}>
                    <button>Light Mode</button>
                    <div>|</div>
                    <a href="#">Pricing</a>
                    <a href="#">Sign In</a>
                </nav>
            </header>
            <main className={classes.main}>
                <Image
                    src="/hero-image@3x.png"
                    alt="Hero image"
                    className={classes.heroImage}
                    width={1282}
                    height={716}
                />
                <a
                    href="https://github.com/Treblle/treblle-docs-nextra/releases"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.changelogButton}
                >
                    Treblle Changelog
                </a>
                <h1 className={classes.title}>Treblle Documentation</h1>
                <p className={classes.description}>
                    End to End API Ops platform, helping engineering and product teams build, ship
                    and understand their REST APIs in one single place.
                </p>
                <div>
                    <button>Get Started</button>
                    <button>Github</button>
                </div>
            </main>
        </div>
    );
}

const styles = sva({
    slots: [
        "container",
        "header",
        "logo",
        "navActions",
        "main",
        "changelogButton",
        "title",
        "description",
        "heroImage",
    ],
    base: {
        container: {
            backgroundColor: "midnight",
            paddingX: "6",
            minHeight: "screen",
            _dark: {
                backgroundColor: "midnight",
            },
        },
        header: {
            paddingY: "4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        logo: {
            width: "100px",
            height: "28px",
        },
        navActions: {
            display: "flex",
            gap: "4",
        },
        main: {
            bgGradient: "to-bl",
            gradientFrom: "#012065",
            gradientTo: "midnight",
            minHeight: "calc(100vh - 60px)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "200px",
            position: "relative",
            paddingX: "10",
        },
        changelogButton: {
            paddingY: "2",
            paddingX: "4",
            borderRadius: "3xl",
            bgColor: "#29304b",
            color: "#ffffff",
            zIndex: "1",
        },
        title: {
            fontFamily: "poppins",
            fontSize: "5xl",
            fontWeight: "bold",
            color: "white",
            zIndex: "1",
        },
        description: {
            color: "#bcc0d9",
            zIndex: "1",
        },
        heroImage: {
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            width: "100%",
            maxWidth: "1200px",
            zIndex: "0",
            display: "hidden",
            md: {
                display: "block",
            },
        },
    },
});
