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
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Profile({ user  }) {\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl m-3 font-bold\",\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border w-14 mb-5\"\n                }, void 0, false, {\n                    fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: user.image,\n                    className: \"rounded-full mb-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Signed in as \",\n                        user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Signed in as \",\n                        user.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this);\n    //  <p>Signed in as {session.user.email}</p>\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"/api/auth/signin\",\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/profile.js\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            user: session.user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ0E7QUFFN0IsU0FBU0UsUUFBUSxFQUFFQyxLQUFJLEVBQUUsRUFBRTtJQUN4QyxNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdOLDJEQUFVQTtJQUU1QyxJQUFJTSxXQUFXLGlCQUFpQjtRQUM5QixxQkFDSSw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF5Qjs7Ozs7OzhCQUN2Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0U7b0JBQUlDLEtBQUtSLEtBQUtTLEtBQUs7b0JBQUVKLFdBQVU7Ozs7Ozs4QkFDaEMsOERBQUNLOzt3QkFBRTt3QkFBY1YsS0FBS1csSUFBSTs7Ozs7Ozs4QkFDMUIsOERBQUNEOzt3QkFBRTt3QkFBY1YsS0FBS1ksS0FBSzs7Ozs7Ozs7Ozs7OztJQUluQyw0Q0FBNEM7SUFDOUMsQ0FBQztJQUNELHFCQUFPLDhEQUFDQztRQUFFQyxNQUFLO2tCQUFtQjs7Ozs7O0FBQ3BDLENBQUM7QUFFTSxlQUFlQyxtQkFBbUJDLE9BQU8sRUFBRTtJQUM5QyxNQUFNZCxVQUFVLE1BQU1KLDJEQUFVQSxDQUFDa0I7SUFDakMsSUFBRyxDQUFDZCxTQUFTO1FBQ1QsT0FBTztZQUNIZSxVQUFVO2dCQUNOQyxhQUFhO2dCQUNiQyxXQUFXLEtBQUs7WUFDcEI7UUFDSjtJQUNKLENBQUM7SUFDRCxPQUFPO1FBQ0hDLE9BQU87WUFDSHBCLE1BQU1FLFFBQVFGLElBQUk7UUFDdEI7SUFDSjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvcHJvZmlsZS5qcz8wOGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7IHVzZXIgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtLTMgZm9udC1ib2xkXCI+UHJvZmlsZTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciB3LTE0IG1iLTVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgbWItM1wiPjwvaW1nPlxuICAgICAgICAgICAgPHA+U2lnbmVkIGluIGFzIHt1c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+U2lnbmVkIGluIGFzIHt1c2VyLmVtYWlsfTwvcD5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgLy8gIDxwPlNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLmVtYWlsfTwvcD5cbiAgfVxuICByZXR1cm4gPGEgaHJlZj1cIi9hcGkvYXV0aC9zaWduaW5cIj5TaWduIGluPC9hPlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIGlmKCFzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnLycsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHVzZXI6IHNlc3Npb24udXNlcixcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsImdldFNlc3Npb24iLCJQcm9maWxlIiwidXNlciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbWciLCJzcmMiLCJpbWFnZSIsInAiLCJuYW1lIiwiZW1haWwiLCJhIiwiaHJlZiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();