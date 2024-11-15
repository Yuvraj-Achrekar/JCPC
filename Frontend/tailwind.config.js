/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"black-silver": "linear-gradient(to bottom right, #000000, #C0C0C0)",
				"blue-grad": "linear-gradient(to top right, #1e40af, #C0C0C0)",
			},
		},
	},
	plugins: [],
};
