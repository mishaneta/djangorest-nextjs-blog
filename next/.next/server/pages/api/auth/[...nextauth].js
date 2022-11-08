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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.SECRET,\n    callbacks: {\n        async signIn (user, account, profile) {\n            if (user.account.provider === \"google\") {\n                const accessToken = user.account.access_token;\n                const idToken = user.account.id_token;\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(`${process.env.DJANGO_URL}/api/social/login/google/`, {\n                        access_token: accessToken,\n                        id_token: idToken\n                    });\n                    const { access_token  } = response.data;\n                    user.accessToken = access_token;\n                    return true;\n                } catch (error) {\n                    return false;\n                }\n            }\n            return false;\n        },\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            session.accessToken = token.accessToken;\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNnQztBQUNQO0FBQzhCO0FBRXZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkcsV0FBVztRQUNURCxpRUFBY0EsQ0FBQztZQUNiRSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7S0FDRDtJQUNEQyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLE1BQU07SUFFMUJDLFdBQVc7UUFDVCxNQUFNQyxRQUFPQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO1lBQ25DLElBQUlGLEtBQUtDLE9BQU8sQ0FBQ0UsUUFBUSxLQUFLLFVBQVU7Z0JBRXRDLE1BQU1DLGNBQWNKLEtBQUtDLE9BQU8sQ0FBQ0ksWUFBWTtnQkFDN0MsTUFBTUMsVUFBVU4sS0FBS0MsT0FBTyxDQUFDTSxRQUFRO2dCQUdyQyxJQUFJO29CQUNGLE1BQU1DLFdBQVcsTUFBTXJCLGtEQUFVLENBQy9CLENBQUMsRUFBRUksUUFBUUMsR0FBRyxDQUFDa0IsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEVBQ3BEO3dCQUNFTCxjQUFjRDt3QkFDZEcsVUFBVUQ7b0JBQ1o7b0JBR0YsTUFBTSxFQUFFRCxhQUFZLEVBQUUsR0FBR0csU0FBU0csSUFBSTtvQkFDdENYLEtBQUtJLFdBQVcsR0FBR0M7b0JBRW5CLE9BQU8sSUFBSTtnQkFDYixFQUFFLE9BQU9PLE9BQU87b0JBRWQsT0FBTyxLQUFLO2dCQUNkO1lBQ0YsQ0FBQztZQUNELE9BQU8sS0FBSztRQUNkO1FBR0EsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUViLFFBQU8sRUFBRSxFQUFFO1lBRTVCLElBQUlBLFNBQVM7Z0JBQ1hhLE1BQU1WLFdBQVcsR0FBR0gsUUFBUUksWUFBWTtZQUMxQyxDQUFDO1lBQ0QsT0FBT1M7UUFDVDtRQUVBLE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFRCxNQUFLLEVBQUVkLEtBQUksRUFBRSxFQUFFO1lBRXRDZSxRQUFRWCxXQUFXLEdBQUdVLE1BQU1WLFdBQVc7WUFDdkMsT0FBT1c7UUFDVDtJQUVGO0lBQ0FDLE9BQU87UUFDTGpCLFFBQVE7SUFDVjtBQUVGLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcbiAgICAgIGlmICh1c2VyLmFjY291bnQucHJvdmlkZXIgPT09ICdnb29nbGUnKSB7XG5cbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB1c2VyLmFjY291bnQuYWNjZXNzX3Rva2VuXG4gICAgICAgIGNvbnN0IGlkVG9rZW4gPSB1c2VyLmFjY291bnQuaWRfdG9rZW5cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuREpBTkdPX1VSTH0vYXBpL3NvY2lhbC9sb2dpbi9nb29nbGUvYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgaWRfdG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICB1c2VyLmFjY2Vzc1Rva2VuID0gYWNjZXNzX3Rva2VuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG5cblxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50IH0pIHtcblxuICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcblxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG5cbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gICAgXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgfVxuXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJheGlvcyIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiU0VDUkVUIiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwicHJvdmlkZXIiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImlkVG9rZW4iLCJpZF90b2tlbiIsInJlc3BvbnNlIiwicG9zdCIsIkRKQU5HT19VUkwiLCJkYXRhIiwiZXJyb3IiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();