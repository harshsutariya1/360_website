import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-space-grotesk)", "sans-serif"],
                abril: ["var(--font-abril-fatface)", "cursive"],
                bebas: ["var(--font-bebas-neue)", "sans-serif"],
            },
            animation: {
                blob: "blob 7s infinite",
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
                marquee: "marquee 20s linear infinite",
                float: "float 6s ease-in-out infinite",
                scroll: "scroll 2s cubic-bezier(0.15, 0.41, 0.69, 0.98) infinite",
                "fade-in": "fadeIn 1s ease-out forwards",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translate3d(0, 40px, 0)" },
                    "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                scroll: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(15px)", opacity: "0" },
                },
                fadeIn: {
                    "from": { opacity: "0", transform: "translateY(10px)" },
                    "to": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
