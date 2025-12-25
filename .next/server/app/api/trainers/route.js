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
exports.id = "app/api/trainers/route";
exports.ids = ["app/api/trainers/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers%2Froute&page=%2Fapi%2Ftrainers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers%2Froute&page=%2Fapi%2Ftrainers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var c_Users_TRAINER_1_Desktop_WEB_DEVELOP_AUTOMATIC_SCHOOL_TIMETABLE_MANAGEMENT_SYSTEM_src_app_api_trainers_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/trainers/route.ts */ \"(rsc)/./src/app/api/trainers/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/trainers/route\",\n        pathname: \"/api/trainers\",\n        filename: \"route\",\n        bundlePath: \"app/api/trainers/route\"\n    },\n    resolvedPagePath: \"c:\\\\Users\\\\TRAINER 1\\\\Desktop\\\\WEB DEVELOP\\\\AUTOMATIC SCHOOL TIMETABLE MANAGEMENT SYSTEM\\\\src\\\\app\\\\api\\\\trainers\\\\route.ts\",\n    nextConfigOutput,\n    userland: c_Users_TRAINER_1_Desktop_WEB_DEVELOP_AUTOMATIC_SCHOOL_TIMETABLE_MANAGEMENT_SYSTEM_src_app_api_trainers_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/trainers/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFpbmVycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdHJhaW5lcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0cmFpbmVycyUyRnJvdXRlLnRzJmFwcERpcj1jJTNBJTVDVXNlcnMlNUNUUkFJTkVSJTIwMSU1Q0Rlc2t0b3AlNUNXRUIlMjBERVZFTE9QJTVDQVVUT01BVElDJTIwU0NIT09MJTIwVElNRVRBQkxFJTIwTUFOQUdFTUVOVCUyMFNZU1RFTSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9YyUzQSU1Q1VzZXJzJTVDVFJBSU5FUiUyMDElNUNEZXNrdG9wJTVDV0VCJTIwREVWRUxPUCU1Q0FVVE9NQVRJQyUyMFNDSE9PTCUyMFRJTUVUQUJMRSUyME1BTkFHRU1FTlQlMjBTWVNURU0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJFO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Nob29sLXRpbWV0YWJsZS1tYW5hZ2VtZW50Lz80YzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcImM6XFxcXFVzZXJzXFxcXFRSQUlORVIgMVxcXFxEZXNrdG9wXFxcXFdFQiBERVZFTE9QXFxcXEFVVE9NQVRJQyBTQ0hPT0wgVElNRVRBQkxFIE1BTkFHRU1FTlQgU1lTVEVNXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRyYWluZXJzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90cmFpbmVycy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RyYWluZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90cmFpbmVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcImM6XFxcXFVzZXJzXFxcXFRSQUlORVIgMVxcXFxEZXNrdG9wXFxcXFdFQiBERVZFTE9QXFxcXEFVVE9NQVRJQyBTQ0hPT0wgVElNRVRBQkxFIE1BTkFHRU1FTlQgU1lTVEVNXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRyYWluZXJzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90cmFpbmVycy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers%2Froute&page=%2Fapi%2Ftrainers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/trainers/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/trainers/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\n\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session || session.user.role !== \"SCHOOL_ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        if (!session.user.schoolId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No school assigned to this account\"\n            }, {\n                status: 400\n            });\n        }\n        const trainers = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.user.findMany({\n            where: {\n                schoolId: session.user.schoolId,\n                role: \"TRAINER\"\n            },\n            select: {\n                id: true,\n                name: true,\n                email: true,\n                role: true,\n                teachingStreams: true,\n                maxWeeklyHours: true,\n                unavailableDays: true,\n                unavailablePeriods: true,\n                isActive: true,\n                createdAt: true,\n                _count: {\n                    select: {\n                        teacherSubjects: true,\n                        trainerModules: true,\n                        timetablesAsTeacher: true\n                    }\n                }\n            },\n            orderBy: {\n                name: \"asc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(trainers);\n    } catch (error) {\n        console.error(\"Trainers fetch error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90cmFpbmVycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUQ7QUFDWDtBQUNKO0FBQ1g7QUFFdEIsZUFBZUksSUFBSUMsT0FBb0I7SUFDMUMsSUFBSTtRQUNBLE1BQU1DLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyxrREFBV0E7UUFFbEQsSUFBSSxDQUFDSSxXQUFXQSxRQUFRQyxJQUFJLENBQUNDLElBQUksS0FBSyxnQkFBZ0I7WUFDbEQsT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FDcEI7Z0JBQUVDLE9BQU87WUFBZSxHQUN4QjtnQkFBRUMsUUFBUTtZQUFJO1FBRXRCO1FBRUEsSUFBSSxDQUFDTCxRQUFRQyxJQUFJLENBQUNLLFFBQVEsRUFBRTtZQUN4QixPQUFPWixxREFBWUEsQ0FBQ1MsSUFBSSxDQUNwQjtnQkFBRUMsT0FBTztZQUFxQyxHQUM5QztnQkFBRUMsUUFBUTtZQUFJO1FBRXRCO1FBRUEsTUFBTUUsV0FBVyxNQUFNVix1Q0FBRUEsQ0FBQ0ksSUFBSSxDQUFDTyxRQUFRLENBQUM7WUFDcENDLE9BQU87Z0JBQ0hILFVBQVVOLFFBQVFDLElBQUksQ0FBQ0ssUUFBUTtnQkFDL0JKLE1BQU07WUFDVjtZQUNBUSxRQUFRO2dCQUNKQyxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQWCxNQUFNO2dCQUNOWSxpQkFBaUI7Z0JBQ2pCQyxnQkFBZ0I7Z0JBQ2hCQyxpQkFBaUI7Z0JBQ2pCQyxvQkFBb0I7Z0JBQ3BCQyxVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxRQUFRO29CQUNKVixRQUFRO3dCQUNKVyxpQkFBaUI7d0JBQ2pCQyxnQkFBZ0I7d0JBQ2hCQyxxQkFBcUI7b0JBQ3pCO2dCQUNKO1lBQ0o7WUFDQUMsU0FBUztnQkFDTFosTUFBTTtZQUNWO1FBQ0o7UUFFQSxPQUFPbEIscURBQVlBLENBQUNTLElBQUksQ0FBQ0k7SUFFN0IsRUFBRSxPQUFPSCxPQUFPO1FBQ1pxQixRQUFRckIsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FDcEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFdEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC10aW1ldGFibGUtbWFuYWdlbWVudC8uL3NyYy9hcHAvYXBpL3RyYWluZXJzL3JvdXRlLnRzPzk3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnQC9saWIvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG5cclxuICAgICAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09ICdTQ0hPT0xfQURNSU4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXNzaW9uLnVzZXIuc2Nob29sSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICAgICAgeyBlcnJvcjogJ05vIHNjaG9vbCBhc3NpZ25lZCB0byB0aGlzIGFjY291bnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhaW5lcnMgPSBhd2FpdCBkYi51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIHNjaG9vbElkOiBzZXNzaW9uLnVzZXIuc2Nob29sSWQsXHJcbiAgICAgICAgICAgICAgICByb2xlOiAnVFJBSU5FUidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJvbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZWFjaGluZ1N0cmVhbXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXhXZWVrbHlIb3VyczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVuYXZhaWxhYmxlRGF5czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVuYXZhaWxhYmxlUGVyaW9kczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgX2NvdW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYWNoZXJTdWJqZWN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaW5lck1vZHVsZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWV0YWJsZXNBc1RlYWNoZXI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gYXMgYW55LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHRyYWluZXJzKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVHJhaW5lcnMgZmV0Y2ggZXJyb3I6JywgZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICB7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxyXG4gICAgICAgICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZGIiLCJHRVQiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2Nob29sSWQiLCJ0cmFpbmVycyIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInRlYWNoaW5nU3RyZWFtcyIsIm1heFdlZWtseUhvdXJzIiwidW5hdmFpbGFibGVEYXlzIiwidW5hdmFpbGFibGVQZXJpb2RzIiwiaXNBY3RpdmUiLCJjcmVhdGVkQXQiLCJfY291bnQiLCJ0ZWFjaGVyU3ViamVjdHMiLCJ0cmFpbmVyTW9kdWxlcyIsInRpbWV0YWJsZXNBc1RlYWNoZXIiLCJvcmRlckJ5IiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/trainers/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// @ts-ignore - Temporarily bypassing type checking for auth configuration\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            // @ts-ignore\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    },\n                    include: {\n                        school: true\n                    }\n                });\n                if (!user || !user.isActive) {\n                    return null;\n                }\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role,\n                    schoolId: user.schoolId,\n                    schoolName: user.school?.name || \"\",\n                    teachingStreams: user.teachingStreams,\n                    maxWeeklyHours: user.maxWeeklyHours\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        // @ts-ignore\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.schoolId = user.schoolId;\n                token.schoolName = user.schoolName;\n                token.teachingStreams = user.teachingStreams;\n                token.maxWeeklyHours = user.maxWeeklyHours;\n            }\n            return token;\n        },\n        // @ts-ignore\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n                session.user.schoolId = token.schoolId;\n                session.user.schoolName = token.schoolName;\n                // @ts-ignore\n                session.user.teachingStreams = token.teachingStreams;\n                // @ts-ignore\n                session.user.maxWeeklyHours = token.maxWeeklyHours;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUU7QUFDcEM7QUFDQTtBQUU3QiwwRUFBMEU7QUFDbkUsTUFBTUcsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEosMkVBQW1CQSxDQUFDO1lBQ2xCSyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsYUFBYTtZQUNiLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1FLE9BQU8sTUFBTVgsdUNBQUVBLENBQUNXLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUNsQ0MsT0FBTzt3QkFDSFAsT0FBT0QsWUFBWUMsS0FBSztvQkFDNUI7b0JBQ0FRLFNBQVM7d0JBQ0xDLFFBQVE7b0JBQ1o7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFDSixRQUFRLENBQUNBLEtBQUtLLFFBQVEsRUFBRTtvQkFDekIsT0FBTztnQkFDWDtnQkFFQSxNQUFNQyxrQkFBa0IsTUFBTWhCLHVEQUFjLENBQzFDSSxZQUFZSSxRQUFRLEVBQ3BCRSxLQUFLRixRQUFRO2dCQUdmLElBQUksQ0FBQ1EsaUJBQWlCO29CQUNwQixPQUFPO2dCQUNUO2dCQUVBLE9BQU87b0JBQ0xFLElBQUlSLEtBQUtRLEVBQUU7b0JBQ1hiLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCRixNQUFNTyxLQUFLUCxJQUFJO29CQUNmZ0IsTUFBTVQsS0FBS1MsSUFBSTtvQkFDZkMsVUFBVVYsS0FBS1UsUUFBUTtvQkFDdkJDLFlBQVlYLEtBQUtJLE1BQU0sRUFBRVgsUUFBUTtvQkFDakNtQixpQkFBaUJaLEtBQUtZLGVBQWU7b0JBQ3JDQyxnQkFBZ0JiLEtBQUthLGNBQWM7Z0JBQ3JDO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxhQUFhO1FBQ2IsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVsQixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUmtCLE1BQU1ULElBQUksR0FBR1QsS0FBS1MsSUFBSTtnQkFDdEJTLE1BQU1SLFFBQVEsR0FBR1YsS0FBS1UsUUFBUTtnQkFDOUJRLE1BQU1QLFVBQVUsR0FBR1gsS0FBS1csVUFBVTtnQkFDbENPLE1BQU1OLGVBQWUsR0FBR1osS0FBS1ksZUFBZTtnQkFDNUNNLE1BQU1MLGNBQWMsR0FBR2IsS0FBS2EsY0FBYztZQUM1QztZQUNBLE9BQU9LO1FBQ1Q7UUFDQSxhQUFhO1FBQ2IsTUFBTUosU0FBUSxFQUFFQSxPQUFPLEVBQUVJLEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUNUSixRQUFRZCxJQUFJLENBQUNRLEVBQUUsR0FBR1UsTUFBTUMsR0FBRztnQkFDM0JMLFFBQVFkLElBQUksQ0FBQ1MsSUFBSSxHQUFHUyxNQUFNVCxJQUFJO2dCQUM5QkssUUFBUWQsSUFBSSxDQUFDVSxRQUFRLEdBQUdRLE1BQU1SLFFBQVE7Z0JBQ3RDSSxRQUFRZCxJQUFJLENBQUNXLFVBQVUsR0FBR08sTUFBTVAsVUFBVTtnQkFDMUMsYUFBYTtnQkFDYkcsUUFBUWQsSUFBSSxDQUFDWSxlQUFlLEdBQUdNLE1BQU1OLGVBQWU7Z0JBQ3BELGFBQWE7Z0JBQ2JFLFFBQVFkLElBQUksQ0FBQ2EsY0FBYyxHQUFHSyxNQUFNTCxjQUFjO1lBQ3BEO1lBQ0EsT0FBT0M7UUFDVDtJQUNGO0lBQ0FNLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC10aW1ldGFibGUtbWFuYWdlbWVudC8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcclxuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYidcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuXHJcbi8vIEB0cy1pZ25vcmUgLSBUZW1wb3JhcmlseSBieXBhc3NpbmcgdHlwZSBjaGVja2luZyBmb3IgYXV0aCBjb25maWd1cmF0aW9uXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgIHNjaG9vbElkOiB1c2VyLnNjaG9vbElkLFxyXG4gICAgICAgICAgc2Nob29sTmFtZTogdXNlci5zY2hvb2w/Lm5hbWUgfHwgJycsXHJcbiAgICAgICAgICB0ZWFjaGluZ1N0cmVhbXM6IHVzZXIudGVhY2hpbmdTdHJlYW1zLFxyXG4gICAgICAgICAgbWF4V2Vla2x5SG91cnM6IHVzZXIubWF4V2Vla2x5SG91cnNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCdcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcclxuICAgICAgICB0b2tlbi5zY2hvb2xJZCA9IHVzZXIuc2Nob29sSWRcclxuICAgICAgICB0b2tlbi5zY2hvb2xOYW1lID0gdXNlci5zY2hvb2xOYW1lXHJcbiAgICAgICAgdG9rZW4udGVhY2hpbmdTdHJlYW1zID0gdXNlci50ZWFjaGluZ1N0cmVhbXNcclxuICAgICAgICB0b2tlbi5tYXhXZWVrbHlIb3VycyA9IHVzZXIubWF4V2Vla2x5SG91cnNcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgIH0sXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWIhXHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlXHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnNjaG9vbElkID0gdG9rZW4uc2Nob29sSWRcclxuICAgICAgICBzZXNzaW9uLnVzZXIuc2Nob29sTmFtZSA9IHRva2VuLnNjaG9vbE5hbWVcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnRlYWNoaW5nU3RyZWFtcyA9IHRva2VuLnRlYWNoaW5nU3RyZWFtc1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBzZXNzaW9uLnVzZXIubWF4V2Vla2x5SG91cnMgPSB0b2tlbi5tYXhXZWVrbHlIb3Vyc1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJ1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZGIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaW5jbHVkZSIsInNjaG9vbCIsImlzQWN0aXZlIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsImlkIiwicm9sZSIsInNjaG9vbElkIiwic2Nob29sTmFtZSIsInRlYWNoaW5nU3RyZWFtcyIsIm1heFdlZWtseUhvdXJzIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzdWIiLCJwYWdlcyIsInNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLEtBQUtGLGdCQUFnQkcsTUFBTSxJQUFJLElBQUlKLHdEQUFZQSxHQUFFO0FBRTlELElBQUlLLElBQXlCLEVBQWNKLGdCQUFnQkcsTUFBTSxHQUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC10aW1ldGFibGUtbWFuYWdlbWVudC8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBkYiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwiZGIiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/bcryptjs","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrainers%2Froute&page=%2Fapi%2Ftrainers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrainers%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();