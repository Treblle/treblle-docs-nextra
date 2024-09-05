"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { ThemeSwitchButton } from "~components/ThemeSwitchButton";
import { Button } from "~components/ui/Button";
import { css } from "~styled-system/css";
import { Box, Stack, styled } from "~styled-system/jsx";

import { Icon } from "../theme/icons";

export default function Page() {
    const { theme } = useTheme();

    return (
        <Stack
            css={{
                flexDirection: "column",
                gap: "0",
                bgColor: "bg.main",
                paddingX: { base: "0", lg: "6" },
                minHeight: "screen",
            }}
        >
            <Stack
                css={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: "5",
                    paddingX: { base: "6", lg: "0" },
                }}
            >
                <Link href="https://treblle.com">
                    <Icon icon="LogoPositive" height="28px" width="100px" />
                </Link>
                <Stack css={{ flexDirection: "row", alignItems: "center" }}>
                    <ThemeSwitchButton />
                    <Stack
                        css={{
                            width: "1px",
                            height: "28px",
                            bgColor: "deep-metal",
                            marginRight: "2",
                        }}
                    />
                    <Stack
                        css={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "4",
                        }}
                    >
                        <Link href="https://github.com/Treblle/treblle-docs-nextra" target="_blank">
                            <Icon icon="Github" width="20px" height="20px" />
                        </Link>
                        <Link href="https://discord.com/invite/hgt78mXwzv" target="_blank">
                            <Icon icon="Discord" width="20px" height="20px" />
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Box className={mainBgGradient}>
                <styled.h1 css={{ textStyle: "h1", zIndex: "10" }}>Treblle Documentation</styled.h1>
                <styled.p
                    css={{
                        color: "text.muted",
                        maxWidth: "600px",
                        textAlign: { base: "left", lg: "center" },
                        zIndex: "10",
                        fontSize: { lg: "lg" },
                    }}
                >
                    End to End API Ops platform, helping engineering and product teams build, ship
                    and understand their REST APIs in one single place.
                </styled.p>
                <Image
                    priority
                    src="/hero-image-dark.png"
                    alt="Treblle core and other products diagram"
                    className={heroImage}
                    width={1282}
                    height={716}
                    hidden={theme === "light"}
                />
                <Image
                    priority
                    src="/hero-image-light.png"
                    alt="Treblle core and other products diagram"
                    className={heroImage}
                    width={1282}
                    height={716}
                    hidden={theme === "dark"}
                />
                <Stack
                    css={{ flexDirection: { base: "column", sm: "row" }, gap: "6", marginTop: "2" }}
                >
                    <Button asChild>
                        <Link href={"/advanced"}>Get Started</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href={"/advanced"}>
                            <Icon
                                icon="Github"
                                width="20px"
                                height="20px"
                                className={css({ marginRight: "2" })}
                            />
                            Github
                        </Link>
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}

const mainBgGradient = css({
    bgGradient: "to-bl",
    minHeight: "calc(100vh - 160px)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: { base: "left", lg: "center" },
    paddingTop: { base: "50px", lg: "200px" },
    position: "relative",
    paddingX: "10",
    gradientFrom: "#e5eeff",
    gradientTo: "white",
    gap: "4",
    _dark: {
        gradientFrom: "#012065",
        gradientTo: "midnight",
    },
});

const heroImage = css({
    position: "absolute",
    top: "60%",
    left: "50%",
    translate: "-50% -50%",
    width: "100%",
    maxWidth: "1200px",
    display: "none",
    objectFit: "contain",
    lg: {
        display: "block",
    },
});
