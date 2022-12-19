import { PREFIX } from "./constants";
const PRE = `--${PREFIX}`;

function delPre(name, fullDel = false) {
	const isMatch = name.slice(0, PRE.length) === PRE;
	return isMatch ? name.substring(fullDel ? PRE.length : 2) : name;
}

export function transform(obj, pre = PRE) {
	const res = {
		// 浅色
		default: {},
		// 深色
		dark: {},
		// 添加到 tailwindcss theme 配置下的对象
		theme: {},
	};
	for (const key in obj) {
		const element = obj[key];
		if (typeof element === "object") {
			const transformElement = transform(element, `${pre}-${key}`);
			Object.assign(res.default, transformElement.default);
			Object.assign(res.dark, transformElement.dark);
			Object.assign(res.theme, transformElement.theme);
		} else {
			const keyName = key === "default" || key === "dark" ? pre : `${pre}-${key}`;
			if (key === "dark") res.dark[keyName] = element;
			else res.default[keyName] = element;
			res.theme[delPre(keyName)] = `var(${keyName})`;
		}
	}
	return res;
}
