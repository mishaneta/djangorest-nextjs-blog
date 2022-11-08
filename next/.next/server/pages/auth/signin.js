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
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SignIn({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id),\n                    children: [\n                        \"Sign in with \",\n                        provider.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/auth/signin.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)\n            }, provider.name, false, {\n                fileName: \"/Users/aires/Documents/projects/djangonext-googleauth/next/pages/auth/signin.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\nasync function getServerSideProps(context) {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUV2QyxTQUFTRSxPQUFPLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQzVDLHFCQUNFO2tCQUNHQyxPQUFPQyxNQUFNLENBQUNGLFdBQVdHLEdBQUcsQ0FBQyxDQUFDQyx5QkFDN0IsOERBQUNDOzBCQUNDLDRFQUFDQztvQkFBT0MsU0FBUyxJQUFNVCx1REFBTUEsQ0FBQ00sU0FBU0ksRUFBRTs7d0JBQUc7d0JBQzVCSixTQUFTSyxJQUFJOzs7Ozs7O2VBRnJCTCxTQUFTSyxJQUFJOzs7Ozs7QUFRL0IsQ0FBQztBQUVNLGVBQWVDLG1CQUFtQkMsT0FBTyxFQUFFO0lBQ2hELE1BQU1YLFlBQVksTUFBTUgsNkRBQVlBO0lBQ3BDLE9BQU87UUFDTGUsT0FBTztZQUFFWjtRQUFVO0lBQ3JCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9hdXRoL3NpZ25pbi5qcz9kMzRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Jbih7IHByb3ZpZGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQpfT5cbiAgICAgICAgICAgIFNpZ24gaW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm92aWRlcnMgfSxcbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJTaWduSW4iLCJwcm92aWRlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();