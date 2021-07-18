module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/buildClient.js":
/*!****************************!*\
  !*** ./api/buildClient.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst buildClient = ({\n  req\n}) => {\n  if (true) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n      baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n      headers: req.headers\n    });\n  } else {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvYnVpbGRDbGllbnQuanM/NjRjZiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsInJlcSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFhO0FBQy9CLFlBQW1DO0FBQ2pDLFdBQU9DLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUNsQkMsYUFBTyxFQUNMLGlFQUZnQjtBQUdsQkMsYUFBTyxFQUFFSixHQUFHLENBQUNJO0FBSEssS0FBYixDQUFQO0FBS0QsR0FORCxNQU1PLEVBSU47QUFDRixDQVpEOztBQWNlTCwwRUFBZiIsImZpbGUiOiIuL2FwaS9idWlsZENsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYnVpbGRDbGllbnQgPSAoeyByZXEgfSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDpcbiAgICAgICAgXCJodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWxcIixcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogXCIvXCIsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/buildClient.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_buildClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/buildClient */ \"./api/buildClient.js\");\n\nvar _jsxFileName = \"/Users/mac/Documents/ticketing/client/pages/index.js\";\n\n\nconst LandingPage = ({\n  currentUser\n}) => {\n  return currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"You are signed in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"You are not signed in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nLandingPage.getInitialProps = async context => {\n  const client = Object(_api_buildClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n  const {\n    data\n  } = await client.get(\"/api/users/currentuser\");\n  return data;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDdkMsU0FBT0EsV0FBVyxnQkFDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0IsZ0JBR2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFLRCxDQU5EOztBQVFBRCxXQUFXLENBQUNFLGVBQVosR0FBOEIsTUFBT0MsT0FBUCxJQUFtQjtBQUMvQyxRQUFNQyxNQUFNLEdBQUdDLGdFQUFXLENBQUNGLE9BQUQsQ0FBMUI7QUFFQSxRQUFNO0FBQUVHO0FBQUYsTUFBVyxNQUFNRixNQUFNLENBQUNHLEdBQVAsQ0FBVyx3QkFBWCxDQUF2QjtBQUVBLFNBQU9ELElBQVA7QUFDRCxDQU5EOztBQVFlTiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gXCIuLi9hcGkvYnVpbGRDbGllbnRcIjtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIHJldHVybiBjdXJyZW50VXNlciA/IChcbiAgICA8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPlxuICApIDogKFxuICAgIDxoMT5Zb3UgYXJlIG5vdCBzaWduZWQgaW48L2gxPlxuICApO1xufTtcblxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoY29udGV4dCk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });