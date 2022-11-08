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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostIds\": () => (/* binding */ getAllPostIds),\n/* harmony export */   \"getAllPostsData\": () => (/* binding */ getAllPostsData),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst SERVERURL = \"http://localhost:8000/\";\nasync function getAllPostsData() {\n    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new URL(`${SERVERURL}api/post/`));\n    const posts = await res.json();\n    return posts;\n}\nasync function getAllPostIds() {\n    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new URL(`${SERVERURL}api/post/`));\n    const posts = await res.json();\n    return posts.map((post)=>{\n        return {\n            params: {\n                id: String(post.id)\n            }\n        };\n    });\n}\nasync function getPostData(id) {\n    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new URL(`${SERVERURL}api/post/${id}/`));\n    const post = await res.json();\n    return post;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxZQUFZO0FBRVgsZUFBZUMsa0JBQWlCO0lBQ25DLE1BQU1DLE1BQU0sTUFBTUgsc0RBQUtBLENBQUMsSUFBSUksSUFBSSxDQUFDLEVBQUVILFVBQVUsU0FBUyxDQUFDO0lBQ3ZELE1BQU1JLFFBQVEsTUFBTUYsSUFBSUcsSUFBSTtJQUM1QixPQUFPRDtBQUNYLENBQUM7QUFFTSxlQUFlRSxnQkFBZTtJQUNqQyxNQUFNSixNQUFNLE1BQU1ILHNEQUFLQSxDQUFDLElBQUlJLElBQUksQ0FBQyxFQUFFSCxVQUFVLFNBQVMsQ0FBQztJQUN2RCxNQUFNSSxRQUFRLE1BQU1GLElBQUlHLElBQUk7SUFDNUIsT0FBT0QsTUFBTUcsR0FBRyxDQUFDLENBQUNDLE9BQVM7UUFDdkIsT0FBTztZQUNIQyxRQUFRO2dCQUNKQyxJQUFJQyxPQUFPSCxLQUFLRSxFQUFFO1lBQ3RCO1FBQ0o7SUFDSjtBQUNKLENBQUM7QUFFTSxlQUFlRSxZQUFZRixFQUFFLEVBQUM7SUFDakMsTUFBTVIsTUFBTSxNQUFNSCxzREFBS0EsQ0FBQyxJQUFJSSxJQUFJLENBQUMsRUFBRUgsVUFBVSxTQUFTLEVBQUVVLEdBQUcsQ0FBQyxDQUFDO0lBQzdELE1BQU1GLE9BQU8sTUFBTU4sSUFBSUcsSUFBSTtJQUMzQixPQUFPRztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vbGliL3Bvc3RzLmpzP2Y0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5cbmNvbnN0IFNFUlZFUlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzRGF0YSgpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5ldyBVUkwoYCR7U0VSVkVSVVJMfWFwaS9wb3N0L2ApKTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHBvc3RzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5ldyBVUkwoYCR7U0VSVkVSVVJMfWFwaS9wb3N0L2ApKTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFN0cmluZyhwb3N0LmlkKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChuZXcgVVJMKGAke1NFUlZFUlVSTH1hcGkvcG9zdC8ke2lkfS9gKSk7ICBcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gcG9zdDtcbiAgXG59Il0sIm5hbWVzIjpbImZldGNoIiwiU0VSVkVSVVJMIiwiZ2V0QWxsUG9zdHNEYXRhIiwicmVzIiwiVVJMIiwicG9zdHMiLCJqc29uIiwiZ2V0QWxsUG9zdElkcyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJpZCIsIlN0cmluZyIsImdldFBvc3REYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostData),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction PostData({ post  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback || !post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading..\"\n        }, void 0, false, {\n            fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n            lineNumber: 7,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-col items-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mb-3 font-bold\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-3 font-bold\",\n                        children: post.created_at\n                    }, void 0, false, {\n                        fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border w-14\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"whitespace-pre-wrap\",\n                children: post.content\n            }, void 0, false, {\n                fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/posts/[id].js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\nasync function getStaticPaths() {\n    const paths = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPostIds)();\n    return {\n        paths,\n        fallback: true\n    };\n}\nasync function getStaticProps({ params  }) {\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getPostData)(params.id);\n    return {\n        props: {\n            post\n        },\n        revalidate: 3\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDcUI7QUFFOUMsU0FBU0csU0FBUyxFQUFFQyxLQUFJLEVBQUUsRUFBQztJQUN0QyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsSUFBSUssT0FBT0MsVUFBVSxJQUFJLENBQUNGLE1BQUs7UUFDM0IscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDaEIsQ0FBQztJQUNELHFCQUNJLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBMkJKLEtBQUtNLEtBQUs7Ozs7OztrQ0FDbkQsOERBQUNDO3dCQUFFSCxXQUFVO2tDQUFrQkosS0FBS1EsVUFBVTs7Ozs7O2tDQUM5Qyw4REFBQ0w7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzswQkFFbkIsOERBQUNHO2dCQUFFSCxXQUFVOzBCQUF1QkosS0FBS1MsT0FBTzs7Ozs7Ozs7Ozs7O0FBSTVELENBQUM7QUFFTSxlQUFlQyxpQkFBZ0I7SUFDbEMsTUFBTUMsUUFBUSxNQUFNZCx5REFBYUE7SUFDakMsT0FBTztRQUNIYztRQUNBQyxVQUFVLElBQUk7SUFDbEI7QUFDSixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBQztJQUM1QyxNQUFNZCxPQUFPLE1BQU1GLHVEQUFXQSxDQUFDZ0IsT0FBT0MsRUFBRTtJQUN4QyxPQUFPO1FBQ0hDLE9BQU87WUFDSGhCO1FBQ0o7UUFDQWlCLFlBQVk7SUFDaEI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9wb3N0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0RGF0YSh7IHBvc3QgfSl7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrIHx8ICFwb3N0KXtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uPC9kaXY+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0zIGZvbnQtYm9sZFwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LWJvbGRcIj57cG9zdC5jcmVhdGVkX2F0fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciB3LTE0XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXBcIj57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUG9zdElkcygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSl7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDMsXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJnZXRBbGxQb3N0SWRzIiwiZ2V0UG9zdERhdGEiLCJQb3N0RGF0YSIsInBvc3QiLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJjcmVhdGVkX2F0IiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwiaWQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();