import plugin from "tailwindcss/plugin";
import { fontSize } from "./modules/font-size";
import { colorVars } from "./modules/color-vars";
const config = plugin.withOptions(
	(options) => {
		return ({ addBase, addUtilities }) => {
			addBase({
				":root": colorVars.default,
				"html.dark": colorVars.dark,
			});
			addUtilities({
				...fontSize,
			});
		};
	},
	() => {
		return {
			safelist: [".dark"],
			theme: {
				extend: {
					colors: colorVars.theme,
				},
			},
		};
	}
);
module.exports = config;
