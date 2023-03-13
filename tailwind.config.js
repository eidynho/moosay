/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            manrope: ["var(--font-manrope), sans-serif"],
            mono: ["var(--font-space-mono)", "ui-monospace", "SFMono-Regular"],
        },
        extend: {
            colors: {
                // dark
                "d-primary": "#1E191E",
                "d-secondary": "#262221",

                // light
                "l-primary": "#F5F5F1",
                "l-secondary": "#EDEDEE",

                primary: "#FA9BFA",
                secondary: "#73DC8F",
                tertiary: "#4B78E6",
            },
            backgroundSize: {
                "300%": "300%",
            },
            backgroundImage: {
                ghost: "linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.85))",
            },
            keyframes: {
                "gradient-text-1": {
                    "33.333%, 83.333%": {
                        opacity: "0",
                    },
                    "0%, 16.667%, 100%": {
                        opacity: "1",
                    },
                },
                "gradient-text-2": {
                    "0%, 16.667%, 66.667%, 100%": {
                        opacity: "0",
                    },
                    "33.333%, 50%": {
                        opacity: "1",
                    },
                },
                "gradient-text-3": {
                    "0%, 50%, 100%": {
                        opacity: "0",
                    },
                    "66.667%, 83.333%": {
                        opacity: "1",
                    },
                },

                "badge-ping": {
                    "0%": {
                        height: "1.5rem",
                        width: "1.5rem",
                        opacity: "1",
                    },
                    "10%": {
                        height: "2.5rem",
                        width: "2.5rem",
                    },
                    "50%": {
                        height: "2.5rem",
                        width: "2.5rem",
                        opacity: "0",
                    },
                    "100%": {
                        opacity: 0,
                    },
                },

                parallax: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "100%": {
                        transform: "translateY(-10%)",
                    },
                },
            },
            animation: {
                "gradient-text-fade-1":
                    "gradient-text-1 8s ease-in-out infinite",
                "gradient-text-fade-2":
                    "gradient-text-2 8s ease-in-out infinite",
                "gradient-text-fade-3":
                    "gradient-text-3 8s ease-in-out infinite",

                "badge-ping":
                    "badge-ping 4s cubic-bezier(.15,.27,.58,1) infinite",
            },
        },
    },
    plugins: [],
};
