import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
    colors: {
        bg: {
            main: {
                value: {
                    base: "{colors.white}",
                    _dark: "{colors.midnight}",
                },
            },
            muted: {
                value: {
                    base: "{colors.deep-metal}",
                    _dark: "{colors.metal}",
                },
            },
            dark: {
                value: {
                    base: "{colors.black}",
                    _dark: "{colors.gray.400}",
                },
            },
            inverted: {
                value: { base: "{colors.white}", _dark: "{colors.black}" },
            },
            emphasized: {
                value: { base: "{colors.white}", _dark: "{colors.electric.300}" },
            },
            "emphasized.hover": {
                value: {
                    base: "{colors.gray.200}",
                    _dark: "{colors.gray.400}",
                },
            },
        },
        text: {
            main: {
                value: { base: "{colors.midnight}", _dark: "{colors.white}" },
            },
            headline: {
                value: { base: "{colors.midnight}", _dark: "{colors.white}" },
            },
            muted: {
                value: {
                    base: "{colors.deep-metal}",
                    _dark: "{colors.metal}",
                },
            },
        },
    },
});
