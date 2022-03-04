/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/abstracts/component.js":
/*!***************************************!*\
  !*** ./src/js/abstracts/component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Component, _HTMLElement);

  var _super = _createSuper(Component);

  function Component() {
    _classCallCheck(this, Component);

    if ((this instanceof Component ? this.constructor : void 0) === Component) {
      throw new TypeError('Cannot create an instance of an Component class');
    }

    return _super.call(this);
  }

  _createClass(Component, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.subscribe();
      this.setEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = this.template();
    }
  }, {
    key: "template",
    value: function template() {
      return '';
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      if (!this.shouldSubscribe()) {
        return;
      }

      window.store.subscribe(this);
    }
  }, {
    key: "shouldSubscribe",
    value: function shouldSubscribe() {
      return true;
    }
  }, {
    key: "setEvent",
    value: function setEvent() {}
  }, {
    key: "addEvent",
    value: function addEvent(eventType, selector, callback) {
      var children = _toConsumableArray(this.querySelectorAll(selector));

      var isTarget = function isTarget(target) {
        return children.includes(target) || target.closest(selector);
      };

      this.addEventListener(eventType, function (event) {
        if (!isTarget(event.target)) {
          return false;
        }

        return callback(event);
      });
    }
  }, {
    key: "notify",
    value: function notify() {
      this.render();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setAttribute('hidden', true);
    }
  }, {
    key: "show",
    value: function show() {
      this.removeAttribute('hidden');
    }
  }]);

  return Component;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flux/store */ "./src/js/flux/store.js");
/* harmony import */ var _components_MoneyForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MoneyForm */ "./src/js/components/MoneyForm.js");
/* harmony import */ var _components_LottoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LottoList */ "./src/js/components/LottoList.js");
/* harmony import */ var _components_LottoListToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LottoListToggle */ "./src/js/components/LottoListToggle.js");
/* harmony import */ var _components_LottoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LottoItem */ "./src/js/components/LottoItem.js");
/* harmony import */ var _components_WinningNumberForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WinningNumberForm */ "./src/js/components/WinningNumberForm.js");
/* harmony import */ var _components_StatisticsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/StatisticsModal */ "./src/js/components/StatisticsModal.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var initialState = _objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_8__.INITIAL_STATE);

window.store = new _flux_store__WEBPACK_IMPORTED_MODULE_0__["default"](initialState);
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#app').innerHTML = "\n    <h1 class=\"text-center mb-4\">\uD83C\uDFB1 \uD589\uC6B4\uC758 \uB85C\uB610</h1>\n    <money-form class=\"mb-7\"></money-form>\n    <lotto-list class=\"mb-6\"></lotto-list>\n    <winning-number-form></winning-number-form>\n    <statistics-modal></statistics-modal>\n  ";
});

/***/ }),

/***/ "./src/js/components/LottoItem.js":
/*!****************************************!*\
  !*** ./src/js/components/LottoItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/component */ "./src/js/abstracts/component.js");
/* harmony import */ var _images_lotto_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/lotto.png */ "./images/lotto.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LottoItem = /*#__PURE__*/function (_Component) {
  _inherits(LottoItem, _Component);

  var _super = _createSuper(LottoItem);

  function LottoItem() {
    var _this;

    _classCallCheck(this, LottoItem);

    _this = _super.call(this);
    _this.lottoNums = _this.getAttribute('data-lotto-nums');
    return _this;
  }

  _createClass(LottoItem, [{
    key: "template",
    value: function template(lottoNums) {
      return "\n      <img src=".concat(_images_lotto_png__WEBPACK_IMPORTED_MODULE_1__["default"], " />").concat(lottoNums, "\n    ");
    }
  }, {
    key: "shouldSubscribe",
    value: function shouldSubscribe() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = this.template(this.lottoNums);
    }
  }]);

  return LottoItem;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('lotto-item', LottoItem);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoItem);

/***/ }),

/***/ "./src/js/components/LottoList.js":
/*!****************************************!*\
  !*** ./src/js/components/LottoList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/component */ "./src/js/abstracts/component.js");
/* harmony import */ var _images_lotto_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/lotto.png */ "./images/lotto.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LottoList = /*#__PURE__*/function (_Component) {
  _inherits(LottoList, _Component);

  var _super = _createSuper(LottoList);

  function LottoList() {
    _classCallCheck(this, LottoList);

    return _super.apply(this, arguments);
  }

  _createClass(LottoList, [{
    key: "template",
    value: // eslint-disable-next-line max-lines-per-function
    function template(lottoList, lottoListVisibility) {
      var lottoImages = !lottoListVisibility ? "<img src=\"".concat(_images_lotto_png__WEBPACK_IMPORTED_MODULE_1__["default"], "\" alt=\"lotto\"></img>").repeat(lottoList.length) : '';
      var lists = lottoListVisibility ? lottoList.map(function (lottoNums) {
        return "<lotto-item data-lotto-nums=\"".concat(lottoNums.join(', '), "\"></lotto-item>");
      }).join('') : '';
      return "\n      <div class=\"lotto-list-container\">\n        <label>\uCD1D ".concat(lottoList.length, "\uAC1C\uB97C \uAD6C\uB9E4\uD558\uC600\uC2B5\uB2C8\uB2E4.</label>\n        <div class=\"lotto-images\">").concat(lottoImages, "</div>\n        <ul class=\"lotto-list\">").concat(lists, "</ul>\n      </div>\n      <div class=\"toggle-container\">\n      <label class=\"mb-3\">\uBC88\uD638 \uBCF4\uAE30</label>\n      <lotto-list-toggle class=\"d-flex justify-content-end\"></lotto-list-toggle>\n      </div>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var _window$store$getStat = window.store.getState(),
          money = _window$store$getStat.money,
          lottoList = _window$store$getStat.lottoList,
          lottoListVisibility = _window$store$getStat.lottoListVisibility;

      this.innerHTML = '';

      if (money > 0) {
        this.innerHTML = this.template(lottoList, lottoListVisibility);
      }
    }
  }]);

  return LottoList;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('lotto-list', LottoList);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoList);

/***/ }),

/***/ "./src/js/components/LottoListToggle.js":
/*!**********************************************!*\
  !*** ./src/js/components/LottoListToggle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flux/actionCreator */ "./src/js/flux/actionCreator.js");
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/component */ "./src/js/abstracts/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var LottoListToggle = /*#__PURE__*/function (_Component) {
  _inherits(LottoListToggle, _Component);

  var _super = _createSuper(LottoListToggle);

  function LottoListToggle() {
    _classCallCheck(this, LottoListToggle);

    return _super.apply(this, arguments);
  }

  _createClass(LottoListToggle, [{
    key: "template",
    value: function template(checked) {
      return "\n      <label class=\"switch\" for=\"checkbox\">\n        <input id=\"checkbox\" type=\"checkbox\" ".concat(checked, " />\n        <div class=\"slider round\"></div>\n      </label>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEvent('click', 'input', function (event) {
        window.store.dispatch((0,_flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.TOGGLE_LOTTO_LIST, event.target.checked));
      });
    }
  }, {
    key: "shouldSubscribe",
    value: function shouldSubscribe() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _window$store$getStat = window.store.getState(),
          lottoListVisibility = _window$store$getStat.lottoListVisibility;

      var checked = lottoListVisibility ? 'checked' : '';
      this.innerHTML = this.template(checked);
    }
  }]);

  return LottoListToggle;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('lotto-list-toggle', LottoListToggle);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoListToggle);

/***/ }),

/***/ "./src/js/components/MoneyForm.js":
/*!****************************************!*\
  !*** ./src/js/components/MoneyForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flux/actionCreator */ "./src/js/flux/actionCreator.js");
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/component */ "./src/js/abstracts/component.js");
/* harmony import */ var _validation_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validators */ "./src/js/validation/validators.js");
/* harmony import */ var _validation_validation_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validation-error */ "./src/js/validation/validation-error.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var MoneyForm = /*#__PURE__*/function (_Component) {
  _inherits(MoneyForm, _Component);

  var _super = _createSuper(MoneyForm);

  function MoneyForm() {
    _classCallCheck(this, MoneyForm);

    return _super.apply(this, arguments);
  }

  _createClass(MoneyForm, [{
    key: "template",
    value: function template() {
      return "\n      <form>\n        <label class=\"mb-1\">\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <div class=\"d-flex\">\n          <input class=\"form-control mr-4\" placeholder=\"\uAE08\uC561\"></input>\n          <button class=\"btn btn-cyan\">\uAD6C\uC785</button>\n        </div>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('submit', 'form', function (event) {
        event.preventDefault();

        var $moneyInput = _this.querySelector('input');

        try {
          _this.updateMoney($moneyInput.value);
        } catch (e) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_5__.consoleErrorWithConditionalAlert)(e, _constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NAME);
        }
      });
    }
  }, {
    key: "updateMoney",
    value: function updateMoney(money) {
      var _validateMoney = (0,_validation_validators__WEBPACK_IMPORTED_MODULE_3__.validateMoney)(money),
          hasError = _validateMoney.hasError,
          errorMessage = _validateMoney.errorMessage;

      if (hasError) {
        throw new _validation_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](errorMessage);
      }

      window.store.dispatch((0,_flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.PURCHASE_LOTTO, money));
    }
  }]);

  return MoneyForm;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('money-form', MoneyForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneyForm);

/***/ }),

/***/ "./src/js/components/StatisticsModal.js":
/*!**********************************************!*\
  !*** ./src/js/components/StatisticsModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flux/actionCreator */ "./src/js/flux/actionCreator.js");
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/component */ "./src/js/abstracts/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["ranks"] }] */





var StatisticsModal = /*#__PURE__*/function (_Component) {
  _inherits(StatisticsModal, _Component);

  var _super = _createSuper(StatisticsModal);

  function StatisticsModal() {
    _classCallCheck(this, StatisticsModal);

    return _super.apply(this, arguments);
  }

  _createClass(StatisticsModal, [{
    key: "template",
    value: // eslint-disable-next-line max-lines-per-function
    function template(winningCounts, earningsRate) {
      return "\n      <div class=\"modal modal-statistics\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h2 class=\"modal-title\">\uD83C\uDFC6 \uB2F9\uCCA8 \uD1B5\uACC4 \uD83C\uDFC6</h2>\n              <button class=\"btn-close\">\u2715</button>\n            </div>\n            <div class=\"modal-body\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>\uC77C\uCE58 \uAC1C\uC218</th>\n                    <th>\uB2F9\uCCA8\uAE08</th>\n                    <th>\uB2F9\uCCA8 \uAC1C\uC218</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  ".concat(this.rowsTemplate(winningCounts), "\n                </tbody>\n              </table>\n              <div class=\"earnings-rate\">\uB2F9\uC2E0\uC758 \uCD1D \uC218\uC775\uB960\uC740 ").concat(earningsRate, "%\uC785\uB2C8\uB2E4.</div>\n            </div>\n            <div class=\"modal-footer\">\n              <button class=\"btn btn-cyan btn-reset\">\uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-backdrop\"></div>\n    ");
    }
  }, {
    key: "getEarningsRate",
    value: function getEarningsRate(winningCounts) {
      var total = [5, 4, 3, 2, 1].reduce(function (money, rank) {
        return money + winningCounts[rank] * _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.PRIZE_MONEY[rank];
      }, 0);
      return Math.floor(total / 1000 * 100);
    }
  }, {
    key: "getWinningCounts",
    value: function getWinningCounts(winningNumbers, lottoList) {
      return lottoList.reduce(function (winningCounts, lottoNums) {
        var count = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.intersect)(lottoNums, winningNumbers.normal).length;
        if (count === 6) winningCounts[1] += 1;else if (count === 5 && lottoNums.includes(winningNumbers.bonus)) winningCounts[2] += 1;else if (count === 5) winningCounts[3] += 1;else if (count === 4) winningCounts[4] += 1;else if (count === 3) winningCounts[5] += 1;
        return winningCounts;
      }, Array(6).fill(0));
    }
  }, {
    key: "rowsTemplate",
    value: function rowsTemplate(winningCounts) {
      var labels = [0, '6개', '5개+보너스볼', '5개', '4개', '5개'];
      return [5, 4, 3, 2, 1].map(function (rank) {
        return "\n          <tr>\n            <td>".concat(labels[rank], "</td>\n            <td>").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.PRIZE_MONEY[rank].toLocaleString('ko-KR'), "</td>\n            <td>").concat(winningCounts[rank], "\uAC1C</td>\n          </tr>\n        ");
      }).join('');
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('click', '.btn-close', function () {
        _this.closeModal();
      });
      this.addEvent('click', '.modal-backdrop', function () {
        _this.closeModal();
      });
      this.addEvent('click', '.btn-reset', function () {
        _this.reset();
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      document.querySelector('body').classList.remove('modal-open');
      window.store.dispatch((0,_flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.TOGGLE_STATISTICS_MODAL, false));
    }
  }, {
    key: "reset",
    value: function reset() {
      window.store.dispatch((0,_flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.RESET));
      this.closeModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _window$store$getStat = window.store.getState(),
          statisticsModalVisibility = _window$store$getStat.statisticsModalVisibility,
          winningNumbers = _window$store$getStat.winningNumbers,
          lottoList = _window$store$getStat.lottoList;

      if (!statisticsModalVisibility) {
        this.innerHTML = '';
        return;
      }

      var winningCounts = this.getWinningCounts(winningNumbers, lottoList);
      var earningsRate = this.getEarningsRate(winningCounts);
      this.innerHTML = this.template(winningCounts, earningsRate);
      document.querySelector('body').classList.add('modal-open');
    }
  }]);

  return StatisticsModal;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('statistics-modal', StatisticsModal);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticsModal);

/***/ }),

/***/ "./src/js/components/WinningNumberForm.js":
/*!************************************************!*\
  !*** ./src/js/components/WinningNumberForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flux/actionCreator */ "./src/js/flux/actionCreator.js");
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/component */ "./src/js/abstracts/component.js");
/* harmony import */ var _validation_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validators */ "./src/js/validation/validators.js");
/* harmony import */ var _validation_validation_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validation-error */ "./src/js/validation/validation-error.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var WinningNumberForm = /*#__PURE__*/function (_Component) {
  _inherits(WinningNumberForm, _Component);

  var _super = _createSuper(WinningNumberForm);

  function WinningNumberForm() {
    _classCallCheck(this, WinningNumberForm);

    return _super.apply(this, arguments);
  }

  _createClass(WinningNumberForm, [{
    key: "template",
    value: // eslint-disable-next-line max-lines-per-function
    function template(_ref) {
      var normal = _ref.normal,
          bonus = _ref.bonus;
      var normalInputs = normal.length === _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.COUNT ? normal.map(function (num) {
        return "<input class=\"form-control\" value=\"".concat(num, "\" maxlength=\"2\"/>");
      }).join('') : "<input class=\"form-control\" maxlength=\"2\"/>".repeat(_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.COUNT);
      var bonusInput = bonus && bonus > 0 ? "<input class=\"form-control\" value=\"".concat(bonus, "\" maxlength=\"2\"/>") : "<input class=\"form-control\" maxlength=\"2\"/>";
      return "\n      <form>\n        <label>\uC9C0\uB09C \uC8FC \uB2F9\uCCA8\uBC88\uD638 6\uAC1C\uC640 \uBCF4\uB108\uC2A4 \uBC88\uD638 1\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <div class=\"wrapper\">\n          <fieldset>\n            <label>\uB2F9\uCCA8 \uBC88\uD638</label>\n            <div class=\"d-flex\">\n              ".concat(normalInputs, "\n            </div>\n          </fieldset>\n          <fieldset>\n            <label>\uBCF4\uB108\uC2A4 \uBC88\uD638</label>\n            ").concat(bonusInput, "\n          </fieldset>\n        </div>\n        <button class=\"btn btn-cyan w-100\">\uACB0\uACFC \uD655\uC778\uD558\uAE30</button>\n      </form>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      var _this = this;

      this.addEvent('submit', 'form', function (event) {
        event.preventDefault();

        var $winningNumberInputs = _toConsumableArray(_this.querySelectorAll('input'));

        var winningNumbers = $winningNumberInputs.map(function (input) {
          return input.value;
        });

        try {
          _this.pickLottoNumbers(winningNumbers);
        } catch (e) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_5__.consoleErrorWithConditionalAlert)(e, _constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NAME);
        }
      });
    }
  }, {
    key: "pickLottoNumbers",
    value: function pickLottoNumbers(winningNumbers) {
      var _validateWinningNumbe = (0,_validation_validators__WEBPACK_IMPORTED_MODULE_3__.validateWinningNumbers)(winningNumbers),
          hasError = _validateWinningNumbe.hasError,
          errorMessage = _validateWinningNumbe.errorMessage;

      if (hasError) {
        throw new _validation_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](errorMessage);
      }

      window.store.dispatch((0,_flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.SET_WINNING_NUMBERS, {
        normal: winningNumbers.slice(0, winningNumbers.length - 1).map(Number),
        bonus: Number(winningNumbers[winningNumbers.length - 1])
      }));
      window.store.dispatch((0,_flux_actionCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.TOGGLE_STATISTICS_MODAL, true));
    }
  }, {
    key: "render",
    value: function render() {
      var _window$store$getStat = window.store.getState(),
          money = _window$store$getStat.money,
          winningNumbers = _window$store$getStat.winningNumbers;

      console.log('winningNumbers : ', winningNumbers);
      this.innerHTML = '';

      if (money > 0) {
        this.innerHTML = this.template(winningNumbers);
      }
    }
  }]);

  return WinningNumberForm;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('winning-number-form', WinningNumberForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinningNumberForm);

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION": () => (/* binding */ ACTION),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "LOTTO": () => (/* binding */ LOTTO),
/* harmony export */   "INITIAL_STATE": () => (/* binding */ INITIAL_STATE),
/* harmony export */   "VALIDATION_ERROR_NAME": () => (/* binding */ VALIDATION_ERROR_NAME)
/* harmony export */ });
var ACTION = {
  PURCHASE_LOTTO: 'purchase-lotto',
  TOGGLE_LOTTO_LIST: 'toggle-lotto-list',
  SET_WINNING_NUMBERS: 'set-winning-numbers',
  TOGGLE_STATISTICS_MODAL: 'toggle-statistics-modal',
  RESET: 'reset'
};
var ERROR_MESSAGE = {
  EMPTY_MONEY: '금액을 입력해 주세요!',
  NOT_INTEGER_MONEY: '정수만 입력해 주세요!',
  UNDER_MIN_MONEY: '천원 이상 입력해 주세요!',
  NOT_DIVIDED_BY_THOUSAND: '천 단위로 입력해 주세요!',
  EMPTY_WINNING_NUMBERS: '모든 당첨 번호를 입력해 주세요!',
  NOT_INTEGER_WINNING_NUMBER: '정수만 입력해 주세요!',
  NOT_IN_VALID_WINNING_NUMBER_RANGE: '모든 값을 1 ~ 45 사이로 입력해 주세요!',
  DUPLICATE_WINNING_NUMBERS: '서로 다른 당첨 번호를 입력해 주세요!'
};
var LOTTO = {
  RANGE: {
    MIN: 1,
    MAX: 45
  },
  COUNT: 6,
  PRICE: 1000,
  PRIZE_MONEY: [0, 2000000000, 30000000, 1500000, 50000, 5000]
};
var INITIAL_STATE = {
  money: 0,
  lottoList: [],
  lottoListVisibility: false,
  winningNumbers: {
    normal: [],
    bonus: null
  },
  statisticsModalVisibility: false
};
var VALIDATION_ERROR_NAME = 'ValidationError';

/***/ }),

/***/ "./src/js/flux/actionCreator.js":
/*!**************************************!*\
  !*** ./src/js/flux/actionCreator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createAction = function createAction(type, payload) {
  return {
    type: type,
    payload: payload
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAction);

/***/ }),

/***/ "./src/js/flux/reducer.js":
/*!********************************!*\
  !*** ./src/js/flux/reducer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var generateLottoList = function generateLottoList(money) {
  var count = Math.floor(money / 1000);
  var RANGE = _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.RANGE,
      COUNT = _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.COUNT;
  return Array.from({
    length: count
  }, function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.pickUniqueNumbersInRange)(RANGE.MIN, RANGE.MAX, COUNT);
  });
}; // eslint-disable-next-line max-lines-per-function


function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  var newState = _objectSpread({}, state);

  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.PURCHASE_LOTTO) {
    newState.money = payload;
    var lottoList = generateLottoList(payload);
    newState.lottoList = lottoList;
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.TOGGLE_LOTTO_LIST) {
    newState.lottoListVisibility = payload;
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.SET_WINNING_NUMBERS) {
    newState.winningNumbers = payload;
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.TOGGLE_STATISTICS_MODAL) {
    newState.statisticsModalVisibility = payload;
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.RESET) {
    return _objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_0__.INITIAL_STATE);
  }

  return newState;
}

/***/ }),

/***/ "./src/js/flux/store.js":
/*!******************************!*\
  !*** ./src/js/flux/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/js/flux/reducer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _subscribers = /*#__PURE__*/new WeakMap();

var _state = /*#__PURE__*/new WeakMap();

var Store = /*#__PURE__*/function () {
  function Store(initialState) {
    _classCallCheck(this, Store);

    _classPrivateFieldInitSpec(this, _subscribers, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: {}
    });

    _classPrivateFieldSet(this, _state, initialState);
  }

  _createClass(Store, [{
    key: "getState",
    value: function getState() {
      return _classPrivateFieldGet(this, _state);
    }
  }, {
    key: "subscribe",
    value: function subscribe(component) {
      _classPrivateFieldGet(this, _subscribers).push(component);
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      _classPrivateFieldSet(this, _state, (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getState(), action));

      _classPrivateFieldGet(this, _subscribers).forEach(function (subscriber) {
        subscriber.notify();
      });
    }
  }]);

  return Store;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "range": () => (/* binding */ range),
/* harmony export */   "removeValByIndexInArr": () => (/* binding */ removeValByIndexInArr),
/* harmony export */   "pickNumberInRange": () => (/* binding */ pickNumberInRange),
/* harmony export */   "pickUniqueNumbersInRange": () => (/* binding */ pickUniqueNumbersInRange),
/* harmony export */   "intersect": () => (/* binding */ intersect),
/* harmony export */   "consoleErrorWithConditionalAlert": () => (/* binding */ consoleErrorWithConditionalAlert)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var range = function range(startInclusive, endInclusive) {
  var size = Math.abs(endInclusive - startInclusive) + 1;

  if (endInclusive >= startInclusive) {
    return _toConsumableArray(Array(size).keys()).map(function (i) {
      return startInclusive + i;
    });
  }

  return _toConsumableArray(Array(size).keys()).map(function (i) {
    return startInclusive - i;
  });
};
var removeValByIndexInArr = function removeValByIndexInArr(arr, index) {
  var newArr = _toConsumableArray(arr);

  newArr[index] = newArr[newArr.length - 1];
  newArr.pop();
  return newArr;
};
var pickNumberInRange = function pickNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var pickUniqueNumbersInRange = function pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
  var removeCount = endInclusive - startInclusive + 1 - count;
  return Array.from({
    length: removeCount
  }).reduce(function (acc) {
    return removeValByIndexInArr(acc, pickNumberInRange(0, acc.length - 1));
  }, range(startInclusive, endInclusive));
};
var intersect = function intersect(a, b) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set(_toConsumableArray(setA).filter(function (x) {
    return setB.has(x);
  }));
  return Array.from(intersection);
};
var consoleErrorWithConditionalAlert = function consoleErrorWithConditionalAlert(error, errorNameForAlert) {
  console.error(error);

  if (error.name === errorNameForAlert) {
    alert(error.message);
  }
};

/***/ }),

/***/ "./src/js/validation/validation-error.js":
/*!***********************************************!*\
  !*** ./src/js/validation/validation-error.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ValidationError = /*#__PURE__*/function (_Error) {
  _inherits(ValidationError, _Error);

  var _super = _createSuper(ValidationError);

  function ValidationError(message) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _super.call(this, message);
    _this.name = _constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NAME;
    return _this;
  }

  return _createClass(ValidationError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationError);

/***/ }),

/***/ "./src/js/validation/validation-result.js":
/*!************************************************!*\
  !*** ./src/js/validation/validation-result.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationResult = /*#__PURE__*/_createClass(function ValidationResult(hasError, errorMessage) {
  _classCallCheck(this, ValidationResult);

  this.hasError = hasError;
  this.errorMessage = errorMessage;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationResult);

/***/ }),

/***/ "./src/js/validation/validators.js":
/*!*****************************************!*\
  !*** ./src/js/validation/validators.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateMoney": () => (/* binding */ validateMoney),
/* harmony export */   "validateWinningNumbers": () => (/* binding */ validateWinningNumbers)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
/* harmony import */ var _validation_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-result */ "./src/js/validation/validation-result.js");



var isEmptyStr = function isEmptyStr(str) {
  return str.trim() === '';
};

var isNumber = function isNumber(num) {
  return /^-?[0-9]+$/g.test(num);
};

var validateMoney = function validateMoney(money) {
  if (isEmptyStr(money)) {
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_MONEY);
  }

  if (!isNumber(money)) {
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_INTEGER_MONEY);
  }

  if (parseInt(money, 10) < 1000) {
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.UNDER_MIN_MONEY);
  }

  if (money % 1000) {
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_DIVIDED_BY_THOUSAND);
  }

  return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](false);
}; // eslint-disable-next-line max-lines-per-function

var validateWinningNumbers = function validateWinningNumbers(numbers) {
  for (var i = 0; i < numbers.length; i += 1) {
    if (isEmptyStr(numbers[i])) {
      return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_WINNING_NUMBERS);
    }

    if (!isNumber(numbers[i])) {
      return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_INTEGER_WINNING_NUMBER);
    }

    if (numbers[i] < _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.RANGE.MIN || numbers[i] > _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.RANGE.MAX) {
      return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_IN_VALID_WINNING_NUMBER_RANGE);
    }
  }

  if (new Set(numbers).size !== numbers.length) {
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.DUPLICATE_WINNING_NUMBERS);
  }

  return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](false);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/btn.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/btn.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn {\n  width: 65px;\n  padding: 10px 0;\n  border-radius: 4px;\n  outline: 0;\n  border-style: none;\n  cursor: pointer;\n  word-break: keep-all;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n}\n\n.btn-cyan {\n  color: white;\n  background-color: var(--cyan);\n  border-color: var(--cyan);\n}\n\n.btn.btn-cyan:hover {\n  background-color: var(--cyan-light);\n}\n\n.btn-long {\n  width: 152px;\n}\n\n.btn:disabled {\n  cursor: not-allowed;\n}\n", "",{"version":3,"sources":["webpack://./src/css/btn.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".btn {\n  width: 65px;\n  padding: 10px 0;\n  border-radius: 4px;\n  outline: 0;\n  border-style: none;\n  cursor: pointer;\n  word-break: keep-all;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n}\n\n.btn-cyan {\n  color: white;\n  background-color: var(--cyan);\n  border-color: var(--cyan);\n}\n\n.btn.btn-cyan:hover {\n  background-color: var(--cyan-light);\n}\n\n.btn-long {\n  width: 152px;\n}\n\n.btn:disabled {\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/flex.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/flex.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".d-flex {\n  display: flex;\n}\n\n.justify-content-start {\n  justify-content: flex-start;\n}\n.justify-content-end {\n  justify-content: flex-end;\n}\n.justify-content-center {\n  justify-content: center;\n}\n.justify-content-between {\n  justify-content: space-between;\n}\n.justify-content-around {\n  justify-content: space-around;\n}\n.justify-content-evenly {\n  justify-content: space-evenly;\n}\n\n.align-items-start {\n  align-items: flex-start;\n}\n.align-items-end {\n  align-items: flex-end;\n}\n.align-items-center {\n  align-items: center;\n}\n.align-items-baseline {\n  align-items: baseline;\n}\n.align-items-stretch {\n  align-items: stretch;\n}\n\n.align-content-center {\n  align-content: center;\n}\n.align-content-start {\n  align-content: flex-start;\n}\n.align-content-end {\n  align-content: flex-end;\n}\n.align-content-between {\n  align-content: space-between;\n}\n.align-content-around {\n  align-content: space-around;\n}\n.align-content-evenly {\n  align-content: space-around;\n}\n\n.flex-grow-1 {\n  flex-grow: 1;\n}", "",{"version":3,"sources":["webpack://./src/css/flex.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd","sourcesContent":[".d-flex {\n  display: flex;\n}\n\n.justify-content-start {\n  justify-content: flex-start;\n}\n.justify-content-end {\n  justify-content: flex-end;\n}\n.justify-content-center {\n  justify-content: center;\n}\n.justify-content-between {\n  justify-content: space-between;\n}\n.justify-content-around {\n  justify-content: space-around;\n}\n.justify-content-evenly {\n  justify-content: space-evenly;\n}\n\n.align-items-start {\n  align-items: flex-start;\n}\n.align-items-end {\n  align-items: flex-end;\n}\n.align-items-center {\n  align-items: center;\n}\n.align-items-baseline {\n  align-items: baseline;\n}\n.align-items-stretch {\n  align-items: stretch;\n}\n\n.align-content-center {\n  align-content: center;\n}\n.align-content-start {\n  align-content: flex-start;\n}\n.align-content-end {\n  align-content: flex-end;\n}\n.align-content-between {\n  align-content: space-between;\n}\n.align-content-around {\n  align-content: space-around;\n}\n.align-content-evenly {\n  align-content: space-around;\n}\n\n.flex-grow-1 {\n  flex-grow: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n.form-label {\n  display: inline-block;\n  margin-bottom: 4px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 8px 8px 4px;\n  border: 1px solid var(--gray-900);\n  border-radius: 4px;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.form-control.submitted {\n  background-color: var(--gray-800);\n}\n\n.form-control:disabled {\n  background-color: var(--gray-800);\n  cursor: not-allowed;\n}\n\n.form-control:focus {\n  background-color: white !important;\n}\n\n::placeholder {\n  color: var(--gray-900);\n  opacity: 1; /* Firefox */\n}\n", "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,oBAAoB;EACpB,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;EACtB,UAAU,EAAE,YAAY;AAC1B","sourcesContent":["fieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n.form-label {\n  display: inline-block;\n  margin-bottom: 4px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 8px 8px 4px;\n  border: 1px solid var(--gray-900);\n  border-radius: 4px;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.form-control.submitted {\n  background-color: var(--gray-800);\n}\n\n.form-control:disabled {\n  background-color: var(--gray-800);\n  cursor: not-allowed;\n}\n\n.form-control:focus {\n  background-color: white !important;\n}\n\n::placeholder {\n  color: var(--gray-900);\n  opacity: 1; /* Firefox */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./spacing.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/spacing.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btn_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./btn.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/btn.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_flex_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./flex.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/flex.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typhography_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./typhography.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/typhography.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./switch.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/switch.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_btn_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_flex_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_typhography_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 100%;\n  height: 100%;\n  background-color: var(--gray-500);\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  width: 414px;\n  margin: 56px auto 0;\n  padding: 52px 16px 39px;\n  border: 1px solid var(--gray-700);\n  border-radius: 4px;\n  background-color: white;\n}\n\n.w-100 {\n  width: 100%;\n}\n\nul {\n  margin: 0;\n  list-style: none;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\nlotto-list {\n  display: flex;\n}\n\nlotto-list > .lotto-list-container {\n  flex: 1;\n}\n\nlotto-list .lotto-images img {\n  margin-right: 8px;\n}\n\nlotto-list > .lotto-list-container label {\n  display: block;\n  margin-bottom: 8px;\n}\n\nlotto-list > .toggle-container {\n}\n\nlotto-list lotto-item {\n  display: flex;\n  align-items: center;\n}\n\nlotto-list lotto-item img {\n  margin-right: 8px;\n}\n\nlotto-list-toggle {\n}\n\nwinning-number-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\nwinning-number-form label {\n  display: block;\n  margin-bottom: 8px;\n}\n\nwinning-number-form input.form-control {\n  width: 34px;\n  height: 36px;\n  padding: 0;\n  margin-right: 8px;\n  text-align: center;\n}\n\nwinning-number-form .wrapper {\n  display: flex;\n  margin-bottom: 24px;\n}\n\nwinning-number-form fieldset {\n  flex: 1;\n}\n\nwinning-number-form fieldset:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\nstatistics-modal .modal-dialog {\n  width: 350px;\n  height: 500px;\n  margin: 100px auto 0 auto;\n}\n\nstatistics-modal table {\n  border-collapse: collapse;\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nstatistics-modal table th,\nstatistics-modal table td {\n  border-top: 1px solid #DCDCDC;\n  border-bottom: 1px solid #DCDCDC;\n  padding: 8px 0;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\nstatistics-modal table td {\n  font-weight: 400;\n}\n\nstatistics-modal .earnings-rate {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  margin-bottom: 32px;\n}\n\nstatistics-modal .btn-reset {\n  width: 152px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAUA;EACE,WAAW;EACX,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,iCAAiC;EACjC,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,6BAA6B;EAC7B,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd","sourcesContent":["@import './normalize.css';\n@import './root.css';\n@import './spacing.css';\n@import './btn.css';\n@import './flex.css';\n@import './form.css';\n@import './typhography.css';\n@import './switch.css';\n@import './modal.css';\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--gray-500);\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  width: 414px;\n  margin: 56px auto 0;\n  padding: 52px 16px 39px;\n  border: 1px solid var(--gray-700);\n  border-radius: 4px;\n  background-color: white;\n}\n\n.w-100 {\n  width: 100%;\n}\n\nul {\n  margin: 0;\n  list-style: none;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\nlotto-list {\n  display: flex;\n}\n\nlotto-list > .lotto-list-container {\n  flex: 1;\n}\n\nlotto-list .lotto-images img {\n  margin-right: 8px;\n}\n\nlotto-list > .lotto-list-container label {\n  display: block;\n  margin-bottom: 8px;\n}\n\nlotto-list > .toggle-container {\n}\n\nlotto-list lotto-item {\n  display: flex;\n  align-items: center;\n}\n\nlotto-list lotto-item img {\n  margin-right: 8px;\n}\n\nlotto-list-toggle {\n}\n\nwinning-number-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\nwinning-number-form label {\n  display: block;\n  margin-bottom: 8px;\n}\n\nwinning-number-form input.form-control {\n  width: 34px;\n  height: 36px;\n  padding: 0;\n  margin-right: 8px;\n  text-align: center;\n}\n\nwinning-number-form .wrapper {\n  display: flex;\n  margin-bottom: 24px;\n}\n\nwinning-number-form fieldset {\n  flex: 1;\n}\n\nwinning-number-form fieldset:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\nstatistics-modal .modal-dialog {\n  width: 350px;\n  height: 500px;\n  margin: 100px auto 0 auto;\n}\n\nstatistics-modal table {\n  border-collapse: collapse;\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nstatistics-modal table th,\nstatistics-modal table td {\n  border-top: 1px solid #DCDCDC;\n  border-bottom: 1px solid #DCDCDC;\n  padding: 8px 0;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\nstatistics-modal table td {\n  font-weight: 400;\n}\n\nstatistics-modal .earnings-rate {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  margin-bottom: 32px;\n}\n\nstatistics-modal .btn-reset {\n  width: 152px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-open {\n  height: 100vh;\n  overflow: hidden;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n  pointer-events: none;\n}\n\n.modal-content {\n  position: relative;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  outline: 0;\n  text-align: center;\n}\n\n.modal-header {\n  position: relative;\n  padding: 40px 0 32px 0;\n}\n.modal-header .btn-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  height: 14px;\n  width: 14px;\n  border-radius: 0px;\n  color: #323232;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.modal-title {\n  margin: 0;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n\n.modal-footer {\n  padding-bottom: 49px;\n}\n\n.modal-body {\n  position: relative;\n  padding: 0 16px;\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,oBAAoB;EACpB,sBAAsB;EACtB,4BAA4B;EAC5B,oCAAoC;EACpC,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":[".modal-open {\n  height: 100vh;\n  overflow: hidden;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n  pointer-events: none;\n}\n\n.modal-content {\n  position: relative;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  outline: 0;\n  text-align: center;\n}\n\n.modal-header {\n  position: relative;\n  padding: 40px 0 32px 0;\n}\n.modal-header .btn-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  height: 14px;\n  width: 14px;\n  border-radius: 0px;\n  color: #323232;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.modal-title {\n  margin: 0;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n\n.modal-footer {\n  padding-bottom: 49px;\n}\n\n.modal-body {\n  position: relative;\n  padding: 0 16px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;EACC,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cyan: #00BCD4;\n  --cyan-light: #80DEEA;\n  --gray-900: #B4B4B4;\n  --gray-800: #dfdfdf;\n  --gray-700: #E0E0E0;\n  --gray-600: #F5F5F5;\n  --gray-500: #F9F9F9;\n}", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB","sourcesContent":[":root {\n  --cyan: #00BCD4;\n  --cyan-light: #80DEEA;\n  --gray-900: #B4B4B4;\n  --gray-800: #dfdfdf;\n  --gray-700: #E0E0E0;\n  --gray-600: #F5F5F5;\n  --gray-500: #F9F9F9;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/spacing.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/spacing.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* margin-top */\n.mt-1 {\n  margin-top: 4px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.mt-3 {\n  margin-top: 12px;\n}\n.mt-4 {\n  margin-top: 16px;\n}\n.mt-5 {\n  margin-top: 20px;\n}\n.mt-6 {\n  margin-top: 24px;\n}\n.mt-7 {\n  margin-top: 28px;\n}\n.mt-8 {\n  margin-top: 32px;\n}\n.mt-9 {\n  margin-top: 36px;\n}\n\n/* margin-right */\n.mr-1 {\n  margin-right: 4px;\n}\n.mr-2 {\n  margin-right: 8px;\n}\n.mr-3 {\n  margin-right: 12px;\n}\n.mr-4 {\n  margin-right: 16px;\n}\n.mr-5 {\n  margin-right: 20px;\n}\n.mr-6 {\n  margin-right: 24px;\n}\n.mr-7 {\n  margin-right: 28px;\n}\n.mt-8 {\n  margin-right: 32px;\n}\n.mr-9 {\n  margin-right: 36px;\n}\n\n/* margin-bottom */\n.mb-1 {\n  margin-bottom: 4px;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-3 {\n  margin-bottom: 12px;\n}\n.mb-4 {\n  margin-bottom: 16px;\n}\n.mb-5 {\n  margin-bottom: 20px;\n}\n.mb-6 {\n  margin-bottom: 24px;\n}\n.mb-7 {\n  margin-bottom: 28px;\n}\n.mb-8 {\n  margin-bottom: 32px;\n}\n.mb-9 {\n  margin-bottom: 36px;\n}\n\n/* margin-left */\n.ml-1 {\n  margin-left: 4px;\n}\n.ml-2 {\n  margin-left: 8px;\n}\n.ml-3 {\n  margin-left: 12px;\n}\n.ml-4 {\n  margin-left: 16px;\n}\n.ml-5 {\n  margin-left: 20px;\n}\n.ml-6 {\n  margin-left: 24px;\n}\n.ml-7 {\n  margin-left: 28px;\n}\n.ml-8 {\n  margin-left: 32px;\n}\n.ml-9 {\n  margin-left: 36px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/spacing.css"],"names":[],"mappings":"AAAA,eAAe;AACf;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB","sourcesContent":["/* margin-top */\n.mt-1 {\n  margin-top: 4px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.mt-3 {\n  margin-top: 12px;\n}\n.mt-4 {\n  margin-top: 16px;\n}\n.mt-5 {\n  margin-top: 20px;\n}\n.mt-6 {\n  margin-top: 24px;\n}\n.mt-7 {\n  margin-top: 28px;\n}\n.mt-8 {\n  margin-top: 32px;\n}\n.mt-9 {\n  margin-top: 36px;\n}\n\n/* margin-right */\n.mr-1 {\n  margin-right: 4px;\n}\n.mr-2 {\n  margin-right: 8px;\n}\n.mr-3 {\n  margin-right: 12px;\n}\n.mr-4 {\n  margin-right: 16px;\n}\n.mr-5 {\n  margin-right: 20px;\n}\n.mr-6 {\n  margin-right: 24px;\n}\n.mr-7 {\n  margin-right: 28px;\n}\n.mt-8 {\n  margin-right: 32px;\n}\n.mr-9 {\n  margin-right: 36px;\n}\n\n/* margin-bottom */\n.mb-1 {\n  margin-bottom: 4px;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-3 {\n  margin-bottom: 12px;\n}\n.mb-4 {\n  margin-bottom: 16px;\n}\n.mb-5 {\n  margin-bottom: 20px;\n}\n.mb-6 {\n  margin-bottom: 24px;\n}\n.mb-7 {\n  margin-bottom: 28px;\n}\n.mb-8 {\n  margin-bottom: 32px;\n}\n.mb-9 {\n  margin-bottom: 36px;\n}\n\n/* margin-left */\n.ml-1 {\n  margin-left: 4px;\n}\n.ml-2 {\n  margin-left: 8px;\n}\n.ml-3 {\n  margin-left: 12px;\n}\n.ml-4 {\n  margin-left: 16px;\n}\n.ml-5 {\n  margin-left: 20px;\n}\n.ml-6 {\n  margin-left: 24px;\n}\n.ml-7 {\n  margin-left: 28px;\n}\n.ml-8 {\n  margin-left: 32px;\n}\n.ml-9 {\n  margin-left: 36px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/switch.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/switch.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".switch {\n  display: inline-block;\n  height: 14px;\n  width: 34px;\n  position: relative;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  background-color: rgba(33, 33, 33, 0.08);\n  cursor: pointer;\n  width: 100%;\n  height: 14px;\n}\n\n.slider:before {\n  position: absolute;\n  background-color: #ededed;\n  content: '';\n  top: -3px;\n  height: 20px;\n  left: 0;\n  width: 20px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),\n    0px 1px 3px rgba(0, 0, 0, 0.2);\n}\n\ninput:checked + .slider {\n  background-color: #80deea;\n}\n\ninput:checked + .slider:before {\n  background-color: #00bcd4;\n  transform: translateX(14px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/switch.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,OAAO;EACP,WAAW;EACX;kCACgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".switch {\n  display: inline-block;\n  height: 14px;\n  width: 34px;\n  position: relative;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  background-color: rgba(33, 33, 33, 0.08);\n  cursor: pointer;\n  width: 100%;\n  height: 14px;\n}\n\n.slider:before {\n  position: absolute;\n  background-color: #ededed;\n  content: '';\n  top: -3px;\n  height: 20px;\n  left: 0;\n  width: 20px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),\n    0px 1px 3px rgba(0, 0, 0, 0.2);\n}\n\ninput:checked + .slider {\n  background-color: #80deea;\n}\n\ninput:checked + .slider:before {\n  background-color: #00bcd4;\n  transform: translateX(14px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/typhography.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/typhography.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: 'Roboto', sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/typhography.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["* {\n  font-family: 'Roboto', sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./images/lotto.png":
/*!**************************!*\
  !*** ./images/lotto.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/a6b285c2e510de78e60fe2d9b8e1f3dd.png");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map