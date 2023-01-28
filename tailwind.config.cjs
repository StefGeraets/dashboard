/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans]
			},
			height: {
				body: 'calc(100% - 74px)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
