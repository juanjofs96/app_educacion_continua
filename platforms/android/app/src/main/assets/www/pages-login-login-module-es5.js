(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"vertical-center\">\n    <img src=\"assets/images/LogoCEC.png\" class=\"smallLogo\" />\n  </div>\n  <ion-text color=\"primary\" class=\"color-h3\">\n    <h3>Iniciar Sesión</h3>\n  </ion-text>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Correo electrónico</ion-label>\n        <ion-input [(ngModel)]=\"email\" name=\"correo\" autocomplete=\"on\" type=\"email\"><ion-icon name=\"mail-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input [(ngModel)]=\"pass\" autocomplete=\"off\" name=\"clave\" type=\"password\"><ion-icon name=\"keypad-outline\"></ion-icon></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <a routerLink=\"/educ/home/\" slot=\"end\">No iniciar sesión</a>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" color=\"primary\" class=\"ion-padding-horizontal\" (click)=\"login()\">Iniciar Sesión</ion-button>\n\n  <!--header class=\"ion-padding-start ion-padding-top\"></!--header-->\n  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"loginFacebook()\" class=\"ion-padding-horizontal\">\n    <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n    Iniciar Sesión con Facebook\n  </ion-button>\n\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"loginGoogle()\" class=\"ion-padding-horizontal\">\n    <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n    Iniciar Sesión con Google\n  </ion-button>\n\n  <section>\n    <header class=\"ion-padding-start ion-padding-top\">¿Eres nuevo?</header>\n    <ion-button expand=\"block\" color=\"primary\" class=\"ion-padding-horizontal\" routerLink=\"/signup\">\n      Crear nueva cuenta</ion-button>\n  </section>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot()],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #ECECEC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xuICB9XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jquery */
      "./node_modules/jquery/dist/jquery.js");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, platform, google, fireAuth, fb, App, alertController) {
          _classCallCheck(this, LoginPage);

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

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data, self, url;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = {
                        "correo": this.email,
                        "clave": this.pass
                      };
                      self = this;
                      url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/login_participante/";
                      _context.next = 5;
                      return jquery__WEBPACK_IMPORTED_MODULE_9__["post"](url, data).done(function (user) {
                        if (!user.error) {
                          self.App.id_User = user.id;
                          self.habilitarOpciones();
                          self.App.storage.set("user", data.correo);
                          self.App.storage.set("pass", data.clave);
                          self.App.storage.set("id", user.id);
                          self.App.storage.get("id").then(function (value) {
                            console.log(value);
                          });
                        } else {
                          self.alertError(user.mensaje, "Credenciales incorrectas");
                        }
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "verificarCuenta",
          value: function verificarCuenta(res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var self, data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      self = this;
                      data = {
                        "correo": res['email'],
                        "nombres": res['given_name'],
                        "apellidos": res['family_name']
                      };
                      _context2.next = 4;
                      return jquery__WEBPACK_IMPORTED_MODULE_9__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/existe_participante/", data).done(function (user) {
                        if (!user.error) {
                          self.App.id_User = user.id;
                          self.habilitarOpciones();
                        } else {
                          var navigationExtras = {
                            queryParams: {
                              user: JSON.stringify(data)
                            }
                          };
                          self.alertError("Complete los datos faltantes para completar su registro", "Inicio exitoso");
                          self.router.navigate(["/signup/"], navigationExtras);
                        }
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loginGoogle",
          value: function loginGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var params;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.platform.is('android')) {
                        params = {
                          'webClientId': '44397923925-udqfaidjvqhp8p7ule0oihpn4i3co6je.apps.googleusercontent.com',
                          'offline': true
                        };
                        this.google.login(params).then(function (response) {
                          var idToken = response.idToken,
                              accessToken = response.accessToken;

                          _this.onLoginSuccess(idToken, accessToken);
                        })["catch"](function (error) {
                          console.log(error);
                          alert('error:' + JSON.stringify(error));
                        });
                      } else {
                        this.loginGoogleWeb();
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loginFacebook",
          value: function loginFacebook() {
            if (this.platform.is('android')) {
              this.loginFacebookAndroid();
            } else {
              this.loginFacebookWeb();
            }
          }
        }, {
          key: "loginGoogleWeb",
          value: function loginGoogleWeb() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var res;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.fireAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());

                    case 2:
                      res = _context4.sent;
                      this.verificarCuenta(res.additionalUserInfo.profile);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "loginFacebookAndroid",
          value: function loginFacebookAndroid() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var res, facebookCredential, resConfirmed;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.fb.login(['public_profile', 'email']);

                    case 2:
                      res = _context5.sent;
                      facebookCredential = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                      _context5.next = 6;
                      return this.fireAuth.auth.signInWithCredential(facebookCredential);

                    case 6:
                      resConfirmed = _context5.sent;
                      this.verificarCuenta(resConfirmed.additionalUserInfo.profile);

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "loginFacebookWeb",
          value: function loginFacebookWeb() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var res;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.fireAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider());

                    case 2:
                      res = _context6.sent;
                      this.verificarCuenta(res.additionalUserInfo.profile);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onLoginSuccess",
          value: function onLoginSuccess(accessToken, accessSecret) {
            var _this2 = this;

            var credential = accessSecret ? firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider.credential(accessToken, accessSecret) : firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider.credential(accessToken);
            this.fireAuth.auth.signInWithCredential(credential).then(function (response) {
              _this2.verificarCuenta(response.additionalUserInfo.profile);
            });
          }
        }, {
          key: "habilitarOpciones",
          value: function habilitarOpciones() {
            this.App.estadoUser = true;

            for (var i = 0; i < this.App.listMenu.length; i++) {
              this.App.listMenu[i].disable = false;
            }

            for (var _i = 0; _i < this.App.listTabs.length; _i++) {
              this.App.listTabs[_i].disable = false;
            }

            this.router.navigate(["/educ/home/"]);
          }
        }, {
          key: "alertError",
          value: function alertError(msg, msg2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        header: msg2,
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map