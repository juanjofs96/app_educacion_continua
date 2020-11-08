(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding='true'>\n  <div class=\"vertical-center\">\n    <img src=\"assets/images/LogoCEC.png\" class=\"smallLogo\" />\n  </div>\n  <ion-text color=\"primary\" class=\"color-h3\">\n    <h3>Crear Cuenta</h3>\n  </ion-text>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Nombres</ion-label>\n        <ion-input [(ngModel)]=\"name\" name=\"nombre\" autocomplete=\"on\" type=\"email\"><ion-icon name=\"accessibility-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Correo electrónico</ion-label>\n        <ion-input [(ngModel)]=\"email\" autocomplete=\"on\" name=\"correo\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Usuario</ion-label>\n        <ion-input [(ngModel)]=\"user\" autocomplete=\"off\" name=\"usuario\" type=\"text\"><ion-icon name=\"person-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass\" autocomplete=\"off\" name=\"pass\" type=\"password\"><ion-icon name=\"finger-print-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">N° Celular</ion-label>\n        <ion-input [(ngModel)]=\"celular\" autocomplete=\"off\" name=\"celular\" type=\"number\"><ion-icon name=\"call-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item lines='none'>\n        ¿Ya tienes una cuenta? <a routerLink='/login'> Inicia Sesión</a>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" color=\"primary\" class=\"ion-padding-horizontal\" routerLink=\"/educ/home/\" (click)=\"registrar()\">Registrar</ion-button>\n    <ion-button expand=\"block\" share=\"round\" color=\"medium\" class=\"ion-padding-horizontal\" routerLink=\"/login\">Cancelar</ion-button>\n  </form>\n</ion-content>");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding='true'>\r\n  <div class=\"vertical-center\">\r\n    <img src=\"assets/images/LogoCEC.png\" class=\"smallLogo\" />\r\n  </div>\r\n  <ion-text color=\"primary\" class=\"color-h3\">\r\n    <h3>Crear Cuenta</h3>\r\n  </ion-text>\r\n  <form>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nombres</ion-label>\r\n        <ion-input [(ngModel)]=\"name\" name=\"nombre\" autocomplete=\"on\" type=\"email\"><ion-icon name=\"accessibility-outline\"></ion-icon></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Correo electrónico</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" autocomplete=\"on\" name=\"correo\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Usuario</ion-label>\r\n        <ion-input [(ngModel)]=\"user\" autocomplete=\"off\" name=\"usuario\" type=\"text\"><ion-icon name=\"person-outline\"></ion-icon></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Contraseña</ion-label>\r\n        <ion-input [(ngModel)]=\"pass\" autocomplete=\"off\" name=\"pass\" type=\"password\"><ion-icon name=\"finger-print-outline\"></ion-icon></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">N° Celular</ion-label>\r\n        <ion-input [(ngModel)]=\"celular\" autocomplete=\"off\" name=\"celular\" type=\"number\"><ion-icon name=\"call-outline\"></ion-icon></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines='none'>\r\n        ¿Ya tienes una cuenta? <a routerLink='/login'> Inicia Sesión</a>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"block\" share=\"round\" color=\"primary\" class=\"ion-padding-horizontal\" routerLink=\"/educ/home/\" (click)=\"registrar()\">Registrar</ion-button>\r\n    <ion-button expand=\"block\" share=\"round\" color=\"medium\" class=\"ion-padding-horizontal\" routerLink=\"/login\">Cancelar</ion-button>\r\n  </form>\r\n</ion-content>");
>>>>>>> e8cf59b916c0ab5e35202fa36dd07789421dc008

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #ECECEC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xyXG4gIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let SignupPage = class SignupPage {
    constructor() {
        this.name = "";
        this.pass = "";
        this.user = "";
        this.email = "";
    }
    ngOnInit() {
    }
    registrar() {
        this.data = {
            nombres: this.name,
            pass: this.pass,
            user: this.user,
            email: this.email,
            celular: this.celular,
            id_user: Date.now()
        };
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__["getJSON"]("https://prueba-63695.firebaseio.com/usuarios.json", function (data) {
            var x = data.length;
            jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"]({
                url: 'https://prueba-63695.firebaseio.com/usuarios/' + x + '.json',
                data: JSON.stringify(self.data),
                type: 'PATCH',
                contentType: 'application/json',
                processData: false,
                dataType: 'json'
            });
        });
    }
};
SignupPage.ctorParameters = () => [];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map