"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/message/update/route";
exports.ids = ["app/api/message/update/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fupdate%2Froute&page=%2Fapi%2Fmessage%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fupdate%2Froute.ts&appDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fupdate%2Froute&page=%2Fapi%2Fmessage%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fupdate%2Froute.ts&appDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_mmy_develop_codes_My_Projects_chat_page_app_api_message_update_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/message/update/route.ts */ \"(rsc)/./app/api/message/update/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/message/update/route\",\n        pathname: \"/api/message/update\",\n        filename: \"route\",\n        bundlePath: \"app/api/message/update/route\"\n    },\n    resolvedPagePath: \"/Users/mmy/develop/codes/My Projects/chat-page/app/api/message/update/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mmy_develop_codes_My_Projects_chat_page_app_api_message_update_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/message/update/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlJTJGdXBkYXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZXNzYWdlJTJGdXBkYXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVzc2FnZSUyRnVwZGF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1teSUyRmRldmVsb3AlMkZjb2RlcyUyRk15JTIwUHJvamVjdHMlMkZjaGF0LXBhZ2UlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbW15JTJGZGV2ZWxvcCUyRmNvZGVzJTJGTXklMjBQcm9qZWN0cyUyRmNoYXQtcGFnZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUM0QztBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LXBhZ2UvP2VjMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tbXkvZGV2ZWxvcC9jb2Rlcy9NeSBQcm9qZWN0cy9jaGF0LXBhZ2UvYXBwL2FwaS9tZXNzYWdlL3VwZGF0ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVzc2FnZS91cGRhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tZXNzYWdlL3VwZGF0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWVzc2FnZS91cGRhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbW15L2RldmVsb3AvY29kZXMvTXkgUHJvamVjdHMvY2hhdC1wYWdlL2FwcC9hcGkvbWVzc2FnZS91cGRhdGUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVzc2FnZS91cGRhdGUvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fupdate%2Froute&page=%2Fapi%2Fmessage%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fupdate%2Froute.ts&appDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/message/update/route.ts":
/*!*****************************************!*\
  !*** ./app/api/message/update/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n// 用户创建消息、在服务端生成id和updateTime\n// 注意，不能添加default，这样会找不到接口！\nasync function POST(request) {\n    // 读取请求体\n    const body = await request.json();\n    // 解构出请求体中的id，并且将其余的信息都作为data（rest params）\n    const { id, ...data } = body;\n    // 如果data中chatId为空字符，说明这是一个新的对话，需要重新生成chat对象\n    if (!data.chatId) {\n        // 向数据库中添加一条新的record\n        const chat = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chat.create({\n            // 其他的属性会自动生成，因为id和updateTime都有default值\n            data: {\n                title: \"new chat\"\n            }\n        });\n        // 将id赋值给消息参数\n        data.chatId = chat.id;\n    } else {\n        // 如果data中chatId不为空字符，说明这不是一个全新的对话，应该更新一下对话的时间\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chat.update({\n            data: {\n                updateTime: new Date()\n            },\n            where: {\n                id: data.id\n            }\n        });\n    }\n    // prisma中的upsert方法用于创建或更新记录\n    // 如果id为空字符串，则更新；如果id为空字符串，说明这是一条新的message，需要新建\n    const message = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].message.upsert({\n        // 如果where中的参数匹配上，则更新记录；如果没有匹配上，则增加记录\n        create: data,\n        update: data,\n        where: {\n            id\n        }\n    });\n    // 将创建好的消息记录返回给客户端\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n        code: 0,\n        data: {\n            message\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lc3NhZ2UvdXBkYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUNzQjtBQUV4RCw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQ3BCLGVBQWVFLEtBQUtDLE9BQW9CO0lBQzdDLFFBQVE7SUFDUixNQUFNQyxPQUFPLE1BQU1ELFFBQVFFLElBQUk7SUFDL0IsMENBQTBDO0lBQzFDLE1BQU0sRUFBQ0MsRUFBRSxFQUFFLEdBQUdDLE1BQUssR0FBR0g7SUFFdEIsNENBQTRDO0lBQzVDLElBQUksQ0FBQ0csS0FBS0MsTUFBTSxFQUFFO1FBQ2hCLG9CQUFvQjtRQUNwQixNQUFNQyxPQUFPLE1BQU1ULG1EQUFNQSxDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQztZQUNwQyx1Q0FBdUM7WUFDdkNILE1BQU07Z0JBQ0pJLE9BQU87WUFDVDtRQUNGO1FBQ0EsYUFBYTtRQUNiSixLQUFLQyxNQUFNLEdBQUdDLEtBQUtILEVBQUU7SUFDdkIsT0FBTztRQUNMLDhDQUE4QztRQUM5QyxNQUFNTixtREFBTUEsQ0FBQ1MsSUFBSSxDQUFDRyxNQUFNLENBQUM7WUFDdkJMLE1BQU07Z0JBQ0pNLFlBQVksSUFBSUM7WUFDbEI7WUFDQUMsT0FBTztnQkFDTFQsSUFBSUMsS0FBS0QsRUFBRTtZQUNiO1FBQ0Y7SUFDRjtJQUVBLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsTUFBTVUsVUFBVSxNQUFNaEIsbURBQU1BLENBQUNnQixPQUFPLENBQUNDLE1BQU0sQ0FBQztRQUMxQyxxQ0FBcUM7UUFDckNQLFFBQVFIO1FBQ1JLLFFBQVFMO1FBQ1JRLE9BQU87WUFDTFQ7UUFDRjtJQUNGO0lBQ0Esa0JBQWtCO0lBQ2xCLE9BQU9MLGtGQUFZQSxDQUFDSSxJQUFJLENBQUM7UUFBQ2EsTUFBTTtRQUFHWCxNQUFNO1lBQ3ZDUztRQUNGO0lBQUM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtcGFnZS8uL2FwcC9hcGkvbWVzc2FnZS91cGRhdGUvcm91dGUudHM/M2U0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuLy8g55So5oi35Yib5bu65raI5oGv44CB5Zyo5pyN5Yqh56uv55Sf5oiQaWTlkox1cGRhdGVUaW1lXG4vLyDms6jmhI/vvIzkuI3og73mt7vliqBkZWZhdWx077yM6L+Z5qC35Lya5om+5LiN5Yiw5o6l5Y+j77yBXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAvLyDor7vlj5bor7fmsYLkvZNcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAvLyDop6PmnoTlh7ror7fmsYLkvZPkuK3nmoRpZO+8jOW5tuS4lOWwhuWFtuS9meeahOS/oeaBr+mDveS9nOS4umRhdGHvvIhyZXN0IHBhcmFtc++8iVxuICBjb25zdCB7aWQsIC4uLmRhdGF9ID0gYm9keTtcblxuICAvLyDlpoLmnpxkYXRh5LitY2hhdElk5Li656m65a2X56ym77yM6K+05piO6L+Z5piv5LiA5Liq5paw55qE5a+56K+d77yM6ZyA6KaB6YeN5paw55Sf5oiQY2hhdOWvueixoVxuICBpZiAoIWRhdGEuY2hhdElkKSB7XG4gICAgLy8g5ZCR5pWw5o2u5bqT5Lit5re75Yqg5LiA5p2h5paw55qEcmVjb3JkXG4gICAgY29uc3QgY2hhdCA9IGF3YWl0IHByaXNtYS5jaGF0LmNyZWF0ZSh7XG4gICAgICAvLyDlhbbku5bnmoTlsZ7mgKfkvJroh6rliqjnlJ/miJDvvIzlm6DkuLppZOWSjHVwZGF0ZVRpbWXpg73mnIlkZWZhdWx05YC8XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnbmV3IGNoYXQnXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyDlsIZpZOi1i+WAvOe7mea2iOaBr+WPguaVsFxuICAgIGRhdGEuY2hhdElkID0gY2hhdC5pZDtcbiAgfSBlbHNlIHtcbiAgICAvLyDlpoLmnpxkYXRh5LitY2hhdElk5LiN5Li656m65a2X56ym77yM6K+05piO6L+Z5LiN5piv5LiA5Liq5YWo5paw55qE5a+56K+d77yM5bqU6K+l5pu05paw5LiA5LiL5a+56K+d55qE5pe26Ze0XG4gICAgYXdhaXQgcHJpc21hLmNoYXQudXBkYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXBkYXRlVGltZTogbmV3IERhdGUoKVxuICAgICAgfSxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBkYXRhLmlkXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBcbiAgLy8gcHJpc21h5Lit55qEdXBzZXJ05pa55rOV55So5LqO5Yib5bu65oiW5pu05paw6K6w5b2VXG4gIC8vIOWmguaenGlk5Li656m65a2X56ym5Liy77yM5YiZ5pu05paw77yb5aaC5p6caWTkuLrnqbrlrZfnrKbkuLLvvIzor7TmmI7ov5nmmK/kuIDmnaHmlrDnmoRtZXNzYWdl77yM6ZyA6KaB5paw5bu6XG4gIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBwcmlzbWEubWVzc2FnZS51cHNlcnQoe1xuICAgIC8vIOWmguaenHdoZXJl5Lit55qE5Y+C5pWw5Yy56YWN5LiK77yM5YiZ5pu05paw6K6w5b2V77yb5aaC5p6c5rKh5pyJ5Yy56YWN5LiK77yM5YiZ5aKe5Yqg6K6w5b2VXG4gICAgY3JlYXRlOiBkYXRhLFxuICAgIHVwZGF0ZTogZGF0YSxcbiAgICB3aGVyZToge1xuICAgICAgaWRcbiAgICB9XG4gIH0pXG4gIC8vIOWwhuWIm+W7uuWlveeahOa2iOaBr+iusOW9lei/lOWbnue7meWuouaIt+err1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2NvZGU6IDAsIGRhdGE6IHtcbiAgICBtZXNzYWdlXG4gIH19KVxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJqc29uIiwiaWQiLCJkYXRhIiwiY2hhdElkIiwiY2hhdCIsImNyZWF0ZSIsInRpdGxlIiwidXBkYXRlIiwidXBkYXRlVGltZSIsIkRhdGUiLCJ3aGVyZSIsIm1lc3NhZ2UiLCJ1cHNlcnQiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/message/update/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// 维护的global prismaClient\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUNvQjtBQUU3QyxNQUFNQyx3QkFBd0I7SUFDMUIsT0FBTyxJQUFJRCx3REFBWUE7QUFDM0I7QUFJQSxNQUFNRSxrQkFBa0JDO0FBSXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJSDtBQUV6QyxpRUFBZUcsTUFBTUEsRUFBQTtBQUVyQixJQUFJQyxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LXBhZ2UvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g57u05oqk55qEZ2xvYmFsIHByaXNtYUNsaWVudFxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KClcbn1cblxudHlwZSBQcmlzbWFDbGllbnRTaW5nbGV0b24gPSBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnRTaW5nbGV0b24gfCB1bmRlZmluZWRcbn1cblxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fupdate%2Froute&page=%2Fapi%2Fmessage%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fupdate%2Froute.ts&appDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmy%2Fdevelop%2Fcodes%2FMy%20Projects%2Fchat-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();