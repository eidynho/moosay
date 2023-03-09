import { globalCss } from ".";

export const globalStyles = globalCss({
    "::selection": {
        backgroundColor: "$yellow500",
        color: "$black",
    },

    "::-webkit-scrollbar": {
        width: "0.6em",
        height: "0.6em",
        backgroundColor: "transparent",
    },

    "::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
    },

    "::-webkit-scrollbar-thumb": {
        backgroundColor: "$zinc700",
        borderRadius: 99,
    },

    "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "$zinc800",
    },

    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    ":focus": {
        outline: 0,
        boxShadow: "0 0 0 2px $gray500",
    },

    body: {
        backgroundColor: "$gray900",
        color: "$gray300",
        "-webkit-font-smoothing": "antialiased",
    },

    "body, input, textarea, button": {
        fontFamily: "Manrope, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
    },
});
