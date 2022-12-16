const { transform } = require("../helpers/transform");

const colorVars = {
	"text-color": {
		// 一级内容颜色
		primary: {
			default: "#333333",
			dark: "#D9D9D9",
		},
		// 二级内容颜色
		secondary: {
			default: "#777777",
			dark: "#A6A6A6",
		},
		// 提示颜色
		tip: {
			default: "#999999",
			dark: "#737373",
		},
		// 可点击颜色
		link: {
			default: "#576B94",
			dark: "#3795E6",
		},
	},
	"page-color": {
		default: "#F7F7F7",
		dark: "#000000",
	},
	"content-color": {
		first: {
			default: "#FFFFFF",
			dark: "#141414",
		},
		secondary: {
			default: "#F7F7F7",
			dark: "#0F0F0F",
		},
	},
};
module.exports.colorVars = transform(colorVars);
