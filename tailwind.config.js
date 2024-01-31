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
                "mlf-red": "#DA3832",
            },
        },
    },
    plugins: [],
};
