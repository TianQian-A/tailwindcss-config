"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;
var _constants = require("./constants");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var PRE = "--".concat(_constants.PREFIX);
function delPre(name) {
  var fullDel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isMatch = name.slice(0, PRE.length) === PRE;
  return isMatch ? name.substring(fullDel ? PRE.length : 2) : name;
}
function transform(obj) {
  var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PRE;
  var res = {
    // 浅色
    "default": {},
    // 深色
    dark: {},
    // 添加到 tailwindcss theme 配置下的对象
    theme: {}
  };
  for (var key in obj) {
    var element = obj[key];
    if (_typeof(element) === "object") {
      var transformElement = transform(element, "".concat(pre, "-").concat(key));
      Object.assign(res["default"], transformElement["default"]);
      Object.assign(res.dark, transformElement.dark);
      Object.assign(res.theme, transformElement.theme);
    } else {
      var keyName = key === "default" || key === "dark" ? pre : "".concat(pre, "-").concat(key);
      if (key === "dark") res.dark[keyName] = element;else res["default"][keyName] = element;
      res.theme[delPre(keyName)] = "var(".concat(keyName, ")");
    }
  }
  return res;
}