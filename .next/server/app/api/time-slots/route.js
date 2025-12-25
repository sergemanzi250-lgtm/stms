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
exports.id = "app/api/time-slots/route";
exports.ids = ["app/api/time-slots/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftime-slots%2Froute&page=%2Fapi%2Ftime-slots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftime-slots%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftime-slots%2Froute&page=%2Fapi%2Ftime-slots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftime-slots%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var c_Users_TRAINER_1_Desktop_WEB_DEVELOP_AUTOMATIC_SCHOOL_TIMETABLE_MANAGEMENT_SYSTEM_src_app_api_time_slots_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/time-slots/route.ts */ \"(rsc)/./src/app/api/time-slots/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/time-slots/route\",\n        pathname: \"/api/time-slots\",\n        filename: \"route\",\n        bundlePath: \"app/api/time-slots/route\"\n    },\n    resolvedPagePath: \"c:\\\\Users\\\\TRAINER 1\\\\Desktop\\\\WEB DEVELOP\\\\AUTOMATIC SCHOOL TIMETABLE MANAGEMENT SYSTEM\\\\src\\\\app\\\\api\\\\time-slots\\\\route.ts\",\n    nextConfigOutput,\n    userland: c_Users_TRAINER_1_Desktop_WEB_DEVELOP_AUTOMATIC_SCHOOL_TIMETABLE_MANAGEMENT_SYSTEM_src_app_api_time_slots_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/time-slots/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0aW1lLXNsb3RzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0aW1lLXNsb3RzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdGltZS1zbG90cyUyRnJvdXRlLnRzJmFwcERpcj1jJTNBJTVDVXNlcnMlNUNUUkFJTkVSJTIwMSU1Q0Rlc2t0b3AlNUNXRUIlMjBERVZFTE9QJTVDQVVUT01BVElDJTIwU0NIT09MJTIwVElNRVRBQkxFJTIwTUFOQUdFTUVOVCUyMFNZU1RFTSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9YyUzQSU1Q1VzZXJzJTVDVFJBSU5FUiUyMDElNUNEZXNrdG9wJTVDV0VCJTIwREVWRUxPUCU1Q0FVVE9NQVRJQyUyMFNDSE9PTCUyMFRJTUVUQUJMRSUyME1BTkFHRU1FTlQlMjBTWVNURU0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZFO0FBQzFKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Nob29sLXRpbWV0YWJsZS1tYW5hZ2VtZW50Lz82NDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcImM6XFxcXFVzZXJzXFxcXFRSQUlORVIgMVxcXFxEZXNrdG9wXFxcXFdFQiBERVZFTE9QXFxcXEFVVE9NQVRJQyBTQ0hPT0wgVElNRVRBQkxFIE1BTkFHRU1FTlQgU1lTVEVNXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRpbWUtc2xvdHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RpbWUtc2xvdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90aW1lLXNsb3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90aW1lLXNsb3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiYzpcXFxcVXNlcnNcXFxcVFJBSU5FUiAxXFxcXERlc2t0b3BcXFxcV0VCIERFVkVMT1BcXFxcQVVUT01BVElDIFNDSE9PTCBUSU1FVEFCTEUgTUFOQUdFTUVOVCBTWVNURU1cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdGltZS1zbG90c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdGltZS1zbG90cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftime-slots%2Froute&page=%2Fapi%2Ftime-slots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftime-slots%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/time-slots/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/time-slots/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\n\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.schoolId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const timeSlots = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.timeSlot.findMany({\n            where: {\n                schoolId: session.user.schoolId,\n                isActive: true\n            },\n            orderBy: [\n                {\n                    day: \"asc\"\n                },\n                {\n                    period: \"asc\"\n                }\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(timeSlots);\n    } catch (error) {\n        console.error(\"Error fetching time slots:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.schoolId || session.user.role !== \"SCHOOL_ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { day, period, name, startTime, endTime, session: timeSession, isBreak, breakType } = body;\n        // Validate required fields\n        if (!day || !period || !name || !startTime || !endTime || !timeSession) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate period overlap\n        const existingSlots = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.timeSlot.findMany({\n            where: {\n                schoolId: session.user.schoolId,\n                day,\n                isActive: true\n            }\n        });\n        const newStart = new Date(`1970-01-01T${startTime}`);\n        const newEnd = new Date(`1970-01-01T${endTime}`);\n        for (const slot of existingSlots){\n            const s = slot// Cast to access new fields\n            ;\n            const slotStart = new Date(`1970-01-01T${slot.startTime.toTimeString().slice(0, 8)}`);\n            const slotEnd = new Date(`1970-01-01T${slot.endTime.toTimeString().slice(0, 8)}`);\n            // Check for overlap\n            if (newStart < slotEnd && newEnd > slotStart) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: `Time slot overlaps with existing period ${s.name} (${slot.startTime.toTimeString().slice(0, 8)} - ${slot.endTime.toTimeString().slice(0, 8)})`\n                }, {\n                    status: 400\n                });\n            }\n        }\n        const timeSlot = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.timeSlot.create({\n            data: {\n                schoolId: session.user.schoolId,\n                day,\n                period,\n                name,\n                startTime: new Date(`1970-01-01T${startTime}`),\n                endTime: new Date(`1970-01-01T${endTime}`),\n                session: timeSession,\n                isBreak: isBreak || false,\n                breakType: isBreak ? breakType : null\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(timeSlot, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error creating time slot:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDO29CQUNyQkMsT0FBTyxDQUFDLHdDQUF3QyxFQUFFeUIsRUFBRVgsSUFBSSxDQUFDLEVBQUUsRUFBRVUsS0FBS1QsU0FBUyxDQUFDWSxZQUFZLEdBQUdDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFSixLQUFLUixPQUFPLENBQUNXLFlBQVksR0FBR0MsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQzFKLEdBQUc7b0JBQUUzQixRQUFRO2dCQUFJO1lBQ3JCO1FBQ0o7UUFFQSxNQUFNRSxXQUFXLE1BQU1WLHVDQUFFQSxDQUFDVSxRQUFRLENBQUMyQixNQUFNLENBQUM7WUFDdENDLE1BQU07Z0JBQ0ZqQyxVQUFVRixRQUFRQyxJQUFJLENBQUNDLFFBQVE7Z0JBQy9CVTtnQkFDQUM7Z0JBQ0FLO2dCQUNBQyxXQUFXLElBQUlPLEtBQUssQ0FBQyxXQUFXLEVBQUVQLFVBQVUsQ0FBQztnQkFDN0NDLFNBQVMsSUFBSU0sS0FBSyxDQUFDLFdBQVcsRUFBRU4sUUFBUSxDQUFDO2dCQUN6Q3BCLFNBQVNxQjtnQkFDVEMsU0FBU0EsV0FBVztnQkFDcEJDLFdBQVdELFVBQVVDLFlBQVk7WUFDckM7UUFDSjtRQUVBLE9BQU83QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDSSxVQUFVO1lBQUVGLFFBQVE7UUFBSTtJQUNyRCxFQUFFLE9BQU9ELE9BQU87UUFDWlUsUUFBUVYsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9FO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtdGltZXRhYmxlLW1hbmFnZW1lbnQvLi9zcmMvYXBwL2FwaS90aW1lLXNsb3RzL3JvdXRlLnRzPzMwMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnQC9saWIvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uc2Nob29sSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVTbG90cyA9IGF3YWl0IGRiLnRpbWVTbG90LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIHNjaG9vbElkOiBzZXNzaW9uLnVzZXIuc2Nob29sSWQsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgICB7IGRheTogJ2FzYycgfSxcclxuICAgICAgICAgICAgICAgIHsgcGVyaW9kOiAnYXNjJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odGltZVNsb3RzKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0aW1lIHNsb3RzOicsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uc2Nob29sSWQgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09ICdTQ0hPT0xfQURNSU4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgICAgICBjb25zdCB7IGRheSwgcGVyaW9kLCBuYW1lLCBzdGFydFRpbWUsIGVuZFRpbWUsIHNlc3Npb246IHRpbWVTZXNzaW9uLCBpc0JyZWFrLCBicmVha1R5cGUgfSA9IGJvZHlcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXHJcbiAgICAgICAgaWYgKCFkYXkgfHwgIXBlcmlvZCB8fCAhbmFtZSB8fCAhc3RhcnRUaW1lIHx8ICFlbmRUaW1lIHx8ICF0aW1lU2Vzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgZmllbGRzJyB9LCB7IHN0YXR1czogNDAwIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBWYWxpZGF0ZSBwZXJpb2Qgb3ZlcmxhcFxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU2xvdHMgPSBhd2FpdCBkYi50aW1lU2xvdC5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBzY2hvb2xJZDogc2Vzc2lvbi51c2VyLnNjaG9vbElkLFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtzdGFydFRpbWV9YClcclxuICAgICAgICBjb25zdCBuZXdFbmQgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke2VuZFRpbWV9YClcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBzbG90IG9mIGV4aXN0aW5nU2xvdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHNsb3QgYXMgYW55IC8vIENhc3QgdG8gYWNjZXNzIG5ldyBmaWVsZHNcclxuICAgICAgICAgICAgY29uc3Qgc2xvdFN0YXJ0ID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtzbG90LnN0YXJ0VGltZS50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA4KX1gKVxyXG4gICAgICAgICAgICBjb25zdCBzbG90RW5kID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtzbG90LmVuZFRpbWUudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgOCl9YClcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBvdmVybGFwXHJcbiAgICAgICAgICAgIGlmICgobmV3U3RhcnQgPCBzbG90RW5kICYmIG5ld0VuZCA+IHNsb3RTdGFydCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGBUaW1lIHNsb3Qgb3ZlcmxhcHMgd2l0aCBleGlzdGluZyBwZXJpb2QgJHtzLm5hbWV9ICgke3Nsb3Quc3RhcnRUaW1lLnRvVGltZVN0cmluZygpLnNsaWNlKDAsIDgpfSAtICR7c2xvdC5lbmRUaW1lLnRvVGltZVN0cmluZygpLnNsaWNlKDAsIDgpfSlgXHJcbiAgICAgICAgICAgICAgICB9LCB7IHN0YXR1czogNDAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVTbG90ID0gYXdhaXQgZGIudGltZVNsb3QuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgc2Nob29sSWQ6IHNlc3Npb24udXNlci5zY2hvb2xJZCxcclxuICAgICAgICAgICAgICAgIGRheSxcclxuICAgICAgICAgICAgICAgIHBlcmlvZCxcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKGAxOTcwLTAxLTAxVCR7c3RhcnRUaW1lfWApLFxyXG4gICAgICAgICAgICAgICAgZW5kVGltZTogbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtlbmRUaW1lfWApLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogdGltZVNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICBpc0JyZWFrOiBpc0JyZWFrIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYnJlYWtUeXBlOiBpc0JyZWFrID8gYnJlYWtUeXBlIDogbnVsbFxyXG4gICAgICAgICAgICB9IGFzIGFueVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih0aW1lU2xvdCwgeyBzdGF0dXM6IDIwMSB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB0aW1lIHNsb3Q6JywgZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJkYiIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwidXNlciIsInNjaG9vbElkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidGltZVNsb3RzIiwidGltZVNsb3QiLCJmaW5kTWFueSIsIndoZXJlIiwiaXNBY3RpdmUiLCJvcmRlckJ5IiwiZGF5IiwicGVyaW9kIiwiY29uc29sZSIsIlBPU1QiLCJyb2xlIiwiYm9keSIsIm5hbWUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidGltZVNlc3Npb24iLCJpc0JyZWFrIiwiYnJlYWtUeXBlIiwiZXhpc3RpbmdTbG90cyIsIm5ld1N0YXJ0IiwiRGF0ZSIsIm5ld0VuZCIsInNsb3QiLCJzIiwic2xvdFN0YXJ0IiwidG9UaW1lU3RyaW5nIiwic2xpY2UiLCJzbG90RW5kIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/time-slots/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/bcryptjs","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftime-slots%2Froute&page=%2Fapi%2Ftime-slots%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftime-slots%2Froute.ts&appDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5CTRAINER%201%5CDesktop%5CWEB%20DEVELOP%5CAUTOMATIC%20SCHOOL%20TIMETABLE%20MANAGEMENT%20SYSTEM&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();