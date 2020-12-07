(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolhead\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Notificaciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list lines=\"full\">\r\n    <button style=\"width: 100%;\">\r\n      <ion-item (click)=\"alertDetalle(i)\" *ngFor=\"let list of listNotificaciones;let i = index\" [attr.data-index]=\"i\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-img [src]=\"list.imagen\"></ion-img>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>{{list.titulo}}</h3>\r\n          <p>{{list.descripcion}}</p>\r\n          <p>{{list.fecha}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </button>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/notificaciones/notificaciones-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/notificaciones/notificaciones-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function() { return NotificacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificaciones.page */ "./src/app/notificaciones/notificaciones.page.ts");




const routes = [
    {
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
    }
];
let NotificacionesPageRoutingModule = class NotificacionesPageRoutingModule {
};
NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificacionesPageRoutingModule);



/***/ }),

/***/ "./src/app/notificaciones/notificaciones.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.module.ts ***!
  \*********************************************************/
/*! exports provided: NotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function() { return NotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificaciones-routing.module */ "./src/app/notificaciones/notificaciones-routing.module.ts");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones.page */ "./src/app/notificaciones/notificaciones.page.ts");







let NotificacionesPageModule = class NotificacionesPageModule {
};
NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"]
        ],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
    })
], NotificacionesPageModule);



/***/ }),

/***/ "./src/app/notificaciones/notificaciones.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/notificaciones/notificaciones.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.ts ***!
  \*******************************************************/
/*! exports provided: NotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function() { return NotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







let NotificacionesPage = class NotificacionesPage {
    constructor(App, alertController, router) {
        this.App = App;
        this.alertController = alertController;
        this.router = router;
        this.listNotificaciones = [];
    }
    ionViewDidEnter() {
        this.listNotificaciones = [];
        if (this.App.id_User != null) {
            this.getNotificaciones();
        }
    }
    getNotificaciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            var data = {
                "id": this.App.id_User
            };
            yield jquery__WEBPACK_IMPORTED_MODULE_5__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "/api/notificaciones_participante/", data).done(function (notificacion) {
                if (!notificacion.error) {
                    self.listNotificaciones = notificacion.notificaciones;
                    for (let i = 0; i < self.listNotificaciones.length; i++) {
                        self.listNotificaciones[i].imagen = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + self.listNotificaciones[i].imagen;
                    }
                }
                else {
                    self.alertNotificacion('Sin Notificaciones', notificacion.mensaje);
                }
            });
        });
    }
    alertNotificacion(msg, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: msg,
                message: mensaje,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    remover(id_notificacion) {
        var self = this;
        let data = {
            "id_notificacion_participante": id_notificacion,
            "estado": false
        };
        jquery__WEBPACK_IMPORTED_MODULE_5__["ajax"]({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "/api/actualizar_notificacion/",
            data: data,
            type: 'PATCH',
            success: function (notificacion) {
                if (!notificacion.error) {
                    self.alertNotificacion("Notificación eliminada", notificacion.mensaje);
                }
                else {
                    self.alertNotificacion("Error", notificacion.mensaje);
                }
            }
        });
    }
    alertDetalle(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                buttons: [{ text: 'Remover', handler: () => { this.remover(this.listNotificaciones[index].id_notificacion_participante); } }, { text: 'Cerrar' }],
                message: `
    <img src="${this.listNotificaciones[index].imagen}" style="width:80%; height:80%; border-radius: 2px">
    <ion-item>
      <ion-text> <b>${this.listNotificaciones[index].titulo} </b> </ion-text>
    </ion-item>
    <ion-item>
      <ion-text> ${this.listNotificaciones[index].descripcion} </ion-text>
    </ion-item>`,
            });
            yield alert.present();
        });
    }
};
NotificacionesPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notificaciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notificaciones.page.scss */ "./src/app/notificaciones/notificaciones.page.scss")).default]
    })
], NotificacionesPage);



/***/ })

}]);
//# sourceMappingURL=notificaciones-notificaciones-module-es2015.js.map