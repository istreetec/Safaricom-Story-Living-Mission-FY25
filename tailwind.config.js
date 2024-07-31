const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                '3xl': '1792px',
            },
            container: {
                center: true,
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1536px',
                    '3xl': '1792px', // New breakpoint
                },
            },
            fontFamily: {
                // inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
                futura: ["Futura", "Lato", "Helvetica", "Arial", "sans-serif", ...defaultTheme.fontFamily.sans],
                superion: ["Superion", "Futura", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                'border': '0px 0px 10.11px 0px #0000000D',
                'card': '0px 0px 20px 0px #0000000A',
                'circle': '0px 2px 4px 0px #0000001A',
            },
            dropShadow: {
                logo: "0 0 2em #646cffaa",
                "logo-tw": "0 0 2em #38bdf8aa",
            },
            height: {
                18: "4.5rem",
            },
            colors: {
                "saf-gray": "#E5E5E5",
                "saf-green": "#2CB34A",
                "saf-deep-green": "#00A300",
                "saf-menu-green": "#52B44B",
                "saf-gray-light": "#00000033",
                "saf-black": "#404040",
                "saf-offwhite": "#cbcbcb",
                "saf-gray-border": "#CECECE",
            },
        },
    },
    plugins: [],
}