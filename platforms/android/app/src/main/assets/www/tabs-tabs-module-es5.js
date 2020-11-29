(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "./src/app/tabs/tabs-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var routes = [{
        path: 'educ',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-home-module */
            "home-home-module").then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "./src/app/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'cursos',
          children: [{
            path: "",
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | cursos-cursos-module */
              [__webpack_require__.e("default~cursos-cursos-module~detalle-curso-detalle-curso-module~notificaciones-notificaciones-module~ae7a5e1c"), __webpack_require__.e("cursos-cursos-module")]).then(__webpack_require__.bind(null,
              /*! ../cursos/cursos.module */
              "./src/app/cursos/cursos.module.ts")).then(function (m) {
                return m.CursosPageModule;
              });
            }
          }, {
            path: ':id_curso',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | detalle-curso-detalle-curso-module */
              [__webpack_require__.e("default~cursos-cursos-module~detalle-curso-detalle-curso-module~notificaciones-notificaciones-module~ae7a5e1c"), __webpack_require__.e("detalle-curso-detalle-curso-module")]).then(__webpack_require__.bind(null,
              /*! ../detalle-curso/detalle-curso.module */
              "./src/app/detalle-curso/detalle-curso.module.ts")).then(function (m) {
                return m.DetalleCursoPageModule;
              });
            }
          }]
        }, {
          path: 'notificaciones',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | notificaciones-notificaciones-module */
            [__webpack_require__.e("default~cursos-cursos-module~detalle-curso-detalle-curso-module~notificaciones-notificaciones-module~ae7a5e1c"), __webpack_require__.e("notificaciones-notificaciones-module")]).then(__webpack_require__.bind(null,
            /*! ../notificaciones/notificaciones.module */
            "./src/app/notificaciones/notificaciones.module.ts")).then(function (m) {
              return m.NotificacionesPageModule;
            });
          }
        }, {
          path: 'encuestas',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | encuestas-encuestas-module */
            "encuestas-encuestas-module").then(__webpack_require__.bind(null,
            /*! ../encuestas/encuestas.module */
            "./src/app/encuestas/encuestas.module.ts")).then(function (m) {
              return m.EncuestasPageModule;
            });
          }
        }, {
          path: 'contacto',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | contacto-contacto-module */
            "contacto-contacto-module").then(__webpack_require__.bind(null,
            /*! ../contacto/contacto.module */
            "./src/app/contacto/contacto.module.ts")).then(function (m) {
              return m.ContactoPageModule;
            });
          }
        }, {
          path: 'sugerencias',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | sugerencias-sugerencias-module */
            [__webpack_require__.e("default~cursos-cursos-module~detalle-curso-detalle-curso-module~notificaciones-notificaciones-module~ae7a5e1c"), __webpack_require__.e("sugerencias-sugerencias-module")]).then(__webpack_require__.bind(null,
            /*! ../sugerencias/sugerencias.module */
            "./src/app/sugerencias/sugerencias.module.ts")).then(function (m) {
              return m.SugerenciasPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/educ/home',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/educ/home',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map