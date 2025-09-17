/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./**/*.{fs,js,ts,jsx,tsx}",
        "./output/**/*.js", // Scan Fable compiled output
        "!./node_modules/**/*",
    ],
    theme: {
        extend: {},
    },
    plugins: []
}
