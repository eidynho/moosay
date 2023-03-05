import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ::selection {
        background-color: #E05263;
    }

    ::-webkit-scrollbar {
        width: 0.6em;
        height: 0.6em;
        background: transparent;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #888888;
        border-radius: 99px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555555;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["gray-500"]};
    }

    body {
        background-color: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
