function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Work/work.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Work/work.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWorkWorkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Speed: {{currentSpeed}} Km/h   | SpeedZ: {{currentSpeedZ}} Km/h | GPS Access - {{isGpsAccess}} | Set Error - {{isSetError}}</p>\n<p>Compass:- {{compassHeading}}</p>\n<ion-button size=\"small\" (click)=\"fixedErrorStop()\">Start Navigating</ion-button>\n<ion-button size=\"small\" (click)=\"gpsConfig()\">GPS Config</ion-button>\n<ion-button size=\"small\" (click)=\"setError()\">Set/Stop Error</ion-button>\n<ion-button size=\"small\" (click)=\"sendEmail()\">Send Email</ion-button>\n<ion-button size=\"small\" (click)=\"fallowThePath()\">Follow the path</ion-button>\n<p>Completed Distance - {{distanceCompletedKm | number : '1.2-2'}}</p>\n<div id=\"map\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acceleration/acceleration.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/acceleration/acceleration.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccelerationAccelerationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Speed: {{currentSpeed}} Km/h   | SpeedZ: {{currentSpeedZ}} Km/h</p>\n<p>GPS Access - {{isGpsAccess}} | Set Error - {{isSetError}}</p>\n\n<ion-button expand=\"block\" (click)=\"fixedErrorStop()\">Start Navigating</ion-button>\n<ion-button expand=\"block\" (click)=\"gpsConfig()\">GPS Config</ion-button>\n<ion-button expand=\"block\" (click)=\"setError()\">Set/Stop Error</ion-button>\n<ion-button expand=\"block\" (click)=\"sendEmail()\">Send Email</ion-button>\n\n\n<table>\n  <tr>\n    <td size=\"4\">Longitude</td>\n    <td> {{gpsLatLng.lat}}</td>\n  </tr>\n  <tr>\n    <td size=\"4\">Latitude</td>\n    <td>{{gpsLatLng.lng}}</td>\n  </tr>\n  <tr>\n    <td size=\"4\">Speed</td>\n    <td>{{gpsSpeed}}</td>\n  </tr>\n  <tr>\n    <td size=\"4\">Count</td>\n    <td>{{count}}</td>\n  </tr>\n</table>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leaflet/leaflet.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leaflet/leaflet.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLeafletLeafletComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Speed: {{currentSpeed}} Km/h   | SpeedZ: {{currentSpeedZ}} Km/h | GPS Access - {{isGpsAccess}} | Set Error - {{isSetError}}</p>\n<ion-button size=\"small\" (click)=\"fixedErrorStop()\">Start Navigating</ion-button>\n<ion-button size=\"small\" (click)=\"gpsConfig()\">GPS Config</ion-button>\n<ion-button size=\"small\" (click)=\"setError()\">Set/Stop Error</ion-button>\n<ion-button size=\"small\" (click)=\"sendEmail()\">Send Email</ion-button>\n<ion-button size=\"small\" (click)=\"fallowThePath()\">Follow the path</ion-button>\n<p>Completed Distance - {{distanceCompletedKm | number : '1.2-2'}}</p>\n<div id=\"map\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/leaflet/leaflet.component */
    "./src/app/components/leaflet/leaflet.component.ts");
    /* harmony import */


    var _components_acceleration_acceleration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/acceleration/acceleration.component */
    "./src/app/components/acceleration/acceleration.component.ts");
    /* harmony import */


    var _components_Work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/Work/work.component */
    "./src/app/components/Work/work.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'leaflet',
      component: _components_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_3__["LeafletComponent"]
    }, {
      path: 'work',
      component: _components_Work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"]
    }, {
      path: 'acceleration',
      component: _components_acceleration_acceleration_component__WEBPACK_IMPORTED_MODULE_4__["AccelerationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".leaflet-control-container .leaflet-routing-container-hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xhaGlydS9Eb2N1bWVudHMvUHJvamVjdHMvYXIvREVFTlMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFmbGV0LWNvbnRyb2wtY29udGFpbmVyIC5sZWFmbGV0LXJvdXRpbmctY29udGFpbmVyLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwiLmxlYWZsZXQtY29udHJvbC1jb250YWluZXIgLmxlYWZsZXQtcm91dGluZy1jb250YWluZXItaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_gyroscope_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/gyroscope/ngx */
    "./node_modules/@ionic-native/gyroscope/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/device-motion/ngx */
    "./node_modules/@ionic-native/device-motion/ngx/index.js");
    /* harmony import */


    var _components_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/leaflet/leaflet.component */
    "./src/app/components/leaflet/leaflet.component.ts");
    /* harmony import */


    var _components_acceleration_acceleration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/acceleration/acceleration.component */
    "./src/app/components/acceleration/acceleration.component.ts");
    /* harmony import */


    var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/sqlite-porter/ngx */
    "./node_modules/@ionic-native/sqlite-porter/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/device-orientation/ngx */
    "./node_modules/@ionic-native/device-orientation/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_Work_work_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/Work/work.component */
    "./src/app/components/Work/work.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_12__["LeafletComponent"], _components_acceleration_acceleration_component__WEBPACK_IMPORTED_MODULE_13__["AccelerationComponent"], _components_Work_work_component__WEBPACK_IMPORTED_MODULE_22__["WorkComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"]],
      providers: [_ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_16__["EmailComposer"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_20__["DeviceOrientation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_19__["LocationAccuracy"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_gyroscope_ngx__WEBPACK_IMPORTED_MODULE_10__["Gyroscope"], _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_11__["DeviceMotion"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_15__["SQLite"], _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_14__["SQLitePorter"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/Work/work.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/Work/work.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWorkWorkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\n    height: 1000px;\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Xb3JrL3dvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1dvcmsvd29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/Work/work.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/Work/work.component.ts ***!
    \***************************************************/

  /*! exports provided: WorkComponent */

  /***/
  function srcAppComponentsWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
      return WorkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/device-orientation/ngx */
    "./node_modules/@ionic-native/device-orientation/ngx/index.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! leaflet-routing-machine */
    "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/internal/observable/timer */
    "./node_modules/rxjs/internal/observable/timer.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _services_lat_lng_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/lat-lng.service */
    "./src/app/services/lat-lng.service.ts");
    /* harmony import */


    var _services_measure_point_service_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/measure-point.service.js */
    "./src/app/services/measure-point.service.js");
    /* harmony import */


    var _services_lat_lng_calculations_service_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/lat-lng-calculations.service.js */
    "./src/app/services/lat-lng-calculations.service.js");

    var WorkComponent =
    /*#__PURE__*/
    function () {
      /****************************************END **********************************************************/
      function WorkComponent(platform, measurePointService, emailComposer, androidPermissions, geolocation, locationAccuracy, latlngCalService, latLngService, deviceOrientation) {
        _classCallCheck(this, WorkComponent);

        this.platform = platform;
        this.measurePointService = measurePointService;
        this.emailComposer = emailComposer;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.latlngCalService = latlngCalService;
        this.latLngService = latLngService;
        this.deviceOrientation = deviceOrientation;
        this.vehicleSpeed = 0;
        this.distanceCompletedKm = 0;
        this.distanceCalculatorIterationPeriod = 100;
        this.pathFallowerIterationPeriod = 10;
        /*************************************** Acceleration local variables *********************************/

        this.logs = [];
        this.logList = [];
        this.count = 0;
        this.cnt = 0;
        this.bufferSize = 100;
        this.accelerationFrequency = 20;
        this.accelerationType = 'LINEAR_ACCELERATION';
        this.options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        this.compassOptions = {
          frequency: 1000
        };
        this.previusSpeed = 0;
        this.previusSpeedX = 0;
        this.previusSpeedY = 0;
        this.previusSpeedZ = 0;
        this.currentSpeed = '0';
        this.currentSpeedX = '0';
        this.currentSpeedY = '0';
        this.currentSpeedZ = '0';
        this.accX = 0;
        this.accY = 0;
        this.accZ = 0;
        this.accErrorX = 0;
        this.accErrorY = 0;
        this.accErrorZ = 0;
        this.compassHeading = 0;
        this.fixError = true;
        this.gpsSpeed = 0;
        this.gpsPreviusSpeed = 0;
        this.gpsLatLng = {
          lat: 0,
          lng: 0
        };
        this.isGpsAccess = false;
        this.isSetError = false;
        this.timetest = Date.now();
      }

      _createClass(WorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // initialize start values
          this.initialLonLat = {
            lat: 6.9,
            lng: 81
          };
          this.initialForcus = 9;
          this.platform.ready().then(function () {
            _this2.onSensorChange();

            _this2.checkGPSPermission(); // Get the device current compass heading


            _this2.deviceOrientation.getCurrentHeading().then(function (data) {
              _this2.compassData = data;
            }); // Watch the device compass heading change


            var subscription = _this2.deviceOrientation.watchHeading(_this2.compassOptions).subscribe(function (data) {
              _this2.compassData = data;
              _this2.compassHeading = data.trueHeading;
            });
          });
        }
        /*
        Reset map
        */

      }, {
        key: "resetLocations",
        value: function resetLocations() {
          this.map.remove();
          this.initializeMap(this.gpsLatLng);
          this.startMarker = null;
        }
        /*
        Follow the path according to the given speed
        */

      }, {
        key: "fallowThePath",
        value: function fallowThePath() {
          var _this3 = this;

          // calculate total coordinations for tempary use only
          var completeCoordinations;
          var iteration = 0;
          var previusCompletedDistance = 0;
          var temparyMarker = [];
          temparyMarker = [].concat(_toConsumableArray(temparyMarker), [L.marker([this.startLonLat.lat, this.startLonLat.lng])]);
          this.getWorkDistanceCompleted();
          var everySecond = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, this.pathFallowerIterationPeriod);
          var subscription = everySecond.subscribe(function () {
            var distancdGap = (_this3.distanceCompletedKm - previusCompletedDistance) * 1000;
            var latlng = temparyMarker[iteration].getLatLng();
            completeCoordinations = {
              lat: latlng.lat,
              lng: latlng.lng,
              distance: distancdGap
            };

            var currentLocation = _this3.latlngCalService.latlngFindByDistanceWithBrng(completeCoordinations, _this3.compassHeading);

            temparyMarker = [].concat(_toConsumableArray(temparyMarker), [L.marker([currentLocation.lat, currentLocation.lng]).addTo(_this3.map)]);

            if (iteration > 0) {
              _this3.map.removeLayer(temparyMarker[iteration - 1]);
            }

            iteration++;
            previusCompletedDistance = _this3.distanceCompletedKm;
          });
        }
        /*
        Go through the route line
        */

      }, {
        key: "goThroughLine",
        value: function goThroughLine() {
          var _this4 = this;

          var coordinateList = this.waypoints._line._route.coordinates;
          var temparyMarker = [];
          var intervalValue = 0; // in milliseconds

          var index = 0;
          var iteration = 1;
          coordinateList.forEach(function (item) {
            // calculate point in xy space
            intervalValue = 10 * iteration;
            setTimeout(function () {
              temparyMarker = [].concat(_toConsumableArray(temparyMarker), [L.marker([item.lat, item.lng]).addTo(_this4.map)]);

              if (index > 0) {
                _this4.map.removeLayer(temparyMarker[index - 1]);
              }

              index++;
            }, intervalValue);
            iteration++;
          });
        }
      }, {
        key: "initializeMap",
        value: function initializeMap(latLng) {
          // this.map = L.map('map').setView([this.initialLonLat.lat, this.initialLonLat.lng], this.initialForcus);
          this.map = L.map('map').setView([latLng.lat, latLng.lng], 16);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.map);
          this.setMarkersAndGetNavigations(this.map); // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          // }).addTo(this.map);
        }
        /*
        Get map on click first location as start location and second location as end location
        Enable user to drag and drop both locations after select
        */

      }, {
        key: "setMarkersAndGetNavigations",
        value: function setMarkersAndGetNavigations(map) {
          map.on('click ', function mapClickListen(e) {
            if (!this.startMarker) {
              // get start location
              var pos = e.latlng;
              this.startLonLat = pos;
              this.startMarker = L.marker(pos, {
                draggable: true
              });
              this.startMarker.on('drag', function (e) {
                this.startLonLat = e.latlng;
              });
              this.startMarker.addTo(map);
            }
          }.bind(this));
        }
      }, {
        key: "getWorkDistanceCompleted",
        value: function getWorkDistanceCompleted() {
          var _this5 = this;

          var everySecond = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, this.distanceCalculatorIterationPeriod);
          var subscription = everySecond.subscribe(function () {
            _this5.distanceCompletedKm += Number(_this5.currentSpeed) * (_this5.distanceCalculatorIterationPeriod / (1000 * 60 * 60));
          });
        }
        /******************** Accelerometer methods ******************************************************************/

      }, {
        key: "fixedErrorStop",
        value: function fixedErrorStop() {
          this.strtTime = new Date();
          this.fixError = false;
        }
      }, {
        key: "gpsConfig",
        value: function gpsConfig() {
          this.isGpsAccess = !this.isGpsAccess;

          if (!this.isGpsAccess) {
            this.isSetError = false;
          }
        }
      }, {
        key: "onSensorChange",
        value: function onSensorChange() {
          var _this6 = this;

          // Access acceleration
          sensors.enableSensor(this.accelerationType);
          setInterval(function () {
            sensors.getState(function (values) {
              _this6.cnt++;
              _this6.accX += values[0];
              _this6.accY += values[1];
              _this6.accZ += values[2];

              if (_this6.cnt >= _this6.bufferSize) {
                _this6.locationCalculation();

                _this6.gpsPreviusSpeed = _this6.gpsSpeed;
              }
            });
          }, this.accelerationFrequency);
        }
      }, {
        key: "locationCalculation",
        value: function locationCalculation() {
          var tempPoint = this.getPoint();
          this.resetAcc();
          var measureData = this.measurePointService.calSpeed(tempPoint);
          this.accErrorX = measureData.accErrorX;
          this.accErrorY = measureData.accErrorY;
          this.accErrorZ = measureData.accErrorZ;

          if (!this.fixError) {
            this.currentSpeedZ = (measureData.currentSpeedZ * 3.6).toFixed(4);
            this.currentSpeed = (measureData.currentSpeed * 3.6).toFixed(4);
            this.previusSpeed = measureData.currentSpeed;
            this.previusSpeedZ = measureData.currentSpeedZ;
            this.writePointLog(tempPoint, measureData);
          }
        }
        /* returrns parameters, using buffer: average acceleration
          since last call of getPoint().
        */

      }, {
        key: "getPoint",
        value: function getPoint() {
          var point = {
            accX: this.accX,
            accY: this.accY,
            accZ: this.accZ,
            cnt: this.cnt,
            lapTime: this.accelerationFrequency * this.cnt * 0.001,
            currentSpeed: this.previusSpeed,
            currentSpeedX: this.previusSpeedX,
            currentSpeedY: this.previusSpeedY,
            currentSpeedZ: this.previusSpeedZ,
            gpsSpeed: this.gpsPreviusSpeed,
            gpsCurrentSpeed: this.gpsSpeed,
            isGPSEnable: this.isGpsAccess,
            isSetError: this.isSetError
          };
          return point;
        }
        /**
         * add log to db
         */

      }, {
        key: "writePointLog",
        value: function writePointLog(point, measureData) {
          var log = {
            accX: point.accX / point.cnt,
            accY: point.accY / point.cnt,
            accZ: point.accZ / point.cnt,
            currentSpeedZ: measureData.currentSpeedZ * -3.6,
            currentSpeed: measureData.currentSpeed * 3.6,
            startTime: this.strtTime,
            accErrorX: measureData.accErrorX,
            accErrorY: measureData.accErrorY,
            accErrorZ: measureData.accErrorZ,
            speedChange: measureData.speedChange * 3.6,
            speedChangeZ: measureData.speedChangeZ * 3.6,
            errorSpeed: measureData.errorSpeed * 3.6,
            errorSpeedZ: measureData.errorSpeedZ * 3.6,
            gpsSpeed: this.gpsPreviusSpeed * 3.6
          };
          this.logList = [].concat(_toConsumableArray(this.logList), [log]);
        }
      }, {
        key: "resetAcc",
        value: function resetAcc() {
          this.accX = 0;
          this.accY = 0;
          this.accZ = 0;
          this.cnt = 0;
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this7 = this;

          var logJson = JSON.stringify(this.logList);
          var email = {
            to: 'arunoda89@gmail.com',
            cc: 'arunoda.17@cse.mrt.ac.lk',
            bcc: [],
            attachments: [],
            subject: 'DEENS',
            body: logJson,
            isHtml: true
          };
          this.emailComposer.isAvailable().then(function (available) {
            if (available) {
              _this7.emailComposer.open(email);
            }
          });
          this.resetLocations();
        }
        /*******************************************************************************GPS  */
        // Check if application having GPS access permission

      }, {
        key: "checkGPSPermission",
        value: function checkGPSPermission() {
          var _this8 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
              // If having permission show 'Turn On GPS' dialogue
              _this8.askToTurnOnGPS();
            } else {
              // If not having permission ask for permission
              _this8.requestGPSPermission();
            }
          }, function (err) {
            alert(err);
          });
        }
      }, {
        key: "requestGPSPermission",
        value: function requestGPSPermission() {
          var _this9 = this;

          this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {} else {
              // Show 'GPS Permission Request' dialogue
              _this9.androidPermissions.requestPermission(_this9.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
                // call method to turn on GPS
                _this9.askToTurnOnGPS();
              }, function (error) {
                // Show alert if user click on 'No Thanks'
                alert('requestPermission Error requesting location permissions ' + error);
              });
            }
          });
        }
      }, {
        key: "askToTurnOnGPS",
        value: function askToTurnOnGPS() {
          var _this10 = this;

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this10.getLocationCoordinates();
          }, function (error) {
            return alert('Error requesting location permissions ' + JSON.stringify(error));
          });
        }
      }, {
        key: "setError",
        value: function setError() {
          this.isSetError = !this.isSetError;
          this.isGpsAccess = true;
        } // Methos to get device accurate coordinates using device GPS

      }, {
        key: "getLocationCoordinates",
        value: function getLocationCoordinates() {
          var _this11 = this;

          this.geolocation.watchPosition(this.options).subscribe(function (resp) {
            var currentLocation = {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            };

            var distance = _this11.latlngCalService.getDistanceFromLatLon(_this11.gpsLatLng, currentLocation);

            var currentTime = new Date().getTime();

            if (distance > 0 && _this11.count > 10) {
              var timeDifference = currentTime - _this11.previusTimeInMS;
              _this11.gpsSpeed = distance / (timeDifference * 0.001);
            } else {
              _this11.gpsSpeed = 0;
            }

            _this11.previusTimeInMS = currentTime;

            if (_this11.gpsLatLng.lat === 0) {
              _this11.initializeMap(currentLocation);
            }

            _this11.gpsLatLng = currentLocation;
            _this11.count++;
          });
        }
      }]);

      return WorkComponent;
    }();

    WorkComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: _services_measure_point_service_js__WEBPACK_IMPORTED_MODULE_11__["MeasurePointService"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]
      }, {
        type: _services_lat_lng_calculations_service_js__WEBPACK_IMPORTED_MODULE_12__["LatLngCalculationsService"]
      }, {
        type: _services_lat_lng_service__WEBPACK_IMPORTED_MODULE_10__["LatLngService"]
      }, {
        type: _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["DeviceOrientation"]
      }];
    };

    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-work',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Work/work.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work.component.css */
      "./src/app/components/Work/work.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _services_measure_point_service_js__WEBPACK_IMPORTED_MODULE_11__["MeasurePointService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"], _services_lat_lng_calculations_service_js__WEBPACK_IMPORTED_MODULE_12__["LatLngCalculationsService"], _services_lat_lng_service__WEBPACK_IMPORTED_MODULE_10__["LatLngService"], _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["DeviceOrientation"]])], WorkComponent);
    /***/
  },

  /***/
  "./src/app/components/acceleration/acceleration.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/acceleration/acceleration.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAccelerationAccelerationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjZWxlcmF0aW9uL2FjY2VsZXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/acceleration/acceleration.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/acceleration/acceleration.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AccelerationComponent */

  /***/
  function srcAppComponentsAccelerationAccelerationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccelerationComponent", function () {
      return AccelerationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
    /* harmony import */


    var _services_measure_point_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/measure-point.service */
    "./src/app/services/measure-point.service.ts");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var src_app_services_lat_lng_calculations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/lat-lng-calculations.service */
    "./src/app/services/lat-lng-calculations.service.ts");

    var AccelerationComponent =
    /*#__PURE__*/
    function () {
      function AccelerationComponent(platform, measurePointService, emailComposer, androidPermissions, geolocation, locationAccuracy, latlngCalService) {
        _classCallCheck(this, AccelerationComponent);

        this.platform = platform;
        this.measurePointService = measurePointService;
        this.emailComposer = emailComposer;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.latlngCalService = latlngCalService;
        /*
        declarations
        */

        /*
        extend from abstract class
        */

        this.logs = [];
        this.logList = [];
        this.count = 0;
        this.cnt = 0;
        this.bufferSize = 100;
        this.accelerationFrequency = 20;
        this.accelerationType = 'LINEAR_ACCELERATION';
        this.options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        this.previusSpeed = 0;
        this.previusSpeedX = 0;
        this.previusSpeedY = 0;
        this.previusSpeedZ = 0;
        this.currentSpeed = "0";
        this.currentSpeedX = "0";
        this.currentSpeedY = "0";
        this.currentSpeedZ = "0";
        this.accX = 0;
        this.accY = 0;
        this.accZ = 0;
        this.accErrorX = 0;
        this.accErrorY = 0;
        this.accErrorZ = 0;
        this.fixError = true;
        this.gpsSpeed = 0;
        this.gpsPreviusSpeed = 0;
        this.gpsLatLng = {
          lat: 0,
          lng: 0
        };
        this.isGpsAccess = false;
        this.isSetError = false;
        this.timetest = Date.now();
      }

      _createClass(AccelerationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.platform.ready().then(function () {
            _this12.onSensorChange();

            _this12.checkGPSPermission();
          });
        }
      }, {
        key: "fixedErrorStop",
        value: function fixedErrorStop() {
          this.strtTime = new Date();
          this.fixError = false;
        }
      }, {
        key: "gpsConfig",
        value: function gpsConfig() {
          this.isGpsAccess = !this.isGpsAccess;

          if (!this.isGpsAccess) {
            this.isSetError = false;
          }
        }
      }, {
        key: "onSensorChange",
        value: function onSensorChange() {
          var _this13 = this;

          // Access acceleration
          sensors.enableSensor(this.accelerationType);
          setInterval(function () {
            sensors.getState(function (values) {
              _this13.cnt++;
              _this13.accX += values[0];
              _this13.accY += values[1];
              _this13.accZ += values[2];

              if (_this13.cnt >= _this13.bufferSize) {
                _this13.locationCalculation();

                _this13.gpsPreviusSpeed = _this13.gpsSpeed;
              }
            });
          }, this.accelerationFrequency);
        }
      }, {
        key: "locationCalculation",
        value: function locationCalculation() {
          var tempPoint = this.getPoint();
          this.resetAcc();
          var measureData = this.measurePointService.calSpeed(tempPoint);
          this.accErrorX = measureData.accErrorX;
          this.accErrorY = measureData.accErrorY;
          this.accErrorZ = measureData.accErrorZ;

          if (!this.fixError) {
            this.currentSpeedZ = (measureData.currentSpeedZ * 3.6).toFixed(4);
            this.currentSpeed = (measureData.currentSpeed * 3.6).toFixed(4);
            this.previusSpeed = measureData.currentSpeed;
            this.previusSpeedZ = measureData.currentSpeedZ;
            this.writePointLog(tempPoint, measureData);
          }
        }
        /* returrns parameters, using buffer: average acceleration
          since last call of getPoint().
        */

      }, {
        key: "getPoint",
        value: function getPoint() {
          var point = {
            accX: this.accX,
            accY: this.accY,
            accZ: this.accZ,
            cnt: this.cnt,
            lapTime: this.accelerationFrequency * this.cnt * 0.001,
            currentSpeed: this.previusSpeed,
            currentSpeedX: this.previusSpeedX,
            currentSpeedY: this.previusSpeedY,
            currentSpeedZ: this.previusSpeedZ,
            gpsSpeed: this.gpsPreviusSpeed,
            gpsCurrentSpeed: this.gpsSpeed,
            isGPSEnable: this.isGpsAccess,
            isSetError: this.isSetError
          };
          return point;
        }
        /**
         * add log to db
         */

      }, {
        key: "writePointLog",
        value: function writePointLog(point, measureData) {
          var log = {
            accX: point.accX / point.cnt,
            accY: point.accY / point.cnt,
            accZ: point.accZ / point.cnt,
            currentSpeedZ: measureData.currentSpeedZ * -3.6,
            currentSpeed: measureData.currentSpeed * 3.6,
            startTime: this.strtTime,
            accErrorX: measureData.accErrorX,
            accErrorY: measureData.accErrorY,
            accErrorZ: measureData.accErrorZ,
            speedChange: measureData.speedChange * 3.6,
            speedChangeZ: measureData.speedChangeZ * 3.6,
            errorSpeed: measureData.errorSpeed * 3.6,
            errorSpeedZ: measureData.errorSpeedZ * 3.6,
            gpsSpeed: this.gpsPreviusSpeed * 3.6
          };
          this.logList = [].concat(_toConsumableArray(this.logList), [log]);
        }
      }, {
        key: "resetAcc",
        value: function resetAcc() {
          this.accX = 0;
          this.accY = 0;
          this.accZ = 0;
          this.cnt = 0;
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this14 = this;

          var logJson = JSON.stringify(this.logList);
          var email = {
            to: 'arunoda89@gmail.com',
            cc: 'arunoda.17@cse.mrt.ac.lk',
            bcc: [],
            attachments: [],
            subject: 'DEENS',
            body: logJson,
            isHtml: true
          };
          this.emailComposer.isAvailable().then(function (available) {
            if (available) {
              _this14.emailComposer.open(email);
            }
          });
        }
        /*******************************************************************************GPS  */
        //Check if application having GPS access permission  

      }, {
        key: "checkGPSPermission",
        value: function checkGPSPermission() {
          var _this15 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
              //If having permission show 'Turn On GPS' dialogue
              _this15.askToTurnOnGPS();
            } else {
              //If not having permission ask for permission
              _this15.requestGPSPermission();
            }
          }, function (err) {
            alert(err);
          });
        }
      }, {
        key: "requestGPSPermission",
        value: function requestGPSPermission() {
          var _this16 = this;

          this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {} else {
              //Show 'GPS Permission Request' dialogue
              _this16.androidPermissions.requestPermission(_this16.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
                // call method to turn on GPS
                _this16.askToTurnOnGPS();
              }, function (error) {
                //Show alert if user click on 'No Thanks'
                alert('requestPermission Error requesting location permissions ' + error);
              });
            }
          });
        }
      }, {
        key: "askToTurnOnGPS",
        value: function askToTurnOnGPS() {
          var _this17 = this;

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this17.getLocationCoordinates();
          }, function (error) {
            return alert('Error requesting location permissions ' + JSON.stringify(error));
          });
        }
      }, {
        key: "setError",
        value: function setError() {
          this.isSetError = !this.isSetError;
          this.isGpsAccess = true;
        } // Methos to get device accurate coordinates using device GPS

      }, {
        key: "getLocationCoordinates",
        value: function getLocationCoordinates() {
          var _this18 = this;

          this.geolocation.watchPosition(this.options).subscribe(function (resp) {
            var currentLocation = {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            };

            var distance = _this18.latlngCalService.getDistanceFromLatLon(_this18.gpsLatLng, currentLocation);

            var currentTime = new Date().getTime();

            if (distance > 0 && _this18.count > 10) {
              var timeDifference = currentTime - _this18.previusTimeInMS;
              _this18.gpsSpeed = distance / (timeDifference * 0.001);
            } else {
              _this18.gpsSpeed = 0;
            }

            _this18.previusTimeInMS = currentTime;
            _this18.gpsLatLng = currentLocation;
            _this18.count++;
          });
        }
      }]);

      return AccelerationComponent;
    }();

    AccelerationComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _services_measure_point_service__WEBPACK_IMPORTED_MODULE_6__["MeasurePointService"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"]
      }, {
        type: src_app_services_lat_lng_calculations_service__WEBPACK_IMPORTED_MODULE_8__["LatLngCalculationsService"]
      }];
    };

    AccelerationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acceleration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acceleration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acceleration/acceleration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./acceleration.component.scss */
      "./src/app/components/acceleration/acceleration.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_measure_point_service__WEBPACK_IMPORTED_MODULE_6__["MeasurePointService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"], src_app_services_lat_lng_calculations_service__WEBPACK_IMPORTED_MODULE_8__["LatLngCalculationsService"]])], AccelerationComponent);
    /***/
  },

  /***/
  "./src/app/components/leaflet/leaflet.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/leaflet/leaflet.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLeafletLeafletComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\n    height: 1000px;\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWFmbGV0L2xlYWZsZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlYWZsZXQvbGVhZmxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/leaflet/leaflet.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/leaflet/leaflet.component.ts ***!
    \*********************************************************/

  /*! exports provided: LeafletComponent */

  /***/
  function srcAppComponentsLeafletLeafletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeafletComponent", function () {
      return LeafletComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! leaflet-routing-machine */
    "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
    /* harmony import */


    var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/internal/observable/timer */
    "./node_modules/rxjs/internal/observable/timer.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _services_lat_lng_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/lat-lng.service */
    "./src/app/services/lat-lng.service.ts");
    /* harmony import */


    var _services_measure_point_service_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/measure-point.service.js */
    "./src/app/services/measure-point.service.js");
    /* harmony import */


    var _services_lat_lng_calculations_service_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/lat-lng-calculations.service.js */
    "./src/app/services/lat-lng-calculations.service.js");

    var LeafletComponent =
    /*#__PURE__*/
    function () {
      /****************************************END **********************************************************/
      function LeafletComponent(platform, measurePointService, emailComposer, androidPermissions, geolocation, locationAccuracy, latlngCalService, latLngService) {
        _classCallCheck(this, LeafletComponent);

        this.platform = platform;
        this.measurePointService = measurePointService;
        this.emailComposer = emailComposer;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.latlngCalService = latlngCalService;
        this.latLngService = latLngService;
        this.vehicleSpeed = 0;
        this.distanceCompletedKm = 0;
        this.distanceCalculatorIterationPeriod = 100;
        this.pathFallowerIterationPeriod = 10;
        /*************************************** Acceleration local variables *********************************/

        this.logs = [];
        this.logList = [];
        this.count = 0;
        this.cnt = 0;
        this.bufferSize = 100;
        this.accelerationFrequency = 20;
        this.accelerationType = 'LINEAR_ACCELERATION';
        this.options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        this.compassOptions = {
          frequency: 1000
        };
        this.previusSpeed = 0;
        this.previusSpeedX = 0;
        this.previusSpeedY = 0;
        this.previusSpeedZ = 0;
        this.currentSpeed = '0';
        this.currentSpeedX = '0';
        this.currentSpeedY = '0';
        this.currentSpeedZ = '0';
        this.accX = 0;
        this.accY = 0;
        this.accZ = 0;
        this.accErrorX = 0;
        this.accErrorY = 0;
        this.accErrorZ = 0;
        this.compassHeading = 0;
        this.fixError = true;
        this.gpsSpeed = 0;
        this.gpsPreviusSpeed = 0;
        this.gpsLatLng = {
          lat: 0,
          lng: 0
        };
        this.isGpsAccess = false;
        this.isSetError = false;
        this.timetest = Date.now();
      }

      _createClass(LeafletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          // initialize start values
          this.initialLonLat = {
            lat: 6.9,
            lng: 81
          };
          this.initialForcus = 9;
          this.initializeMap();
          this.platform.ready().then(function () {
            _this19.onSensorChange();

            _this19.checkGPSPermission();
          });
        }
        /*
        Reset map
        */

      }, {
        key: "resetLocations",
        value: function resetLocations() {
          this.map.remove();
          this.initializeMap();
          this.startMarker = null;
          this.endMarker = null;
        }
        /*
        Follow the path according to the given speed
        */

      }, {
        key: "fallowThePath",
        value: function fallowThePath() {
          var _this20 = this;

          var instructionsWithDistancesList; // get total distance informations

          instructionsWithDistancesList = this.latLngService.getDistanceMap(this.waypoints);
          var totalDistance = instructionsWithDistancesList[instructionsWithDistancesList.length - 1].totalDistance; // start calculating distance

          this.getDistanceCompleted(totalDistance); // calculate total coordinations for tempary use only

          var completeCoordinations = [];
          var iteration = 0;
          var temparyMarker = [];
          instructionsWithDistancesList.forEach(function (coordinations) {
            coordinations.latlngWithDistanceList.forEach(function (item) {
              completeCoordinations = [].concat(_toConsumableArray(completeCoordinations), [item]);
            });
          }); // console.log(completeCoordinations);

          if (completeCoordinations.length > 0) {
            var everySecond = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__["timer"])(0, this.pathFallowerIterationPeriod);
            var subscription = everySecond.subscribe(function () {
              var coordinate = completeCoordinations[iteration];

              if (coordinate.distance <= _this20.distanceCompletedKm * 1000) {
                temparyMarker = [].concat(_toConsumableArray(temparyMarker), [L.marker([coordinate.lat, coordinate.lng]).addTo(_this20.map)]);

                if (iteration > 0) {
                  _this20.map.removeLayer(temparyMarker[iteration - 1]);
                }

                if (_this20.distanceCompletedKm * 1000 >= totalDistance) {
                  subscription.unsubscribe();
                }

                iteration++;
              }
            });
          }
        }
        /*
        Go through the route line
        */

      }, {
        key: "goThroughLine",
        value: function goThroughLine() {
          var _this21 = this;

          var coordinateList = this.waypoints._line._route.coordinates;
          var temparyMarker = [];
          var intervalValue = 0; // in milliseconds

          var index = 0;
          var iteration = 1;
          coordinateList.forEach(function (item) {
            // calculate point in xy space
            intervalValue = 10 * iteration;
            setTimeout(function () {
              temparyMarker = [].concat(_toConsumableArray(temparyMarker), [L.marker([item.lat, item.lng]).addTo(_this21.map)]);

              if (index > 0) {
                _this21.map.removeLayer(temparyMarker[index - 1]);
              }

              index++;
            }, intervalValue);
            iteration++;
          });
        }
      }, {
        key: "initializeMap",
        value: function initializeMap() {
          // this.map = L.map('map').setView([this.initialLonLat.lat, this.initialLonLat.lng], this.initialForcus);
          this.map = L.map('map').setView([this.initialLonLat.lat, this.initialLonLat.lng], 16);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.map);
          this.setMarkersAndGetNavigations(this.map); // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          // }).addTo(this.map);
        }
        /*
        Get map on click first location as start location and second location as end location
        Enable user to drag and drop both locations after select
        */

      }, {
        key: "setMarkersAndGetNavigations",
        value: function setMarkersAndGetNavigations(map) {
          map.on('click ', function mapClickListen(e) {
            if (!this.startMarker) {
              // get start location
              var pos = e.latlng;
              this.startLonLat = pos;
              this.startMarker = L.marker(pos, {
                draggable: true
              });
              this.startMarker.on('drag', function (e) {
                this.startLonLat = e.latlng;
              });
              this.startMarker.addTo(map);
            } else if (this.startMarker && !this.endMarker) {
              // get end location
              var _pos = e.latlng;
              this.endLogLat = _pos;
              this.endMarker = L.marker(_pos, {
                draggable: true
              });
              this.endMarker.on('drag', function (e) {
                this.endLogLat = e.latlng;
              });
              this.endMarker.addTo(map); // Get waypoints if both markers are selected

              this.getWayPoints(this.map);
            }
          }.bind(this));
        }
        /*
        Get Waypoints using start location and end location (instructions)
        */

      }, {
        key: "getWayPoints",
        value: function getWayPoints(map) {
          this.waypoints = L.Routing.control({
            waypoints: [L.latLng(this.startLonLat.lat, this.startLonLat.lng), L.latLng(this.endLogLat.lat, this.endLogLat.lng)]
          }).addTo(map);
          map.removeLayer(this.startMarker);
          map.removeLayer(this.endMarker);
        }
        /*
        Get vehicle distance completed for current speed
        */

      }, {
        key: "getDistanceCompleted",
        value: function getDistanceCompleted(totalDistance) {
          var _this22 = this;

          var everySecond = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_8__["timer"])(0, this.distanceCalculatorIterationPeriod);
          var subscription = everySecond.subscribe(function () {
            _this22.distanceCompletedKm += Number(_this22.currentSpeed) * (_this22.distanceCalculatorIterationPeriod / (1000 * 60 * 60));

            if (_this22.distanceCompletedKm * 1000 >= totalDistance) {
              subscription.unsubscribe();
            }
          });
        }
        /******************** Accelerometer methods ******************************************************************/

      }, {
        key: "fixedErrorStop",
        value: function fixedErrorStop() {
          this.strtTime = new Date();
          this.fixError = false;
        }
      }, {
        key: "gpsConfig",
        value: function gpsConfig() {
          this.isGpsAccess = !this.isGpsAccess;

          if (!this.isGpsAccess) {
            this.isSetError = false;
          }
        }
      }, {
        key: "onSensorChange",
        value: function onSensorChange() {
          var _this23 = this;

          // Access acceleration
          sensors.enableSensor(this.accelerationType);
          setInterval(function () {
            sensors.getState(function (values) {
              _this23.cnt++;
              _this23.accX += values[0];
              _this23.accY += values[1];
              _this23.accZ += values[2];

              if (_this23.cnt >= _this23.bufferSize) {
                _this23.locationCalculation();

                _this23.gpsPreviusSpeed = _this23.gpsSpeed;
              }
            });
          }, this.accelerationFrequency);
        }
      }, {
        key: "locationCalculation",
        value: function locationCalculation() {
          var tempPoint = this.getPoint();
          this.resetAcc();
          var measureData = this.measurePointService.calSpeed(tempPoint);
          this.accErrorX = measureData.accErrorX;
          this.accErrorY = measureData.accErrorY;
          this.accErrorZ = measureData.accErrorZ;

          if (!this.fixError) {
            this.currentSpeedZ = (measureData.currentSpeedZ * 3.6).toFixed(4);
            this.currentSpeed = (measureData.currentSpeed * 3.6).toFixed(4);
            this.previusSpeed = measureData.currentSpeed;
            this.previusSpeedZ = measureData.currentSpeedZ;
            this.writePointLog(tempPoint, measureData);
          }
        }
        /* returrns parameters, using buffer: average acceleration
          since last call of getPoint().
        */

      }, {
        key: "getPoint",
        value: function getPoint() {
          var point = {
            accX: this.accX,
            accY: this.accY,
            accZ: this.accZ,
            cnt: this.cnt,
            lapTime: this.accelerationFrequency * this.cnt * 0.001,
            currentSpeed: this.previusSpeed,
            currentSpeedX: this.previusSpeedX,
            currentSpeedY: this.previusSpeedY,
            currentSpeedZ: this.previusSpeedZ,
            gpsSpeed: this.gpsPreviusSpeed,
            gpsCurrentSpeed: this.gpsSpeed,
            isGPSEnable: this.isGpsAccess,
            isSetError: this.isSetError
          };
          return point;
        }
        /**
         * add log to db
         */

      }, {
        key: "writePointLog",
        value: function writePointLog(point, measureData) {
          var log = {
            accX: point.accX / point.cnt,
            accY: point.accY / point.cnt,
            accZ: point.accZ / point.cnt,
            currentSpeedZ: measureData.currentSpeedZ * -3.6,
            currentSpeed: measureData.currentSpeed * 3.6,
            startTime: this.strtTime,
            accErrorX: measureData.accErrorX,
            accErrorY: measureData.accErrorY,
            accErrorZ: measureData.accErrorZ,
            speedChange: measureData.speedChange * 3.6,
            speedChangeZ: measureData.speedChangeZ * 3.6,
            errorSpeed: measureData.errorSpeed * 3.6,
            errorSpeedZ: measureData.errorSpeedZ * 3.6,
            gpsSpeed: this.gpsPreviusSpeed * 3.6
          };
          this.logList = [].concat(_toConsumableArray(this.logList), [log]);
        }
      }, {
        key: "resetAcc",
        value: function resetAcc() {
          this.accX = 0;
          this.accY = 0;
          this.accZ = 0;
          this.cnt = 0;
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this24 = this;

          var logJson = JSON.stringify(this.logList);
          var email = {
            to: 'arunoda89@gmail.com',
            cc: 'arunoda.17@cse.mrt.ac.lk',
            bcc: [],
            attachments: [],
            subject: 'DEENS',
            body: logJson,
            isHtml: true
          };
          this.emailComposer.isAvailable().then(function (available) {
            if (available) {
              _this24.emailComposer.open(email);
            }
          });
          this.resetLocations();
        }
        /*******************************************************************************GPS  */
        // Check if application having GPS access permission

      }, {
        key: "checkGPSPermission",
        value: function checkGPSPermission() {
          var _this25 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
              // If having permission show 'Turn On GPS' dialogue
              _this25.askToTurnOnGPS();
            } else {
              // If not having permission ask for permission
              _this25.requestGPSPermission();
            }
          }, function (err) {
            alert(err);
          });
        }
      }, {
        key: "requestGPSPermission",
        value: function requestGPSPermission() {
          var _this26 = this;

          this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {} else {
              // Show 'GPS Permission Request' dialogue
              _this26.androidPermissions.requestPermission(_this26.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
                // call method to turn on GPS
                _this26.askToTurnOnGPS();
              }, function (error) {
                // Show alert if user click on 'No Thanks'
                alert('requestPermission Error requesting location permissions ' + error);
              });
            }
          });
        }
      }, {
        key: "askToTurnOnGPS",
        value: function askToTurnOnGPS() {
          var _this27 = this;

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this27.getLocationCoordinates();
          }, function (error) {
            return alert('Error requesting location permissions ' + JSON.stringify(error));
          });
        }
      }, {
        key: "setError",
        value: function setError() {
          this.isSetError = !this.isSetError;
          this.isGpsAccess = true;
        } // Methos to get device accurate coordinates using device GPS

      }, {
        key: "getLocationCoordinates",
        value: function getLocationCoordinates() {
          var _this28 = this;

          this.geolocation.watchPosition(this.options).subscribe(function (resp) {
            var currentLocation = {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            };

            var distance = _this28.latlngCalService.getDistanceFromLatLon(_this28.gpsLatLng, currentLocation);

            var currentTime = new Date().getTime();

            if (distance > 0 && _this28.count > 10) {
              var timeDifference = currentTime - _this28.previusTimeInMS;
              _this28.gpsSpeed = distance / (timeDifference * 0.001);
            } else {
              _this28.gpsSpeed = 0;
            }

            _this28.previusTimeInMS = currentTime;
            _this28.gpsLatLng = currentLocation;
            _this28.count++;
          });
        }
      }]);

      return LeafletComponent;
    }();

    LeafletComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: _services_measure_point_service_js__WEBPACK_IMPORTED_MODULE_10__["MeasurePointService"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]
      }, {
        type: _services_lat_lng_calculations_service_js__WEBPACK_IMPORTED_MODULE_11__["LatLngCalculationsService"]
      }, {
        type: _services_lat_lng_service__WEBPACK_IMPORTED_MODULE_9__["LatLngService"]
      }];
    };

    LeafletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-leaflet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./leaflet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leaflet/leaflet.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./leaflet.component.css */
      "./src/app/components/leaflet/leaflet.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _services_measure_point_service_js__WEBPACK_IMPORTED_MODULE_10__["MeasurePointService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"], _services_lat_lng_calculations_service_js__WEBPACK_IMPORTED_MODULE_11__["LatLngCalculationsService"], _services_lat_lng_service__WEBPACK_IMPORTED_MODULE_9__["LatLngService"]])], LeafletComponent);
    /***/
  },

  /***/
  "./src/app/services/lat-lng-calculations.service.js":
  /*!**********************************************************!*\
    !*** ./src/app/services/lat-lng-calculations.service.js ***!
    \**********************************************************/

  /*! exports provided: LatLngCalculationsService */

  /***/
  function srcAppServicesLatLngCalculationsServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatLngCalculationsService", function () {
      return LatLngCalculationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var R = 6371000; // radius of earth in m

    var LatLngCalculationsService =
    /*#__PURE__*/
    function () {
      function LatLngCalculationsService() {
        _classCallCheck(this, LatLngCalculationsService);
      }

      _createClass(LatLngCalculationsService, [{
        key: "getDestinationLatLong",
        value: function getDestinationLatLong(latlngFirst, azimuth, distance) {
          /* 'returns the lat an long of destination point
          given the start lat, long, aziuth, and distance'''
          R = 6378.1 #Radius of the Earth in km
          */
          var brng = this.deg2rad(azimuth); // Bearing is degrees converted to radians.

          var d = distance / 1000; // Distance m converted to km

          var lat1 = this.deg2rad(latlngFirst.lat); // Current dd lat point converted to radians

          var lon1 = this.deg2rad(latlngFirst.lng); // Current dd long point converted to radians

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2)); // convert back to degrees

          lat2 = this.rad2deg(lat2);
          lon2 = this.rad2deg(lon2);
          return {
            lat: lat2,
            lng: lon2
          };
        }
      }, {
        key: "calculateBearing",
        value: function calculateBearing(latlngFirst, latlngSecond) {
          /* calculates the azimuth in degrees from start point to end point''' */
          var startLat = this.deg2rad(latlngFirst.lat);
          var startLong = this.deg2rad(latlngFirst.lng);
          var endLat = this.deg2rad(latlngSecond.lat);
          var endLong = this.deg2rad(latlngSecond.lng);
          var dLong = endLong - startLong;
          var dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) / Math.tan(startLat / 2.0 + Math.PI / 4.0));

          if (dLong > Math.PI) {
            if (dLong > 0.0) dLong = -(2.0 * Math.PI - dLong);else dLong = 2.0 * Math.PI + dLong;
          }

          var bearing = (this.rad2deg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
          return bearing;
        }
      }, {
        key: "getDistanceFromLatLon",
        value: function getDistanceFromLatLon(latlngFirst, latlngSecond) {
          var R = 6371; // Radius of the earth in km

          var dLat = this.deg2rad(latlngSecond.lat - latlngFirst.lat); // deg2rad below

          var dLon = this.deg2rad(latlngSecond.lng - latlngFirst.lng);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(latlngFirst.lat)) * Math.cos(this.deg2rad(latlngSecond.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          return d * 1000; // Convert km to meters
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }, {
        key: "rad2deg",
        value: function rad2deg(rad) {
          return rad * (180 / Math.PI);
        }
      }, {
        key: "latlngFindByDistance",
        value: function latlngFindByDistance(latlngWithDistance) {
          var d = latlngWithDistance.distance / 1000; // convert meters to km

          var lat1 = latlngWithDistance.lat;
          var lon1 = latlngWithDistance.lng;
          var R = 6371; // Radius of the earth in km

          var brng = 1.57; // Bearing is 90 degrees converted to radians.

          lat1 = this.deg2rad(lat1); // Current lat point converted to radians

          lon1 = this.deg2rad(lon1); // Current long point converted to radians

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));
          lat2 = this.rad2deg(lat2);
          lon2 = this.rad2deg(lon2);
          return {
            lat: lat2,
            lng: lon2
          };
        }
      }, {
        key: "latlngFindByDistanceWithBrng",
        value: function latlngFindByDistanceWithBrng(latlngWithDistance, heading) {
          var d = latlngWithDistance.distance / 1000; // convert meters to km

          var lat1 = latlngWithDistance.lat;
          var lon1 = latlngWithDistance.lng;
          var R = 6371; // Radius of the earth in km
          // var brng = 1.57 // Bearing is 90 degrees converted to radians.

          var brng = this.deg2rad(heading);
          lat1 = this.deg2rad(lat1); // Current lat point converted to radians

          lon1 = this.deg2rad(lon1); // Current long point converted to radians

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));
          lat2 = this.rad2deg(lat2);
          lon2 = this.rad2deg(lon2);
          return {
            lat: lat2,
            lng: lon2
          };
        }
      }]);

      return LatLngCalculationsService;
    }();

    LatLngCalculationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LatLngCalculationsService); //# sourceMappingURL=lat-lng-calculations.service.js.map

    /***/
  },

  /***/
  "./src/app/services/lat-lng-calculations.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/lat-lng-calculations.service.ts ***!
    \**********************************************************/

  /*! exports provided: LatLngCalculationsService */

  /***/
  function srcAppServicesLatLngCalculationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatLngCalculationsService", function () {
      return LatLngCalculationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var R = 6371000; // radius of earth in m

    var LatLngCalculationsService =
    /*#__PURE__*/
    function () {
      function LatLngCalculationsService() {
        _classCallCheck(this, LatLngCalculationsService);
      }

      _createClass(LatLngCalculationsService, [{
        key: "getDestinationLatLong",
        value: function getDestinationLatLong(latlngFirst, azimuth, distance) {
          /* 'returns the lat an long of destination point
          given the start lat, long, aziuth, and distance'''
          R = 6378.1 #Radius of the Earth in km
          */
          var brng = this.deg2rad(azimuth); // Bearing is degrees converted to radians.

          var d = distance / 1000; // Distance m converted to km

          var lat1 = this.deg2rad(latlngFirst.lat); // Current dd lat point converted to radians

          var lon1 = this.deg2rad(latlngFirst.lng); // Current dd long point converted to radians

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2)); // convert back to degrees

          lat2 = this.rad2deg(lat2);
          lon2 = this.rad2deg(lon2);
          return {
            lat: lat2,
            lng: lon2
          };
        }
      }, {
        key: "calculateBearing",
        value: function calculateBearing(latlngFirst, latlngSecond) {
          /* calculates the azimuth in degrees from start point to end point''' */
          var startLat = this.deg2rad(latlngFirst.lat);
          var startLong = this.deg2rad(latlngFirst.lng);
          var endLat = this.deg2rad(latlngSecond.lat);
          var endLong = this.deg2rad(latlngSecond.lng);
          var dLong = endLong - startLong;
          var dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) / Math.tan(startLat / 2.0 + Math.PI / 4.0));

          if (dLong > Math.PI) {
            if (dLong > 0.0) dLong = -(2.0 * Math.PI - dLong);else dLong = 2.0 * Math.PI + dLong;
          }

          var bearing = (this.rad2deg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
          return bearing;
        }
      }, {
        key: "getDistanceFromLatLon",
        value: function getDistanceFromLatLon(latlngFirst, latlngSecond) {
          var R = 6371; // Radius of the earth in km

          var dLat = this.deg2rad(latlngSecond.lat - latlngFirst.lat); // deg2rad below

          var dLon = this.deg2rad(latlngSecond.lng - latlngFirst.lng);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(latlngFirst.lat)) * Math.cos(this.deg2rad(latlngSecond.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          return d * 1000; // Convert km to meters
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }, {
        key: "rad2deg",
        value: function rad2deg(rad) {
          return rad * (180 / Math.PI);
        }
      }, {
        key: "latlngFindByDistance",
        value: function latlngFindByDistance(latlngWithDistance) {
          var d = latlngWithDistance.distance / 1000; // convert meters to km

          var lat1 = latlngWithDistance.lat;
          var lon1 = latlngWithDistance.lng;
          var R = 6371; // Radius of the earth in km

          var brng = 1.57; // Bearing is 90 degrees converted to radians.

          lat1 = this.deg2rad(lat1); // Current lat point converted to radians

          lon1 = this.deg2rad(lon1); // Current long point converted to radians

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));
          lat2 = this.rad2deg(lat2);
          lon2 = this.rad2deg(lon2);
          return {
            lat: lat2,
            lng: lon2
          };
        }
      }, {
        key: "latlngFindByDistanceWithBrng",
        value: function latlngFindByDistanceWithBrng(latlngWithDistance, heading) {
          var d = latlngWithDistance.distance / 1000; // convert meters to km

          var lat1 = latlngWithDistance.lat;
          var lon1 = latlngWithDistance.lng;
          var R = 6371; // Radius of the earth in km
          // var brng = 1.57 // Bearing is 90 degrees converted to radians.

          var brng = this.deg2rad(heading);
          lat1 = this.deg2rad(lat1); // Current lat point converted to radians

          lon1 = this.deg2rad(lon1); // Current long point converted to radians

          var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
          var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));
          lat2 = this.rad2deg(lat2);
          lon2 = this.rad2deg(lon2);
          return {
            lat: lat2,
            lng: lon2
          };
        }
      }]);

      return LatLngCalculationsService;
    }();

    LatLngCalculationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LatLngCalculationsService);
    /***/
  },

  /***/
  "./src/app/services/lat-lng.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/lat-lng.service.ts ***!
    \*********************************************/

  /*! exports provided: LatLngService */

  /***/
  function srcAppServicesLatLngServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatLngService", function () {
      return LatLngService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _lat_lng_calculations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lat-lng-calculations.service */
    "./src/app/services/lat-lng-calculations.service.ts");

    var LatLngService =
    /*#__PURE__*/
    function () {
      function LatLngService(latlngCalculationService) {
        _classCallCheck(this, LatLngService);

        this.latlngCalculationService = latlngCalculationService;
      }

      _createClass(LatLngService, [{
        key: "getDistanceMap",
        value: function getDistanceMap(waypoints) {
          var latlngWithDistanceList;
          var instructionsWithDistancesList;
          var coordinateList = waypoints._line._route.coordinates;
          var instructions = waypoints._line._route.instructions;
          latlngWithDistanceList = this.getDistanceSummatonList(coordinateList); // Get distance from start latlng to each latlng
          // Get list of instructions with relevant latlngs

          instructionsWithDistancesList = this.getInstructoinsWithLatLng(instructions, latlngWithDistanceList);
          return instructionsWithDistancesList;
        }
      }, {
        key: "getDistanceSummatonList",
        value: function getDistanceSummatonList(coordinateList) {
          var latlngDistanceSum = 0;
          var latlngFirst;
          var latlngSecond;
          var filledLatLngList = [];
          var latlngWithDistanceList = [];

          for (var i = 0; i < coordinateList.length - 1; i++) {
            latlngFirst = coordinateList[i];
            latlngSecond = coordinateList[i + 1];
            filledLatLngList = this.fillPathWithLatLng(latlngFirst, latlngSecond, latlngDistanceSum);
            latlngDistanceSum = filledLatLngList[filledLatLngList.length - 1].distance;
            latlngWithDistanceList = [].concat(_toConsumableArray(latlngWithDistanceList), _toConsumableArray(filledLatLngList));
          }

          return latlngWithDistanceList;
        }
      }, {
        key: "fillPathWithLatLng",
        value: function fillPathWithLatLng(latlngFirst, latlngSecond, distanceSumation) {
          var stepDistance = 1;
          var totDistance = distanceSumation;
          var latlng;
          var latlngWithDistanceList = [];
          var latlngDistance = this.latlngCalculationService.getDistanceFromLatLon(latlngFirst, latlngSecond);
          var calculationRounds = latlngDistance / stepDistance;
          calculationRounds = calculationRounds - calculationRounds % 1;
          var remainingDistance = latlngDistance % stepDistance;
          var azimuth = this.latlngCalculationService.calculateBearing(latlngFirst, latlngSecond);

          if (latlngDistance > stepDistance) {
            for (var i = 1; i <= calculationRounds; i++) {
              totDistance += stepDistance;
              /* latlng =
              this.latlngCalculationService.latlngFindByDistance({lat: latlngFirst.lat, lng: latlngFirst.lng, distance: (stepDistance * i)}); */
              // console.log(latlng);

              latlng = this.latlngCalculationService.getDestinationLatLong(latlngFirst, azimuth, stepDistance * i); // console.log(latlng);

              latlngWithDistanceList = [].concat(_toConsumableArray(latlngWithDistanceList), [{
                lat: latlng.lat,
                lng: latlng.lng,
                distance: totDistance
              }]);
            }

            latlngWithDistanceList = [].concat(_toConsumableArray(latlngWithDistanceList), [{
              lat: latlngSecond.lat,
              lng: latlngSecond.lng,
              distance: totDistance + remainingDistance
            }]);
            return latlngWithDistanceList;
          } else {
            return [{
              lat: latlngFirst.lat,
              lng: latlngFirst.lng,
              distance: totDistance + latlngDistance
            }];
          }
        }
      }, {
        key: "getInstructoinsWithLatLng",
        value: function getInstructoinsWithLatLng(instructions, latlngWithDistanceList) {
          var previusDistance = 0;
          var instructionsWithDistancesList = [];
          var selectedDistanceList;
          var instructionsWithDistances;
          instructions.forEach(function (element) {
            // Filter and get the latlng list for each waypoint
            selectedDistanceList = latlngWithDistanceList.filter(function (m) {
              if (previusDistance !== 0) {
                // Get list of latlng for other waypoints
                return previusDistance < m.distance && m.distance <= element.distance + previusDistance;
              } else {
                return m.distance <= element.distance; // Get first list of latlng from beginning
              }
            });
            previusDistance += element.distance;
            instructionsWithDistances = {
              instruction: element,
              latlngWithDistanceList: selectedDistanceList,
              totalDistance: previusDistance
            };
            instructionsWithDistancesList = [].concat(_toConsumableArray(instructionsWithDistancesList), [instructionsWithDistances]);
          });
          return instructionsWithDistancesList;
        }
      }]);

      return LatLngService;
    }();

    LatLngService.ctorParameters = function () {
      return [{
        type: _lat_lng_calculations_service__WEBPACK_IMPORTED_MODULE_2__["LatLngCalculationsService"]
      }];
    };

    LatLngService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lat_lng_calculations_service__WEBPACK_IMPORTED_MODULE_2__["LatLngCalculationsService"]])], LatLngService);
    /***/
  },

  /***/
  "./src/app/services/measure-point.service.js":
  /*!***************************************************!*\
    !*** ./src/app/services/measure-point.service.js ***!
    \***************************************************/

  /*! exports provided: MeasurePointService */

  /***/
  function srcAppServicesMeasurePointServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasurePointService", function () {
      return MeasurePointService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MeasurePointService =
    /*#__PURE__*/
    function () {
      function MeasurePointService() {
        _classCallCheck(this, MeasurePointService);

        this.vZ = 0;
        this.eX = 0;
        this.eY = 0;
        this.eZ = 0;
        this.errorSpeed = 0;
        this.errorSpeedZ = 0;
        this.speed = 0;
        this.speedChange = 0;
        this.speedChangeZ = 0;
      }

      _createClass(MeasurePointService, [{
        key: "calSpeed",
        value: function calSpeed(currentData) {
          currentData = this.getAvaragePoint(currentData); // currentData = this.reduceError(currentData);

          var accelerationBoth = Math.sqrt(currentData.accX * currentData.accX + currentData.accY * currentData.accY + currentData.accZ * currentData.accZ);
          this.speedChange = accelerationBoth * currentData.lapTime;
          this.speedChangeZ = Math.sqrt(currentData.accZ * currentData.accZ) * currentData.lapTime;

          if (currentData.accZ <= 0) {
            /*
            This time vihicle go ahead. so speed = speedPre + accelerationSpped. But accZ is -. So speed = speedPre - (-accelerationSpped)
             */
            if (!currentData.isGPSEnable) {
              this.vZ = currentData.currentSpeedZ;
              this.speed = currentData.currentSpeed;
            } else {
              this.vZ = currentData.gpsSpeed;
              this.speed = currentData.gpsSpeed;
            }

            this.vZ += this.speedChangeZ;
            this.speed += this.speedChange;
          } else {
            /*
            This time vihicle go ahead. so speed = speedPre - accelerationSpped. But accZ is +. So speed = speedPre - (accelerationSpped)
             */
            if (!currentData.isGPSEnable) {
              this.vZ = currentData.currentSpeedZ;
              this.speed = currentData.currentSpeed;
            } else {
              this.vZ = currentData.gpsSpeed;
              this.speed = currentData.gpsSpeed;
            }

            this.vZ -= this.speedChangeZ;
            this.speed -= this.speedChange;
          }

          if (currentData.isSetError) {
            this.setSpeedError(this.speed, this.vZ, currentData);
          } // reduce errors


          this.vZ -= this.errorSpeedZ;
          this.speed -= this.errorSpeed;
          this.vZ = this.vZ < 0 ? 0 : this.vZ;
          this.speed = this.speed < 0 ? 0 : this.speed;
          return this.getPoint();
        }
      }, {
        key: "setSpeedError",
        value: function setSpeedError(calculatedSpeed, calculatedSpeedZ, currentData) {
          var speedDifference = calculatedSpeed - currentData.gpsCurrentSpeed;
          var speedDifferenceZ = calculatedSpeedZ - currentData.gpsCurrentSpeed;

          if (this.errorSpeed === 0) {
            this.errorSpeed = speedDifference;
          } else {
            this.errorSpeed = (this.errorSpeed + speedDifference) / 2;
          }

          if (this.errorSpeedZ === 0) {
            this.errorSpeedZ = speedDifferenceZ;
          } else {
            this.errorSpeedZ = (this.errorSpeed + speedDifferenceZ) / 2;
          }
        }
      }, {
        key: "getAvaragePoint",
        value: function getAvaragePoint(currentData) {
          currentData.accX = currentData.accX / currentData.cnt;
          currentData.accY = currentData.accY / currentData.cnt;
          currentData.accZ = currentData.accZ / currentData.cnt;
          return currentData;
        }
      }, {
        key: "reduceError",
        value: function reduceError(currentData) {
          currentData.accX -= this.eX;
          currentData.accY -= this.eY;
          currentData.accZ -= this.eZ;
          return currentData;
        }
      }, {
        key: "setError",
        value: function setError(currentData) {
          this.eX = (this.eX + currentData.accX) / 2;
          this.eY = (this.eY + currentData.accY) / 2;
          this.eZ = (this.eZ + currentData.accZ) / 2;
        }
      }, {
        key: "getPoint",
        value: function getPoint() {
          var point = {
            currentSpeed: this.speed,
            currentSpeedZ: this.vZ,
            speedChange: this.speedChange,
            speedChangeZ: this.speedChangeZ,
            accErrorX: this.eX,
            accErrorY: this.eY,
            accErrorZ: this.eZ,
            errorSpeed: this.errorSpeed,
            errorSpeedZ: this.errorSpeedZ
          };
          return point;
        }
      }]);

      return MeasurePointService;
    }();

    MeasurePointService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MeasurePointService); //# sourceMappingURL=measure-point.service.js.map

    /***/
  },

  /***/
  "./src/app/services/measure-point.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/measure-point.service.ts ***!
    \***************************************************/

  /*! exports provided: MeasurePointService */

  /***/
  function srcAppServicesMeasurePointServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasurePointService", function () {
      return MeasurePointService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MeasurePointService =
    /*#__PURE__*/
    function () {
      function MeasurePointService() {
        _classCallCheck(this, MeasurePointService);

        this.vZ = 0;
        this.eX = 0;
        this.eY = 0;
        this.eZ = 0;
        this.errorSpeed = 0;
        this.errorSpeedZ = 0;
        this.speed = 0;
        this.speedChange = 0;
        this.speedChangeZ = 0;
      }

      _createClass(MeasurePointService, [{
        key: "calSpeed",
        value: function calSpeed(currentData) {
          currentData = this.getAvaragePoint(currentData); // currentData = this.reduceError(currentData);

          var accelerationBoth = Math.sqrt(currentData.accX * currentData.accX + currentData.accY * currentData.accY + currentData.accZ * currentData.accZ);
          this.speedChange = accelerationBoth * currentData.lapTime;
          this.speedChangeZ = Math.sqrt(currentData.accZ * currentData.accZ) * currentData.lapTime;

          if (currentData.accZ <= 0) {
            /*
            This time vihicle go ahead. so speed = speedPre + accelerationSpped. But accZ is -. So speed = speedPre - (-accelerationSpped)
             */
            if (!currentData.isGPSEnable) {
              this.vZ = currentData.currentSpeedZ;
              this.speed = currentData.currentSpeed;
            } else {
              this.vZ = currentData.gpsSpeed;
              this.speed = currentData.gpsSpeed;
            }

            this.vZ += this.speedChangeZ;
            this.speed += this.speedChange;
          } else {
            /*
            This time vihicle go ahead. so speed = speedPre - accelerationSpped. But accZ is +. So speed = speedPre - (accelerationSpped)
             */
            if (!currentData.isGPSEnable) {
              this.vZ = currentData.currentSpeedZ;
              this.speed = currentData.currentSpeed;
            } else {
              this.vZ = currentData.gpsSpeed;
              this.speed = currentData.gpsSpeed;
            }

            this.vZ -= this.speedChangeZ;
            this.speed -= this.speedChange;
          }

          if (currentData.isSetError) {
            this.setSpeedError(this.speed, this.vZ, currentData);
          } // reduce errors


          this.vZ -= this.errorSpeedZ;
          this.speed -= this.errorSpeed;
          this.vZ = this.vZ < 0 ? 0 : this.vZ;
          this.speed = this.speed < 0 ? 0 : this.speed;
          return this.getPoint();
        }
      }, {
        key: "setSpeedError",
        value: function setSpeedError(calculatedSpeed, calculatedSpeedZ, currentData) {
          var speedDifference = calculatedSpeed - currentData.gpsCurrentSpeed;
          var speedDifferenceZ = calculatedSpeedZ - currentData.gpsCurrentSpeed;

          if (this.errorSpeed === 0) {
            this.errorSpeed = speedDifference;
          } else {
            this.errorSpeed = (this.errorSpeed + speedDifference) / 2;
          }

          if (this.errorSpeedZ === 0) {
            this.errorSpeedZ = speedDifferenceZ;
          } else {
            this.errorSpeedZ = (this.errorSpeed + speedDifferenceZ) / 2;
          }
        }
      }, {
        key: "getAvaragePoint",
        value: function getAvaragePoint(currentData) {
          currentData.accX = currentData.accX / currentData.cnt;
          currentData.accY = currentData.accY / currentData.cnt;
          currentData.accZ = currentData.accZ / currentData.cnt;
          return currentData;
        }
      }, {
        key: "reduceError",
        value: function reduceError(currentData) {
          currentData.accX -= this.eX;
          currentData.accY -= this.eY;
          currentData.accZ -= this.eZ;
          return currentData;
        }
      }, {
        key: "setError",
        value: function setError(currentData) {
          this.eX = (this.eX + currentData.accX) / 2;
          this.eY = (this.eY + currentData.accY) / 2;
          this.eZ = (this.eZ + currentData.accZ) / 2;
        }
      }, {
        key: "getPoint",
        value: function getPoint() {
          var point = {
            currentSpeed: this.speed,
            currentSpeedZ: this.vZ,
            speedChange: this.speedChange,
            speedChangeZ: this.speedChangeZ,
            accErrorX: this.eX,
            accErrorY: this.eY,
            accErrorZ: this.eZ,
            errorSpeed: this.errorSpeed,
            errorSpeedZ: this.errorSpeedZ
          };
          return point;
        }
      }]);

      return MeasurePointService;
    }();

    MeasurePointService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MeasurePointService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/lahiru/Documents/Projects/ar/DEENS/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map