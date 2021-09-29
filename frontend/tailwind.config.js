module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			bennie: ["Benne", "serif"],
			yeseva: ["Yeseva One", "cursive"],
			reenie: ["Reenie Beanie", "cursive"],
			body: ["Open Sans", "Roboto"],
		},
		extend: {
			colors: {
				orange: "#f26837",
			},
			backgroundImage: (theme) => ({
				"banner-bg": "url('/img/hero-pattern.svg')",
				"section-bg": "url('/img/background.png')",
			}),
			backgroundColor: (theme) => ({
				orange: "#f26837",
				secondary: "#ffed4a",
				danger: "#e3342f",
			}),
			height: {
				"3088px": "3088px",
				"2712px": "2712px",
				"2400px": "2400px",
				"1800px": "1800px",
				"1700px": "1700px",
				"3000px": "3000px",
				"431.63px": "431.63px",
				"920px": "920px",
				"1100px": "1100px",
				"780px": "780px",
				"960px": "960px",
			},
			width: {
				"640px": "640px",
				"840px": "840px",
				"920px": "920px",
			},
			fill: ["hover"],
			margin: {
				94: "23rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
