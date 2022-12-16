const plugin = require("tailwindcss/plugin");
const { colorVars } = require("./modules/color-vars");
const vars = plugin.withOptions(
	(options) => {
		return ({ addBase }) => {
			addBase({
				":root": colorVars.default,
				"html.dark": {
					":root": colorVars.dark
				}
			});
		};
	},
	() => {
		return {
			theme: {
				extend: {
					colors: colorVars.theme,
				},
			},
		};
	}
);
module.exports = vars;
