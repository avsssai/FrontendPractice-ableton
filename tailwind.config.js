/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			backgroundImage: {
				"landing-image": "url('/public/ableton.avif')",
			},
			margin: {
				landing: "8.333vw",
				textMargin: "0.7em",
				sectionMargin: "8.333vw",
			},
			minHeight: {
				landingImage: `calc(100vh - 120px)`,
			},
			maxWidth: {
				wrapperWidth: ` min(100%, (1200px + 32px * 2));`,
			},
			width: {
				halfPlusMargin: `calc(50vw + 8.33vw)`,
			},
			padding: {
				sectionCardPadding: "8.333vw",
			},
			backgroundColor: {
				cardBackground: "#B1C5FF",
			},
		},
	},
	plugins: [],
};
