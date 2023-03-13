import { globalCss } from ".";

export const globalStyles = globalCss({
    "::selection": {
        backgroundColor: "$black",
        color: "$white",
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
        backgroundColor: "$primary",
        color: "$gray300",
        "-webkit-font-smoothing": "antialiased",
    },

    "body, input, textarea, button": {
        fontFamily: "Manrope, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
    },

    p: {
        minHeight: "1.5rem",
    },

    // Tiptap content styles
    ".ProseMirror p.is-editor-empty:first-child::before": {
        color: "#999999",
        content: "attr(data-placeholder)",
        float: "left",
        height: 0,
        pointerEvents: "none",
    },
});
