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

/***/ "./components/exchange.js":
/*!********************************!*\
  !*** ./components/exchange.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index */ \"./pages/index.js\");\n/* harmony import */ var _items_listBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/listBox */ \"./components/items/listBox.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Exchange = function() {\n    _s();\n    var appContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    var currency = appContext.currency;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        coinId: \"bitcoin\",\n        selectedCoin: currency.coins[0].name,\n        coinImage: currency.coins[0].image,\n        inputValue: 0,\n        result: {\n            value: 0,\n            name: \"btc\"\n        }\n    }), exchangeFromm = ref[0], setExchangeFromm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        coinId: \"ethereum\",\n        selectedCoin: currency.coins[1].name,\n        coinImage: currency.coins[1].image,\n        result: {\n            value: 0,\n            name: \"eth\"\n        }\n    }), exchangeToo = ref1[0], setExchangeToo = ref1[1];\n    var inputExchange = function(e) {\n        var fromItem = currency.coins.find(function(item) {\n            return item.id === exchangeFromm.coinId;\n        });\n        var toItem = currency.coins.find(function(item) {\n            return item.id === exchangeToo.coinId;\n        });\n        var result = fromItem.current_price * e.target.value / (toItem.current_price * 1);\n        setExchangeFromm(function(prevState) {\n            return _objectSpread({}, prevState, {\n                inputValue: e.target.value,\n                result: {\n                    value: e.target.value == \"\" ? 0 : e.target.value,\n                    name: fromItem.symbol\n                }\n            });\n        });\n        setExchangeToo(function(prevState) {\n            return _objectSpread({}, prevState, {\n                result: {\n                    value: result,\n                    name: toItem.symbol\n                }\n            });\n        });\n    };\n    var changeHandler = function() {\n        var fromItem = currency.coins.find(function(item) {\n            return item.id === exchangeFromm.coinId;\n        });\n        var toItem = currency.coins.find(function(item) {\n            return item.id === exchangeToo.coinId;\n        });\n        var result = toItem.current_price * exchangeFromm.result.value / (fromItem.current_price * 1);\n        setExchangeFromm(function(prevState) {\n            return _objectSpread({}, prevState, {\n                inputValue: exchangeFromm.inputValue,\n                coinImage: exchangeToo.coinImage,\n                coinId: exchangeToo.coinId,\n                selectedCoin: exchangeToo.selectedCoin,\n                result: {\n                    value: exchangeFromm.result.value,\n                    name: exchangeToo.result.name\n                }\n            });\n        });\n        setExchangeToo(function(prevState) {\n            return _objectSpread({}, prevState, {\n                coinImage: exchangeFromm.coinImage,\n                coinId: exchangeFromm.coinId,\n                selectedCoin: exchangeFromm.selectedCoin,\n                result: {\n                    value: result,\n                    name: exchangeFromm.result.name\n                }\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-5xl text-white font-bold mb-8\",\n                children: \"Exchange\"\n            }, void 0, false, {\n                fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"exchange-cards px-4 flex flex-col md:flex-row justify-around items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/3 bg-white p-4 rounded-3xl flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row w-full items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_items_listBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        exchangeFromm: exchangeFromm,\n                                        exchangeToo: exchangeToo,\n                                        setExchangeFromm: setExchangeFromm,\n                                        setExchangeToo: setExchangeToo,\n                                        fromListBox: \"from\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        className: \"w-12 h-12 lg:w-16 lg:h-16 rounded-full\",\n                                        src: exchangeFromm.coinImage,\n                                        width: 32,\n                                        height: 32,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"w-2/3 h-12 mt-4 font-bold text-2xl outline-none bg-slate-200\",\n                                onChange: function(e) {\n                                    return inputExchange(e);\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        onClick: changeHandler,\n                        className: \"rotate-90 my-4 md:rotate-0 h-12 w-12 cursor-pointer text-white\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/3 bg-white p-4 rounded-3xl flex flex-col items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row w-full items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_items_listBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    exchangeFromm: exchangeFromm,\n                                    exchangeToo: exchangeToo,\n                                    setExchangeFromm: setExchangeFromm,\n                                    setExchangeToo: setExchangeToo\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    className: \"w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full\",\n                                    src: exchangeToo.coinImage,\n                                    width: 32,\n                                    height: 32,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"exchange-result flex justify-center tabular-nums break-all\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-full md:w-1/2 bg-white rounded-3xl mt-8 p-12 flex flex-col md:flex-row justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/3 font-bold text-2xl self-center text-center\",\n                            children: exchangeFromm.result.value !== undefined ? \"\".concat(exchangeFromm.result.value, \" \").concat(exchangeFromm.result.name) : \"---\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"rotate-90 md:rotate-0 h-12 w-12 m-8\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M17 8l4 4m0 0l-4 4m4-4H3\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/3 font-bold text-2xl self-center text-center\",\n                            children: exchangeToo.result.value !== undefined ? \"\".concat(Math.round(exchangeToo.result.value * 100) / 100, \" \").concat(exchangeToo.result.name) : \"---\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\frontend training\\\\React\\\\reactapp-coinMarket\\\\components\\\\exchange.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(Exchange, \"L6zcoFHOpMj/jvSbTzhYefSl32Q=\");\n_c = Exchange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exchange);\nvar _c;\n$RefreshReg$(_c, \"Exchange\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7NEJBQUNDLE1BQU0sRUFBQyxjQUFjOzRCQUFDQyxXQUFXLEVBQUUsQ0FBQztzQ0FDeEosNEVBQUNDLE1BQUk7Z0NBQUNDLGFBQWEsRUFBQyxPQUFPO2dDQUFDQyxjQUFjLEVBQUMsT0FBTztnQ0FBQ0MsQ0FBQyxFQUFDLDBCQUEwQjs7Ozs7cUNBQUc7Ozs7O2lDQUNoRjtzQ0FDTiw4REFBQ3BCLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyw0REFBNEQ7c0NBQUVmLFdBQVcsQ0FBQ0osTUFBTSxDQUFDQyxLQUFLLEtBQUtzQyxTQUFTLEdBQUcsRUFBQyxDQUFzRG5DLE1BQXVCLENBQTNFb0MsSUFBSSxDQUFDQyxLQUFLLENBQUNyQyxXQUFXLENBQUNKLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBQyxHQUFDLENBQTBCLFFBQXhCRyxXQUFXLENBQUNKLE1BQU0sQ0FBQ0osSUFBSSxDQUFFLEdBQUcsS0FBSzs7Ozs7aUNBQU87Ozs7Ozt5QkFDbk47Ozs7O3FCQUNOOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FuR0tOLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXFHZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXhjaGFuZ2UuanM/YWY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL2luZGV4XCI7XHJcbmltcG9ydCBNeUxpc3Rib3ggZnJvbSBcIi4vaXRlbXMvbGlzdEJveFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IEV4Y2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuICAgIGNvbnN0IHtjdXJyZW5jeX0gPSBhcHBDb250ZXh0XHJcblxyXG4gICAgY29uc3QgW2V4Y2hhbmdlRnJvbW0gLCBzZXRFeGNoYW5nZUZyb21tXSA9IHVzZVN0YXRlKHtcclxuICAgICAgY29pbklkIDogXCJiaXRjb2luXCIsXHJcbiAgICAgIHNlbGVjdGVkQ29pbiA6IGN1cnJlbmN5LmNvaW5zWzBdLm5hbWUsXHJcbiAgICAgIGNvaW5JbWFnZSA6IGN1cnJlbmN5LmNvaW5zWzBdLmltYWdlLFxyXG4gICAgICBpbnB1dFZhbHVlIDogMCxcclxuICAgICAgcmVzdWx0IDoge3ZhbHVlIDogMCAsIG5hbWUgOiAnYnRjJ31cclxuICAgIH0pXHJcbiAgICBjb25zdCBbZXhjaGFuZ2VUb28gLCBzZXRFeGNoYW5nZVRvb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGNvaW5JZCA6IFwiZXRoZXJldW1cIixcclxuICAgICAgc2VsZWN0ZWRDb2luIDogY3VycmVuY3kuY29pbnNbMV0ubmFtZSxcclxuICAgICAgY29pbkltYWdlIDogY3VycmVuY3kuY29pbnNbMV0uaW1hZ2UsXHJcbiAgICAgIHJlc3VsdCA6IHt2YWx1ZSA6IDAgLCBuYW1lIDogJ2V0aCd9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBpbnB1dEV4Y2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgZnJvbUl0ZW0gPSBjdXJyZW5jeS5jb2lucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gZXhjaGFuZ2VGcm9tbS5jb2luSWQpXHJcbiAgICAgIGNvbnN0IHRvSXRlbSA9IGN1cnJlbmN5LmNvaW5zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBleGNoYW5nZVRvby5jb2luSWQpXHJcbiAgICAgIGxldCByZXN1bHQgPSAoZnJvbUl0ZW0uY3VycmVudF9wcmljZSAqIGUudGFyZ2V0LnZhbHVlKSAvICh0b0l0ZW0uY3VycmVudF9wcmljZSAqIDEpXHJcbiAgICAgIHNldEV4Y2hhbmdlRnJvbW0ocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIGlucHV0VmFsdWUgOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICByZXN1bHQgOiB7IHZhbHVlIDogIGUudGFyZ2V0LnZhbHVlID09ICcnID8gMCA6IGUudGFyZ2V0LnZhbHVlICwgbmFtZSA6IGZyb21JdGVtLnN5bWJvbCB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgIClcclxuICAgICAgc2V0RXhjaGFuZ2VUb28ocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHJlc3VsdCA6IHt2YWx1ZSA6ICByZXN1bHQgLCBuYW1lIDogdG9JdGVtLnN5bWJvbCB9XHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZnJvbUl0ZW0gPSBjdXJyZW5jeS5jb2lucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gZXhjaGFuZ2VGcm9tbS5jb2luSWQpXHJcbiAgICAgIGNvbnN0IHRvSXRlbSA9IGN1cnJlbmN5LmNvaW5zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBleGNoYW5nZVRvby5jb2luSWQpXHJcbiAgICAgIGxldCByZXN1bHQgPSAodG9JdGVtLmN1cnJlbnRfcHJpY2UgKiBleGNoYW5nZUZyb21tLnJlc3VsdC52YWx1ZSkgLyAoZnJvbUl0ZW0uY3VycmVudF9wcmljZSAqIDEpXHJcbiAgICAgIHNldEV4Y2hhbmdlRnJvbW0ocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgaW5wdXRWYWx1ZSA6IGV4Y2hhbmdlRnJvbW0uaW5wdXRWYWx1ZSxcclxuICAgICAgICAgIGNvaW5JbWFnZSA6IGV4Y2hhbmdlVG9vLmNvaW5JbWFnZSxcclxuICAgICAgICAgIGNvaW5JZCA6IGV4Y2hhbmdlVG9vLmNvaW5JZCxcclxuICAgICAgICAgIHNlbGVjdGVkQ29pbiA6IGV4Y2hhbmdlVG9vLnNlbGVjdGVkQ29pbixcclxuICAgICAgICAgIHJlc3VsdCA6IHsgdmFsdWUgOiAgZXhjaGFuZ2VGcm9tbS5yZXN1bHQudmFsdWUgLCBuYW1lIDogZXhjaGFuZ2VUb28ucmVzdWx0Lm5hbWUgfVxyXG4gICAgICB9KSlcclxuICAgICAgc2V0RXhjaGFuZ2VUb28ocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgY29pbkltYWdlIDogZXhjaGFuZ2VGcm9tbS5jb2luSW1hZ2UsXHJcbiAgICAgICAgICBjb2luSWQgOiBleGNoYW5nZUZyb21tLmNvaW5JZCxcclxuICAgICAgICAgIHNlbGVjdGVkQ29pbiA6IGV4Y2hhbmdlRnJvbW0uc2VsZWN0ZWRDb2luLFxyXG4gICAgICAgICAgcmVzdWx0IDoge3ZhbHVlIDogIHJlc3VsdCAsIG5hbWUgOiBleGNoYW5nZUZyb21tLnJlc3VsdC5uYW1lIH1cclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgbWItOFwiPkV4Y2hhbmdlPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtY2FyZHMgcHgtNCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93ICBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMyBiZy13aGl0ZSBwLTQgcm91bmRlZC0zeGwgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPE15TGlzdGJveCBleGNoYW5nZUZyb21tPXtleGNoYW5nZUZyb21tfSBleGNoYW5nZVRvbz17ZXhjaGFuZ2VUb299IHNldEV4Y2hhbmdlRnJvbW09e3NldEV4Y2hhbmdlRnJvbW19IHNldEV4Y2hhbmdlVG9vPXtzZXRFeGNoYW5nZVRvb30gZnJvbUxpc3RCb3g9eydmcm9tJ30vPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbGc6dy0xNiBsZzpoLTE2IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtleGNoYW5nZUZyb21tLmNvaW5JbWFnZX1cclxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cInctMi8zIGgtMTIgbXQtNCBmb250LWJvbGQgdGV4dC0yeGwgb3V0bGluZS1ub25lIGJnLXNsYXRlLTIwMFwiIG9uQ2hhbmdlPXtlID0+IGlucHV0RXhjaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgb25DbGljaz17Y2hhbmdlSGFuZGxlcn0gY2xhc3NOYW1lPVwicm90YXRlLTkwIG15LTQgbWQ6cm90YXRlLTAgaC0xMiB3LTEyIGN1cnNvci1wb2ludGVyIHRleHQtd2hpdGVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XHJcbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTggN2gxMm0wIDBsLTQtNG00IDRsLTQgNG0wIDZING0wIDBsNCA0bS00LTRsNC00XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMyBiZy13aGl0ZSBwLTQgcm91bmRlZC0zeGwgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxNeUxpc3Rib3ggZXhjaGFuZ2VGcm9tbT17ZXhjaGFuZ2VGcm9tbX0gZXhjaGFuZ2VUb289e2V4Y2hhbmdlVG9vfSBzZXRFeGNoYW5nZUZyb21tPXtzZXRFeGNoYW5nZUZyb21tfSBzZXRFeGNoYW5nZVRvbz17c2V0RXhjaGFuZ2VUb299Lz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBtZDp3LTEyIG1kOmgtMTIgbGc6dy0xNiBsZzpoLTE2IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtleGNoYW5nZVRvby5jb2luSW1hZ2V9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzJ9XHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1yZXN1bHQgZmxleCBqdXN0aWZ5LWNlbnRlciB0YWJ1bGFyLW51bXMgYnJlYWstYWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBtZDp3LTEvMiBiZy13aGl0ZSByb3VuZGVkLTN4bCBtdC04IHAtMTIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0xLzMgZm9udC1ib2xkIHRleHQtMnhsIHNlbGYtY2VudGVyIHRleHQtY2VudGVyJz57ZXhjaGFuZ2VGcm9tbS5yZXN1bHQudmFsdWUgIT09IHVuZGVmaW5lZCA/IGAke2V4Y2hhbmdlRnJvbW0ucmVzdWx0LnZhbHVlfSAke2V4Y2hhbmdlRnJvbW0ucmVzdWx0Lm5hbWV9YCA6ICctLS0nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwicm90YXRlLTkwIG1kOnJvdGF0ZS0wIGgtMTIgdy0xMiBtLThcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMS8zIGZvbnQtYm9sZCB0ZXh0LTJ4bCBzZWxmLWNlbnRlciB0ZXh0LWNlbnRlcic+e2V4Y2hhbmdlVG9vLnJlc3VsdC52YWx1ZSAhPT0gdW5kZWZpbmVkID8gYCR7TWF0aC5yb3VuZChleGNoYW5nZVRvby5yZXN1bHQudmFsdWUgKiAxMDApIC8gMTAwfSAke2V4Y2hhbmdlVG9vLnJlc3VsdC5uYW1lfWAgOiAnLS0tJ308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsIk15TGlzdGJveCIsIkltYWdlIiwiRXhjaGFuZ2UiLCJhcHBDb250ZXh0IiwiY3VycmVuY3kiLCJjb2luSWQiLCJzZWxlY3RlZENvaW4iLCJjb2lucyIsIm5hbWUiLCJjb2luSW1hZ2UiLCJpbWFnZSIsImlucHV0VmFsdWUiLCJyZXN1bHQiLCJ2YWx1ZSIsImV4Y2hhbmdlRnJvbW0iLCJzZXRFeGNoYW5nZUZyb21tIiwiZXhjaGFuZ2VUb28iLCJzZXRFeGNoYW5nZVRvbyIsImlucHV0RXhjaGFuZ2UiLCJlIiwiZnJvbUl0ZW0iLCJmaW5kIiwiaXRlbSIsImlkIiwidG9JdGVtIiwiY3VycmVudF9wcmljZSIsInRhcmdldCIsInByZXZTdGF0ZSIsInN5bWJvbCIsImNoYW5nZUhhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmcm9tTGlzdEJveCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJzdmciLCJ4bWxucyIsIm9uQ2xpY2siLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJ1bmRlZmluZWQiLCJNYXRoIiwicm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/exchange.js\n");

/***/ })

});