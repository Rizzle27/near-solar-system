/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				montserrat: 'Montserrat Variable',
				orbitron: 'Orbitron Variable',
			}
		},
	},
	plugins: [],
}
