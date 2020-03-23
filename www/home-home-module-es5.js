function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/@ionic-native/stepcounter/ngx/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic-native/stepcounter/ngx/index.js ***!
    \*************************************************************/

  /*! exports provided: Stepcounter */

  /***/
  function node_modulesIonicNativeStepcounterNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stepcounter", function () {
      return Stepcounter;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var Stepcounter =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Stepcounter, _super);

      function Stepcounter() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Stepcounter.prototype.start = function (startingOffset) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "start", {}, arguments);
      };

      Stepcounter.prototype.stop = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stop", {}, arguments);
      };

      Stepcounter.prototype.getTodayStepCount = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTodayStepCount", {}, arguments);
      };

      Stepcounter.prototype.getStepCount = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getStepCount", {}, arguments);
      };

      Stepcounter.prototype.deviceCanCountSteps = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deviceCanCountSteps", {}, arguments);
      };

      Stepcounter.prototype.getHistory = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getHistory", {}, arguments);
      };

      Stepcounter.pluginName = "Stepcounter";
      Stepcounter.plugin = "cordova-plugin-stepcounter";
      Stepcounter.pluginRef = "stepcounter";
      Stepcounter.repo = "https://github.com/ihadeed/cordova-plugin-stepcounter";
      Stepcounter.platforms = ["Android"];
      Stepcounter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Stepcounter);
      return Stepcounter;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0ZXBjb3VudGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDdkMsK0JBQWlCOzs7O0lBU2hELDJCQUFLLGFBQUMsY0FBc0I7SUFTNUIsMEJBQUk7SUFTSix1Q0FBaUI7SUFTakIsa0NBQVk7SUFTWix5Q0FBbUI7SUFTbkIsZ0NBQVU7Ozs7OztJQXREQyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBbEN4QjtFQWtDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgU3RlcGNvdW50ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIHVzaW5nIGRldmljZSdzIHN0ZXBjb3VudGVyIG9uIEFuZHJvaWQgKEFQSSA+IDE5KVxuICpcbiAqIFVzZSB0b1xuICogLSBzdGFydCBhbmQgc3RvcCBzdGVwY291bnRlciBzZXJ2aWNlXG4gKiAtIHJlYWQgZGV2aWNlJ3Mgc3RlcGNvdW50ZXIgZGF0YVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RlcGNvdW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0ZXBjb3VudGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGVwY291bnRlcjogU3RlcGNvdW50ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBzdGFydGluZ09mZnNldCA9IDA7XG4gKiB0aGlzLnN0ZXBjb3VudGVyLnN0YXJ0KHN0YXJ0aW5nT2Zmc2V0KS50aGVuKG9uU3VjY2VzcyA9PiBjb25zb2xlLmxvZygnc3RlcGNvdW50ZXItc3RhcnQgc3VjY2VzcycsIG9uU3VjY2VzcyksIG9uRmFpbHVyZSA9PiBjb25zb2xlLmxvZygnc3RlcGNvdW50ZXItc3RhcnQgZXJyb3InLCBvbkZhaWx1cmUpKTtcbiAqXG4gKiB0aGlzLnN0ZXBjb3VudGVyLmdldEhpc3RvcnkoKS50aGVuKGhpc3RvcnlPYmogPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3Rvcnkgc3VjY2VzcycsIGhpc3RvcnlPYmopLCBvbkZhaWx1cmUgPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3RvcnkgZXJyb3InLCBvbkZhaWx1cmUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGVwY291bnRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0ZXBjb3VudGVyJyxcbiAgcGx1Z2luUmVmOiAnc3RlcGNvdW50ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1wbHVnaW4tc3RlcGNvdW50ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBjb3VudGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgc3RlcCBjb3VudGVyXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydGluZ09mZnNldCB7bnVtYmVyfSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0b3RhbCBzdGVwcyBjb3VudGVkIGluIHRoaXMgc2Vzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0KHN0YXJ0aW5nT2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzdGVwIGNvdW50ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyBzaW5jZSB0aGUgc3RhcnQgY29tbWFuZCBoYXMgYmVlbiBjYWxsZWQsIG9yIHJlamVjdHMgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYW1vdW50IG9mIHN0ZXBzIGZvciB0b2RheSAob3IgLTEgaWYgaXQgbm8gZGF0YSBnaXZlbilcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyB0b2RheSwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRvZGF5U3RlcENvdW50KCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgd2l0aCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZCwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0ZXBDb3VudCgpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUvZmFsc2UgaWYgQW5kcm9pZCBkZXZpY2UgaXMgcnVubmluZyA+QVBJIGxldmVsIDE5ICYmIGhhcyB0aGUgc3RlcCBjb3VudGVyIEFQSSBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgYm9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2Vzcywgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRldmljZUNhbkNvdW50U3RlcHMoKTogUHJvbWlzZTxib29sZWFuIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RlcCBoaXN0b3J5IChKYXZhU2NyaXB0IG9iamVjdClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLCBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SGlzdG9yeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/step-counter/step-counter.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/step-counter/step-counter.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStepCounterStepCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  step-counter = {{stepCount}}\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-step-counter></app-step-counter>\n\n<ion-button *ngIf = isButtonView (click)=\"leaflet()\">Car Navigate</ion-button>\n<ion-button *ngIf = isButtonView (click)=\"work()\">Work</ion-button>\n<ion-button *ngIf = isButtonView (click)=\"acceleration()\">Got To Acceleration</ion-button>\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/components/step-counter/step-counter.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/step-counter/step-counter.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStepCounterStepCounterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcC1jb3VudGVyL3N0ZXAtY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/step-counter/step-counter.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/step-counter/step-counter.component.ts ***!
    \*******************************************************************/

  /*! exports provided: StepCounterComponent */

  /***/
  function srcAppComponentsStepCounterStepCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepCounterComponent", function () {
      return StepCounterComponent;
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


    var _ionic_native_stepcounter_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/stepcounter/ngx */
    "./node_modules/@ionic-native/stepcounter/ngx/index.js");

    var StepCounterComponent =
    /*#__PURE__*/
    function () {
      function StepCounterComponent(stepcounter) {
        _classCallCheck(this, StepCounterComponent);

        this.stepcounter = stepcounter;
        this.stepCount = 0;
      }

      _createClass(StepCounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var startingOffset = 0;
          this.stepcounter.start(startingOffset).then(function (onSuccess) {
            return console.log('stepcounter-start success', onSuccess);
          }, function (onFailure) {
            return console.log('stepcounter-start error', onFailure);
          });
          this.stepcounter.getHistory().then(function (historyObj) {
            return console.log('stepcounter-history success', historyObj);
          }, function (onFailure) {
            return console.log('stepcounter-history error', onFailure);
          });
          this.stepcounter.getStepCount().then(function (data) {
            return _this.stepCount = data;
          });
        }
      }]);

      return StepCounterComponent;
    }();

    StepCounterComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_stepcounter_ngx__WEBPACK_IMPORTED_MODULE_2__["Stepcounter"]
      }];
    };

    StepCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-step-counter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./step-counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/step-counter/step-counter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./step-counter.component.scss */
      "./src/app/components/step-counter/step-counter.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_stepcounter_ngx__WEBPACK_IMPORTED_MODULE_2__["Stepcounter"]])], StepCounterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _components_step_counter_step_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/step-counter/step-counter.component */
    "./src/app/components/step-counter/step-counter.component.ts");
    /* harmony import */


    var _ionic_native_stepcounter_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/stepcounter/ngx */
    "./node_modules/@ionic-native/stepcounter/ngx/index.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_step_counter_step_counter_component__WEBPACK_IMPORTED_MODULE_7__["StepCounterComponent"]],
      providers: [_ionic_native_stepcounter_ngx__WEBPACK_IMPORTED_MODULE_8__["Stepcounter"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".leaflet-control-container .leaflet-routing-container-hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xhaGlydS9Eb2N1bWVudHMvUHJvamVjdHMvYXIvREVFTlMvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxlYWZsZXQtY29udHJvbC1jb250YWluZXIgLmxlYWZsZXQtcm91dGluZy1jb250YWluZXItaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iLCIubGVhZmxldC1jb250cm9sLWNvbnRhaW5lciAubGVhZmxldC1yb3V0aW5nLWNvbnRhaW5lci1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(router) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.isButtonView = true;
      } // tslint:disable-next-line: use-lifecycle-interface


      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.addEventListener('deviceready', function () {
            alert(device.platform);
          }, false);
        }
      }, {
        key: "leaflet",
        value: function leaflet() {
          this.router.navigate(['leaflet']);
          this.isButtonView = false;
        }
      }, {
        key: "work",
        value: function work() {
          this.router.navigate(['work']);
          this.isButtonView = false;
        }
      }, {
        key: "acceleration",
        value: function acceleration() {
          this.router.navigate(['acceleration']);
          this.isButtonView = false;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map