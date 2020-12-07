(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNotificacionesNotificacionesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolhead\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Notificaciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list lines=\"full\">\r\n    <button style=\"width: 100%;\">\r\n      <ion-item (click)=\"alertDetalle(i)\" *ngFor=\"let list of listNotificaciones;let i = index\" [attr.data-index]=\"i\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-img [src]=\"list.imagen\"></ion-img>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>{{list.titulo}}</h3>\r\n          <p>{{list.descripcion}}</p>\r\n          <p>{{list.fecha}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </button>\r\n  </ion-list>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/notificaciones/notificaciones-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NotificacionesPageRoutingModule */

    /***/
    function srcAppNotificacionesNotificacionesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function () {
        return NotificacionesPageRoutingModule;
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


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notificaciones.page */
      "./src/app/notificaciones/notificaciones.page.ts");

      var routes = [{
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
      }];

      var NotificacionesPageRoutingModule = function NotificacionesPageRoutingModule() {
        _classCallCheck(this, NotificacionesPageRoutingModule);
      };

      NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificacionesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/notificaciones/notificaciones.module.ts ***!
      \*********************************************************/

    /*! exports provided: NotificacionesPageModule */

    /***/
    function srcAppNotificacionesNotificacionesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function () {
        return NotificacionesPageModule;
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


      var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notificaciones-routing.module */
      "./src/app/notificaciones/notificaciones-routing.module.ts");
      /* harmony import */


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notificaciones.page */
      "./src/app/notificaciones/notificaciones.page.ts");

      var NotificacionesPageModule = function NotificacionesPageModule() {
        _classCallCheck(this, NotificacionesPageModule);
      };

      NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"]],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
      })], NotificacionesPageModule);
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/notificaciones/notificaciones.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNotificacionesNotificacionesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/notificaciones/notificaciones.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/notificaciones/notificaciones.page.ts ***!
      \*******************************************************/

    /*! exports provided: NotificacionesPage */

    /***/
    function srcAppNotificacionesNotificacionesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function () {
        return NotificacionesPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var NotificacionesPage = /*#__PURE__*/function () {
        function NotificacionesPage(App, alertController, router) {
          _classCallCheck(this, NotificacionesPage);

          this.App = App;
          this.alertController = alertController;
          this.router = router;
          this.listNotificaciones = [];
        }

        _createClass(NotificacionesPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.listNotificaciones = [];

            if (this.App.id_User != null) {
              this.getNotificaciones();
            }
          }
        }, {
          key: "getNotificaciones",
          value: function getNotificaciones() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var self, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self = this;
                      data = {
                        "id": this.App.id_User
                      };
                      _context.next = 4;
                      return jquery__WEBPACK_IMPORTED_MODULE_5__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "/api/notificaciones_participante/", data).done(function (notificacion) {
                        if (!notificacion.error) {
                          self.listNotificaciones = notificacion.notificaciones;

                          for (var i = 0; i < self.listNotificaciones.length; i++) {
                            self.listNotificaciones[i].imagen = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + self.listNotificaciones[i].imagen;
                          }
                        } else {
                          self.alertNotificacion('Sin Notificaciones', notificacion.mensaje);
                        }
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "alertNotificacion",
          value: function alertNotificacion(msg, mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: msg,
                        message: mensaje,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "remover",
          value: function remover(id_notificacion) {
            var self = this;
            var data = {
              "id_notificacion_participante": id_notificacion,
              "estado": false
            };
            jquery__WEBPACK_IMPORTED_MODULE_5__["ajax"]({
              url: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "/api/actualizar_notificacion/",
              data: data,
              type: 'PATCH',
              success: function success(notificacion) {
                if (!notificacion.error) {
                  self.alertNotificacion("Notificación eliminada", notificacion.mensaje);
                } else {
                  self.alertNotificacion("Error", notificacion.mensaje);
                }
              }
            });
          }
        }, {
          key: "alertDetalle",
          value: function alertDetalle(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        buttons: [{
                          text: 'Remover',
                          handler: function handler() {
                            _this.remover(_this.listNotificaciones[index].id_notificacion_participante);
                          }
                        }, {
                          text: 'Cerrar'
                        }],
                        message: "\n    <img src=\"".concat(this.listNotificaciones[index].imagen, "\" style=\"width:80%; height:80%; border-radius: 2px\">\n    <ion-item>\n      <ion-text> <b>").concat(this.listNotificaciones[index].titulo, " </b> </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text> ").concat(this.listNotificaciones[index].descripcion, " </ion-text>\n    </ion-item>")
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return NotificacionesPage;
      }();

      NotificacionesPage.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notificaciones.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notificaciones.page.scss */
        "./src/app/notificaciones/notificaciones.page.scss"))["default"]]
      })], NotificacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notificaciones-notificaciones-module-es5.js.map