/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				313131: '#313131',
				FFB905: '#FFB905',
				A3ABB6: '#A3ABB6',
				828282: '#828282',
				D9DCE0: '#D9DCE0',
				F8F9FA: '#F8F9FA',
				'101E30': '#101E30',
			},
			fontFamily: {
				sans: "'Satoshi', sans-serif",
			},
		},
	},
	plugins: [],
};
