(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"vertical-center\">\n    <img src=\"assets/images/LogoCEC.png\" class=\"smallLogo\" />\n  </div>\n  <ion-text color=\"primary\" class=\"color-h3\">\n    <h3>Iniciar Sesión</h3>\n  </ion-text>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Correo electrónico</ion-label>\n        <ion-input [(ngModel)]=\"email\" name=\"correo\" autocomplete=\"on\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass\" autocomplete=\"off\" name=\"clave\" type=\"password\"><ion-icon name=\"keypad-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <a routerLink=\"/educ/home/\" slot=\"end\">No iniciar sesión</a>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" color=\"primary\" class=\"ion-padding-horizontal\" (click)=\"login()\">Iniciar Sesión</ion-button>\n\n  <!--header class=\"ion-padding-start ion-padding-top\"></!--header-->\n  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"loginFacebook()\" class=\"ion-padding-horizontal\">\n    <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n    Iniciar Sesión con Facebook\n  </ion-button>\n\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"loginGoogle()\" class=\"ion-padding-horizontal\">\n    <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n    Iniciar Sesión con Google\n  </ion-button>\n\n  <section>\n    <header class=\"ion-padding-start ion-padding-top\">¿Eres nuevo?</header>\n    <ion-button expand=\"block\" color=\"primary\" class=\"ion-padding-horizontal\" routerLink=\"/signup\">\n      Crear nueva cuenta</ion-button>\n  </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #ECECEC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xuICB9XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");












let LoginPage = class LoginPage {
    constructor(router, platform, google, fireAuth, fb, App, alertController) {
        this.router = router;
        this.platform = platform;
        this.google = google;
        this.fireAuth = fireAuth;
        this.fb = fb;
        this.App = App;
        this.alertController = alertController;
        this.email = "";
        this.pass = "";
    }
    ngOnInit() {
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data = {
                "correo": this.email,
                "clave": this.pass
            };
            var self = this;
            yield jquery__WEBPACK_IMPORTED_MODULE_9__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "api/login_participante/", data).done(function (user) {
                if (!user.error) {
                    self.App.id_User = user.id;
                    self.habilitarOpciones();
                }
                else {
                    self.alertError(user.mensaje, "Credenciales incorrectas");
                }
            });
        });
    }
    verificarCuenta(res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            var data = {
                "correo": res['email'],
                "nombres": res['given_name'],
                "apellidos": res['family_name']
            };
            yield jquery__WEBPACK_IMPORTED_MODULE_9__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "api/existe_participante/", data).done(function (user) {
                if (!user.error) {
                    self.App.id_User = user.id;
                    self.habilitarOpciones();
                }
                else {
                    let navigationExtras = {
                        queryParams: {
                            user: JSON.stringify(data)
                        }
                    };
                    self.alertError("Complete los datos faltantes para completar su registro", "Inicio exitoso");
                    self.router.navigate(["/signup/"], navigationExtras);
                }
            });
        });
    }
    loginGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params;
            if (this.platform.is('android')) {
                params = {
                    'webClientId': '44397923925-udqfaidjvqhp8p7ule0oihpn4i3co6je.apps.googleusercontent.com',
                    'offline': true
                };
                this.google.login(params)
                    .then((response) => {
                    const { idToken, accessToken } = response;
                    this.onLoginSuccess(idToken, accessToken);
                }).catch((error) => {
                    console.log(error);
                    alert('error:' + JSON.stringify(error));
                });
            }
            else {
                this.loginGoogleWeb();
            }
        });
    }
    loginFacebook() {
        if (this.platform.is('android')) {
            this.loginFacebookAndroid();
        }
        else {
            this.loginFacebookWeb();
        }
    }
    loginGoogleWeb() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.fireAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
            this.verificarCuenta(res.additionalUserInfo.profile);
        });
    }
    loginFacebookAndroid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.fb.login(['public_profile', 'email']);
            const facebookCredential = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
            const resConfirmed = yield this.fireAuth.auth.signInWithCredential(facebookCredential);
            this.verificarCuenta(resConfirmed.additionalUserInfo.profile);
        });
    }
    loginFacebookWeb() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.fireAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider());
            this.verificarCuenta(res.additionalUserInfo.profile);
        });
    }
    onLoginSuccess(accessToken, accessSecret) {
        const credential = accessSecret ? firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider
            .credential(accessToken, accessSecret) : firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider
            .credential(accessToken);
        this.fireAuth.auth.signInWithCredential(credential)
            .then((response) => {
            this.verificarCuenta(response.additionalUserInfo.profile);
        });
    }
    habilitarOpciones() {
        this.App.estadoUser = true;
        for (let i = 0; i < this.App.listMenu.length; i++) {
            this.App.listMenu[i].disable = false;
        }
        for (let i = 0; i < this.App.listTabs.length; i++) {
            this.App.listTabs[i].disable = false;
        }
        this.router.navigate(["/educ/home/"]);
    }
    alertError(msg, msg2) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: msg2,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map