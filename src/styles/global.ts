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

    blockquote: {
        padding: "0.25rem 1rem 0.25rem",
        borderLeft: "2px solid #0ea5e9",
    },

    // Tiptap content styles
    ".ProseMirror h1, #animalPicture h1": {
        fontSize: "1.4rem !important",
        lineHeight: 1.1,
    },

    ".ProseMirror p, #animalPicture p": {
        minHeight: "1.5rem",
    },

    ".ProseMirror ol, #animalPicture ol": {
        listStyleType: "decimal",
        padding: "0 2rem",
    },

    ".ProseMirror ul, #animalPicture ul": {
        listStyleType: "disc",
        padding: "0 2rem",
    },

    ".ProseMirror li, #animalPicture li": {
        display: "list-item",
    },

    ".ProseMirror p.is-editor-empty:first-child::before": {
        color: "#999999",
        content: "attr(data-placeholder)",
        float: "left",
        height: 0,
        pointerEvents: "none",
    },
});
