const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            container: {
                center: true
            },
            fontFamily: {
                // inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
                futura: ["Futura", "Lato", "Helvetica", "Arial", "sans-serif", ...defaultTheme.fontFamily.sans],
                superion: ["Superion", "Futura", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
              'border': '0px 0px 10.11px 0px #0000000D',
              'card': '0px 0px 20px 0px #0000000A'
            },
            dropShadow: {
                logo: "0 0 2em #646cffaa",
                "logo-tw": "0 0 2em #38bdf8aa",
            },
            height: {
                18: "4.5rem",
            },
            colors: {
                "saf-gray" : "#E5E5E5",
                "saf-green" : "#2CB34A",
                "saf-menu-green" : "#52B44B",
                "saf-gray-border" : "#0000001A",
            },
        },
    },
    plugins: [],
}