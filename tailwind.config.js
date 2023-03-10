/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            manrope: ["Manrope, sans-serif"],
            mono: ["Space Mono", "ui-monospace", "SFMono-Regular"],
        },
        extend: {
            colors: {
                // dark
                "d-primary": "#1E191E",
                "d-secondary": "#262221",

                // light
                "l-primary": "#F5F5F1",
                "l-secondary": "#EDEDEE",

                primary: "#DE85DD",
                secondary: "#73DC8F",
                tertiary: "#4B78E6",
            },
            boxShadow: {
                "custom-button": "4px 4px #DE85DD",
                "active-custom-button": "0 0 #DE85DD",
            },
        },
    },
    plugins: [],
};
