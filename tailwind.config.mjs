/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'serif': ['Poppins']
		},
		extend: {
			colors: {
				text: "#282D40",
				background: "#FFFFFF",
				primary: "#EB8B7B",
				secondary: "#F2737C",
				accent: "#D0F5B0"
			},
			boxShadow: {
				'firm': '5px 5px 0px 0px #282D40',
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}

