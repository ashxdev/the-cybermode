/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				primary: '#e11d48',
				"primary-foreground": '#fff',
				secondary: '#ecc94b',
			  }
		},
	},
	plugins: [],
}
