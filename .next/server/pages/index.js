"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(732);
/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_3__]);
_pages__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CoinsList = (props)=>{
    const appContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages__WEBPACK_IMPORTED_MODULE_3__.AppContext);
    const { currency , setCurrency   } = appContext;
    const { searchTemp , value  } = props;
    const { 0: sortP , 1: setSortP  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const sort = (sortType)=>{
        setLoading(true);
        setCurrency((prevState)=>{
            let newState;
            if (sortType === "now") {
                sortP === 1 ? newState = prevState.coins.sort((a, b)=>b.current_price - a.current_price
                ) : newState = prevState.coins.sort((a, b)=>a.current_price - b.current_price
                );
            } else if (sortType === "24h") {
                sortP === 1 ? newState = prevState.coins.sort((a, b)=>b.price_change_percentage_24h - a.price_change_percentage_24h
                ) : newState = prevState.coins.sort((a, b)=>a.price_change_percentage_24h - b.price_change_percentage_24h
                );
            } else if (sortType === "7d") {
                sortP === 1 ? newState = prevState.coins.sort((a, b)=>b.price_change_percentage_7d_in_currency - a.price_change_percentage_7d_in_currency
                ) : newState = prevState.coins.sort((a, b)=>a.price_change_percentage_7d_in_currency - b.price_change_percentage_7d_in_currency
                );
            }
            sortP === 1 ? setSortP(0) : setSortP(1);
            return {
                coins: newState
            };
        });
        setLoading(false);
    };
    const sortName = async ()=>{
        await setCurrency((prevState)=>{
            const newState = sortP === 1 ? prevState.coins.sort((a, b)=>a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            ) : prevState.coins.sort((a, b)=>a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            );
            sortP === 1 ? setSortP(0) : setSortP(1);
            return {
                coins: newState
            };
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative overflow-x-auto shadow-2xl sm:rounded-lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: "w-full text-sm text-left text-gray-500",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                    className: "text-xs text-gray-700 uppercase bg-gray-50 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                scope: "col",
                                className: "px-6 py-3 cursor-pointer",
                                onClick: sortName,
                                children: "name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                scope: "col",
                                className: "px-6 py-3 cursor-pointer",
                                onClick: ()=>sort("now")
                                ,
                                children: "Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                scope: "col",
                                className: "px-6 py-3 cursor-pointer",
                                onClick: ()=>sort("24h")
                                ,
                                children: "24h %"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                scope: "col",
                                className: "px-6 py-3 cursor-pointer",
                                onClick: ()=>sort("7d")
                                ,
                                children: "7d %"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                scope: "col",
                                className: "px-6 py-3",
                                children: "Last 7 days chart"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: "text-lg font-bold tabular-nums",
                    children: currency.coins.filter((item)=>{
                        if (searchTemp === "") {
                            return value[0] < item.current_price && item.current_price < value[1];
                        } else if (item.name.toLowerCase().includes(searchTemp.toLowerCase())) {
                            return value[0] < item.current_price && item.current_price < value[1];
                        }
                    }).map((item, itemIdx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            className: "border-b odd:bg-white even:bg-gray-50 ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                    scope: "row",
                                    className: "flex flex-row items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "h-8 w-8 mx-2 rounded-full ring-2 ring-white",
                                            src: item.image
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-base text-gray-400",
                                                    children: item.symbol
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    className: "px-6 py-4",
                                    children: [
                                        "$ ",
                                        Math.round(item.current_price * 100) / 100
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: `px-6 py-4 ${Math.round(item.price_change_percentage_24h * 100) / 100 < 0 ? `text-red-600` : "text-green-600"}`,
                                    children: Math.round(item.price_change_percentage_24h * 100) / 100
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: `px-6 py-4 ${Math.round(item.price_change_percentage_7d_in_currency * 100) / 100 < 0 ? `text-red-600` : "text-green-600"}`,
                                    children: Math.round(item.price_change_percentage_7d_in_currency * 100) / 100
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "px-6 py-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_sparklines__WEBPACK_IMPORTED_MODULE_2__.Sparklines, {
                                        data: item.sparkline_in_7d.price,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_sparklines__WEBPACK_IMPORTED_MODULE_2__.SparklinesLine, {
                                            color: item.price_change_percentage_7d_in_currency < 0 ? "red" : "green"
                                        })
                                    })
                                })
                            ]
                        }, itemIdx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(369);
/* harmony import */ var _items_listBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_index__WEBPACK_IMPORTED_MODULE_2__, _items_listBox__WEBPACK_IMPORTED_MODULE_3__]);
([_pages_index__WEBPACK_IMPORTED_MODULE_2__, _items_listBox__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Exchange = ()=>{
    const appContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const { currency  } = appContext;
    const { 0: exchangeFromm , 1: setExchangeFromm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        coinId: "bitcoin",
        selectedCoin: currency.coins[0].name,
        coinImage: currency.coins[0].image,
        inputValue: 0,
        result: {
            value: 0,
            name: "btc"
        }
    });
    const { 0: exchangeToo , 1: setExchangeToo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        coinId: "ethereum",
        selectedCoin: currency.coins[1].name,
        coinImage: currency.coins[1].image,
        result: {
            value: 0,
            name: "eth"
        }
    });
    const inputExchange = (e)=>{
        const fromItem = currency.coins.find((item)=>item.id === exchangeFromm.coinId
        );
        const toItem = currency.coins.find((item)=>item.id === exchangeToo.coinId
        );
        let result = fromItem.current_price * e.target.value / (toItem.current_price * 1);
        setExchangeFromm((prevState)=>({
                ...prevState,
                inputValue: e.target.value,
                result: {
                    value: e.target.value == "" ? 0 : e.target.value,
                    name: fromItem.symbol
                }
            })
        );
        setExchangeToo((prevState)=>({
                ...prevState,
                result: {
                    value: result,
                    name: toItem.symbol
                }
            })
        );
    };
    const changeHandler = ()=>{
        const fromItem = currency.coins.find((item)=>item.id === exchangeFromm.coinId
        );
        const toItem = currency.coins.find((item)=>item.id === exchangeToo.coinId
        );
        let result = toItem.current_price * exchangeFromm.result.value / (fromItem.current_price * 1);
        setExchangeFromm((prevState)=>({
                ...prevState,
                inputValue: exchangeFromm.inputValue,
                coinImage: exchangeToo.coinImage,
                coinId: exchangeToo.coinId,
                selectedCoin: exchangeToo.selectedCoin,
                result: {
                    value: exchangeFromm.result.value,
                    name: exchangeToo.result.name
                }
            })
        );
        setExchangeToo((prevState)=>({
                ...prevState,
                coinImage: exchangeFromm.coinImage,
                coinId: exchangeFromm.coinId,
                selectedCoin: exchangeFromm.selectedCoin,
                result: {
                    value: result,
                    name: exchangeFromm.result.name
                }
            })
        );
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-5xl text-white font-bold mb-8",
                children: "Exchange"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "exchange-cards flex justify-around items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-1/3 bg-white p-4 rounded-3xl flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row w-full items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_items_listBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        exchangeFromm: exchangeFromm,
                                        exchangeToo: exchangeToo,
                                        setExchangeFromm: setExchangeFromm,
                                        setExchangeToo: setExchangeToo,
                                        fromListBox: "from"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "w-20 h-20 rounded-full",
                                        src: exchangeFromm.coinImage,
                                        alt: ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                className: "w-2/3 h-12 font-bold text-2xl outline-none bg-slate-200",
                                onChange: (e)=>inputExchange(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: changeHandler,
                        className: "h-12 w-12 cursor-pointer text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/3 bg-white p-4 rounded-3xl flex flex-col items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row w-full items-center justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_items_listBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    exchangeFromm: exchangeFromm,
                                    exchangeToo: exchangeToo,
                                    setExchangeFromm: setExchangeFromm,
                                    setExchangeToo: setExchangeToo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-20 h-20 rounded-full",
                                    src: exchangeToo.coinImage,
                                    alt: ""
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "exchange-result flex justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " w-1/2 bg-white rounded-3xl mt-8 p-12 flex justify-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-bold text-2xl self-center",
                            children: exchangeFromm.result.value !== undefined ? `${exchangeFromm.result.value} ${exchangeFromm.result.name}` : "---"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-12 w-12 mx-10",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-bold text-2xl self-center",
                            children: exchangeToo.result.value !== undefined ? `${exchangeToo.result.value} ${exchangeToo.result.name}` : "---"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exchange);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyListbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(369);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _pages__WEBPACK_IMPORTED_MODULE_2__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _pages__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function MyListbox(props) {
    const appContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_pages__WEBPACK_IMPORTED_MODULE_2__.AppContext);
    const { currency  } = appContext;
    const { exchangeFromm , exchangeToo , setExchangeFromm , setExchangeToo , fromListBox  } = props;
    const ExchangeData = (e)=>{
        const coinId = currency.coins.find((item)=>item.name === e
        );
        let fromItem;
        let toItem;
        let result;
        if (fromListBox !== undefined) {
            fromItem = currency.coins.find((item)=>item.id === coinId.id
            );
            toItem = currency.coins.find((item)=>item.id === exchangeToo.coinId
            );
            result = fromItem.current_price * exchangeFromm.inputValue / (toItem.current_price * 1);
            setExchangeFromm((prevState)=>({
                    ...prevState,
                    coinId: coinId.id,
                    selectedCoin: e,
                    coinImage: coinId.image
                })
            );
        } else {
            fromItem = currency.coins.find((item)=>item.id === exchangeFromm.coinId
            );
            toItem = currency.coins.find((item)=>item.id === coinId.id
            );
            result = fromItem.current_price * exchangeFromm.inputValue / (toItem.current_price * 1);
            setExchangeToo((prevState)=>({
                    ...prevState,
                    coinId: coinId.id,
                    selectedCoin: e,
                    coinImage: coinId.image
                })
            );
        }
        setExchangeFromm((prevState)=>({
                ...prevState,
                result: {
                    value: exchangeFromm.inputValue === "" ? 0 : exchangeFromm.inputValue,
                    name: fromItem.symbol
                }
            })
        );
        setExchangeToo((prevState)=>({
                ...prevState,
                result: {
                    value: result,
                    name: toItem.symbol
                }
            })
        );
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-1/4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox, {
            value: fromListBox !== undefined ? exchangeFromm.selectedCoin : exchangeToo.selectedCoin,
            onChange: (e)=>ExchangeData(e)
            ,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Button, {
                        className: "relative flex w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block truncate",
                                children: fromListBox !== undefined ? exchangeFromm.selectedCoin : exchangeToo.selectedCoin
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Options, {
                        className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                        children: currency.coins.map((person)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Option, {
                                className: ({ active , selected  })=>`cursor-default select-none relative py-2 px-4 ${selected ? "text-amber-900 bg-amber-100" : "text-gray-900", active ? "text-amber-900 bg-amber-100" : "text-gray-900"}`
                                ,
                                value: person.name,
                                children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                children: person.name
                                            }),
                                            selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                            }) : null
                                        ]
                                    })
                            }, person.id)
                        )
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loading = (props)=>{
    const { loading  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${loading ? "" : "hidden"} w-[100vw] h-[100vh] fixed top-0 left-0 z-50 flex items-center justify-center bg-indigo-300/50`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            type: "button",
            className: "inline-flex items-center justify-center text-4xl px-4 py-2 w-1/5 h-1/6 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed",
            disabled: "",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    className: "animate-spin -ml-1 mr-3 h-10 w-10 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })
                    ]
                }),
                "Loading..."
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": () => (/* binding */ AppContext),
/* harmony export */   "default": () => (/* binding */ Main),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(682);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_exchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_coinsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(321);
/* harmony import */ var _components_items_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_exchange__WEBPACK_IMPORTED_MODULE_3__, _components_coinsList__WEBPACK_IMPORTED_MODULE_5__]);
([_components_exchange__WEBPACK_IMPORTED_MODULE_3__, _components_coinsList__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getServerSideProps = async ()=>{
    const responsiveLatest = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d");
    return {
        props: {
            coinsData: responsiveLatest.data
        }
    };
};
const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function Main({ coinsData  }) {
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: searchTemp , 1: setSearchTemp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        0,
        1
    ]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let val = 0;
        setCurrency({
            coins: coinsData
        });
        coinsData.map((item)=>{
            item.current_price > val ? val = Math.round(item.current_price) : null;
        });
        setValue([
            0,
            val + 1
        ]);
        setLoading(false);
    }, []);
    const rangeSelector = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AppContext.Provider, {
        value: {
            currency,
            setCurrency,
            setLoading
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_items_loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                loading: loading
            }),
            currency !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto mt-40",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_exchange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row mt-32",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "search",
                                onChange: (e)=>setSearchTemp(e.target.value)
                                ,
                                className: "bg-gray-50 border h-12 border-gray-300 w-1/6 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                placeholder: "search ..."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    margin: "auto",
                                    display: "block"
                                },
                                className: "w-1/4 text-white font-bold",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            "$",
                                            value[0]
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        value: value,
                                        onChange: rangeSelector,
                                        valueLabelDisplay: "auto",
                                        min: 0,
                                        max: value[1]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-right",
                                        children: [
                                            "$",
                                            value[1],
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_coinsList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        searchTemp: searchTemp,
                        value: value
                    })
                ]
            }) : ""
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 682:
/***/ ((module) => {

module.exports = require("@mui/material/Slider");

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("react-sparklines");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(369));
module.exports = __webpack_exports__;

})();