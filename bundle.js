/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 160px;\\n  grid-row-gap: 48px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: 'loading';\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  width: 100%;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n}\\n\\nheader .search-box > .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainPage */ \"./src/components/MainPage.ts\");\n\n\nfunction App() {\n    return `\n      ${(0,_Header__WEBPACK_IMPORTED_MODULE_0__.Header)()}\n      ${(0,_MainPage__WEBPACK_IMPORTED_MODULE_1__.MainPage)()}\n    `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ \"./src/components/Search.ts\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n\n\nfunction Header() {\n    return `\n    <header>\n        <h1><img src='${_assets_logo_png__WEBPACK_IMPORTED_MODULE_1__}' alt=\"MovieList 로고\" /></h1>\n        ${(0,_Search__WEBPACK_IMPORTED_MODULE_0__.Search)()}\n    </header>\n   `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/MainPage.ts":
/*!************************************!*\
  !*** ./src/components/MainPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPage\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader */ \"./src/components/PageHeader.ts\");\n/* harmony import */ var _ViewMoreButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewMoreButton */ \"./src/components/ViewMoreButton.ts\");\n\n\nfunction MainPage() {\n    return `\n    <section class=\"item-view\">\n        ${(0,_PageHeader__WEBPACK_IMPORTED_MODULE_0__.PageHeader)()}\n        <ul class=\"item-list\">\n        </ul>\n        ${(0,_ViewMoreButton__WEBPACK_IMPORTED_MODULE_1__.ViewMoreButton)()}\n    </section>\n    `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MainPage.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieItem\": () => (/* binding */ MovieItem)\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _utils_makeImagePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/makeImagePath */ \"./src/utils/makeImagePath.ts\");\n\n\nfunction MovieItem({ poster_path, title, vote_average }) {\n    return `\n  <li>\n        <a href=\"#\">\n            <div class=\"item-card\">\n                <img\n                class=\"item-thumbnail\"\n                src=${(0,_utils_makeImagePath__WEBPACK_IMPORTED_MODULE_1__.makeImagePath)(poster_path)}\n                loading=\"lazy\"\n                alt=${title}\n                />\n                <p class=\"item-title\">${title}</p>\n                <p class=\"item-score\"><img src=\"${_assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"별점\" />${vote_average}</p>\n            </div>\n        </a>\n    </li>`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieList.ts":
/*!*************************************!*\
  !*** ./src/components/MovieList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteSkeletonList\": () => (/* binding */ deleteSkeletonList),\n/* harmony export */   \"renderMoreMovieList\": () => (/* binding */ renderMoreMovieList),\n/* harmony export */   \"renderMoreSkeletonList\": () => (/* binding */ renderMoreSkeletonList),\n/* harmony export */   \"renderPopularMovieList\": () => (/* binding */ renderPopularMovieList),\n/* harmony export */   \"renderSearchMovieList\": () => (/* binding */ renderSearchMovieList),\n/* harmony export */   \"renderSkeletonList\": () => (/* binding */ renderSkeletonList)\n/* harmony export */ });\n/* harmony import */ var _MovieItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _data_useMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/useMovie */ \"./src/data/useMovie.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skeleton */ \"./src/components/Skeleton.ts\");\n\n\n\n\nasync function renderSkeletonList() {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.insertAdjacentHTML('beforeend', (0,_Skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton)());\n    await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.usePopularMovie)().then(({ values }) => renderPopularMovieList(values.results));\n}\nasync function renderMoreSkeletonList() {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.insertAdjacentHTML('beforeend', (0,_Skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton)());\n    if ((0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.getPageStatus)() === 'popular') {\n        await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.usePopularMovie)().then(({ values }) => {\n            renderMoreMovieList(values.results);\n            deleteSkeletonList();\n        });\n    }\n    else {\n        await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.useSearchedMovie)((0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.getRecentKeyword)()).then(({ values }) => {\n            renderMoreMovieList(values.results);\n            deleteSkeletonList();\n        });\n    }\n}\nfunction deleteSkeletonList() {\n    const skeletonList = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$$)('.skeleton-item');\n    skeletonList?.forEach((item) => item.remove());\n}\nasync function renderPopularMovieList(results) {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.innerHTML = `\n    ${results.map((movie) => (0,_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}\n  \n  `;\n}\nasync function renderSearchMovieList(searchResults) {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.innerHTML = `\n    ${searchResults.map((movie) => (0,_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}\n  \n  `;\n}\nasync function renderMoreMovieList(moreResults) {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.insertAdjacentHTML('beforeend', `${moreResults.map((movie) => (0,_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}`);\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList.ts?");

/***/ }),

/***/ "./src/components/PageHeader.ts":
/*!**************************************!*\
  !*** ./src/components/PageHeader.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageHeader\": () => (/* binding */ PageHeader)\n/* harmony export */ });\nfunction PageHeader() {\n    return `\n        <h2 class=\"page-header\">지금 인기 있는 영화</h2>\n    `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/PageHeader.ts?");

/***/ }),

/***/ "./src/components/Search.ts":
/*!**********************************!*\
  !*** ./src/components/Search.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var _data_useMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/useMovie */ \"./src/data/useMovie.ts\");\n/* harmony import */ var _utils_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formData */ \"./src/utils/formData.ts\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n\n\n\nfunction Search() {\n    _utils_index__WEBPACK_IMPORTED_MODULE_2__.Event.addEvent('submit', '.search-box', async (event) => {\n        event.preventDefault();\n        (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_0__.togglePageStatus)();\n        (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_0__.resetPage)();\n        const formEl = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.search-box');\n        const formData = (0,_utils_formData__WEBPACK_IMPORTED_MODULE_1__.getFormFields)(formEl);\n        const { handlers: { handlePageHeader, handleSearchResult }, } = await (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_0__.useSearchedMovie)(String(formData.keyword));\n        handlePageHeader();\n        handleSearchResult();\n    });\n    return `\n        <form class=\"search-box\">\n            <input type=\"text\" placeholder=\"검색\" name=\"keyword\"/>\n            <button type=\"submit\" class=\"search-button\">검색</button>\n        </form>\n     `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Search.ts?");

/***/ }),

/***/ "./src/components/Skeleton.ts":
/*!************************************!*\
  !*** ./src/components/Skeleton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skeleton\": () => (/* binding */ Skeleton)\n/* harmony export */ });\nfunction Skeleton() {\n    const template = `\n    <li class=\"skeleton-item\">\n        <a href=\"#\">\n            <div class=\"item-card\">\n            <div class=\"item-thumbnail skeleton\"></div>\n            <div class=\"item-title skeleton\"></div>\n            <div class=\"item-score skeleton\"></div>\n            </div>\n        </a>\n    </li>`;\n    return `${template.repeat(20)}`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Skeleton.ts?");

/***/ }),

/***/ "./src/components/ViewMoreButton.ts":
/*!******************************************!*\
  !*** ./src/components/ViewMoreButton.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewMoreButton\": () => (/* binding */ ViewMoreButton)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _data_useMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/useMovie */ \"./src/data/useMovie.ts\");\n/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieList */ \"./src/components/MovieList.ts\");\n\n\n\nfunction ViewMoreButton() {\n    _utils_index__WEBPACK_IMPORTED_MODULE_0__.Event.addEvent('click', '.view-more-button', async () => {\n        (0,_data_useMovie__WEBPACK_IMPORTED_MODULE_1__.plusPage)();\n        (0,_MovieList__WEBPACK_IMPORTED_MODULE_2__.renderMoreSkeletonList)();\n        // if (getPageStatus() === 'popular') {\n        //   renderMoreSkeletonList();\n        // } else {\n        //   const {\n        //     handlers: { handleMoreMovieList },\n        //   } = await useSearchedMovie(getRecentKeyword());\n        //   handleMoreMovieList();\n        // }\n    });\n    return `\n        <button class=\"btn primary full-width view-more-button\">더 보기</button>\n      `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ViewMoreButton.ts?");

/***/ }),

/***/ "./src/data/api.ts":
/*!*************************!*\
  !*** ./src/data/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies),\n/* harmony export */   \"getSearchMovie\": () => (/* binding */ getSearchMovie)\n/* harmony export */ });\nconst API_KEY = \"118d10f488df58444fada7338c47975b\";\nconst BASE_PATH = 'https://api.themoviedb.org/3';\nconsole.log(API_KEY);\nconst getMovies = async (page) => {\n    try {\n        const response = await fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`);\n        return response.json();\n    }\n    catch (err) {\n        console.log(err);\n        return [];\n    }\n};\nconst getSearchMovie = async (keyword, page) => {\n    const response = await fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=${page}`);\n    if (!response.ok)\n        return [];\n    return response.json();\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/api.ts?");

/***/ }),

/***/ "./src/data/useMovie.ts":
/*!******************************!*\
  !*** ./src/data/useMovie.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageStatus\": () => (/* binding */ getPageStatus),\n/* harmony export */   \"getRecentKeyword\": () => (/* binding */ getRecentKeyword),\n/* harmony export */   \"plusPage\": () => (/* binding */ plusPage),\n/* harmony export */   \"resetPage\": () => (/* binding */ resetPage),\n/* harmony export */   \"togglePageStatus\": () => (/* binding */ togglePageStatus),\n/* harmony export */   \"usePopularMovie\": () => (/* binding */ usePopularMovie),\n/* harmony export */   \"useSearchedMovie\": () => (/* binding */ useSearchedMovie)\n/* harmony export */ });\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MovieList */ \"./src/components/MovieList.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/data/api.ts\");\n\n\n\nlet moviePage = 1;\nfunction plusPage() {\n    moviePage++;\n}\nfunction resetPage() {\n    moviePage = 1;\n}\nconst movieList = [];\nasync function usePopularMovie() {\n    const popularMovieResponse = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getMovies)(moviePage);\n    const { page, results } = popularMovieResponse;\n    movieList.push(results);\n    function handlePageHeader() {\n        const $pageHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.page-header');\n        $pageHeader.innerText = '지금 인기 있는 영화';\n    }\n    function handlePopularResult() {\n        //renderPopularMovieList();\n    }\n    function handleMoreMovieList() {\n        (0,_components_MovieList__WEBPACK_IMPORTED_MODULE_0__.renderMoreMovieList)(results);\n    }\n    return {\n        values: { page, results },\n        handlers: { handlePageHeader, handlePopularResult: handlePopularResult, handleMoreMovieList },\n    };\n}\nlet recentKeyword;\nasync function useSearchedMovie(keyword) {\n    const { page, results } = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getSearchMovie)(keyword, moviePage);\n    recentKeyword = keyword;\n    const val = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.view-more-button');\n    val.style.display = 'inline-block';\n    if (results.length < 20) {\n        val.style.display = 'none';\n    }\n    function handlePageHeader() {\n        const $pageHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.page-header');\n        $pageHeader.innerText = `\"${keyword}\" 검색 결과`;\n    }\n    function handleSearchResult() {\n        (0,_components_MovieList__WEBPACK_IMPORTED_MODULE_0__.renderSearchMovieList)(results);\n    }\n    function handleMoreMovieList() {\n        (0,_components_MovieList__WEBPACK_IMPORTED_MODULE_0__.renderMoreMovieList)(results);\n    }\n    return {\n        values: { page, results },\n        handlers: { handlePageHeader, handleSearchResult, handleMoreMovieList },\n    };\n}\nlet pageStatus = 'popular';\nfunction togglePageStatus() {\n    pageStatus = pageStatus === 'popular' ? 'search' : 'popular';\n}\nfunction getPageStatus() {\n    return pageStatus;\n}\nfunction getRecentKeyword() {\n    return recentKeyword;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/useMovie.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.ts\");\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieList */ \"./src/components/MovieList.ts\");\n\n\n\n\n(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.render)((0,_components_App__WEBPACK_IMPORTED_MODULE_2__.App)());\n(0,_components_MovieList__WEBPACK_IMPORTED_MODULE_3__.renderSkeletonList)();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/utils/formData.ts":
/*!*******************************!*\
  !*** ./src/utils/formData.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFormFields\": () => (/* binding */ getFormFields)\n/* harmony export */ });\nfunction getFormFields(form) {\n    const formaData = new FormData(form);\n    return Object.fromEntries(formaData);\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/formData.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$),\n/* harmony export */   \"Event\": () => (/* binding */ Event),\n/* harmony export */   \"isTarget\": () => (/* binding */ isTarget),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst $ = (selector, parentNode = document) => parentNode && parentNode.querySelector(selector);\nconst $$ = (selector, parentNode = document) => parentNode && parentNode.querySelectorAll(selector);\nconst isTarget = (target, { targetSelector, parentSelector }) => {\n    const children = $$(targetSelector, $(parentSelector));\n    if (target instanceof Element && children)\n        return [...children].includes(target) || target.closest(targetSelector);\n    return false;\n};\nconst render = (template) => {\n    const bodyElem = $('#app');\n    bodyElem.innerHTML = template;\n    Event.setAllEvents();\n};\nconst events = [];\nconst Event = {\n    addEvent(event, targetSelector, callback, parentSelector) {\n        events.push(parentSelector\n            ? { event, targetSelector, callback, parentSelector }\n            : { event, targetSelector, callback });\n    },\n    setAllEvents() {\n        events.forEach(({ parentSelector, targetSelector, event, callback }) => {\n            if (parentSelector) {\n                $(parentSelector)?.addEventListener(event, (e) => {\n                    const $parent = $(parentSelector);\n                    if (isTarget(e.target, { targetSelector, parentSelector }) && $parent)\n                        callback.call($parent, e);\n                });\n            }\n            else {\n                $(targetSelector)?.addEventListener(event, callback);\n            }\n        });\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/makeImagePath.ts":
/*!************************************!*\
  !*** ./src/utils/makeImagePath.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeImagePath\": () => (/* binding */ makeImagePath)\n/* harmony export */ });\nfunction makeImagePath(id, format) {\n    return `https://image.tmdb.org/t/p/${format ? format : 'original'}/${id}`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/makeImagePath.ts?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

/***/ }),

/***/ "./src/assets/star_filled.png":
/*!************************************!*\
  !*** ./src/assets/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;