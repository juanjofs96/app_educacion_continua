(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cursos-cursos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cursos/cursos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cursos/cursos.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolhead\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mis Cursos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let list of listCursos\" [routerLink]=\"['/educ/cursos',list.id_curso]\">\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"list.imagen\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h3>{{list.titulo}}</h3>\n        <p>{{list.fecha}}</p>\n        <ion-text color=\"{{list.color}}\">\n          <p>{{list.estado}}</p>\n        </ion-text>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/cursos/cursos-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cursos/cursos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CursosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageRoutingModule", function() { return CursosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cursos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursos.page */ "./src/app/cursos/cursos.page.ts");




const routes = [
    {
        path: '',
        component: _cursos_page__WEBPACK_IMPORTED_MODULE_3__["CursosPage"]
    }
];
let CursosPageRoutingModule = class CursosPageRoutingModule {
};
CursosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursosPageRoutingModule);



/***/ }),

/***/ "./src/app/cursos/cursos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/cursos/cursos.module.ts ***!
  \*****************************************/
/*! exports provided: CursosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageModule", function() { return CursosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos-routing.module */ "./src/app/cursos/cursos-routing.module.ts");
/* harmony import */ var _cursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursos.page */ "./src/app/cursos/cursos.page.ts");







let CursosPageModule = class CursosPageModule {
};
CursosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosPageRoutingModule"]
        ],
        declarations: [_cursos_page__WEBPACK_IMPORTED_MODULE_6__["CursosPage"]]
    })
], CursosPageModule);



/***/ }),

/***/ "./src/app/cursos/cursos.page.scss":
/*!*****************************************!*\
  !*** ./src/app/cursos/cursos.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvcy9jdXJzb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cursos/cursos.page.ts":
/*!***************************************!*\
  !*** ./src/app/cursos/cursos.page.ts ***!
  \***************************************/
/*! exports provided: CursosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPage", function() { return CursosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let CursosPage = class CursosPage {
    constructor(App, alertController, router) {
        this.App = App;
        this.alertController = alertController;
        this.router = router;
        this.listCursos = [];
    }
    ionViewDidEnter() {
        this.listCursos = [];
        this.find = false;
        if (this.App.id_User != null) {
            this.getCursos();
        }
    }
    getCursos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            yield jquery__WEBPACK_IMPORTED_MODULE_2__["getJSON"]("https://prueba-63695.firebaseio.com/cursos.json", function (data_cursos) {
                jquery__WEBPACK_IMPORTED_MODULE_2__["getJSON"]("https://prueba-63695.firebaseio.com/usuarios.json", function (data_users) {
                    for (let i = 0; i < data_users.length; i++) {
                        for (let j = 0; j < data_cursos.length; j++) {
                            if (data_users[i].id_user == data_cursos[j].id_user && data_users[i].id_user == self.App.id_User) {
                                self.listCursos.push(data_cursos[j]);
                                self.find = true;
                            }
                        }
                    }
                    if (!self.find) {
                        self.alertCurso();
                    }
                });
            });
        });
    }
    alertCurso() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Mensaje',
                subHeader: 'Sin cursos registrados',
                message: 'Usted no pertenece a ningún curso',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
CursosPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CursosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cursos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cursos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cursos/cursos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cursos.page.scss */ "./src/app/cursos/cursos.page.scss")).default]
    })
], CursosPage);



/***/ })

}]);
//# sourceMappingURL=cursos-cursos-module-es2015.js.map