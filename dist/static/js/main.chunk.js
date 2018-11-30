(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/index.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/rtl.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/rtl.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rtl{\n    direction: rtl;\n}\n\n\nbody{\n    font-family: 'Cairo', sans-serif;\n}\n\n\nh1, h2, h3, h4, h5, h6,\np,\n.nav-pills a\n{\n    text-align: right;\n}\n\n\n.flaticon-cardiogram, .block-23 ul{\n    float: right;\n}\n\n\n.flaticon-cardiogram{\n    margin-left: 10px;\n}\n.slider-sec .item-content .text-over-slider h1 {\n    font-family: 'Cairo', sans-serif;\n\n}\n.ftco-services .tab-content .tab-pane .icon{\n    text-align: right !important;\n}\n.align-right-rtl{\n    text-align: right !important;\n}\n.float-right-rtl{\n    float: right !important;\n}\n.block-23 ul li .icon, .ftco-navbar-light .navbar-nav > .nav-item.cta > a{\n    float: left !important;\n}\n\n.pt-20-rtl{\n    padding-top: 20px;\n    text-align: right;\n}\n.block-23 ul li .icon, .block-23 ul li .text{\n    float: right !important;\n}\n.show-more-style{\n    margin-right: 10px;\n}\n.g-recaptcha{\n    float: right;\n    margin-bottom: 5%;\n}\n.contact-email{\n    float: right;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Navigator */ "./src/components/Navigator.js");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/Home */ "./src/views/Home.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _views_About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/About */ "./src/views/About.js");
/* harmony import */ var _views_Doctor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/Doctor */ "./src/views/Doctor.js");
/* harmony import */ var _views_ContactUs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/ContactUs */ "./src/views/ContactUs.js");
/* harmony import */ var _views_Specialty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/Specialty */ "./src/views/Specialty.js");
/* harmony import */ var _views_SingleSpecialty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/SingleSpecialty */ "./src/views/SingleSpecialty.js");
/* harmony import */ var _views_SingleDoctor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/SingleDoctor */ "./src/views/SingleDoctor.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16__);

















/*
const fakeAuth = {
    isAuthenticated: false,
    login(cb){
        this.isAuthenticated = true
    },
    logout(cb){
        this.isAuthenticated = false
    },
}*/

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (localStorage.getItem("lang") && localStorage.getItem("lang") === 'ar') {
        __webpack_require__(/*! ./css/rtl.css */ "./src/css/rtl.css");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigator__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_views_Home__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: _this.props.translate("home_title")
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/about",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_views_About__WEBPACK_IMPORTED_MODULE_10__["default"], {
            title: _this.props.translate("about_title")
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/doctors",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_views_Doctor__WEBPACK_IMPORTED_MODULE_11__["default"], {
            title: _this.props.translate("doctors_title")
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/contact",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_views_ContactUs__WEBPACK_IMPORTED_MODULE_12__["default"], {
            title: _this.props.translate("contact_title")
          });
        }
      }), " />", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/specialties",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_views_Specialty__WEBPACK_IMPORTED_MODULE_13__["default"], {
            title: _this.props.translate("specialties_title")
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/specialty/:id",
        component: _views_SingleSpecialty__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/doctor/:id",
        component: _views_SingleDoctor__WEBPACK_IMPORTED_MODULE_15__["default"]
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16__["withTranslate"])(App));

/***/ }),

/***/ "./src/components/AboutRklinic.js":
/*!****************************************!*\
  !*** ./src/components/AboutRklinic.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__);











var AboutRklinic =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutRklinic, _Component);

  function AboutRklinic() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutRklinic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutRklinic)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isOpen: false
    };

    _this.openModal = function () {
      _this.setState({
        isOpen: true
      });
    };

    return _this;
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutRklinic, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid d-flex no-padding"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-2-blocks-wrapper row no-gutters"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_modal_video__WEBPACK_IMPORTED_MODULE_6___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "tUhcSudL0gM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img col-sm-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_8___default.a, {
        preview: "/images/about.png",
        src: "/images/about.png",
        render: function render(src, style) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            alt: "image-slider",
            className: "full-width full-height",
            src: src,
            style: style
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.openModal,
        className: "button video-popup",
        style: {
          cursor: 'pointer'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "ion-ios-play"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text col-lg-6 ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-inner align-self-start"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, " ", this.props.translate("about_header"), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, " ", this.props.translate("about_paragragh_1"), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.props.translate("about_paragragh_2")))))));
    }
  }]);

  return AboutRklinic;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__["withTranslate"])(AboutRklinic));

/***/ }),

/***/ "./src/components/ChangeLang.js":
/*!**************************************!*\
  !*** ./src/components/ChangeLang.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__);




var changeLang = function changeLang(dispatch, e) {
  //console.log(e.target);
  e.preventDefault();
  localStorage.setItem("lang", e.target.id);
  dispatch(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__["IntlActions"].setLocale(e.target.id));
  window.location.reload();
};

var ChangeLang = function ChangeLang(_ref) {
  var dispatch = _ref.dispatch;
  var lang = localStorage.getItem("lang");

  if (lang && lang === "en") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      onClick: function onClick(e) {
        return changeLang(dispatch, e);
      },
      target: "_blank",
      className: "nav-link",
      id: "ar"
    }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
  } else if (lang && lang === "ar") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      onClick: function onClick(e) {
        return changeLang(dispatch, e);
      },
      target: "_blank",
      className: "nav-link",
      id: "en"
    }, "English");
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      onClick: function onClick(e) {
        return changeLang(dispatch, e);
      },
      target: "_blank",
      className: "nav-link",
      id: "ar"
    }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(ChangeLang));

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../node_modules/izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var _node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config.js");














var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      name: null,
      email: null,
      mobile: null,
      message: null,
      errors: null
    };

    _this.handleInputChange = function (e) {
      _this.setState(Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value));
    };

    _this.handleFormSubmission = function (e) {
      // prevent default behavior
      e.preventDefault();
      console.log("handling form");

      var serialize = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");

      var form = document.querySelector('#contact-form');
      var serialized_data = serialize(form); // send data to server

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("https://rklinic-admin.com/api/system/contact-mail", serialized_data, {
        headers: Object(_config__WEBPACK_IMPORTED_MODULE_12__["getHeader"])()
      }).then(function (res) {
        if (res.data.Error.status === true) {
          // Reset errors
          _this.resetErrors(); // show success toast


          _this.showToast("Sent", "Mail send"); //document.getElementById("subscribe-form").reset();


          _this.setState({
            name: null,
            email: null,
            mobile: null,
            message: null
          });

          console.log("response", res); // show success message
        } else {
          var errors = res.data.Error.validation;

          _this.handleRecordErrors(errors);

          console.log("errors", errors);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.handleRecordErrors = function (errors) {
      _this.setState({
        errors: errors
      });
    };

    _this.resetErrors = function () {
      _this.setState({
        errors: null
      });
    };

    return _this;
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleErrors",
    value: function handleErrors(field) {
      if (this.state.errors) {
        return this.state.errors[field];
      }

      return false;
    }
  }, {
    key: "showToast",
    value: function showToast(title, msg) {
      izitoast__WEBPACK_IMPORTED_MODULE_8___default.a.show({
        title: title,
        message: msg,
        imageWidth: 50,
        layout: 1,
        balloon: false,
        close: true,
        rtl: false,
        position: 'bottomRight',
        // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: '',
        timeout: 5000,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        animateInside: true,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "ftco-section contact-section ftco-degree-bg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex mb-5 contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "h4 mb-4"
      }, this.props.translate("Contact_Information"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row mb-40"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, this.props.translate("address"), " : "), this.props.translate("address_details"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, this.props.translate("phone"), " : "), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "tel://1234567920"
      }, "(+02) 22713871 - (+02) 22713872"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "contact-email"
      }, this.props.translate("contact_email"), " "), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "mailto:info@yoursite.com"
      }, "info@rklinic.com")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "#",
        id: "contact-form",
        onSubmit: this.handleFormSubmission
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        id: "name",
        onChange: this.handleInputChange,
        className: "form-control align-right-rtl",
        name: "name",
        placeholder: this.props.translate("name")
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "error-msg"
      }, this.handleErrors("name"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        id: "email",
        onChange: this.handleInputChange,
        className: "form-control align-right-rtl",
        name: "email",
        placeholder: this.props.translate("email")
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "error-msg"
      }, this.handleErrors("email"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        id: "mobile",
        onChange: this.handleInputChange,
        className: "form-control align-right-rtl",
        name: "mobile",
        placeholder: this.props.translate("mobile")
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "error-msg"
      }, this.handleErrors("mobile"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        id: "message",
        onChange: this.handleInputChange,
        cols: "30",
        rows: "7",
        name: "message",
        className: "form-control align-right-rtl",
        placeholder: this.props.translate("message")
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "error-msg"
      }, this.handleErrors("message"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "g-recaptcha ",
        "data-sitekey": "6LecXX0UAAAAAKxjCi6SZjzHkLoG-QCl-QwiWIDa"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "capcha-error"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: {
          marginLeft: '12px'
        },
        className: "error-msg"
      }, this.handleErrors("g-recaptcha-response"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), "  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: this.props.translate("send_message"),
        className: "btn btn-primary py-3 px-5"
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "map"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__["withTranslate"])(Contact)); /// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2

/***/ }),

/***/ "./src/components/Doctors.js":
/*!***********************************!*\
  !*** ./src/components/Doctors.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





function setDoctorImage(url) {
  return {
    backgroundImage: 'url(' + url + ')'
  };
}

var Doctors = function Doctors(_ref) {
  var doctors = _ref.doctors,
      doctorsListIsLoading = _ref.doctorsListIsLoading,
      translate = _ref.translate;
  var doctorList = doctors.map(function (doctor) {
    return doctors.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6 col-lg-3 ftco-animate",
      key: doctor.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "block-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flipper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "front",
      style: setDoctorImage(doctor.image)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, doctor.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, doctor.speciality))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "back"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, doctor.bio && doctor.bio.length > 200 ? doctor.bio.slice(0, 200) + " ..." : doctor.bio)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "author d-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "image mr-3 align-self-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img",
      style: setDoctorImage(doctor.image)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name align-self-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/doctor/" + doctor.id
    }, doctor.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "position"
    }, doctor.speciality))))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our doctors are shown here ... ");
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ftco-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container rtl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center mb-5 pb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 heading-section ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mb-4 text-center loon"
  }, translate("doctors_header_1")))), doctorsListIsLoading === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, doctorList), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-9 ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, translate("doctors_header_2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", translate("doctors_paragraph"))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Bone"], {
    height: 288
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 2,
    bigBone: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Bone"], {
    height: 288
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 2,
    bigBone: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Bone"], {
    height: 288
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 2,
    bigBone: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Bone"], {
    height: 288
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 2,
    bigBone: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-9 ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 4,
    bigBone: true
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__["withTranslate"])(Doctors));

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/specialtyActions */ "./src/store/actions/specialtyActions.js");
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__);











var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAllSpecialtiesList();
    }
  }, {
    key: "render",
    value: function render() {
      var specialties = this.props.specialties;
      var specialtiesList = specialties ? specialties.map(function (specialty) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "nav-item mb-0 full-width align-right-rtl",
          key: specialty.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "py-2 d-block mb-0 pb-0",
          href: "/specialty/" + specialty.id
        }, specialty.speciality));
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "ftco-footer ftco-bg-dark ftco-section img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row mb-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ftco-footer-widget mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "ftco-heading-2"
      }, this.props.translate("specialties")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "block-23 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, this.props.specialties.length ? specialtiesList : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
        width: 50
      })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ftco-footer-widget mb-4 ml-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "ftco-heading-2"
      }, this.props.translate("important")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.youtube.com/watch?v=fUcTdObF8NU",
        className: "py-2 d-block"
      }, this.props.translate("how_to_register"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "https://rklinic-admin.com/login",
        className: "py-2 d-block"
      }, this.props.translate("already_have_account"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "https://rklinic-admin.com/register",
        className: "py-2 d-block"
      }, this.props.translate("get_started"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/privacy",
        className: "py-2 d-block"
      }, this.props.translate("privacy_policy")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ftco-footer-widget mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "ftco-heading-2"
      }, this.props.translate("site_links")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "py-2 d-block",
        href: "/"
      }, this.props.translate("home"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "py-2 d-block",
        href: "/about"
      }, this.props.translate("about"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "py-2 d-block",
        href: "/specialties"
      }, this.props.translate("specialties"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "py-2 d-block",
        href: "/doctors"
      }, this.props.translate("doctors"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item align-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "py-2 d-block",
        href: "/contact"
      }, this.props.translate("contact")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ftco-footer-widget mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "ftco-heading-2"
      }, this.props.translate("have_questions")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "block-23 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "float-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon icon-map-marker"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.google.com.eg/maps/place/30%C2%B003'08.5%22N+31%C2%B021'02.4%22E/@30.052355,31.3484803,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.052355!4d31.350669?hl=en",
        className: "text"
      }, this.props.translate("address_details"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "float-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon icon-phone"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text"
      }, "(+02) 22713871 - (+02) 22713872"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "float-right-rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon icon-envelope"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text"
      }, "info@rklinic.com")))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "ftco-footer-social list-unstyled float-md-left float-lft mt-5 float-right-rtl text-center full-width"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://twitter.com/rklinic1",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon-twitter"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.facebook.com/rklinic",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon-facebook"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.instagram.com/rklinic_official",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon-instagram"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-center"
      }, this.props.translate("copyright"), " \xA9", new Date().getFullYear())))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    specialties: state.specialty.all_specialties
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllSpecialtiesList: function getAllSpecialtiesList() {
      return dispatch(Object(_store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_7__["getAllSpecialtiesList"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__["withTranslate"])(Footer)));

/***/ }),

/***/ "./src/components/Head.js":
/*!********************************!*\
  !*** ./src/components/Head.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1__);



var Head = function Head(_ref) {
  var title = _ref.title,
      history = _ref.history;
  var hsitoryList = history ? history.map(function (h, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: index,
      className: "mr-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: h.to
    }, h.page));
  }) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head-section-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    preview: "/images/banner.png",
    src: "/images/banner.png",
    render: function render(src, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "image-slider",
        src: src,
        style: style
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute head-section-content full-width"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters slider-text align-items-center justify-content-center",
    "data-scrollax-parent": "true"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8 ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "breadcrumbs text-center "
  }, hsitoryList, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "show-more-style"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mb-4 text-center"
  }, title)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);
/*
<OwlCarousel
    className="owl-theme owl-carousel"
    margin={10}
    items={1}
    nav
    loop
    autoplay
>
    <div className="item">
        <img src="images/image_1.jpg" />
    </div>

    <div className="item">
        <img src="images/image_5.jpg" />
    </div>
    <div className="item">
        <img src="images/image_3.jpg" />
    </div>
    <div className="item">
        <img src="images/image_4.jpg" />
    </div>
</OwlCarousel>*/

/***/ }),

/***/ "./src/components/MapContainer.js":
/*!****************************************!*\
  !*** ./src/components/MapContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../node_modules/izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var _node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");










var MapContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MapContainer, _Component);

  function MapContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MapContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {
        name: " نجاتي سراج، المنطقة الثامنة، مدينة نصر، محافظة القاهرة"
      }
    };

    _this.onMarkerClick = function (props, marker, clickEvent) {
      return _this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    };

    _this.onMapClicked = function (props, map, clickEvent) {
      if (_this.state.showingInfoWindow) {
        _this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    return _this;
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MapContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_7__["Map"], {
        google: this.props.google,
        zoom: 14,
        initialCenter: {
          lat: 30.0522316,
          lng: 31.3506658
        },
        onClick: this.onMapClicked
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_7__["Marker"], {
        onClick: this.onMarkerClick,
        title: '21 Ibrahim El-Refaey, Nasr City, Egypt.',
        name: 'SOMA',
        position: {
          lat: 30.0522316,
          lng: 31.3506658
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_7__["InfoWindow"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.state.selectedPlace.name))));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var LoadingContainer = function LoadingContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_8__["Bone"], {
    height: 400,
    width: 100
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_7__["GoogleApiWrapper"])({
  apiKey: "AIzaSyD4ZixB1OlwnknFsHuo8oRrw345UknPVjQ",
  LoadingContainer: LoadingContainer
})(MapContainer)); /// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2

/***/ }),

/***/ "./src/components/MiniCategories.js":
/*!******************************************!*\
  !*** ./src/components/MiniCategories.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3__);





var MiniCategory = function MiniCategory(_ref) {
  var specialties = _ref.specialties,
      specialtyListIsLoading = _ref.specialtyListIsLoading,
      translate = _ref.translate;
  var specialtiesList = specialties.map(function (specialty, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: index === 0 ? "nav-link px-4 active" : "nav-link px-4",
      key: specialty.id,
      id: "v-pills-master-tab",
      "data-toggle": "pill",
      href: "#sp" + specialty.id,
      role: "tab",
      "aria-controls": "v-pills-master",
      "aria-selected": "true"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mr-3 flaticon-cardiogram"
    }), " ", specialty.speciality, " ");
  });
  var specialtiesDescList = specialties.map(function (specialty, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: index === 0 ? "tab-pane fade show active py-5" : "tab-pane fade py-5",
      key: specialty.id,
      id: "sp" + specialty.id,
      role: "tabpanel",
      "aria-labelledby": "v-pills-master-tab"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon mb-3 d-block flaticon-stethoscope"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-4 grey"
    }, specialty.speciality), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, specialty.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: '/specialty/' + specialty.id,
      className: "btn btn-primary"
    }, translate("show_Doctors"))));
  });
  return specialties.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ftco-services"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container rtl"
  }, specialtyListIsLoading === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row no-gutters"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 ftco-animate py-5 nav-link-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, specialtiesList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content pl-md-5",
    id: "v-pills-tabContent"
  }, specialtiesDescList))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row skeleton-loading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 15,
    bigBone: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Bone"], {
    height: 140,
    width: 30
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    amount: 5,
    bigBone: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_1__["Bone"], {
    width: 20
  }))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3__["withTranslate"])(MiniCategory));

/***/ }),

/***/ "./src/components/Navigator.js":
/*!*************************************!*\
  !*** ./src/components/Navigator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ChangeLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/ChangeLang */ "./src/components/ChangeLang.js");






/* eslint-plugin-disable angular, react */





var Navigator =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigator, _Component);

  function Navigator() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigator);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigator).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigator, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",
        id: "ftco-navbar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container rtl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "navbar-brand",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "images/logo.png",
        alt: "rklinic logo"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#ftco-nav",
        "aria-controls": "ftco-nav",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "oi oi-menu"
      }), " Menu"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "ftco-nav"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        exact: true,
        className: "nav-link",
        to: "/"
      }, this.props.translate("home"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "nav-link",
        to: "/about"
      }, this.props.translate("about"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "nav-link",
        to: "/specialties"
      }, this.props.translate("specialties"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "nav-link",
        to: "/doctors"
      }, this.props.translate("doctors"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "nav-link",
        to: "/contact"
      }, this.props.translate("contact"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ChangeLang__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item cta"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "https://rklinic-admin.com/login",
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, this.props.translate("login"))))))));
    }
  }]);

  return Navigator;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7__["withTranslate"])(Navigator));

/***/ }),

/***/ "./src/components/Services.js":
/*!************************************!*\
  !*** ./src/components/Services.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__);




var Services = function Services(_ref) {
  var translate = _ref.translate;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ftco-section-2 img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-img service-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    preview: "/images/bg_3.png",
    src: "/images/bg_3.png",
    render: function render(src, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "image-slider",
        src: src,
        style: style
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute section-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-md-flex justify-content-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services-wrap ftco-animate transition-ease"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon d-flex justify-content-center align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-back"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-forward"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, translate("honor")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", translate("honor_text"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services-wrap ftco-animate transition-ease"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon d-flex justify-content-center align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-back"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-forward"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, translate("gratitude")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", translate("gratitude_text"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services-wrap ftco-animate transition-ease"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon d-flex justify-content-center align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-back"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-forward"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, translate("appreciation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, translate("appreciation_text"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services-wrap ftco-animate transition-ease"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon d-flex justify-content-center align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-back"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ion-ios-arrow-forward"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, translate("love")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", translate("love_text")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__["withTranslate"])(Services));

/***/ }),

/***/ "./src/components/Slider.js":
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/umd/OwlCarousel.js");
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css");
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_5__);







var Slider = function Slider(_ref) {
  var translate = _ref.translate;
  window.$(".owl-item").css({
    'height': "50px !important"
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "slider-sec"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lazyLoad: true,
    className: "owl-theme owl-carousel",
    margin: 10,
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
    animateIn: true,
    navSpeed: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-over-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-over"
  }, translate("slider_title_1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pt-20-rtl"
  }, translate("slider_body_1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://rklinic-admin.com/register",
    className: "btn btn-primary"
  }, " ", translate("get_started"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    preview: "/images/slider.png",
    src: "/images/slider.png",
    render: function render(src, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "image-slider",
        src: src,
        style: style
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-overlay"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-over-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-over"
  }, translate("slider_title_2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pt-20-rtl"
  }, translate("slider_body_2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://rklinic-admin.com/register",
    className: "btn btn-primary"
  }, translate("get_started"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    preview: "/images/slider4.png",
    src: "/images/slider4.png",
    render: function render(src, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "image-slider",
        src: src,
        style: style
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-overlay"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-over-slider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-over"
  }, translate("slider_title_3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pt-20-rtl"
  }, translate("slider_body_3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://rklinic-admin.com/register",
    className: "btn btn-primary"
  }, " ", translate("get_started"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    preview: "/images/slider3.png",
    src: "/images/slider3.png",
    render: function render(src, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "image-slider",
        src: src,
        style: style
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-overlay"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_5__["withTranslate"])(Slider));

/***/ }),

/***/ "./src/components/Statistics.js":
/*!**************************************!*\
  !*** ./src/components/Statistics.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__);




var Statistics = function Statistics(_ref) {
  var translate = _ref.translate;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ftco-section img",
    id: "section-counter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-img statistics-counter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    preview: "/images/bg_4.png",
    src: "/images/bg_4.png",
    render: function render(src, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "image-slider",
        src: src,
        style: style
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute section-content section-counter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center mb-5 pb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 text-center heading-section heading-section-white ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mb-4 text-center"
  }, " ", translate("facts_header")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "subheading"
  }, translate("facts_title")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-18 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "number",
    "data-number": "1"
  }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate("facts_text_1"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-18 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "number",
    "data-number": "3"
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate("facts_text_2"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-18 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "number",
    "data-number": "1"
  }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate("facts_text_3"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-18 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "number",
    "data-number": "1"
  }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate("facts_text_4"))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_2__["withTranslate"])(Statistics));

/***/ }),

/***/ "./src/components/Subscribe.js":
/*!*************************************!*\
  !*** ./src/components/Subscribe.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../node_modules/izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var _node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_10__);












var Subscribe =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Subscribe, _Component);

  function Subscribe() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Subscribe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Subscribe)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      email: null,
      errors: null
    };

    _this.handleEmailChange = function (e) {
      var email = e.target.value;

      _this.setState({
        email: email
      });
    };

    _this.handleFormSubmission = function (e) {
      // prevent default behavior
      e.preventDefault();
      console.log("handling form"); // send data to server

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(_config__WEBPACK_IMPORTED_MODULE_9__["sendSubscribeEmail"], _this.state, {
        headers: Object(_config__WEBPACK_IMPORTED_MODULE_9__["getHeader"])()
      }).then(function (res) {
        if (res.data.Error.status === true) {
          // Reset errors
          _this.resetErrors(); // show success toast


          _this.showToast("Subscribed", "You have subscribed");

          document.getElementById("subscribe-form").reset();

          _this.setState({
            email: null
          }); // show success message

        } else {
          var errors = res.data.Error.validation;

          _this.handleRecordErrors(errors);

          console.log(errors);
        }
      }).catch(function (error) {});
    };

    _this.handleRecordErrors = function (errors) {
      _this.setState({
        errors: errors
      });
    };

    _this.resetErrors = function () {
      _this.setState({
        errors: null
      });
    };

    return _this;
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Subscribe, [{
    key: "handleErrors",
    value: function handleErrors(field) {
      if (this.state.errors) {
        return this.state.errors[field];
      }

      return false;
    }
  }, {
    key: "showToast",
    value: function showToast(title, msg) {
      izitoast__WEBPACK_IMPORTED_MODULE_7___default.a.show({
        title: title,
        message: msg,
        imageWidth: 50,
        layout: 1,
        balloon: false,
        close: true,
        rtl: false,
        position: 'bottomRight',
        // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: '',
        timeout: 5000,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        animateInside: true,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section-parallax"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "parallax-img d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7 subsribe-section  heading-section heading-section-white ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-center"
      }, this.props.translate("subscribe"), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-center"
      }, this.props.translate("subscribe_Text")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row d-flex justify-content-center mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        action: "#",
        onSubmit: this.handleFormSubmission,
        className: "subscribe-form",
        id: "subscribe-form"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        id: "email",
        type: "text",
        className: "form-control align-right-rtl",
        placeholder: this.props.translate("enter_your_email_address"),
        onChange: this.handleEmailChange
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "submit",
        value: this.props.translate("subscribe"),
        className: "submit px-3"
      })), this.handleErrors("email") ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "error-msg styled-error-msg"
      }, this.handleErrors("email")) : ""))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "store-download text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://itunes.apple.com/us/app/rklinic-manager/id1382204506?mt=8",
        target: "_blank",
        className: "btn btn-store"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "fa fa-apple fa-3x pull-left"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.rkanjel.rklinicmanager&hl=en",
        target: "_blank",
        className: "btn btn-store"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "fa fa-android fa-3x pull-left"
      })))))))));
    }
  }]);

  return Subscribe;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_10__["withTranslate"])(Subscribe)); /// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2

/***/ }),

/***/ "./src/components/Testimonials.js":
/*!****************************************!*\
  !*** ./src/components/Testimonials.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/umd/OwlCarousel.js");
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7__);









var Testimonials =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Testimonials, _Component);

  function Testimonials() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Testimonials);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Testimonials)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      items: 3
    };

    _this.changeNumberOfItems = function () {
      _this.setState({
        height: window.innerHeight,
        width: window.innerWidth
      });

      if (_this.state.width < 792) {
        _this.setState({
          items: 1
        });
      } else {
        _this.setState({
          items: 3
        });
      }
    };

    return _this;
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Testimonials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.innerWidth < 792) {
        this.setState({
          items: 1
        });
      }

      window.addEventListener("resize", this.changeNumberOfItems);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section testimony-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row justify-content-center mb-5 pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7 heading-section ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "mb-4 text-center loon"
      }, " ", this.props.translate("testimonials")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 ftco-animate"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "owl-theme owl-carousel",
        margin: 10,
        items: this.state.items,
        nav: true,
        loop: true,
        autoplay: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "testimony-wrap text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "user-img mb-5",
        style: {
          backgroundImage: 'url(images/dr-avatar.png)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "quote d-flex align-items-center justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icon-quote-left"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "mb-5 testimonial-p"
      }, " ", this.props.translate("testimonial_text_1")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "name text-center"
      }, this.props.translate("testimonial_text_1_dr")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position"
      }, this.props.translate("testimonial_text_1_clinic"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "testimony-wrap text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "user-img mb-5",
        style: {
          backgroundImage: 'url(images/dr-avatar.png)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "quote d-flex align-items-center justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icon-quote-left"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "mb-5 testimonial-p"
      }, this.props.translate("testimonial_text_2")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "name text-center"
      }, this.props.translate("testimonial_text_2_dr")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position"
      }, this.props.translate("testimonial_text_2_clinic"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "testimony-wrap text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "user-img mb-5",
        style: {
          backgroundImage: 'url(images/dr-avatar.png)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "quote d-flex align-items-center justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icon-quote-left"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "mb-5 testimonial-p"
      }, this.props.translate("testimonial_text_3")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "name text-center"
      }, this.props.translate("testimonial_text_3_dr")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position"
      }, this.props.translate("testimonial_text_3_clinic"))))))))));
    }
  }]);

  return Testimonials;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_7__["withTranslate"])(Testimonials));

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: getDoctorsLink, getSpecialtiesLink, sendSubscribeEmail, getSpecialtyDetailsLink, getDoctorDetailsLink, getHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDoctorsLink", function() { return getDoctorsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtiesLink", function() { return getSpecialtiesLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSubscribeEmail", function() { return sendSubscribeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtyDetailsLink", function() { return getSpecialtyDetailsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDoctorDetailsLink", function() { return getDoctorDetailsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
var getDoctorsLink = "https://rklinic-admin.com/api/site/doctors/list";
var getSpecialtiesLink = "https://rklinic-admin.com/api/specialities/list";
var sendSubscribeEmail = "https://rklinic-admin.com/api/system/subscription";
var getSpecialtyDetailsLink = "https://rklinic-admin.com/api/speciality/doctors";
var getDoctorDetailsLink = "https://rklinic-admin.com/api/doctor/profile";
var getHeader = function getHeader() {
  var lang = window.localStorage.getItem('lang');
  var header = {
    lang: lang,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return header;
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/css/rtl.css":
/*!*************************!*\
  !*** ./src/css/rtl.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./rtl.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/rtl.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./rtl.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/rtl.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./rtl.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/rtl.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/hocs/globalMiddleware.js":
/*!**************************************!*\
  !*** ./src/hocs/globalMiddleware.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var globalMiddleware = function globalMiddleware(WrappedComponent) {
  return function (props) {
    document.title = props.title;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (globalMiddleware);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reduceers_rootReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reduceers/rootReducer */ "./src/store/reduceers/rootReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translations */ "./src/translations.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__);








 // allow asynchronous actions




var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_store_reduceers_rootReducer__WEBPACK_IMPORTED_MODULE_7__["default"], {
  Intl: {
    locale: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  }
}, Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_9___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__["IntlProvider"], {
  translations: _translations__WEBPACK_IMPORTED_MODULE_10__["translations"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ("production" === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL("", window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat("", "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit http://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/actions/doctorActions.js":
/*!********************************************!*\
  !*** ./src/store/actions/doctorActions.js ***!
  \********************************************/
/*! exports provided: getDoctorsList, getDoctorDetails, getHamada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDoctorsList", function() { return getDoctorsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDoctorDetails", function() { return getDoctorDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHamada", function() { return getHamada; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config */ "./src/config.js");


var getDoctorsList = function getDoctorsList() {
  return function (dispatch, getState) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["getDoctorsLink"], {}, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(function (res) {
      if (res.data.status !== true) {
        var doctors = res.data.Response;
        dispatch({
          type: "GET_DOCTORS_LIST",
          payload: doctors
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};
var getDoctorDetails = function getDoctorDetails(id) {
  return function (dispatch, getState) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["getDoctorDetailsLink"], {
      doctor_id: id
    }, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(function (res) {
      if (res.data.status !== true) {
        var doctor = res.data.Response;
        dispatch({
          type: "GET_DOCTOR_DETAILS",
          payload: doctor
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};
var getHamada = function getHamada(id) {
  return function (dispatch, getState) {};
};

/***/ }),

/***/ "./src/store/actions/specialtyActions.js":
/*!***********************************************!*\
  !*** ./src/store/actions/specialtyActions.js ***!
  \***********************************************/
/*! exports provided: getAllSpecialtiesList, getSpecialtiesList, getSpecialtyDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesList", function() { return getAllSpecialtiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtiesList", function() { return getSpecialtiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtyDetails", function() { return getSpecialtyDetails; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config */ "./src/config.js");


var getAllSpecialtiesList = function getAllSpecialtiesList() {
  return function (dispatch, getState) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["getSpecialtiesLink"], {
      featured: 0
    }, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(function (res) {
      if (res.data.status !== true) {
        var specialties = res.data.Response;
        dispatch({
          type: "GET_All_SPECIALITIES_LIST",
          payload: specialties
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};
var getSpecialtiesList = function getSpecialtiesList() {
  return function (dispatch, getState) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["getSpecialtiesLink"], {
      featured: 0
    }, {
      headers: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
    }).then(function (res) {
      if (res.data.status !== true) {
        var specialties = res.data.Response;
        dispatch({
          type: "GET_SPECIALITIES_LIST",
          payload: specialties
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};
var getSpecialtyDetails = function getSpecialtyDetails(id) {
  return function (dispatch, getState) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["getSpecialtyDetailsLink"], {
      speciality_id: id
    }).then(function (res) {
      if (res.data.Error.status === true) {
        var currentSpecialty = res.data.Response;
        dispatch({
          type: "GET_SPECIALTY_DETAILS",
          payload: currentSpecialty
        });
        console.log(currentSpecialty);
      } else {// error message
      }
    }).catch(function (err) {
      console.log("err", err);
    });
  };
};

/***/ }),

/***/ "./src/store/reduceers/doctorReducer.js":
/*!**********************************************!*\
  !*** ./src/store/reduceers/doctorReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var initState = {
  doctors: [],
  doctorsListIsLoading: true,
  current: null
};

var doctorReducer = function doctorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_DOCTORS_LIST":
      state = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        doctors: action.payload,
        doctorsListIsLoading: false
      });
      break;

    case "GET_DOCTOR_DETAILS":
      state = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        current: action.payload
      });
      break;

    default: // do nothing

  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (doctorReducer);

/***/ }),

/***/ "./src/store/reduceers/rootReducer.js":
/*!********************************************!*\
  !*** ./src/store/reduceers/rootReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _doctorReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctorReducer */ "./src/store/reduceers/doctorReducer.js");
/* harmony import */ var _specialityReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specialityReducer */ "./src/store/reduceers/specialityReducer.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3__);




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  doctor: _doctorReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  specialty: _specialityReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  Intl: react_redux_multilingual__WEBPACK_IMPORTED_MODULE_3__["IntlReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/store/reduceers/specialityReducer.js":
/*!**************************************************!*\
  !*** ./src/store/reduceers/specialityReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var initState = {
  all_specialties: [],
  specialties: [],
  specialtyListIsLoading: true,
  specialtyDetailsIsLoading: true,
  current: null
};

var specialtyReducer = function specialtyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_All_SPECIALITIES_LIST":
      state = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        all_specialties: action.payload
      });
      break;

    case "GET_SPECIALITIES_LIST":
      state = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        specialties: action.payload,
        specialtyListIsLoading: false
      });
      break;

    case "GET_SPECIALTY_DETAILS":
      state = Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        current: action.payload,
        specialtyDetailsIsLoading: false
      });
      break;

    default:
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (specialtyReducer);

/***/ }),

/***/ "./src/translations.js":
/*!*****************************!*\
  !*** ./src/translations.js ***!
  \*****************************/
/*! exports provided: translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translations", function() { return translations; });
var translations = {
  en: {
    locale: 'en',
    messages: {
      home: 'Homepage',
      about: 'About',
      specialties: 'Specialties',
      doctors: 'Doctors',
      contact: 'Contact',
      login: "Login",

      /*****************Home*********************/
      //slider
      slider_title_1: "Welcome To rKlinic",
      slider_body_1: "The ultimate medical gate.",
      slider_title_2: "Our Mission",
      slider_body_2: "Become the ultimate Doctor-Patient meeting point.",
      slider_title_3: "Our Vision",
      slider_body_3: "Create a better, smoother and faster Doctor-patient communication",
      get_started: "Get Started",

      /*********** */
      // MiniCategories Will be loaded Dynamically from the Server.
      show_Doctors: " Show Doctors ",

      /*** *****/
      // FunFacts ( Statisics )
      facts_header: "Some fun facts",
      facts_title: "Fun Facts About the Health You Don’t Know",
      facts_text_1: "Physical checkup",
      facts_text_2: "Cancer Checkup",
      facts_text_3: "Blood Checkup",
      facts_text_4: "Teeth Checkup",

      /************ */
      // Testimonials
      testimonials: "Testimonials",
      testimonial_text_1: "I like the simplicity of the system. Everything about RKlinic is very easy to navigate. Another advantage is that I can view the software through my app--which is super helpful when I am on the go.",
      testimonial_text_1_dr: "Dr Chadi Badran",
      testimonial_text_1_clinic: "Badran Clinic",
      testimonial_text_2: "when we signed with RKlinic they were the only ones out there in our price range for a small clinic. But we had a great value against that price. Great functionality.",
      testimonial_text_2_dr: "Dr.Ahmed Samir",
      testimonial_text_2_clinic: "Elite Clinic",
      testimonial_text_3: "This was my first product for my clinic. I am very happy so far. There have been some bugs that popped up unexpectedly but the customer service is great. My rep was available very quickly through phone.",
      testimonial_text_3_dr: "Dr Ahmed Bagoury",
      testimonial_text_3_clinic: "Bagoury Clinic",

      /**************** */
      //Services
      honor: "Honor",
      honor_text: "rKlinic was made to honor every doctor that keeps on trying, winning and still going.",
      gratitude: "Gratitude",
      gratitude_text: "An appreciation for those who work day and night just to help people get better!",
      appreciation: "Appreciation",
      appreciation_text: "A Gratitude for fighting even the losing fights with and for people!",
      love: "Love",
      love_text: "Sending love to all those who worked hard not for the title but for the purpose!",

      /********************0 */
      // Doctors Section First it will be served from the Server.
      // Second one will be here. It's only two lines.
      doctors_header_1: "Our Experienced Doctors",
      doctors_header_2: "We are well experienced doctors",
      doctors_paragraph: "Our application was made for doctors who care, work and strive to help people and people alone! That alone will help doctors to create a more  comfortable environment for patients to feel closer and more related to the entire medical process.",

      /***** */
      // Subscribe
      subscribe: "Subscribe",
      subscribe_Text: "To Get our Latest News and Offers. Please subsribe with your email.",
      enter_your_email_address: "Enter your email address",
      // specialties
      specialities: "Specialties",

      /*****************Contact Us*********************/
      Contact_Information: "Contact Information",
      address: "Address",
      address_details: "21 Ibrahim El-Refaey, Nasr City, Egypt",
      name: "Name",
      email: "Email",
      mobile: "Mobile",
      message: "Message",
      send_message: "send message",
      contact_email: "email :",

      /*****************Footer*********************/
      important: "Important",
      how_to_register: "How to register?",
      already_have_account: "Already have an account ?",
      privacy_policy: "Privacy Policy",
      site_links: "Site Links",
      have_questions: "Have a Questions?",
      copyright: "Copyright all rights reserved to rKlinic",

      /**************************************************************** */

      /*************************************************************** */

      /********** About Rklinic *************** */
      about_header: "Welcome to the ultimate medical meeting point!",
      about_paragragh_1: "A Doctor or a patient, what could be better than a custom made Application just for you? RKlinic has just created the right-in-your-pocket application that will help both doctors and their patients to communicate easier and better. Get to know your Application and its features.",
      about_paragragh_2: "Our application was made for doctors who care, work and strive to help people and people alone! That alone will help doctors to create a more comfortable environment for patients to feel closer and more related to the entire medical process.",

      /************************* General Translations */
      phone: " Phone ",
      home_title: "Home",
      about_title: "About",
      contact_title: "Contact",
      doctors_title: "Doctors",
      specialties_title: "Specialties"
    }
  },

  /*************************** */
  ar: {
    locale: 'ar',
    messages: {
      home: 'الرئيسية',
      about: 'عن التطبيق',
      specialties: 'التخصصات',
      doctors: 'الآطباء',
      contact: 'إتصل بنا',
      login: "الدخول",

      /*****************Home*********************/
      //slider
      slider_title_1: "rKlinic أهلا بك في",
      slider_body_1: "البوابة الطبية الأولي في مصر",
      slider_title_2: "مهمتنا",
      slider_body_2: "كن أنت الطبيب الاول في مصر",
      slider_title_3: "رؤيتنا",
      slider_body_3: "أقم علاقة جيدة مع مريضك",

      /*************** */
      // MiniCategories Will be loaded Dynamically from the Server.
      show_Doctors: " ألق نظرة على اﻷطباء ",

      /*** *****/
      // FunFacts ( Statisics )
      facts_header: "بعض الحقائق الطبية",
      facts_title: "معلومات صحية لا تعلم عنها",
      facts_text_1: "فحص جسدي شامل",
      facts_text_2: "فحص السرطان",
      facts_text_3: "فحص الدم",
      facts_text_4: "فحص الأسنان",

      /******************** */
      // Testimonials
      testimonials: "آراء العمــلاء",
      testimonial_text_1: "أنا معجب جدا بالنظام الخاص بهم . كل شيء متعلق ب أر كلينيك  سهل للتنقل من خلاله . ميزة أُخرى أني أستطيع تصفح التطبيق الخاص بي في أي وقت.",
      testimonial_text_1_dr: "د. شادي بدران",
      testimonial_text_1_clinic: "عيادة بدران",
      testimonial_text_2: "عندما تم التعاقد بيننا لم يكن هناك أي تطبيق آخر في نفس الميزانية الخاصة بعيادتنا . و لكننا حصلنا على قيمة عظيمة من خلال هذا التعاون.",
      testimonial_text_2_dr: "د. أحمد سمير",
      testimonial_text_2_clinic: "عيادة النخبة",
      testimonial_text_3: "هذا كان التطبيق الأول لعيادتي و أنا سعيد جدا به. لقد كان هناك بعض الاخطاء و الصعوبات ف التطبيق. لكن نظام خدمة العملاء عندهم قوي جدا. لقد تم حل المشكلة في نفس الوقت من خلال الهاتف",
      testimonial_text_3_dr: "د. أحمد الباجوري",
      testimonial_text_3_clinic: "عيادة الباجوري",

      /**************** */
      //Services
      honor: "شـرف",
      honor_text: " الفكرة وراء rKlinic هي تقديم كل الالتقدير ﻷولئك الذين ما زالوا مستمرين رغم كل الصعاب.",
      gratitude: "امتنـان",
      gratitude_text: "تقدير لأولئك الذين يعملون ليلا ونهارا فقط لمساعدة الناس على الحصول على أفضل! ",
      appreciation: "تقديـر",
      appreciation_text: "امتنان للمقاتلين كل يوم حتى الحالات الصعبة و الخاسرة فقط من أجل الناس",
      love: "حـــب",
      love_text: "إرسال الحب لجميع أولئك الذين عملوا بجد ليس من أجل اللقب ولكن لهذا الغرض! ",

      /******************** */
      // Doctors Section First it will be served from the Server.
      // Second one will be here. It's only two lines.
      doctors_header_1: "أطبائنا المتخصـصيــــن",
      doctors_header_2: "نحن نخبة من اﻷطبــاء على مستوى عالي جداً",
      doctors_paragraph: "هذا التطبيق للأطباء الذين يهتمون ويعملون ويسعون لمساعدة الناس والناس بمفردهم! هذا وحده سيساعد الأطباء على خلق بيئة أكثر راحة للمرضى لكي يشعروا بأنهم أقرب وأكثر وأكثر ارتباطًا بالعملية الطبية بأكملها.  ",

      /***** */
      // Subscribe
      subscribe: "للمتابعـــة",
      subscribe_Text: " لمتابعتنا و الحصول على آخر العروض و الاخبار نرجو ادخال بريدك الالكتروني",
      enter_your_email_address: "ادخل بريدك الالكترونى",
      get_started: "آبدا",
      // specialties
      specialities: "التخصصات",

      /*****************Contact Us*********************/
      Contact_Information: "بيانات التواصل",
      address: "العنوان",
      address_details: "21 ابراهيم الرفاعي مدينة نصر",
      name: "اسمك",
      email: "البريد الالكترونى",
      mobile: "رقم هاتفك",
      message: "رسالتك",
      send_message: "ارسل لنا",
      contact_email: ": البريد الالكترونى",

      /*****************Footer*********************/
      important: "هام",
      how_to_register: "كيفية التسجيل؟",
      already_have_account: "لديك حساب؟",
      privacy_policy: "سياسة الخصوصية",
      site_links: "روابط الموقع",
      have_questions: "لديك سؤال؟",
      copyright: " rKlinicحقوق النشر محفوظة ل ",

      /**************************************************************** */

      /*************************************************************** */

      /********** About *************** */
      about_header: "مرحبا بكم في أفضل اللقاءات الطبية",
      about_paragragh_1: " طبيب أم مريض ؟! ما الذي يمكن أن يكون أفضل من تطبيق صنع خصيصا للاثنين معاً.آر كلينيك صنع خصيصاً ليسهل عملية التواصل بين الطبيب و المريض و يجعلها أكثر فعالية. لنستعرض التطبيقمعاً.",
      about_paragragh_2: " هذا التطبيق للأطباء الذين يهتمون ويعملون ويسعون لمساعدة الناس والناس بمفردهم! هذا وحده سيساعد الأطباء على خلق بيئة أكثر راحة للمرضى لكي يشعروا بأنهم أقرب وأكثر وأكثر ارتباطًا بالعملية الطبية بأكملها",

      /************************* General Translations */
      phone: " رقم الهاتف",
      home_title: "الرئيسية",
      about_title: "عن التطبيق",
      contact_title: "اتصل بنا",
      doctors_title: "الآطباء",
      specialties_title: "التخصصـات"
    }
  }
};

/***/ }),

/***/ "./src/views/About.js":
/*!****************************!*\
  !*** ./src/views/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var _components_AboutRklinic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AboutRklinic */ "./src/components/AboutRklinic.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../hocs/globalMiddleware */ "./src/hocs/globalMiddleware.js");












var About =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  function About() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      var history = [{
        page: this.props.translate("home"),
        to: "/"
      }];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "About"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: this.props.translate("about"),
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AboutRklinic__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__["withTranslate"])(About)));

/***/ }),

/***/ "./src/views/ContactUs.js":
/*!********************************!*\
  !*** ./src/views/ContactUs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact */ "./src/components/Contact.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../hocs/globalMiddleware */ "./src/hocs/globalMiddleware.js");












var ContactUs =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactUs, _Component);

  function ContactUs() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactUs);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactUs).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactUs, [{
    key: "render",
    value: function render() {
      var history = [{
        page: this.props.translate("home"),
        to: "/"
      }];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: this.props.translate("contact"),
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return ContactUs;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_9__["withTranslate"])(ContactUs)));

/***/ }),

/***/ "./src/views/Doctor.js":
/*!*****************************!*\
  !*** ./src/views/Doctor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_doctorActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/doctorActions */ "./src/store/actions/doctorActions.js");
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../hocs/globalMiddleware */ "./src/hocs/globalMiddleware.js");















var Doctor =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Doctor, _Component);

  function Doctor() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Doctor);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Doctor).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Doctor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getDoctorsList();
    }
  }, {
    key: "render",
    value: function render() {
      var history = [{
        page: this.props.translate("home"),
        to: "/"
      }];
      var doctorsList = this.props.doctors.length ? this.props.doctors.map(function (doctor, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-md-6 col-lg-3 ftco-animate",
          key: doctor.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "block-2"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "flipper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "front",
          style: {
            backgroundImage: 'url(' + doctor.image + ')'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, doctor.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, doctor.speciality))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "back"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u201CEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem\u201D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "author d-flex"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "image mr-3 align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "img",
          style: {
            backgroundImage: doctor.image
          }
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          to: "/doctor/" + doctor.id
        }, doctor.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "position"
        }, doctor.speciality)))))));
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Our doctors will be here ..");
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "About"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: this.props.translate("doctors"),
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, this.props.doctorsListIsLoading === false ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, doctorsList) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
        height: 288
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
        amount: 2,
        bigBone: true
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Doctor;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    doctors: state.doctor.doctors,
    doctorsListIsLoading: state.doctor.doctorsListIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDoctorsList: function getDoctorsList() {
      return dispatch(Object(_store_actions_doctorActions__WEBPACK_IMPORTED_MODULE_9__["getDoctorsList"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__["withTranslate"])(Doctor))));

/***/ }),

/***/ "./src/views/Home.js":
/*!***************************!*\
  !*** ./src/views/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MiniCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MiniCategories */ "./src/components/MiniCategories.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Services */ "./src/components/Services.js");
/* harmony import */ var _components_Doctors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Doctors */ "./src/components/Doctors.js");
/* harmony import */ var _components_Statistics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Statistics */ "./src/components/Statistics.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Testimonials */ "./src/components/Testimonials.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var _store_actions_doctorActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions/doctorActions */ "./src/store/actions/doctorActions.js");
/* harmony import */ var _store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/actions/specialtyActions */ "./src/store/actions/specialtyActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Slider */ "./src/components/Slider.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hocs/globalMiddleware */ "./src/hocs/globalMiddleware.js");



















var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate() {//document.title = this.props.translate(this.props.titleKey)
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // fetch doctors from database
      this.props.getDoctorsList();
      this.props.getSpecialtiesList();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "home"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MiniCategories__WEBPACK_IMPORTED_MODULE_6__["default"], {
        specialtyListIsLoading: this.props.specialtyListIsLoading,
        specialties: this.props.specialties
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Services__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Doctors__WEBPACK_IMPORTED_MODULE_8__["default"], {
        doctors: this.props.doctors,
        doctorsListIsLoading: this.props.doctorsListIsLoading
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Statistics__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_11__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    doctors: state.doctor.doctors,
    doctorsListIsLoading: state.doctor.doctorsListIsLoading,
    specialties: state.specialty.specialties,
    specialtyListIsLoading: state.specialty.specialtyListIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDoctorsList: function getDoctorsList() {
      return dispatch(Object(_store_actions_doctorActions__WEBPACK_IMPORTED_MODULE_12__["getDoctorsList"])());
    },
    getSpecialtiesList: function getSpecialtiesList() {
      return dispatch(Object(_store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_13__["getSpecialtiesList"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_16__["withTranslate"])(Home))));

/***/ }),

/***/ "./src/views/SingleDoctor.js":
/*!***********************************!*\
  !*** ./src/views/SingleDoctor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_doctorActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../store/actions/doctorActions */ "./src/store/actions/doctorActions.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head.js");
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__);













var SingleDoctor =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleDoctor, _Component);

  function SingleDoctor() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleDoctor);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleDoctor).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleDoctor, [{
    key: "componentDidMount",
    //state:
    value: function componentDidMount() {
      // set page title
      var id = this.props.match.params.id;
      this.props.getDoctorDetails(id);
    }
  }, {
    key: "render",
    value: function render() {
      var history = [{
        page: this.props.translate("home"),
        to: "/"
      }, {
        page: this.props.translate("doctors"),
        to: "/doctors"
      }];
      var doctor = this.props.doctor;
      var servicesList = doctor && doctor.services.length ? doctor.services.map(function (service, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          key: index,
          className: "tag-cloud-link"
        }, service);
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Home"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: doctor ? doctor.name : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_9__["Bone"], null),
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8"
      }, doctor ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "about-author d-flex p-5 bg-light"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bio align-self-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: doctor.image,
        alt: "Image placeholder",
        className: "img-fluid mb-4"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "desc align-self-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, doctor.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, doctor.bio)))) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_9__["Bone"], {
        height: 150
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_9__["Skeleton"], {
        amount: 5,
        bigBone: true
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ftco-animate fadeInUp ftco-animated"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "categories"
      }, doctor ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Specialty ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, doctor.speciality))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Min Fees ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, doctor.min_fees + " LE"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Followers ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, doctor.followers)))) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_9__["Skeleton"], {
        amount: 3,
        bigBone: true
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tag-widget post-tag-container mb-5 mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tagcloud"
      }, doctor ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, servicesList) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_9__["Bone"], {
        width: 100
      })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }]);

  return SingleDoctor;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    doctor: state.doctor.current
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDoctorDetails: function getDoctorDetails(id) {
      return dispatch(Object(_store_actions_doctorActions__WEBPACK_IMPORTED_MODULE_7__["getDoctorDetails"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_11__["withTranslate"])(SingleDoctor)));

/***/ }),

/***/ "./src/views/SingleSpecialty.js":
/*!**************************************!*\
  !*** ./src/views/SingleSpecialty.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/specialtyActions */ "./src/store/actions/specialtyActions.js");
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__);














var SingleSpecialty =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleSpecialty, _Component);

  function SingleSpecialty() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleSpecialty);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleSpecialty).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleSpecialty, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSpecialtyDetails(this.props.match.params.id);
      console.log("props after dispatch", this.props.specialty);
    }
  }, {
    key: "render",
    value: function render() {
      // bread crumb history
      var history = [{
        page: this.props.translate("home"),
        to: "/"
      }, {
        page: this.props.translate("specialties"),
        to: "/specialties"
      }];
      var doctorsList = this.props.specialty && this.props.specialty.doctors.length ? this.props.specialty.doctors.map(function (doc) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-md-6 col-lg-3 ftco-animate"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "block-2"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "flipper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "front",
          style: setDoctorImage(doc.image)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, doc.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, doc.speciality))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "back"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, doc.bio && doc.bio.length > 200 ? doc.bio.slice(0, 200) + " ..." : doc.bio)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "author d-flex"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "image mr-3 align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "img",
          style: setDoctorImage(doc.image)
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          to: "/doctor/" + doc.id
        }, doc.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "position"
        }, doc.speciality)))))));
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center",
        style: {
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/images/no_accounts.png",
        alt: "no doctors found"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Our Doctors will be here !!"));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Home"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: this.props.specialty ? this.props.specialty.speciality : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], null),
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, this.props.specialty ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          marginBottom: "50px"
        }
      }, this.props.specialty.desc), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, doctorsList)) : setPageSkeleton(8))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return SingleSpecialty;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

function setDoctorImage(url) {
  return {
    backgroundImage: 'url(' + url + ')'
  };
}

var setPageSkeleton = function setPageSkeleton() {
  var doctorsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var doctors = [];

  for (var i = 0; i < doctorsCount; i++) {
    doctors.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-3"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Bone"], {
      height: 288
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
      amount: 2,
      bigBone: true
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-md-12 ftco-animate"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    amount: 4,
    bigBone: true
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "row"
  }, doctors));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    specialty: state.specialty.current
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSpecialtyDetails: function getSpecialtyDetails(id) {
      return dispatch(Object(_store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_9__["getSpecialtyDetails"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__["withTranslate"])(SingleSpecialty)));

/***/ }),

/***/ "./src/views/Specialty.js":
/*!********************************!*\
  !*** ./src/views/Specialty.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head.js");
/* harmony import */ var react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton-placeholders */ "./node_modules/react-loading-skeleton-placeholders/lib/index.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Subscribe */ "./src/components/Subscribe.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../store/actions/specialtyActions */ "./src/store/actions/specialtyActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux-multilingual */ "./node_modules/react-redux-multilingual/lib/index.js");
/* harmony import */ var react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../hocs/globalMiddleware */ "./src/hocs/globalMiddleware.js");















var Specialty =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Specialty, _Component);

  function Specialty() {
    Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Specialty);

    return Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Specialty).apply(this, arguments));
  }

  Object(_Users_amrelmahdy_Desktop_reactive_rklinic_react_repo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Specialty, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSpecialtiesList(0);
    }
  }, {
    key: "render",
    value: function render() {
      var history = [{
        page: this.props.translate("home"),
        to: "/"
      }];
      var _this$props = this.props,
          specialties = _this$props.specialties,
          specialtyListIsLoading = _this$props.specialtyListIsLoading;
      var specialtiesList = specialties.length ? specialties.map(function (specialty) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-lg-4 d-flex ftco-animate",
          key: specialty.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dept d-md-flex"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "text p-4"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "department-single.html"
        }, specialty.speciality)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, specialty.desc.length > 120 ? specialty.desc.slice(0, 120) + " ..." : specialty.desc), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "doc float-right-rtl"
        }, specialty.doctors.length, " Doctors"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          className: "float-right-rtl show-more-style",
          style: {
            marginLeft: '10px'
          },
          to: "/specialty/" + specialty.id
        }, "Show more"))));
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "No data");
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "About"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: this.props.translate("specialities"),
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "ftco-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, specialtyListIsLoading === false ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, specialtiesList) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
        amount: 5,
        bigBone: true
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_skeleton_placeholders__WEBPACK_IMPORTED_MODULE_7__["Bone"], {
        width: 40,
        height: 20
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subscribe__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }]);

  return Specialty;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    specialties: state.specialty.specialties,
    specialtyListIsLoading: state.specialty.specialtyListIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSpecialtiesList: function getSpecialtiesList(featured) {
      return dispatch(Object(_store_actions_specialtyActions__WEBPACK_IMPORTED_MODULE_10__["getSpecialtiesList"])(featured));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_globalMiddleware__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(react_redux_multilingual__WEBPACK_IMPORTED_MODULE_12__["withTranslate"])(Specialty))));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/amrelmahdy/Desktop/reactive/rklinic-react-repo/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/amrelmahdy/Desktop/reactive/rklinic-react-repo/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map