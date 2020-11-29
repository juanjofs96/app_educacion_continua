(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificaciones/notificaciones.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolhead\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list lines=\"full\" >\n    <ion-item *ngFor=\"let list of listNotificaciones\">\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"list.imagen\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h3>{{list.titulo}}</h3>\n        <p>{{list.descripcion}}</p>\n          <p>{{list.fecha}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

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
    ngOnInit() {
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
            yield jquery__WEBPACK_IMPORTED_MODULE_5__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "api/notificaciones_participante/", data).done(function (notificacion) {
                if (!notificacion.error) {
                    self.listNotificaciones = notificacion.notificaciones;
                }
                else {
                    self.alertNotificacion(notificacion.mensaje);
                }
            });
        });
    }
    alertNotificacion(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Mensaje',
                subHeader: 'Sin Notificaciones',
                message: mensaje,
                buttons: ['OK']
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