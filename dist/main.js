/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// src/main.ts\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\nconst createWindow = () => {\n    const mainWindow = new electron_1.BrowserWindow({\n        width: 1000,\n        height: 700,\n        webPreferences: {\n            // preload: path.join(__dirname, 'preload.js'), // optional\n            nodeIntegration: false,\n            contextIsolation: true\n        }\n    });\n    // mainWindow.loadURL('http://localhost:3000'); // for dev server\n    // Or for production build:\n    console.log(`DIRNAME: ${__dirname}`);\n    mainWindow.loadFile(path.join(__dirname, 'index.html'));\n    mainWindow.webContents.openDevTools();\n};\nelectron_1.app.whenReady().then(createWindow);\nelectron_1.app.on('window-all-closed', () => {\n    if (process.platform !== 'darwin')\n        electron_1.app.quit();\n});\nelectron_1.app.on('activate', () => {\n    if (electron_1.BrowserWindow.getAllWindows().length === 0)\n        createWindow();\n});\n\n\n//# sourceURL=webpack://fintrak/./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;