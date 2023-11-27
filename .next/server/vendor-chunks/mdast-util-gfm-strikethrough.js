"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/lib/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughFromMarkdown: () => (/* binding */ gfmStrikethroughFromMarkdown),\n/* harmony export */   gfmStrikethroughToMarkdown: () => (/* binding */ gfmStrikethroughToMarkdown)\n/* harmony export */ });\n/**\n * @typedef {import('mdast').Delete} Delete\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n */\n\n/**\n * List of constructs that occur in phrasing (paragraphs, headings), but cannot\n * contain strikethrough.\n * So they sort of cancel each other out.\n * Note: could use a better name.\n *\n * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>\n *\n * @type {Array<ConstructName>}\n */\nconst constructsWithoutStrikethrough = [\n  'autolink',\n  'destinationLiteral',\n  'destinationRaw',\n  'reference',\n  'titleQuote',\n  'titleApostrophe'\n]\n\nhandleDelete.peek = peekDelete\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM\n * strikethrough in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable GFM strikethrough.\n */\nfunction gfmStrikethroughFromMarkdown() {\n  return {\n    canContainEols: ['delete'],\n    enter: {strikethrough: enterStrikethrough},\n    exit: {strikethrough: exitStrikethrough}\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM\n * strikethrough in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM strikethrough.\n */\nfunction gfmStrikethroughToMarkdown() {\n  return {\n    unsafe: [\n      {\n        character: '~',\n        inConstruct: 'phrasing',\n        notInConstruct: constructsWithoutStrikethrough\n      }\n    ],\n    handlers: {delete: handleDelete}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterStrikethrough(token) {\n  this.enter({type: 'delete', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitStrikethrough(token) {\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {Delete} node\n */\nfunction handleDelete(node, _, state, info) {\n  const tracker = state.createTracker(info)\n  const exit = state.enter('strikethrough')\n  let value = tracker.move('~~')\n  value += state.containerPhrasing(node, {\n    ...tracker.current(),\n    before: value,\n    after: '~'\n  })\n  value += tracker.move('~~')\n  exit()\n  return value\n}\n\n/** @type {ToMarkdownHandle} */\nfunction peekDelete() {\n  return '~'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0EsYUFBYSxtREFBbUQ7QUFDaEUsYUFBYSw4Q0FBOEM7QUFDM0QsYUFBYSwyQ0FBMkM7QUFDeEQ7QUFDQSxhQUFhLGdEQUFnRDtBQUM3RCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLDBDQUEwQztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsWUFBWSxrQ0FBa0M7QUFDOUMsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7QUFDM0M7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1wYWdlLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXN0cmlrZXRocm91Z2gvbGliL2luZGV4LmpzPzMwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkRlbGV0ZX0gRGVsZXRlXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuQ29tcGlsZUNvbnRleHR9IENvbXBpbGVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuSGFuZGxlfSBGcm9tTWFya2Rvd25IYW5kbGVcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuQ29uc3RydWN0TmFtZX0gQ29uc3RydWN0TmFtZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkhhbmRsZX0gVG9NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk9wdGlvbnN9IFRvTWFya2Rvd25FeHRlbnNpb25cbiAqL1xuXG4vKipcbiAqIExpc3Qgb2YgY29uc3RydWN0cyB0aGF0IG9jY3VyIGluIHBocmFzaW5nIChwYXJhZ3JhcGhzLCBoZWFkaW5ncyksIGJ1dCBjYW5ub3RcbiAqIGNvbnRhaW4gc3RyaWtldGhyb3VnaC5cbiAqIFNvIHRoZXkgc29ydCBvZiBjYW5jZWwgZWFjaCBvdGhlciBvdXQuXG4gKiBOb3RlOiBjb3VsZCB1c2UgYSBiZXR0ZXIgbmFtZS5cbiAqXG4gKiBOb3RlOiBrZWVwIGluIHN5bmMgd2l0aDogPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2Jsb2IvOGNlOGRiZi9saWIvdW5zYWZlLmpzI0wxND5cbiAqXG4gKiBAdHlwZSB7QXJyYXk8Q29uc3RydWN0TmFtZT59XG4gKi9cbmNvbnN0IGNvbnN0cnVjdHNXaXRob3V0U3RyaWtldGhyb3VnaCA9IFtcbiAgJ2F1dG9saW5rJyxcbiAgJ2Rlc3RpbmF0aW9uTGl0ZXJhbCcsXG4gICdkZXN0aW5hdGlvblJhdycsXG4gICdyZWZlcmVuY2UnLFxuICAndGl0bGVRdW90ZScsXG4gICd0aXRsZUFwb3N0cm9waGUnXG5dXG5cbmhhbmRsZURlbGV0ZS5wZWVrID0gcGVla0RlbGV0ZVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk1cbiAqIHN0cmlrZXRocm91Z2ggaW4gbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge0Zyb21NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIHN0cmlrZXRocm91Z2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1TdHJpa2V0aHJvdWdoRnJvbU1hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIGNhbkNvbnRhaW5Fb2xzOiBbJ2RlbGV0ZSddLFxuICAgIGVudGVyOiB7c3RyaWtldGhyb3VnaDogZW50ZXJTdHJpa2V0aHJvdWdofSxcbiAgICBleGl0OiB7c3RyaWtldGhyb3VnaDogZXhpdFN0cmlrZXRocm91Z2h9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTVxuICogc3RyaWtldGhyb3VnaCBpbiBtYXJrZG93bi5cbiAqXG4gKiBAcmV0dXJucyB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtU3RyaWtldGhyb3VnaFRvTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgdW5zYWZlOiBbXG4gICAgICB7XG4gICAgICAgIGNoYXJhY3RlcjogJ34nLFxuICAgICAgICBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJyxcbiAgICAgICAgbm90SW5Db25zdHJ1Y3Q6IGNvbnN0cnVjdHNXaXRob3V0U3RyaWtldGhyb3VnaFxuICAgICAgfVxuICAgIF0sXG4gICAgaGFuZGxlcnM6IHtkZWxldGU6IGhhbmRsZURlbGV0ZX1cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyU3RyaWtldGhyb3VnaCh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAnZGVsZXRlJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdFN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICogQHBhcmFtIHtEZWxldGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gIGNvbnN0IHRyYWNrZXIgPSBzdGF0ZS5jcmVhdGVUcmFja2VyKGluZm8pXG4gIGNvbnN0IGV4aXQgPSBzdGF0ZS5lbnRlcignc3RyaWtldGhyb3VnaCcpXG4gIGxldCB2YWx1ZSA9IHRyYWNrZXIubW92ZSgnfn4nKVxuICB2YWx1ZSArPSBzdGF0ZS5jb250YWluZXJQaHJhc2luZyhub2RlLCB7XG4gICAgLi4udHJhY2tlci5jdXJyZW50KCksXG4gICAgYmVmb3JlOiB2YWx1ZSxcbiAgICBhZnRlcjogJ34nXG4gIH0pXG4gIHZhbHVlICs9IHRyYWNrZXIubW92ZSgnfn4nKVxuICBleGl0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX0gKi9cbmZ1bmN0aW9uIHBlZWtEZWxldGUoKSB7XG4gIHJldHVybiAnfidcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js\n");

/***/ })

};
;