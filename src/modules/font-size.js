import { PREFIX } from "../helpers/constants";
const PRE = `${PREFIX}-text`;

function createFontSizeItem(size, lineHeight, unit = "rem") {
	return {
		"font-size": size + unit,
		"line-height": lineHeight + unit,
	};
}
function createFontSize(list, unit = "rem") {
	let fontSizeUtillities = {};
	list.forEach((element) => {
		const [name, size, lineHeight] = element;
		fontSizeUtillities[`${PRE}-${name}`] = createFontSizeItem(size, lineHeight, unit);
	});
	return fontSizeUtillities;
}

const fontSizeArr = [
	["xs", 0.75, 1],
	["sm", 0.875, 1.24],
	["base", 1, 1.5],
	["content", 1.125, 1.44],
];

export const fontSize = createFontSize(fontSizeArr);
