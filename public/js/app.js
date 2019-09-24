/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\users\\owner\\projects\\vuedemo\\resources\\js\\app.js: Unexpected token, expected \",\" (52:13)\n\n  50 |         //     \"Twinkle Twinkle\",\n  51 |         // ],\n> 52 |         songs.aSong: ''\n     |              ^\n  53 |     },\n  54 | \n  55 |     methods:{\n    at Parser.raise (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:6387:17)\n    at Parser.unexpected (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:7704:16)\n    at Parser.expect (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:7690:28)\n    at Parser.parseObj (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9221:14)\n    at Parser.parseExprAtom (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8855:28)\n    at Parser.parseExprSubscripts (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8483:23)\n    at Parser.parseMaybeUnary (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8463:21)\n    at Parser.parseExprOps (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8329:23)\n    at Parser.parseMaybeConditional (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8302:23)\n    at Parser.parseMaybeAssign (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8249:21)\n    at Parser.parseObjectProperty (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9352:101)\n    at Parser.parseObjPropValue (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9377:101)\n    at Parser.parseObjectMember (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9301:10)\n    at Parser.parseObj (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9225:25)\n    at Parser.parseExprAtom (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8855:28)\n    at Parser.parseExprSubscripts (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8483:23)\n    at Parser.parseMaybeUnary (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8463:21)\n    at Parser.parseExprOps (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8329:23)\n    at Parser.parseMaybeConditional (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8302:23)\n    at Parser.parseMaybeAssign (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8249:21)\n    at Parser.parseExprListItem (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9562:18)\n    at Parser.parseExprList (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9536:22)\n    at Parser.parseNewArguments (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9164:25)\n    at Parser.parseNew (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9158:10)\n    at Parser.parseExprAtom (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8872:21)\n    at Parser.parseExprSubscripts (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8483:23)\n    at Parser.parseMaybeUnary (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8463:21)\n    at Parser.parseExprOps (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8329:23)\n    at Parser.parseMaybeConditional (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8302:23)\n    at Parser.parseMaybeAssign (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:8249:21)\n    at Parser.parseVar (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:10551:26)\n    at Parser.parseVarStatement (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:10370:10)\n    at Parser.parseStatementContent (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9967:21)\n    at Parser.parseStatement (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:9900:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:10476:25)\n    at Parser.parseBlockBody (C:\\users\\owner\\projects\\vuedemo\\node_modules\\@babel\\parser\\lib\\index.js:10463:10)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\users\owner\projects\vuedemo\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\users\owner\projects\vuedemo\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });