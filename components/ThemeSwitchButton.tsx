"use client";

import { useTheme } from "next-themes";
import { useMounted } from "nextra/hooks";

import { Button } from "~components/ui/Button";
import { css } from "~styled-system/css";
import { HStack } from "~styled-system/jsx";

import { ButtonIcon } from "../theme/icons";

function useThemeSwitch() {
    const theme = useTheme();
    const { setTheme, resolvedTheme } = theme;

    const mounted = useMounted();
    const isDark = mounted && resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    const iconToUse: "Moon" | "Sun" = isDark ? "Moon" : "Sun";
    const iconText = isDark ? "Dark" : "Light";

    return {
        mounted,
        iconToUse,
        iconText,
        toggleTheme,
    };
}

const switchStyle = css({
    px: "2",
    py: "1",
    textStyle: "xl",
    fontWeight: "semibold",
    letterSpacing: "tight",
    rounded: "md",
    cursor: "pointer",
    _hover: {
        bg: "bg.emphasized.hover",
    },
});

export function ThemeSwitchButton() {
    const { iconToUse, toggleTheme, mounted } = useThemeSwitch();

    return (
        <button style={{ opacity: mounted ? 1 : 0 }} onClick={toggleTheme} className={switchStyle}>
            <HStack gap="2">
                <ButtonIcon icon={iconToUse} />
            </HStack>
        </button>
    );
}

export function ThemeSwitchIconButton() {
    const { iconToUse, iconText, toggleTheme, mounted } = useThemeSwitch();

    return (
        <Button
            style={{ opacity: mounted ? 1 : 0 }}
            onClick={toggleTheme}
            aria-label={iconText}
            className={switchStyle}
        >
            <ButtonIcon icon={iconToUse} />
        </Button>
    );
}
