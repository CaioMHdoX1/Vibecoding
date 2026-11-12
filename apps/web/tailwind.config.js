/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				linen: {
					50: "#FDFCF9",
					100: "#F7F5F0",
					200: "#EBE6DE",
					300: "#DED7CB",
				},
				moss: {
					100: "#E2E8E2",
					300: "#8FA592",
					500: "#557058",
					700: "#384D3B",
					800: "#2A3A2C",
					900: "#1F2B20",
				},
				clay: {
					100: "#F5EBE6",
					300: "#C88E70",
					500: "#A36647",
					700: "#7B4B32",
					900: "#4D2918",
				},
				sumi: {
					50: "#F4F4F3",
					100: "#E4E4E2",
					300: "#A2A19D",
					500: "#646360",
					700: "#383936",
					900: "#181918",
				},
			},
			fontFamily: {
				serif: ["Cinzel", "Playfair Display", "Georgia", "serif"],
				sans: ["Plus Jakarta Sans", "Inter", "-apple-system", "sans-serif"],
			},
			borderRadius: {
				sm: "2px",
				md: "4px",
				lg: "8px",
			},
		},
	},
	plugins: [],
};
