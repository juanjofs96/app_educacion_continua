(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding='true'>\n  <div class=\"vertical-center\">\n    <img src=\"assets/images/LogoCEC.png\" class=\"smallLogo\" />\n  </div>\n  <ion-text color=\"primary\" class=\"color-h3\">\n    <h3>Crear Cuenta</h3>\n  </ion-text>\n    <ion-list>\n      <ion-item>\n        <ion-label required position=\"stacked\">N° Cédula</ion-label>\n        <ion-input [(ngModel)]=\"id\" name=\"id\" autocomplete=\"off\" type=\"text\"><ion-icon name=\"finger-print-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label required position=\"stacked\">Nombres</ion-label>\n        <ion-input [(ngModel)]=\"name\" name=\"nombre\" autocomplete=\"off\" type=\"text\"><ion-icon name=\"person-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label required position=\"stacked\">Apellidos</ion-label>\n        <ion-input [(ngModel)]=\"apellidos\" autocomplete=\"off\" name=\"apellidos\" type=\"text\"><ion-icon name=\"people-outline\"></ion-icon></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label required position=\"stacked\">Correo electrónico</ion-label>\n        <ion-input [(ngModel)]=\"email\" autocomplete=\"off\" name=\"email\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Correo alternativo</ion-label>\n        <ion-input [(ngModel)]=\"email2\" autocomplete=\"off\" name=\"email2\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Dirección</ion-label>\n        <ion-input [(ngModel)]=\"direccion\" autocomplete=\"off\" name=\"direccion\" type=\"text\"><ion-icon name=\"globe-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"showpassword\">\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-icon slot=\"end\" color=\"primary\" name=\"eye\" (click)=\"togglePasswordText()\"></ion-icon>\n        <ion-input [(ngModel)]=\"pass1\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"!showpassword\">\n        <ion-label position=\"stacked\" >Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass1\" type=\"password\"  required></ion-input>\n        <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\" (click)=\"togglePasswordText()\"></ion-icon>\n      </ion-item>\n\n      <ion-item *ngIf=\"showpassword2\">\n        <ion-label position=\"stacked\">Repetir Contraseña</ion-label>\n        <ion-icon slot=\"end\" color=\"primary\" name=\"eye\" (click)=\"togglePasswordText2()\"></ion-icon>\n        <ion-input [(ngModel)]=\"pass2\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"!showpassword2\">\n        <ion-label position=\"stacked\" >Repetir Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass2\" type=\"password\"  required></ion-input>\n        <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\" (click)=\"togglePasswordText2()\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">N° Celular</ion-label>\n        <ion-input [(ngModel)]=\"celular\" autocomplete=\"off\" name=\"celular\" type=\"text\"><ion-icon name=\"call-outline\"></ion-icon></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label position=\"stacked\">Género</ion-label>\n      <ion-select [(ngModel)]=\"genero\" placeholder=\"Seleccione su género\" interface=\"popover\" name=\"genero\">\n        <ion-select-option value=\"M\">Masculino</ion-select-option>\n        <ion-select-option value=\"F\">Femenino</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n      <ion-item lines='none'>\n        ¿Ya tienes una cuenta?<a routerLink='/login' slot=\"end\">Inicia Sesión</a>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" color=\"primary\" class=\"ion-padding-horizontal\" (click)=\"registrar()\">Registrar</ion-button>\n    <ion-button expand=\"block\" share=\"round\" color=\"medium\" class=\"ion-padding-horizontal\" routerLink=\"/login\">Cancelar</ion-button>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #ECECEC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcbiAgfVxuXG4iXX0= */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let SignupPage = class SignupPage {
    constructor(alertController, router, route) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.name = "";
        this.pass1 = "";
        this.pass2 = "";
        this.apellidos = "";
        this.email = "";
        this.celular = "";
        this.email2 = "";
        this.direccion = "";
        this.id = "";
        this.genero = "";
        this.router.queryParams.subscribe(params => {
            this.data_aux = JSON.parse(params.user);
            this.name = this.data_aux.nombres;
            this.email = this.data_aux.correo;
            this.apellidos = this.data_aux.apellidos;
        });
    }
    ngOnInit() {
    }
    registrar() {
        this.data = {
            nombres: this.name,
            apellidos: this.apellidos,
            identificacion: this.id,
            password: this.pass1,
            correo: this.email,
            correo_alternativo: this.email2,
            telefono: this.celular,
            direccion: this.direccion,
            genero: this.genero
        };
        var self = this;
        var validado = this.validarCampos();
        if (validado && this.verificado) {
            jquery__WEBPACK_IMPORTED_MODULE_2__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "/api/participante/", this.data)
                .done(function (data) {
                self.alertError("Registro exitoso", "Su cuenta se ha creado exitosamente");
                self.route.navigate(["/educ/home/"]);
            }).fail(function (error) {
                let x = error.responseJSON;
                let isError = false;
                try {
                    x["password"][0] != null ? self.alertError("Error al registrarse", x["password"][0]) : isError = true;
                    x["correo"][0] != null ? self.alertError("Error al registrarse", x["correo"][0]) : isError = true;
                    x["identificacion"][0] != null ? self.alertError("Error al registrarse", x["identificacion"][0]) : isError = true;
                }
                catch (ex) {
                    if (!isError) {
                        self.alertError("Error al registrarse", "El registro no fue exitoso");
                    }
                }
            });
        }
        if (!validado)
            self.alertError("Campos vacíos", "Debe llenar todos los campos para poder registrarse");
    }
    togglePasswordText() {
        this.showpassword = !this.showpassword;
    }
    togglePasswordText2() {
        this.showpassword2 = !this.showpassword2;
    }
    validarCampos() {
        console.log(this.validarCedula("0954297511"));
        if (this.name != "" && this.apellidos != "" && this.id != ""
            && this.email != "" && this.genero != "" && this.pass1 != "" && this.pass2 != ""
            && this.celular != "" && this.direccion != "") {
            if (this.pass1 != this.pass2) {
                this.alertError("Verifique su clave", "Las contraseñas no coinciden");
                this.verificado = false;
            }
            else {
                this.verificado = true;
            }
            if (!this.validarCedula(this.id)) {
                this.alertError("Verifique su cédula", "La cédula no es válida");
                this.verificado = false;
            }
            else {
                this.verificado = true;
            }
            return true;
        }
        return false;
    }
    validarCedula(cedula) {
        // Preguntamos si la cedula consta de 10 digitos
        if (cedula.length === 10) {
            // Obtenemos el digito de la region que sonlos dos primeros digitos
            const digitoRegion = cedula.substring(0, 2);
            // Pregunto si la region existe ecuador se divide en 24 regiones
            if (digitoRegion >= String(1) && digitoRegion <= String(24)) {
                // Extraigo el ultimo digito
                const ultimoDigito = Number(cedula.substring(9, 10));
                // Agrupo todos los pares y los sumo
                const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
                // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
                let numeroUno = cedula.substring(0, 1);
                numeroUno = (numeroUno * 2);
                if (numeroUno > 9) {
                    numeroUno = (numeroUno - 9);
                }
                let numeroTres = cedula.substring(2, 3);
                numeroTres = (numeroTres * 2);
                if (numeroTres > 9) {
                    numeroTres = (numeroTres - 9);
                }
                let numeroCinco = cedula.substring(4, 5);
                numeroCinco = (numeroCinco * 2);
                if (numeroCinco > 9) {
                    numeroCinco = (numeroCinco - 9);
                }
                let numeroSiete = cedula.substring(6, 7);
                numeroSiete = (numeroSiete * 2);
                if (numeroSiete > 9) {
                    numeroSiete = (numeroSiete - 9);
                }
                let numeroNueve = cedula.substring(8, 9);
                numeroNueve = (numeroNueve * 2);
                if (numeroNueve > 9) {
                    numeroNueve = (numeroNueve - 9);
                }
                const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
                // Suma total
                const sumaTotal = (pares + impares);
                // extraemos el primero digito
                const primerDigitoSuma = String(sumaTotal).substring(0, 1);
                // Obtenemos la decena inmediata
                const decena = (Number(primerDigitoSuma) + 1) * 10;
                // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
                let digitoValidador = decena - sumaTotal;
                // Si el digito validador es = a 10 toma el valor de 0
                if (digitoValidador === 10) {
                    digitoValidador = 0;
                }
                // Validamos que el digito validador sea igual al de la cedula
                if (digitoValidador === ultimoDigito) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                // imprimimos en consola si la region no pertenece
                return false;
            }
        }
        else {
            // Imprimimos en consola si la cedula tiene mas o menos de 10 digitos
            return false;
        }
    }
    alertError(msg, detalle) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Mensaje',
                subHeader: detalle,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
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