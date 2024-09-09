import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    h1: {
        value: {
            fontSize: { base: "2.125rem", lg: "2.875rem" },
            fontFamily: "poppins",
            fontWeight: "bold",
        },
    },
    h2: {
        value: {
            fontSize: { base: "2.125rem", lg: "2.125rem" },
            fontFamily: "poppins",
        },
    },
    h3: {
        value: {
            fontSize: { base: "1.875rem", lg: "1.875rem" },
            fontFamily: "poppins",
        },
    },
    h4: {
        value: {
            fontSize: "1.625rem",
            fontFamily: "poppins",
        },
    },
});
