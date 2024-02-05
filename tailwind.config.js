/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        container: {
            padding: "1rem",
            center: true,
        },
        extend: {
            lineHeight: {
                tight: "1.2",
            },
            colors: {
                "mlf-pink": "#e35e9d",
                "mlf-purple": "#812b76",
                "mlf-dark-purple": "#51174d",
                "mlf-light-pink": "#efb2ce",
                "mlf-bright-pink": "#ff004f",
            },
        },
    },
    plugins: [],
};
