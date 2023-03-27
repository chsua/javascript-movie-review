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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 80%;\\n  margin: 0 auto;\\n  height: auto;\\n}\\n\\n.item-view h2 {\\n  width: 100%;\\n  text-align: left;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-column-gap: 6%;\\n  grid-row-gap: 40px;\\n  padding: 0;\\n  width: 100%;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.item-thumbnail {\\n  align-items: center;\\n  border-radius: 8px;\\n  width: 165px;\\n  height: 248px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  width: 100%;\\n}\\n\\n.item-score {\\n  margin-top: 0px;\\n  font-size: 1.2rem;\\n  display: flex;\\n  align-items: flex-end;\\n  width: 100%;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: 'loading';\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  margin-top: 4%;\\n  border: 0.5px solid #ffffff;\\n  border-radius: 8px;\\n  height: 50px;\\n  width: 50%;\\n  color: #f33f3f;\\n  background-color: rgba(0, 0, 0, 0);\\n  font-size: large;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n.skeleton > .item-thumbnail {\\n  width: 165px;\\n  height: 248px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  width: 100%;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #d5d5d5;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > label > input {\\n  border: 0;\\n  background: rgba(0, 0, 0, 0);\\n}\\n\\nheader .search-box > label > .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.error {\\n  position: absolute;\\n  font-size: xx-large;\\n}\\n\\n.movie-poster-background {\\n  background-color: #3d3d3d6b;\\n}\\n\\n#InfiniteLine {\\n  width: 100%;\\n  color: rgba(0, 0, 0, 0);\\n}\\n\\n/* 모달 css */\\n.modal-movie-info {\\n  font-size: medium;\\n  width: 60%;\\n  background-color: #212122;\\n  color: white;\\n  border-radius: 8px;\\n  border: 0;\\n}\\n\\n.modal-movie-header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  font-size: x-large;\\n  padding: 3%;\\n  height: 55px;\\n}\\n\\n.modal-movie-detail {\\n  display: flex;\\n  height: auto;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  border-top: 0.5px solid gray;\\n  padding: 5%;\\n}\\n\\n.modal-movie-poster {\\n  width: 40%;\\n  height: fit-content;\\n}\\n\\n.modal-movie-detail-text {\\n  width: 55%;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: 10% auto 12%;\\n}\\n\\n.modal-close {\\n  border-radius: 100%;\\n  width: 20px;\\n  height: 20px;\\n  background-color: #464646;\\n  color: #bfbfbf;\\n  border: 0;\\n  position: absolute;\\n  right: 5%;\\n}\\n.modal-movie-category {\\n  display: flex;\\n  align-items: center;\\n  font-weight: bold;\\n  /* gap: 5%; */\\n}\\n\\n.modal-movie-story {\\n  max-height: 80%;\\n}\\n\\n.modal-movie-category > img {\\n  margin: 0 1% 0 5%;\\n  /* gap: 5%; */\\n}\\n\\n.modal-movie-star-area {\\n  border-radius: 16px;\\n  background-color: #383839;\\n  font-size: small;\\n  display: flex;\\n  align-items: center;\\n  padding: 0 5% 0 5%;\\n}\\n\\n.modal-movie-star {\\n  margin: 0 5% 0 5%;\\n}\\n\\n.modal-movie-info::backdrop {\\n  background: rgba(0, 0, 0, 0.5);\\n}\\n\\n/* 반응형 웹 */\\n/* 탭 세로 */\\n@media (min-width: 481px) and (max-width: 991px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 1fr);\\n    width: 100%;\\n  }\\n\\n  .modal-movie-info {\\n    width: 80%;\\n  }\\n\\n  .item-thumbnail,\\n  .skeleton > .item-thumbnail {\\n    width: 150px;\\n    height: 248px;\\n  }\\n\\n  .modal-movie-poster {\\n    width: 40%;\\n  }\\n}\\n\\n/* 모바일 */\\n@media (max-width: 480px) {\\n  .item-list {\\n    grid-template-columns: repeat(2, 1fr);\\n    width: 100%;\\n  }\\n\\n  .modal-movie-detail-text {\\n    width: 100%;\\n  }\\n  header {\\n    margin-bottom: 0px;\\n  }\\n\\n  .item-view h2 {\\n    font-size: medium;\\n  }\\n\\n  .item-title,\\n  .item-score {\\n    font-size: small;\\n  }\\n\\n  .modal-movie-info {\\n    border-radius: 16px 16px 0 0;\\n    margin-bottom: 0;\\n\\n    width: 100%;\\n  }\\n\\n  .item-thumbnail,\\n  .skeleton > .item-thumbnail {\\n    width: 112px;\\n    height: 178px;\\n  }\\n\\n  .modal-movie-poster {\\n    display: none;\\n  }\\n\\n  .hidden {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/CONSTANT.ts":
/*!*************************!*\
  !*** ./src/CONSTANT.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ERROR_MESSAGE\": () => (/* binding */ ERROR_MESSAGE),\n/* harmony export */   \"GENRE\": () => (/* binding */ GENRE),\n/* harmony export */   \"USER_SCORE_TEXT\": () => (/* binding */ USER_SCORE_TEXT),\n/* harmony export */   \"localStorageDataName\": () => (/* binding */ localStorageDataName)\n/* harmony export */ });\nconst ERROR_MESSAGE = {\n    MIN_INPUT_KEYWORD: '1자 이상 입력해주세요.',\n    MAX_INPUT_KEYWORD: '10자 이하로 입력해주세요.',\n    HTTP_400: '잘못된 요청입니다. 확인해주세요.😥',\n    HTTP_500: '현재 페이지를 실행할 수 없습니다.\\n 잠시후 다시 시도해주세요.😥',\n};\nconst USER_SCORE_TEXT = {\n    2: '최악이에요',\n    4: '별로에요',\n    6: '보통이에요',\n    8: '재미있어요',\n    10: '명작이에요',\n};\nconst GENRE = {\n    28: '액션',\n    12: '모험',\n    16: '애니메이션',\n    35: '코미디',\n    80: '범죄',\n    99: '다큐멘터리',\n    18: '드라마',\n    10751: '가족',\n    14: '판타지',\n    36: '역사',\n    27: '공포',\n    10402: '음악',\n    9648: '미스터리',\n    10749: '로맨스',\n    878: 'SF',\n    10770: 'TV 영화',\n    53: '스릴러',\n    10752: '전쟁',\n    37: '서부',\n};\nconst localStorageDataName = {\n    userStar: 'userStar',\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/CONSTANT.ts?");

/***/ }),

/***/ "./src/Validation.ts":
/*!***************************!*\
  !*** ./src/Validation.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validation\": () => (/* binding */ Validation),\n/* harmony export */   \"renderError\": () => (/* binding */ renderError)\n/* harmony export */ });\n/* harmony import */ var _CONSTANT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONSTANT */ \"./src/CONSTANT.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.ts\");\n\n\nconst Validation = {\n    inputText(text) {\n        const textArray = text.split('').filter((elem) => elem !== ' ');\n        if (textArray.length < 1)\n            throw new Error(_CONSTANT__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.MIN_INPUT_KEYWORD);\n        if (textArray.length > 10)\n            throw new Error(_CONSTANT__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.MAX_INPUT_KEYWORD);\n    },\n    api(response) {\n        if (response >= 400 && response < 500)\n            throw new Error(_CONSTANT__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.HTTP_400);\n        if (response >= 500 && response < 600)\n            throw new Error(_CONSTANT__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.HTTP_500);\n    },\n};\nfunction renderError(message) {\n    const pageHeaderElem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.page-header');\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.item-list');\n    const moreButton = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.view-more-button');\n    pageHeaderElem.innerHTML = message;\n    parentElem.innerHTML = '';\n    moreButton.style.display = 'none';\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/Validation.ts?");

/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainPage */ \"./src/components/MainPage.ts\");\n/* harmony import */ var _showMovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../showMovieList */ \"./src/showMovieList.ts\");\n/* harmony import */ var _MovieInfoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovieInfoModal */ \"./src/components/MovieInfoModal.ts\");\n/* harmony import */ var _InfiniteScrollLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfiniteScrollLine */ \"./src/components/InfiniteScrollLine.ts\");\n/* harmony import */ var _data_PageData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/PageData */ \"./src/data/PageData.ts\");\n\n\n\n\n\n\n\nclass App {\n    constructor() {\n        this.play();\n    }\n    play() {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.render)(this.firstTemplate());\n        this.setObserver();\n    }\n    firstTemplate() {\n        return `\n    ${(0,_Header__WEBPACK_IMPORTED_MODULE_1__.Header)()}\n    ${(0,_MainPage__WEBPACK_IMPORTED_MODULE_2__.MainPage)()}\n    ${(0,_MovieInfoModal__WEBPACK_IMPORTED_MODULE_4__.MovieInfoModal)()}\n    ${(0,_InfiniteScrollLine__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollLine)()}\n  `;\n    }\n    setObserver() {\n        const line = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#InfiniteLine');\n        _data_PageData__WEBPACK_IMPORTED_MODULE_6__[\"default\"].setObserver(_showMovieList__WEBPACK_IMPORTED_MODULE_3__.showMovieList, line);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ \"./src/components/Search.ts\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _data_PageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/PageData */ \"./src/data/PageData.ts\");\n/* harmony import */ var _showMovieList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showMovieList */ \"./src/showMovieList.ts\");\n/* harmony import */ var _data_MovieData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/MovieData */ \"./src/data/MovieData.ts\");\n\n\n\n\n\n\nfunction Header() {\n    _utils__WEBPACK_IMPORTED_MODULE_2__.Event.addEvent('click', '#logo-img', async () => {\n        _data_PageData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePageStatus('popular');\n        _data_PageData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resetPage();\n        _data_PageData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setRecentKeyword(null);\n        (0,_showMovieList__WEBPACK_IMPORTED_MODULE_4__.resetMovieList)();\n        _data_MovieData__WEBPACK_IMPORTED_MODULE_5__[\"default\"].resetMovieData();\n        (0,_showMovieList__WEBPACK_IMPORTED_MODULE_4__.showMovieList)();\n    });\n    return `\n    <header>\n        <h1><img class=\"logo-img\" id=\"logo-img\" src='${_assets_logo_png__WEBPACK_IMPORTED_MODULE_1__}' alt=\"MovieList 로고\" /></h1>\n        ${(0,_Search__WEBPACK_IMPORTED_MODULE_0__.Search)()}\n    </header>\n   `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/InfiniteScrollLine.ts":
/*!**********************************************!*\
  !*** ./src/components/InfiniteScrollLine.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfiniteScrollLine\": () => (/* binding */ InfiniteScrollLine)\n/* harmony export */ });\nfunction InfiniteScrollLine() {\n    return '<div id=\"InfiniteLine\">aa</div>';\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/InfiniteScrollLine.ts?");

/***/ }),

/***/ "./src/components/ItemList.ts":
/*!************************************!*\
  !*** ./src/components/ItemList.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ItemList\": () => (/* binding */ ItemList)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _data_MovieData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/MovieData */ \"./src/data/MovieData.ts\");\n/* harmony import */ var _MovieInfoModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieInfoModal */ \"./src/components/MovieInfoModal.ts\");\n/* harmony import */ var _UserScoreStar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserScoreStar */ \"./src/components/UserScoreStar.ts\");\n\n\n\n\nfunction ItemList() {\n    _utils_index__WEBPACK_IMPORTED_MODULE_0__.Event.addEvent('click', '.item-list', (event) => {\n        const target = event.target;\n        const targetId = Number(target.closest('li')?.id);\n        const targetMovie = _data_MovieData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findMovie(targetId) ?? null;\n        const targetUserScore = _data_MovieData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findUserScore(targetId);\n        const infoDialogElem = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-movie-info');\n        (0,_MovieInfoModal__WEBPACK_IMPORTED_MODULE_2__.printMovieDetail)(infoDialogElem, targetMovie, targetUserScore);\n        (0,_UserScoreStar__WEBPACK_IMPORTED_MODULE_3__.showStar)(targetUserScore);\n        infoDialogElem.showModal();\n    });\n    return `\n  <ul class=\"item-list\">\n  </ul>`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/ItemList.ts?");

/***/ }),

/***/ "./src/components/MainPage.ts":
/*!************************************!*\
  !*** ./src/components/MainPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPage\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemList */ \"./src/components/ItemList.ts\");\n/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader */ \"./src/components/PageHeader.ts\");\n\n\nfunction MainPage() {\n    return `\n    <section class=\"item-view\">\n        ${(0,_PageHeader__WEBPACK_IMPORTED_MODULE_1__.PageHeader)()}\n        ${(0,_ItemList__WEBPACK_IMPORTED_MODULE_0__.ItemList)()}\n    </section>\n    `;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MainPage.ts?");

/***/ }),

/***/ "./src/components/MovieInfoModal.ts":
/*!******************************************!*\
  !*** ./src/components/MovieInfoModal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieInfoModal\": () => (/* binding */ MovieInfoModal),\n/* harmony export */   \"printMovieDetail\": () => (/* binding */ printMovieDetail)\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/star_empty.png */ \"./src/assets/star_empty.png\");\n/* harmony import */ var _utils_makePosterImagePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/makePosterImagePath */ \"./src/utils/makePosterImagePath.ts\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _UserScoreStar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserScoreStar */ \"./src/components/UserScoreStar.ts\");\n/* harmony import */ var _CONSTANT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CONSTANT */ \"./src/CONSTANT.ts\");\n\n\n\n\n\n\nfunction MovieInfoModal() {\n    _utils_index__WEBPACK_IMPORTED_MODULE_3__.Event.addEvent('click', '.modal-close', () => {\n        const modalElem = (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.$)('.modal-movie-info');\n        modalElem.close();\n    });\n    return `\n  <dialog class=\"modal-movie-info\">\n    <div class=\"modal-movie-header\">\n        <p class=\"modal-movie-name\"> </p>\n        <button type=\"button\" class=\"modal-close\">X</button>\n    </div>\n    <div class=\"modal-movie-detail\">\n      <img src=\"\" class=\"modal-movie-poster\" alt=\"poster\">\n      <div class=\"modal-movie-detail-text\">\n        <div class=\"modal-movie-category\">\n          <img src=\"\" alt=\"별점\" />\n        </div>\n        <P class=\"modal-movie-story\"></p>\n        <div class=\"modal-movie-star-area\"> 내 별점 \n          ${(0,_UserScoreStar__WEBPACK_IMPORTED_MODULE_4__.scoreStars)()}\n          <span class=\"modal-movie-star-text\"></span>\n        </div>\n      </div>\n    </div>\n  </dialog>\n     `;\n}\nfunction printMovieDetail(elem, movie, targetUSerScore) {\n    const { poster_path, genre_ids, vote_average, overview, id } = movie;\n    const scoreText = targetUSerScore ? targetUSerScore + _CONSTANT__WEBPACK_IMPORTED_MODULE_5__.USER_SCORE_TEXT[targetUSerScore] : '';\n    elem.children[0].children[0].textContent = movie.title;\n    elem.children[1].children[0].setAttribute('src', (0,_utils_makePosterImagePath__WEBPACK_IMPORTED_MODULE_2__.makePosterImagePath)(poster_path));\n    elem.children[1].children[1].children[0].innerHTML = `\n      ${genre_ids.map((id) => _CONSTANT__WEBPACK_IMPORTED_MODULE_5__.GENRE[id]).join(', ')}\n      <img src=\"${vote_average === 0 ? _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ : _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"별점\" />\n      ${vote_average}\n    `;\n    elem.children[1].children[1].children[1].textContent = `${overview === '' ? '해당 영화의 줄거리 정보가 없습니다.' : overview}`;\n    elem.children[1].children[1].children[2].className = `modal-movie-star-area ${id}`;\n    elem.children[1].children[1].children[2].children[1].textContent = `${scoreText}`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieInfoModal.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieItem\": () => (/* binding */ MovieItem)\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/star_empty.png */ \"./src/assets/star_empty.png\");\n/* harmony import */ var _utils_makePosterImagePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/makePosterImagePath */ \"./src/utils/makePosterImagePath.ts\");\n\n\n\nfunction MovieItem({ id, poster_path, title, vote_average }) {\n    return `\n  <li id=${id}>\n        <a href=\"#$\">\n            <div class=\"item-card\">\n                <img\n                class=\"item-thumbnail movie-poster-background\"\n                src=${(0,_utils_makePosterImagePath__WEBPACK_IMPORTED_MODULE_2__.makePosterImagePath)(poster_path)}\n                loading=\"lazy\"\n                alt=${title}\n                />\n                <p class=\"item-title\">${title}</p>\n                <p class=\"item-score\"><img src=\"${vote_average === 0 ? _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ : _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"별점\" />${vote_average}</p>\n            </div>\n        </a>\n    </li>`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var _data_PageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/PageData */ \"./src/data/PageData.ts\");\n/* harmony import */ var _utils_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formData */ \"./src/utils/formData.ts\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _showMovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../showMovieList */ \"./src/showMovieList.ts\");\n/* harmony import */ var _utils_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/toggle */ \"./src/utils/toggle.ts\");\n/* harmony import */ var _data_MovieData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/MovieData */ \"./src/data/MovieData.ts\");\n\n\n\n\n\n\nfunction Search() {\n    _utils_index__WEBPACK_IMPORTED_MODULE_2__.Event.addEvent('submit', '#search-movie-box', async (event) => {\n        event.preventDefault();\n        if (matchMedia('screen and (max-width: 480px)').matches) {\n            if (!checkExistInput())\n                return;\n        }\n        const formEl = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('#search-movie-box');\n        const formData = (0,_utils_formData__WEBPACK_IMPORTED_MODULE_1__.getFormFields)(formEl);\n        formEl.reset();\n        _data_PageData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changePageStatus('search');\n        _data_PageData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetPage();\n        _data_PageData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setRecentKeyword(String(formData.keyword));\n        (0,_showMovieList__WEBPACK_IMPORTED_MODULE_3__.resetMovieList)();\n        _data_MovieData__WEBPACK_IMPORTED_MODULE_5__[\"default\"].resetMovieData();\n        (0,_showMovieList__WEBPACK_IMPORTED_MODULE_3__.showMovieList)();\n        if (matchMedia('screen and (max-width: 480px)').matches) {\n            checkExistLogo();\n        }\n    });\n    return `\n        <form class=\"search-box\" id=\"search-movie-box\">\n          <label>\n            <input type=\"text\" class=\"search-input hidden\" placeholder=\"검색\" name=\"keyword\"/>\n            <button type=\"submit\" class=\"search-button \">검색</button>\n          </label>\n        </form>\n     `;\n}\nfunction checkExistInput() {\n    const inputElem = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.search-input');\n    const logoImg = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.logo-img');\n    if (inputElem.classList.contains('hidden')) {\n        (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_4__.toggle)(inputElem, 'hidden');\n        (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_4__.toggle)(logoImg, 'hidden');\n        return false;\n    }\n    return true;\n}\nfunction checkExistLogo() {\n    const logoImg = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.logo-img');\n    const inputElem = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.search-input');\n    if (logoImg.classList.contains('hidden')) {\n        (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_4__.toggle)(logoImg, 'hidden');\n        (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_4__.toggle)(inputElem, 'hidden');\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Search.ts?");

/***/ }),

/***/ "./src/components/SkeletonMovieItem.ts":
/*!*********************************************!*\
  !*** ./src/components/SkeletonMovieItem.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SkeletonMovieItem\": () => (/* binding */ SkeletonMovieItem)\n/* harmony export */ });\nfunction SkeletonMovieItem() {\n    const template = `\n    <li class=\"skeleton-item\">\n        <a href=\"#\">\n            <div class=\"item-card skeleton\">\n              <div class=\"item-thumbnail skeleton\"></div>\n              <div class=\"item-title skeleton\"></div>\n              <div class=\"item-score skeleton\"></div>\n            </div>\n        </a>\n    </li>`;\n    return `${template.repeat(20)}`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovieItem.ts?");

/***/ }),

/***/ "./src/components/UserScoreStar.ts":
/*!*****************************************!*\
  !*** ./src/components/UserScoreStar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scoreStars\": () => (/* binding */ scoreStars),\n/* harmony export */   \"showStar\": () => (/* binding */ showStar)\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/star_empty.png */ \"./src/assets/star_empty.png\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\n/* harmony import */ var _CONSTANT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CONSTANT */ \"./src/CONSTANT.ts\");\n/* harmony import */ var _data_MovieData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/MovieData */ \"./src/data/MovieData.ts\");\n\n\n\n\n\nfunction scoreStars() {\n    _utils_index__WEBPACK_IMPORTED_MODULE_2__.Event.addEvent('mouseover', '.modal-movie-star', (event) => {\n        const target = event.target;\n        const targetImgElem = target.closest('img');\n        if (targetImgElem === null)\n            return;\n        const starNumber = (Number(targetImgElem.id.split('-')[2]) * 2);\n        showStar(starNumber);\n        const starArea = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.modal-movie-star-area');\n        const scoreText = starNumber ? starNumber + ' ' + _CONSTANT__WEBPACK_IMPORTED_MODULE_3__.USER_SCORE_TEXT[starNumber] : '';\n        starArea.children[1].textContent = `${scoreText}`;\n    });\n    _utils_index__WEBPACK_IMPORTED_MODULE_2__.Event.addEvent('click', '.modal-movie-star', (event) => {\n        const target = event.target;\n        const targetImgElem = target.closest('img');\n        if (targetImgElem === null)\n            return;\n        const starNumber = (Number(targetImgElem.id.split('-')[2]) * 2);\n        const targetId = Number(targetImgElem.parentElement?.parentElement?.classList[1]);\n        _data_MovieData__WEBPACK_IMPORTED_MODULE_4__[\"default\"].giveUserScore(targetId, starNumber);\n    });\n    return `\n    <div class=\"modal-movie-star\">\n      <img id=\"star-index-1\" src=\"${_assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"빈 별\" />\n      <img id=\"star-index-2\" src=\"${_assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"빈 별\" />\n      <img id=\"star-index-3\" src=\"${_assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"빈 별\" />\n      <img id=\"star-index-4\" src=\"${_assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"빈 별\" />\n      <img id=\"star-index-5\" src=\"${_assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"빈 별\" />\n    </div>\n    `;\n}\nfunction showStar(score) {\n    if (score === undefined)\n        return;\n    const stars = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.$)('.modal-movie-star');\n    for (let i = 0; i <= 4; i++) {\n        if (i < score / 2) {\n            stars.children[i].setAttribute('src', _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__);\n            stars.children[i].setAttribute('alt', '채워진 별');\n        }\n        else {\n            stars.children[i].setAttribute('src', _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__);\n            stars.children[i].setAttribute('alt', '빈 별');\n        }\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/UserScoreStar.ts?");

/***/ }),

/***/ "./src/data/MovieData.ts":
/*!*******************************!*\
  !*** ./src/data/MovieData.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_localData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localData */ \"./src/utils/localData.ts\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _MovieData_currentMovieList, _MovieData_userScoreMovieList;\n\nclass MovieData {\n    constructor() {\n        _MovieData_currentMovieList.set(this, void 0);\n        _MovieData_userScoreMovieList.set(this, void 0);\n        __classPrivateFieldSet(this, _MovieData_currentMovieList, [], \"f\");\n        __classPrivateFieldSet(this, _MovieData_userScoreMovieList, _utils_localData__WEBPACK_IMPORTED_MODULE_0__.localData.getStarData(), \"f\");\n    }\n    addMovieData(MovieList) {\n        __classPrivateFieldSet(this, _MovieData_currentMovieList, [...__classPrivateFieldGet(this, _MovieData_currentMovieList, \"f\"), ...MovieList], \"f\");\n    }\n    resetMovieData() {\n        __classPrivateFieldSet(this, _MovieData_currentMovieList, [], \"f\");\n    }\n    findMovie(id) {\n        return __classPrivateFieldGet(this, _MovieData_currentMovieList, \"f\").find((elem) => elem.id === id);\n    }\n    giveUserScore(id, score) {\n        __classPrivateFieldGet(this, _MovieData_userScoreMovieList, \"f\").set(id, score);\n        _utils_localData__WEBPACK_IMPORTED_MODULE_0__.localData.setStarDate(__classPrivateFieldGet(this, _MovieData_userScoreMovieList, \"f\"));\n    }\n    findUserScore(id) {\n        return __classPrivateFieldGet(this, _MovieData_userScoreMovieList, \"f\").get(id) === undefined ? 0 : __classPrivateFieldGet(this, _MovieData_userScoreMovieList, \"f\").get(id);\n    }\n}\n_MovieData_currentMovieList = new WeakMap(), _MovieData_userScoreMovieList = new WeakMap();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MovieData());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/MovieData.ts?");

/***/ }),

/***/ "./src/data/PageData.ts":
/*!******************************!*\
  !*** ./src/data/PageData.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/data/api.ts\");\n/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieData */ \"./src/data/MovieData.ts\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _PageData_moviePage, _PageData_totalPage, _PageData_recentKeyword, _PageData_pageStatus, _PageData_observer;\n\n\nclass PageData {\n    constructor() {\n        _PageData_moviePage.set(this, void 0);\n        _PageData_totalPage.set(this, void 0);\n        _PageData_recentKeyword.set(this, void 0);\n        _PageData_pageStatus.set(this, void 0);\n        _PageData_observer.set(this, void 0);\n        __classPrivateFieldSet(this, _PageData_moviePage, 1, \"f\");\n        __classPrivateFieldSet(this, _PageData_totalPage, Infinity, \"f\");\n        __classPrivateFieldSet(this, _PageData_recentKeyword, null, \"f\");\n        __classPrivateFieldSet(this, _PageData_pageStatus, 'popular', \"f\");\n    }\n    plusPage() {\n        var _a;\n        __classPrivateFieldSet(this, _PageData_moviePage, (_a = __classPrivateFieldGet(this, _PageData_moviePage, \"f\"), _a++, _a), \"f\");\n    }\n    resetPage() {\n        __classPrivateFieldSet(this, _PageData_moviePage, 1, \"f\");\n    }\n    changePageStatus(callPage) {\n        __classPrivateFieldSet(this, _PageData_pageStatus, callPage, \"f\");\n    }\n    getPageStatus() {\n        return __classPrivateFieldGet(this, _PageData_pageStatus, \"f\");\n    }\n    setRecentKeyword(keyword) {\n        __classPrivateFieldSet(this, _PageData_recentKeyword, keyword, \"f\");\n    }\n    getRecentKeyword() {\n        return __classPrivateFieldGet(this, _PageData_recentKeyword, \"f\");\n    }\n    setTotalPage(totalPage) {\n        __classPrivateFieldSet(this, _PageData_totalPage, totalPage, \"f\");\n    }\n    async useMovie() {\n        if (__classPrivateFieldGet(this, _PageData_recentKeyword, \"f\") === null) {\n            const { page, results, total_pages } = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getMovies)(__classPrivateFieldGet(this, _PageData_moviePage, \"f\"));\n            _MovieData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addMovieData(results);\n            return { values: { page, results, total_pages } };\n        }\n        const { page, results, total_pages } = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getSearchMovie)(__classPrivateFieldGet(this, _PageData_recentKeyword, \"f\"), __classPrivateFieldGet(this, _PageData_moviePage, \"f\"));\n        _MovieData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addMovieData(results);\n        return { values: { page, results, total_pages } };\n    }\n    setObserver(callback, elem) {\n        __classPrivateFieldSet(this, _PageData_observer, new IntersectionObserver((entries) => {\n            if (entries[0].isIntersecting && __classPrivateFieldGet(this, _PageData_moviePage, \"f\") <= __classPrivateFieldGet(this, _PageData_totalPage, \"f\")) {\n                callback();\n            }\n            return;\n        }), \"f\");\n        __classPrivateFieldGet(this, _PageData_observer, \"f\").observe(elem);\n    }\n}\n_PageData_moviePage = new WeakMap(), _PageData_totalPage = new WeakMap(), _PageData_recentKeyword = new WeakMap(), _PageData_pageStatus = new WeakMap(), _PageData_observer = new WeakMap();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PageData());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/PageData.ts?");

/***/ }),

/***/ "./src/data/api.ts":
/*!*************************!*\
  !*** ./src/data/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies),\n/* harmony export */   \"getSearchMovie\": () => (/* binding */ getSearchMovie)\n/* harmony export */ });\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Validation */ \"./src/Validation.ts\");\n\nconst API_KEY = \"118d10f488df58444fada7338c47975b\";\nconst BASE_PATH = 'https://api.themoviedb.org/3';\nconst getMovies = async (page) => {\n    const response = await fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`);\n    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.api(response.status);\n    return response.json();\n};\nconst getSearchMovie = async (keyword, page) => {\n    const response = await fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=${page}`);\n    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.api(response.status);\n    return response.json();\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/data/api.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.ts\");\n\n\nnew _components_App__WEBPACK_IMPORTED_MODULE_1__.App();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/showMovieList.ts":
/*!******************************!*\
  !*** ./src/showMovieList.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteSkeleton\": () => (/* binding */ deleteSkeleton),\n/* harmony export */   \"renderMovieList\": () => (/* binding */ renderMovieList),\n/* harmony export */   \"renderSkeleton\": () => (/* binding */ renderSkeleton),\n/* harmony export */   \"resetMovieList\": () => (/* binding */ resetMovieList),\n/* harmony export */   \"showMovieList\": () => (/* binding */ showMovieList)\n/* harmony export */ });\n/* harmony import */ var _components_MovieItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _data_PageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/PageData */ \"./src/data/PageData.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _components_SkeletonMovieItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SkeletonMovieItem */ \"./src/components/SkeletonMovieItem.ts\");\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Validation */ \"./src/Validation.ts\");\n\n\n\n\n\nfunction resetMovieList() {\n    const movieListElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    movieListElem.innerHTML = '';\n}\nasync function showMovieList() {\n    try {\n        await tryShowMovieList();\n    }\n    catch (error) {\n        if (error instanceof Error)\n            (0,_Validation__WEBPACK_IMPORTED_MODULE_4__.renderError)(String(error.message));\n    }\n}\nasync function tryShowMovieList() {\n    renderSkeleton();\n    const { values } = await _data_PageData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].useMovie();\n    _data_PageData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTotalPage(values.total_pages);\n    changePageHeader();\n    renderMovieList(values.results);\n    deleteSkeleton();\n}\nfunction renderSkeleton() {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.insertAdjacentHTML('beforeend', (0,_components_SkeletonMovieItem__WEBPACK_IMPORTED_MODULE_3__.SkeletonMovieItem)());\n}\nfunction deleteSkeleton() {\n    const skeletonList = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$$)('.skeleton-item');\n    skeletonList?.forEach((item) => item.remove());\n}\nasync function renderMovieList(results) {\n    const parentElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    parentElem.insertAdjacentHTML('beforeend', `${results.map((movie) => (0,_components_MovieItem__WEBPACK_IMPORTED_MODULE_0__.MovieItem)(movie)).join('')}`);\n    _data_PageData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].plusPage();\n}\nfunction changePageHeader() {\n    const pageHeaderElem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('.page-header');\n    let text = '지금 인기 있는 영화';\n    if (_data_PageData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPageStatus() !== 'popular')\n        text = `\"${_data_PageData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRecentKeyword()}\" 검색 결과`;\n    pageHeaderElem.innerText = text;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/showMovieList.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$),\n/* harmony export */   \"Event\": () => (/* binding */ Event),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst $ = (selector) => document.querySelector(selector);\nconst $$ = (selector) => document.querySelectorAll(selector);\nconst render = (template) => {\n    const bodyElem = $('#app');\n    bodyElem.innerHTML = template;\n    Event.setAllEvents();\n};\nconst events = [];\nconst Event = {\n    addEvent(event, targetSelector, callback) {\n        events.push({ event, targetSelector, callback });\n    },\n    setAllEvents() {\n        events.forEach(({ targetSelector, event, callback }) => {\n            $(targetSelector)?.addEventListener(event, callback);\n        });\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/localData.ts":
/*!********************************!*\
  !*** ./src/utils/localData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localData\": () => (/* binding */ localData)\n/* harmony export */ });\n/* harmony import */ var _CONSTANT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANT */ \"./src/CONSTANT.ts\");\n\nconst localData = {\n    setStarDate(data) {\n        localStorage.setItem(_CONSTANT__WEBPACK_IMPORTED_MODULE_0__.localStorageDataName.userStar, JSON.stringify([...data]));\n    },\n    getStarData() {\n        const localList = localStorage.getItem(_CONSTANT__WEBPACK_IMPORTED_MODULE_0__.localStorageDataName.userStar);\n        if (localList == null)\n            return new Map();\n        return new Map(JSON.parse(localList));\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/localData.ts?");

/***/ }),

/***/ "./src/utils/makePosterImagePath.ts":
/*!******************************************!*\
  !*** ./src/utils/makePosterImagePath.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePosterImagePath\": () => (/* binding */ makePosterImagePath)\n/* harmony export */ });\nfunction makePosterImagePath(id, format) {\n    return `https://image.tmdb.org/t/p/${format ? format : 'original'}/${id}`;\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/makePosterImagePath.ts?");

/***/ }),

/***/ "./src/utils/toggle.ts":
/*!*****************************!*\
  !*** ./src/utils/toggle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggle\": () => (/* binding */ toggle)\n/* harmony export */ });\nfunction toggle(elem, message) {\n    elem.classList.toggle(message);\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/toggle.ts?");

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

/***/ "./src/assets/star_empty.png":
/*!***********************************!*\
  !*** ./src/assets/star_empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_empty.png?");

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
/******/ 		__webpack_require__.p = "/";
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