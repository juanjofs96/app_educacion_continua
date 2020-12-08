(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["encuestas-encuestas-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/encuestas/encuestas.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/encuestas/encuestas.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEncuestasEncuestasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"toolhead\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Encuestas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/encuestas/encuestas-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/encuestas/encuestas-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: EncuestasPageRoutingModule */

    /***/
    function srcAppEncuestasEncuestasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncuestasPageRoutingModule", function () {
        return EncuestasPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _encuestas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./encuestas.page */
      "./src/app/encuestas/encuestas.page.ts");

      var routes = [{
        path: '',
        component: _encuestas_page__WEBPACK_IMPORTED_MODULE_3__["EncuestasPage"]
      }];

      var EncuestasPageRoutingModule = function EncuestasPageRoutingModule() {
        _classCallCheck(this, EncuestasPageRoutingModule);
      };

      EncuestasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EncuestasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/encuestas/encuestas.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/encuestas/encuestas.module.ts ***!
      \***********************************************/

    /*! exports provided: EncuestasPageModule */

    /***/
    function srcAppEncuestasEncuestasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncuestasPageModule", function () {
        return EncuestasPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./encuestas-routing.module */
      "./src/app/encuestas/encuestas-routing.module.ts");
      /* harmony import */


      var _encuestas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./encuestas.page */
      "./src/app/encuestas/encuestas.page.ts");

      var EncuestasPageModule = function EncuestasPageModule() {
        _classCallCheck(this, EncuestasPageModule);
      };

      EncuestasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EncuestasPageRoutingModule"]],
        declarations: [_encuestas_page__WEBPACK_IMPORTED_MODULE_6__["EncuestasPage"]]
      })], EncuestasPageModule);
      /***/
    },

    /***/
    "./src/app/encuestas/encuestas.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/encuestas/encuestas.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppEncuestasEncuestasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuY3Vlc3Rhcy9lbmN1ZXN0YXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/encuestas/encuestas.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/encuestas/encuestas.page.ts ***!
      \*********************************************/

    /*! exports provided: EncuestasPage */

    /***/
    function srcAppEncuestasEncuestasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncuestasPage", function () {
        return EncuestasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EncuestasPage = /*#__PURE__*/function () {
        function EncuestasPage() {
          _classCallCheck(this, EncuestasPage);
        }

        _createClass(EncuestasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EncuestasPage;
      }();

      EncuestasPage.ctorParameters = function () {
        return [];
      };

      EncuestasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encuestas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./encuestas.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/encuestas/encuestas.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./encuestas.page.scss */
        "./src/app/encuestas/encuestas.page.scss"))["default"]]
      })], EncuestasPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=encuestas-encuestas-module-es5.js.map