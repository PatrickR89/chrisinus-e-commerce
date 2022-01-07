"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/reducers/currency_reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/currency_reducer.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_currency_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/currency_actions */ \"./src/actions/currency_actions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar currency_reducer = function(state, action) {\n    if (action.type === _actions_currency_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_CURRENCY) {\n        var value = action.payload;\n        return _objectSpread({\n        }, state, {\n            current_currency: value\n        });\n    }\n    if (action.type === _actions_currency_actions__WEBPACK_IMPORTED_MODULE_0__.STORED_CURRENCY) {\n        var currency = action.payload;\n        return _objectSpread({\n        }, state, {\n            current_currency: currency\n        });\n    }\n    if (action.type === _actions_currency_actions__WEBPACK_IMPORTED_MODULE_0__.ERROR) {\n        return _objectSpread({\n        }, state, {\n            error: true\n        });\n    }\n    throw new Error(\"No Matching \\\"\".concat(action.type, \"\\\" - action type\"));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (currency_reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvY3VycmVuY3lfcmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxHQUFLLENBQUNHLGdCQUFnQixHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsTUFBTSxFQUFLLENBQUM7SUFDM0MsRUFBRSxFQUFFQSxNQUFNLENBQUNFLElBQUksS0FBS0wsc0VBQWUsRUFBRSxDQUFDO1FBQ3BDLEdBQUssQ0FBQ00sS0FBSyxHQUFHSCxNQUFNLENBQUNJLE9BQU87UUFDNUIsTUFBTTtXQUFNSCxLQUFLO1lBQUVJLGdCQUFnQixFQUFFRixLQUFLOztJQUM1QyxDQUFDO0lBQ0QsRUFBRSxFQUFFSCxNQUFNLENBQUNFLElBQUksS0FBS0osc0VBQWUsRUFBRSxDQUFDO1FBQ3BDLEdBQUssQ0FBQ1EsUUFBUSxHQUFHTixNQUFNLENBQUNJLE9BQU87UUFDL0IsTUFBTTtXQUFNSCxLQUFLO1lBQUVJLGdCQUFnQixFQUFFQyxRQUFROztJQUMvQyxDQUFDO0lBRUQsRUFBRSxFQUFFTixNQUFNLENBQUNFLElBQUksS0FBS04sNERBQUssRUFBRSxDQUFDO1FBQzFCLE1BQU07V0FBTUssS0FBSztZQUFFTSxLQUFLLEVBQUUsSUFBSTs7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBRSxDQUFhLGdCQUFjLE1BQWUsQ0FBM0JSLE1BQU0sQ0FBQ0UsSUFBSSxFQUFDLENBQWU7QUFDN0QsQ0FBQztBQUVELCtEQUFlSCxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvY3VycmVuY3lfcmVkdWNlci5qcz8yNTRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRVJST1IsXHJcbiAgQ0hBTkdFX0NVUlJFTkNZLFxyXG4gIFNUT1JFRF9DVVJSRU5DWVxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2N1cnJlbmN5X2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGN1cnJlbmN5X3JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQ0hBTkdFX0NVUlJFTkNZKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRfY3VycmVuY3k6IHZhbHVlIH07XHJcbiAgfVxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gU1RPUkVEX0NVUlJFTkNZKSB7XHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRfY3VycmVuY3k6IGN1cnJlbmN5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEVSUk9SKSB7XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihgTm8gTWF0Y2hpbmcgXCIke2FjdGlvbi50eXBlfVwiIC0gYWN0aW9uIHR5cGVgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbmN5X3JlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJFUlJPUiIsIkNIQU5HRV9DVVJSRU5DWSIsIlNUT1JFRF9DVVJSRU5DWSIsImN1cnJlbmN5X3JlZHVjZXIiLCJhY3Rpb24iLCJzdGF0ZSIsInR5cGUiLCJ2YWx1ZSIsInBheWxvYWQiLCJjdXJyZW50X2N1cnJlbmN5IiwiY3VycmVuY3kiLCJlcnJvciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducers/currency_reducer.js\n");

/***/ })

});