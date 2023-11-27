"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing";
exports.ids = ["vendor-chunks/mdast-util-phrasing"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-phrasing/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n */\n\n\n\n/**\n * Check if the given value is *phrasing content*.\n *\n * > 👉 **Note**: Excludes `html`, which can be both phrasing or flow.\n *\n * @param node\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */\n\nconst phrasing =\n  /** @type {(node?: unknown) => node is PhrasingContent} */\n  (\n    (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n      'break',\n      'delete',\n      'emphasis',\n      'footnote',\n      'footnoteReference',\n      'image',\n      'imageReference',\n      'inlineCode',\n      'link',\n      'linkReference',\n      'strong',\n      'text'\n    ])\n  )\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDOztBQUVxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxhQUFhLDZDQUE2QztBQUMxRDtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1wYWdlLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtcGhyYXNpbmcvbGliL2luZGV4LmpzPzlmNzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBocmFzaW5nQ29udGVudH0gUGhyYXNpbmdDb250ZW50XG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyAqcGhyYXNpbmcgY29udGVudCouXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBFeGNsdWRlcyBgaHRtbGAsIHdoaWNoIGNhbiBiZSBib3RoIHBocmFzaW5nIG9yIGZsb3cuXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqICAgVGhpbmcgdG8gY2hlY2ssIHR5cGljYWxseSBgTm9kZWAuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGB2YWx1ZWAgaXMgcGhyYXNpbmcgY29udGVudC5cbiAqL1xuXG5leHBvcnQgY29uc3QgcGhyYXNpbmcgPVxuICAvKiogQHR5cGUgeyhub2RlPzogdW5rbm93bikgPT4gbm9kZSBpcyBQaHJhc2luZ0NvbnRlbnR9ICovXG4gIChcbiAgICBjb252ZXJ0KFtcbiAgICAgICdicmVhaycsXG4gICAgICAnZGVsZXRlJyxcbiAgICAgICdlbXBoYXNpcycsXG4gICAgICAnZm9vdG5vdGUnLFxuICAgICAgJ2Zvb3Rub3RlUmVmZXJlbmNlJyxcbiAgICAgICdpbWFnZScsXG4gICAgICAnaW1hZ2VSZWZlcmVuY2UnLFxuICAgICAgJ2lubGluZUNvZGUnLFxuICAgICAgJ2xpbmsnLFxuICAgICAgJ2xpbmtSZWZlcmVuY2UnLFxuICAgICAgJ3N0cm9uZycsXG4gICAgICAndGV4dCdcbiAgICBdKVxuICApXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ })

};
;