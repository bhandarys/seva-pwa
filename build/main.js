webpackJsonp([14],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtuLoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otu_device_otu_device__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the OtuLoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OtuLoggerProvider = /** @class */ (function () {
    function OtuLoggerProvider(fba, firestore, unique, platform) {
        this.fba = fba;
        this.firestore = firestore;
        this.unique = unique;
        this.platform = platform;
        this.events = ['Itinerary clicked'];
        this.location = {};
        console.log('Hello OtuLoggerProvider Provider');
    }
    OtuLoggerProvider.prototype.eventLog = function (event, code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("eventLog");
                if (this.platform.is('cordova')) {
                    this.eventLogFB(event, code);
                    this.eventLogFS(event, code);
                    console.log("On device");
                }
                else {
                    console.log("On Windows");
                }
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider.prototype.eventLogFS = function (event, code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Need to figure out a way by which this info can be provided without specific permission
                // if(this.device == undefined) {
                // this.device = this.unique.getDeviceId().then((d) => {
                this.device = {};
                this.saveEvent(event, code, 'Success');
                console.log('eventLogFS is success');
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider.prototype.eventLogFB = function (event, code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                code['timestamp'] = new Date();
                this.fba.logEvent(event, {
                    code: code
                }).then(function (s) {
                    console.log("Success");
                    console.log(s);
                }, function (e) {
                    console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider.prototype.saveEvent = function (event, code, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.firestore.eventLog({
                    event: event,
                    code: code,
                    device: this.device,
                    readStatus: e,
                    location: this.location
                });
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_0__firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_3__otu_device_otu_device__["a" /* OtuDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */]])
    ], OtuLoggerProvider);
    return OtuLoggerProvider;
}());

//# sourceMappingURL=otu-logger.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otu_config_otu_config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsernameValidator = /** @class */ (function () {
    function UsernameValidator(firestore, config) {
        this.firestore = firestore;
        this.config = config;
    }
    UsernameValidator.prototype.checkReference = function (control) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.getUser(control.value).valueChanges().subscribe(function (u) {
                if (u != undefined && u.length > 0 && u[0]['canAdd'] != undefined && u[0]['canAdd'].length > 0) {
                    _this.firestore.setReferenceId(u[0]['id']);
                    resolve(null);
                }
                else {
                    resolve('Not a valid reference');
                }
            });
            resolve(null);
        });
    };
    UsernameValidator.checkUsername = function (control) {
        return new Promise(function (resolve) {
            //Fake a slow response from server
            setTimeout(function () {
                if (control.value.toLowerCase() === "greg") {
                    resolve({
                        "username taken": true
                    });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    UsernameValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], UsernameValidator);
    return UsernameValidator;
}());

//# sourceMappingURL=username.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_otu_auth_otu_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('loginPage Constructor');
        this.loginForm = formBuilder.group({
            email: ['alfresco@seva.com', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['password', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.login(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\src\seva\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <header title="Login"></header>\n\n</ion-header>\n\n\n\n<!-- <ion-content padding id="signInPage">\n\n  <h3>Sign In to IonFire Chat</h3>\n\n\n\n  <div id="signInForm">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>User Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="loginForm.userName"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <button ion-button large block (click)="loginUser()">Sign In</button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n<div>\n\n  <h2>This is the new bit</h2>\n\n  <user-profile></user-profile>\n\n</div>\n\n\n\n\n\n</ion-content> -->\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="loginForm" (submit)="loginUser()">\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input #email formControlName="email" type="email" placeholder="Your email address"\n\n      [class.invalid]="!loginForm.controls.email.valid &&\n\n      loginForm.controls.email.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n\n      loginForm.controls.email.dirty">\n\n      <p>Please enter a valid email.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Password</ion-label>\n\n      <ion-input #password formControlName="password" type="password" placeholder="Your password"\n\n        [class.invalid]="!loginForm.controls.password.valid &&\n\n        loginForm.controls.password.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n\n      loginForm.controls.password.dirty">\n\n      <p>Your password needs more than 6 characters.</p>\n\n    </ion-item>\n\n    <button  [disabled]="!loginForm.valid" ion-button block type="submit">\n\n      Login\n\n    </button>\n\n  </form>\n\n\n\n  <button ion-button block clear (click)="goToResetPassword()">\n\n    I forgot my password 🙁\n\n  </button>\n\n\n\n  <button ion-button block clear (click)="createAccount()">\n\n    Create a new account\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\src\seva\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/am-home/am-home.module": [
		611,
		3
	],
	"../pages/approval/approval.module": [
		612,
		11
	],
	"../pages/dyna/dyna.module": [
		623,
		1
	],
	"../pages/error/error.module": [
		613,
		13
	],
	"../pages/form/form.module": [
		614,
		0
	],
	"../pages/fresco/fresco.module": [
		622,
		10
	],
	"../pages/genric-popup/genric-popup.module": [
		615,
		9
	],
	"../pages/itinerary/itinerary.module": [
		624,
		8
	],
	"../pages/login/login.module": [
		616,
		12
	],
	"../pages/reset-password/reset-password.module": [
		617,
		7
	],
	"../pages/signup/signup.module": [
		618,
		6
	],
	"../pages/sp-home/sp-home.module": [
		619,
		5
	],
	"../pages/user-home/user-home.module": [
		620,
		2
	],
	"../pages/user-itinerary/user-itinerary.module": [
		621,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtuDeviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the OtuDeviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OtuDeviceProvider = /** @class */ (function () {
    function OtuDeviceProvider(uniqueDeviceID, androidPermissions) {
        this.uniqueDeviceID = uniqueDeviceID;
        this.androidPermissions = androidPermissions;
        console.log('Hello OtuDeviceProvider Provider');
    }
    // getUniqueIds() {
    //   let uidDetails = {UUID: this.uid.UUID ? this.uid.UUID:'',
    //   IMEI: this.uid.IMEI ? this.uid.IMEI:'',
    //   IMSI: this.uid.IMSI ? this.uid.IMSI: '',
    //   ICCID: this.uid.ICCID ? this.uid.ICCID: '',
    //   MAC: this.uid.MAC ? this.uid.MAC.toString(): ''};
    //   return uidDetails;
    // }
    OtuDeviceProvider.prototype.getDeviceInfo = function () {
        var _this = this;
        return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
            .then(function () {
            var i = _this.getDeviceId();
            // alert(1);
            console.log('1');
            console.log(i);
            // alert(i.UUID);
            return i;
        }, function () {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_PHONE_STATE)
                .then(function () {
                var i = _this.getDeviceId();
                // alert(2);
                console.log('2');
                console.log(i);
                return i;
            }, function () {
                // alert(3);
                return { SimInfo: "Permission Denied" };
            });
        });
    };
    OtuDeviceProvider.prototype.getDeviceId = function () {
        // return new Promise((resolve, reject) => {
        //   window.setTimeout(() => {
        //     console.log('Result obtainined... for example from a service');
        //     resolve({ customer_info: { firstname: 'Fenton' } });
        //   }, 1000);
        // })
        return this.uniqueDeviceID.get();
    };
    OtuDeviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], OtuDeviceProvider);
    return OtuDeviceProvider;
}());

//# sourceMappingURL=otu-device.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_otu_auth_otu_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_otu_config_otu_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, config, firestore, location) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.config = config;
        this.firestore = firestore;
        this.location = location;
        this.loggedin = false;
        this.loginLabel = { en: "Login", kn: "ಲಾಗಿನ್" };
        this.logoutLabel = { en: "Logout", kn: "ಲಾಗ್ ಔಟ್" };
        this.initializeURLParams();
        this.lang$ = this.config.getLanguage().subscribe(function (l) { return _this.lang = l; });
        this.auth.getUser().subscribe(function (u) {
            if (u == undefined || u == null) {
                _this.pages = [];
                _this.pages.push({ title: 'UserItineraryPage', component: 'UserItineraryPage', label: { en: 'Itinerary', kn: 'Itinerary' } });
                _this.rootPage = "UserItineraryPage";
                // this.rootPage = LoginPage;
                _this.loggedin = false;
            }
            else {
                _this.firestore.getUser(u.email).valueChanges().subscribe(function (user) {
                    if (user.length > 0) {
                        _this.config.getMenuItems(user[0]['role']).valueChanges().subscribe(function (pc) {
                            if (pc.length > 0) {
                                _this.rootPage = pc[0]['menu']['root'];
                                _this.pages = pc[0]['menu']['menu'];
                            }
                            _this.pages.push({ title: 'UserItineraryPage', component: 'UserItineraryPage', label: { en: 'Itinerary', kn: 'Itinerary' } });
                            _this.rootPage = "UserItineraryPage";
                            _this.loggedin = true;
                        });
                    }
                    else {
                        _this.pages.push({ title: 'UserItineraryPage', component: 'UserItineraryPage', label: { en: 'Itinerary', kn: 'Itinerary' } });
                        _this.rootPage = "UserItineraryPage";
                        _this.loggedin = false;
                        _this.auth.logout();
                        // this.rootPage = LoginPage;
                    }
                });
            }
        });
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // if (page.title == "Login") {
        //   this.auth.logout().then((s) => {
        //Now I don't know what to do
        //     this.loggedin = false;
        //   })
        // }
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.login = function () {
        var _this = this;
        if (this.loggedin) {
            this.auth.logout().then(function (l) {
                // What do I do now?
                _this.loggedin = false;
            });
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        }
    };
    MyApp.prototype.initializeURLParams = function () {
        var path = this.location.path(true), hasParams = /\?(.+?\=.+){1}/;
        var params;
        if (hasParams.test(path)) {
            params = {};
            path.split('?')[1].split('&').forEach(function (both) {
                var e = both.split('=');
                params[e[0]] = e[1];
            });
        }
        this.firestore.setItrCode(params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\src\seva\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list *ngIf="pages != undefined">\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.label[lang]}}\n\n      </button>\n\n      <!-- <button menuClose ion-item (click)="login()">\n\n        {{loggedin ? logoutLabel[lang] : loginLabel[lang]}}\n\n      </button> -->\n\n      </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\src\seva\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["f" /* Location */]])
    ], MyApp);
    return MyApp;
}());

// used for an example of ngFor and navigation
// this.pages = [
//   { title: 'DynaPage', component: DynaPage, label: {en: "DynaPage", kn: "ಡೈನಾ ಪೇಜ್"} },
//   { title: 'Approve', component: ApprovalPage, label: {en: "Approve", kn: "ಅನುಮೋದಿಸಿ"} },
//   { title: 'AM Home', component: AmHomePage, label: {en: "AM Home", kn: "AM ಮುಖಪುಟ"} },
//   { title: 'SP Home', component: SpHomePage, label: {en: "SP Home", kn: "SP ಮುಖಪುಟ"} },
//   { title: 'User Home', component: UserHomePage, label: {en: "User Home", kn: "ಬಳಕೆದಾರ ಮುಖಪುಟ"} },
//   { title: 'Itinerary', component: ItineraryPage, label: {en: "Itinerary", kn: "itinerary"} },
// ];
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dyna_form_dyna_form__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_list_service_list__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_layout_info_layout__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_points_show_points__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__request_list_request_list__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__string_array_string_array__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__display_days_display_days__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_bar_progress_bar__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__itinerary_day_view_itinerary_day_view__ = __webpack_require__(591);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dyna_form_dyna_form__["a" /* DynaFormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_list_user_list__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__service_list_service_list__["a" /* ServiceListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__info_layout_info_layout__["a" /* InfoLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__show_points_show_points__["a" /* ShowPointsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__request_list_request_list__["a" /* RequestListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__string_array_string_array__["a" /* StringArrayComponent */],
                __WEBPACK_IMPORTED_MODULE_11__display_days_display_days__["a" /* DisplayDaysComponent */],
                __WEBPACK_IMPORTED_MODULE_12__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__itinerary_day_view_itinerary_day_view__["a" /* ItineraryDayViewComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dyna_form_dyna_form__["a" /* DynaFormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_list_user_list__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__service_list_service_list__["a" /* ServiceListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__info_layout_info_layout__["a" /* InfoLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__show_points_show_points__["a" /* ShowPointsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__request_list_request_list__["a" /* RequestListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__string_array_string_array__["a" /* StringArrayComponent */],
                __WEBPACK_IMPORTED_MODULE_11__display_days_display_days__["a" /* DisplayDaysComponent */],
                __WEBPACK_IMPORTED_MODULE_12__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__itinerary_day_view_itinerary_day_view__["a" /* ItineraryDayViewComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ErrorPage = /** @class */ (function () {
    function ErrorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var e = this.navParams.get('error');
        this.msg = this.navParams.get('msg');
        console.log(e);
    }
    ErrorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ErrorPage');
    };
    ErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-error',template:/*ion-inline-start:"C:\src\seva\src\pages\error\error.html"*/'<!--\n  Generated template for the ErrorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header></header>\n</ion-header>\n\n<ion-content padding>\n\n  <h2 *ngIf="msg == undefined">This is an Error Page. Why are you here?</h2> \n  <h2 *ngIf="msg != undefined">{{msg}}</h2>\n\n</ion-content>\n'/*ion-inline-end:"C:\src\seva\src\pages\error\error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ErrorPage);
    return ErrorPage;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true,
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeValidator; });
var AgeValidator = /** @class */ (function () {
    function AgeValidator() {
    }
    AgeValidator.isValid = function (control) {
        if (control.value == undefined || control.value == '') {
            return {
                "required": true
            };
        }
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }
        if (control.value < 18) {
            return {
                "too young": true
            };
        }
        if (control.value > 120) {
            return {
                "not realistic": true
            };
        }
        return null;
    };
    return AgeValidator;
}());

//# sourceMappingURL=age.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(483);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__otu_auth_otu_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_otu_config_otu_config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { forkJoin } from "rxjs//observable/forkJoin";



// import { e } from '@angular/core/src/render3';


/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirestoreProvider = /** @class */ (function () {
    function FirestoreProvider(http, firestore, auth, config) {
        this.http = http;
        this.firestore = firestore;
        this.auth = auth;
        this.config = config;
        this.user$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"]([]);
        this.refUser$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"]([]);
        this.sps$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"]([]);
        this.cust$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"]([]);
        this.coord$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"]([]);
        console.log('Hello FirestoreProvider Provider');
        this.user$.next(null);
        this.refUser$.next(null);
        this.sps$.next([]);
        this.cust$.next([]);
        this.coord$.next([]);
    }
    FirestoreProvider.prototype.createTask = function (title, description, location, date, time, person, reminder, frequency, status, shareWith, shareList, userName) {
        var id = this.firestore.createId();
        // let i: Promise<any>;
        // return i;
        console.log("createTask - " + userName);
        return this.firestore.doc("taskList/" + id).set({
            id: id,
            title: title,
            description: description,
            location: location,
            date: date,
            person: person,
            reminder: reminder,
            frequency: frequency,
            status: status,
            shareWith: shareWith,
            shareList: shareList,
            userName: userName
        });
    };
    FirestoreProvider.prototype.getMyTaskList = function (userName) {
        console.log("getMyTaskList - " + userName);
        return this.firestore.collection('taskList', function (ref) { return ref.where('userName', '==', userName.toLowerCase()); });
    };
    FirestoreProvider.prototype.getSharedTaskList = function (shareWith) {
        console.log("getSharedTaskList - " + shareWith);
        return this.firestore.collection('taskList', function (ref) { return ref.where("shareList", "array-contains", shareWith.toLowerCase()); });
    };
    FirestoreProvider.prototype.getTaskDetail = function (taskId) {
        return this.firestore.collection('taskList').doc(taskId);
    };
    FirestoreProvider.prototype.deleteTask = function (taskId) {
        return this.firestore.doc("taskList/" + taskId).delete();
    };
    FirestoreProvider.prototype.updateCCEntry = function (amount, location, date, avlBal, curOS, _id, smsDate) {
        var _this = this;
        var query = this.firestore.collection("creditCardEntries", function (ref) { return ref.where('_id', "==", _id).where("smsDate", "==", smsDate).limit(1); });
        query.get().subscribe(function (q) {
            if (q.empty) {
                _this.createCCEntry(amount, location, date, avlBal, curOS, _id, smsDate);
            }
        });
    };
    FirestoreProvider.prototype.createCCEntry = function (amount, location, date, avlBal, curOS, _id, smsDate) {
        var id = this.firestore.createId();
        return this.firestore.doc("creditCardEntries/" + id).set({
            id: id,
            amount: amount,
            location: location,
            date: date,
            avlBal: avlBal,
            curOS: curOS,
            _id: _id,
            smsDate: smsDate
        });
    };
    FirestoreProvider.prototype.log = function (tsFile, method, description, additionalInfo) {
        var id = this.firestore.createId();
        // let i: Promise<any>;
        // return i;
        return this.firestore.doc("otuLogger/" + id).set({
            id: id,
            tsFile: tsFile,
            method: method,
            description: description,
            additionalInfo: additionalInfo
        });
    };
    FirestoreProvider.prototype.getCCEntries = function (sort) {
        var str;
        if (sort) {
            return this.firestore.collection('creditCardEntries', function (ref) { return ref.orderBy("date", "desc"); });
        }
        else {
            return this.firestore.collection('creditCardEntries', function (ref) { return ref.orderBy("date"); });
        }
    };
    FirestoreProvider.prototype.updateUserProfile = function (user) {
        return this.firestore.doc("Users/" + user.uid).update(user);
    };
    FirestoreProvider.prototype.getUserProfile = function (uid) {
        console.log("getUserProfile");
        return this.firestore.collection('Users').doc(uid);
    };
    FirestoreProvider.prototype.updateTask = function (taskId, task) {
        this.firestore.doc("taskList/" + taskId).update(task);
    };
    FirestoreProvider.prototype.deleteCC = function (ids) {
        var _this = this;
        ids.forEach(function (x) {
            if (x.selected != undefined && x.selected == true) {
                _this.firestore.collection("creditCardEntries").doc("" + x.id).delete()
                    .then(function (res) { return console.log("Success with " + x.id + " - " + res); }, function (res) { return console.log("Failed for " + x.id + " - " + res); });
            }
        });
    };
    ////////////////////////////////////////////////////////////
    // Seva Code - The code above this can be safely deleted. //
    // It is kept as reference for coding and is not a part   //
    // of this program                                        //
    ////////////////////////////////////////////////////////////
    FirestoreProvider.prototype.getUser = function (email) {
        console.log("getUser - email is " + email);
        return this.firestore.collection('Users', function (ref) { return ref.where("email", "==", email); });
    };
    FirestoreProvider.prototype.addAppliedUser = function (id, email, ref, applied, status, refId) {
        try {
            return this.firestore.doc("applied/" + id).set({ id: id,
                email: email,
                reference: ref,
                appliedFor: applied,
                approved: status,
                amId: refId
            });
        }
        catch (e) {
            console.log('fromm firestore.ts');
            console.log(e);
            throw e;
        }
    };
    FirestoreProvider.prototype.getHeaders = function () {
        return this.firestore.collection('headers');
    };
    FirestoreProvider.prototype.getAppliedUser = function (email) {
        console.log("getAppliedUser - email is " + email);
        // return this.firestore.collection('applied', ref => ref.where("reference", "==", email).where("approved", "==", false));
        return this.firestore.collection('applied', function (ref) { return ref.where("reference", "==", email).where("approved", "==", false); });
    };
    FirestoreProvider.prototype.updateApprovedUsers = function (appliedUsers) {
        var _this = this;
        var batch = this.firestore.firestore.batch();
        appliedUsers.forEach(function (a) {
            // let ref: DocumentReference = this.firestore.collection('applied').doc(a.id);
            if (a.approved == true) {
                var k = {};
                var id = _this.firestore.createId();
                if ("am" == a.appliedFor) {
                    k['amId'] = id;
                }
                else {
                    k['amId'] = a.amId;
                }
                k['approved'] = a.approved;
                if (a.canAdd != undefined) {
                    k['canAdd'] = a.canAdd;
                }
                k['email'] = a.email;
                k['id'] = id;
                k['appliedId'] = a.id;
                k['appId'] = _this.config.getAppId();
                k['role'] = a.appliedFor;
                var ref = _this.firestore.collection('applied').doc(a.id).ref;
                batch.update(ref, { approved: a.approved });
                var userRef = _this.firestore.collection('Users').doc(id).ref;
                // let rollRef = this.firestore.collection('roles', ref => ref.where("name", "==", a.appliedFor)).ref;
                batch.set(userRef, k);
                // batch.update(userRef, {canAdd: })
            }
        });
        return batch.commit();
    };
    FirestoreProvider.prototype.getRole = function (role) {
        console.log("getRole - role is " + role);
        return this.firestore.collection('roles', function (ref) { return ref.where('name', "==", role); });
    };
    FirestoreProvider.prototype.setReferenceId = function (id) {
        this.referenceId = id;
    };
    FirestoreProvider.prototype.getReferenceId = function (id) {
        return this.referenceId;
    };
    FirestoreProvider.prototype.getUser1 = function () {
        var _this = this;
        this.auth.getUser().subscribe(function (au) {
            if (au == undefined || au == null) {
                return null;
            }
            else {
                return _this.firestore.collection('Users', function (ref) { return ref.where("email", "==", au.email).limit(1); });
            }
        });
    };
    FirestoreProvider.prototype.getCurrentUser = function () {
        var _this = this;
        this.auth.getUser().subscribe(function (au) {
            if (au == undefined || au == null) {
                _this.user$.next(null);
            }
            else {
                _this.firestore.collection('Users', function (ref) { return ref.where("email", "==", au.email).limit(1); })
                    .valueChanges().subscribe(function (u) {
                    if (u != undefined && u.length > 0) {
                        _this.user$.next(u[0]);
                    }
                    else {
                        _this.user$.next(null);
                    }
                });
            }
        });
        return this.user$;
    };
    FirestoreProvider.prototype.saveUser = function (u) {
        this.firestore.collection('Users').doc(u.id).update(u);
    };
    FirestoreProvider.prototype.getUserReference = function (email) {
        var _this = this;
        this.firestore.collection('Users', function (ref) { return ref.where("email", "==", email); })
            .valueChanges().subscribe(function (u) {
            if (u.length > 0) {
                _this.refUser$.next(u[0]);
            }
            else {
                _this.refUser$.next(null);
            }
        });
        return this.refUser$;
    };
    FirestoreProvider.prototype.getSPs = function () {
        var _this = this;
        if (this.user$.value != undefined && this.user$.value.id != undefined && this.user$.value.id != '') {
            this.firestore.collection('Users', function (ref) { return ref.where('amId', "==", _this.user$.value.id)
                .where('role', "==", "sp"); })
                .valueChanges().subscribe(function (sps) {
                if (sps.length > 0) {
                    _this.sps$.next(sps);
                }
            });
        }
        else {
            console.log('SUDERROR: This is crap in sp');
        }
        return this.sps$;
    };
    FirestoreProvider.prototype.getCustomers = function () {
        var _this = this;
        if (this.user$.value != undefined && this.user$.value.id != undefined && this.user$.value.id != '') {
            this.firestore.collection('Users', function (ref) { return ref.where('amId', "==", _this.user$.value.id)
                .where('role', "==", "cust"); })
                .valueChanges().subscribe(function (cust) {
                if (cust.length > 0) {
                    _this.cust$.next(cust);
                }
            });
        }
        else {
            console.log('SUDERROR: This is crap in cust');
        }
        return this.cust$;
    };
    FirestoreProvider.prototype.getCoords = function () {
        var _this = this;
        if (this.user$.value != undefined && this.user$.value.id != undefined && this.user$.value.id != '') {
            this.firestore.collection('Users', function (ref) { return ref.where('amId', "==", _this.user$.value.id)
                .where('role', "==", "co-ord"); })
                .valueChanges().subscribe(function (co) {
                if (co.length > 0) {
                    _this.coord$.next(co);
                }
            });
        }
        else {
            console.log('SUDERROR: This is crap in co-ord');
        }
        return this.coord$;
    };
    FirestoreProvider.prototype.saveService = function (service) {
        var id = this.firestore.createId();
        service['id'] = id;
        return this.firestore.doc("services/" + id).set(service);
    };
    FirestoreProvider.prototype.getMyServices = function (id) {
        return this.firestore.collection('services', function (ref) { return ref.where('providerId', '==', id); });
    };
    FirestoreProvider.prototype.getServices = function (id) {
        return this.firestore.collection('services', function (ref) { return ref.where('amId', '==', id); });
    };
    FirestoreProvider.prototype.getCustRequest = function (id) {
        return this.firestore.collection('requests', function (ref) { return ref.where('customerId', '==', id); });
    };
    FirestoreProvider.prototype.addRequest = function (request) {
        var id = this.firestore.createId();
        request['id'] = id;
        return this.firestore.doc("requests/" + id).set(request);
    };
    FirestoreProvider.prototype.saveActivityTemplates = function (template) {
        var id = this.firestore.createId();
        template['id'] = id;
        return this.firestore.doc("activityTemplate/" + id).set(template);
    };
    FirestoreProvider.prototype.getAllActivityTemplates = function () {
        return this.firestore.collection('activityTemplate');
    };
    FirestoreProvider.prototype.getActivityTemplate = function (id) {
        return this.firestore.collection('activityTemplate', function (ref) { return ref.where('id', '==', id); });
    };
    FirestoreProvider.prototype.saveItinerary = function (itinerary) {
        var id = this.firestore.createId();
        itinerary['id'] = id;
        itinerary['appId'] = this.config.getAppId();
        return this.firestore.doc("itinerary/" + id).set(itinerary);
    };
    FirestoreProvider.prototype.updateItinerary = function (itinerary) {
        return this.firestore.doc("itinerary/" + itinerary.id).update(itinerary);
    };
    FirestoreProvider.prototype.getAllItinerary = function () {
        var _this = this;
        return this.firestore.collection('itinerary', function (ref) { return ref.where("appId", "==", _this.config.getAppId()); });
    };
    FirestoreProvider.prototype.deleteItinerary = function (id) {
        return this.firestore.doc("itinerary/" + id).delete();
    };
    FirestoreProvider.prototype.getTimeInFSFormat = function (d) {
        var date = new Date(d);
        date.setHours(date.getUTCHours());
        date.setMinutes(date.getUTCMinutes());
        // firebase.firestore.Timestamp.
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app__["firestore"].Timestamp.fromDate(date);
    };
    FirestoreProvider.prototype.getTimeFromSecs = function (m) {
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app__["firestore"].Timestamp.fromMillis(m * 1000);
    };
    FirestoreProvider.prototype.getItinerary = function (id) {
        var _this = this;
        return this.firestore.collection('itinerary', function (ref) { return ref.where("appId", "==", _this.config.getAppId())
            .where('id', "==", id); });
    };
    FirestoreProvider.prototype.eventLog = function (data) {
        var id = this.firestore.createId();
        data['id'] = id;
        data['appId'] = this.config.getAppId();
        this.firestore.doc("events/" + id).set(data);
    };
    FirestoreProvider.prototype.setItrCode = function (itrcode) {
        this.itrcode = itrcode;
    };
    FirestoreProvider.prototype.getItrCode = function () {
        if (this.itrcode != undefined && this.itrcode.itrcode != undefined) {
            return this.itrcode.itrcode;
        }
        else {
            return null;
        }
    };
    FirestoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_0__otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], FirestoreProvider);
    return FirestoreProvider;
}());

//# sourceMappingURL=firestore.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtuConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otu_auth_otu_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';




/*
  Generated class for the OtuConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OtuConfigProvider = /** @class */ (function () {
    function OtuConfigProvider(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
        this.lang$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this.menu$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        console.log('Hello OtuConfigProvider Provider');
        this.lang = "en";
        this.lang$.next(this.lang);
    }
    OtuConfigProvider.prototype.getLanguage = function () {
        return this.lang$;
    };
    OtuConfigProvider.prototype.setLanguage = function (lang) {
        this.lang = lang;
        this.lang$.next(lang);
    };
    OtuConfigProvider.prototype.getFields = function (role) {
        var _this = this;
        return this.firestore.collection('fields', function (ref) { return ref.where("appId", "==", _this.getAppId()).where("role", "==", role); });
    };
    OtuConfigProvider.prototype.getErrorMessages = function (role) {
        var _this = this;
        return this.firestore.collection('errorMessages', function (ref) { return ref.where("appId", "==", _this.getAppId()).where("role", "==", role); });
    };
    OtuConfigProvider.prototype.getMenuItems = function (role) {
        var _this = this;
        console.log("getMenuItems " + role);
        return this.firestore.collection('pageConfig', function (ref) { return ref.where("name", "==", role).where("appId", "==", _this.getAppId()); });
    };
    OtuConfigProvider.prototype.getPageDetails = function (role, page) {
        var _this = this;
        console.log("getMenuItems " + role);
        return this.firestore.collection('pageConfig', function (ref) { return ref.where("name", "==", role)
            .where("appId", "==", _this.getAppId()); });
    };
    OtuConfigProvider.prototype.logFire = function (log) {
        var id = this.firestore.createId();
        this.firestore.collection('logs').doc(id).set({
            id: id,
            log: log
        });
    };
    OtuConfigProvider.prototype.getCurrentMenu = function () {
        var _this = this;
        this.auth.getUser().subscribe(function (au) {
            if (au == undefined || au == null) {
                _this.menu$.next([]);
            }
            else {
                _this.firestore.collection('Users', function (ref) { return ref.where("email", "==", au.email).limit(1); })
                    .valueChanges().subscribe(function (u) {
                    if (u != undefined && u.length > 0) {
                        _this.firestore.collection('pageConfig', function (ref) { return ref.where("name", "==", u[0]['role']).limit(1); })
                            .valueChanges().subscribe(function (m) {
                            if (m != undefined && m.length > 0) {
                                _this.menu$.next(m);
                            }
                        });
                    }
                    else {
                        _this.menu$.next([]);
                    }
                });
            }
        });
        return this.menu$;
    };
    OtuConfigProvider.prototype.getAppId = function () {
        return this.getAppIdWithDetails().appId;
    };
    OtuConfigProvider.prototype.getAppIdWithDetails = function () {
        return {
            appId: 2,
            ref: 'alfresco@seva.com',
            appliedFor: 'cust'
        };
    };
    OtuConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__otu_auth_otu_auth__["a" /* OtuAuthProvider */]])
    ], OtuConfigProvider);
    return OtuConfigProvider;
}());

//# sourceMappingURL=otu-config.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__credentials_credentials__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_error_error__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__validators_username__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_otu_auth_otu_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_otu_config_otu_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_otu_logger_otu_logger__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_otu_device_otu_device__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { GenricPopupPage } from '../pages/genric-popup/genric-popup';
// import { DatePicker } from '@ionic-native/date-picker';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                // DynaPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_error_error__["a" /* ErrorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/am-home/am-home.module#AmHomePageModule', name: 'AmHomePage', segment: 'am-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approval/approval.module#ApprovalPageModule', name: 'ApprovalPage', segment: 'approval', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/error/error.module#ErrorPageModule', name: 'ErrorPage', segment: 'error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/form.module#FormPageModule', name: 'FormPage', segment: 'form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/genric-popup/genric-popup.module#GenricPopupPageModule', name: 'GenricPopupPage', segment: 'genric-popup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sp-home/sp-home.module#SpHomePageModule', name: 'SpHomePage', segment: 'sp-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-home/user-home.module#UserHomePageModule', name: 'UserHomePage', segment: 'user-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-itinerary/user-itinerary.module#UserItineraryPageModule', name: 'UserItineraryPage', segment: 'user-itinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fresco/fresco.module#FrescoPageModule', name: 'FrescoPage', segment: 'fresco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dyna/dyna.module#DynaPageModule', name: 'DynaPage', segment: 'dyna', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itinerary/itinerary.module#ItineraryPageModule', name: 'ItineraryPage', segment: 'itinerary', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_7__credentials_credentials__["a" /* firebaseConfig */]),
                // AngularFirestoreModule.enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                // DynaPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_error_error__["a" /* ErrorPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firestore_firestore__["a" /* FirestoreProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_15__validators_username__["a" /* UsernameValidator */],
                __WEBPACK_IMPORTED_MODULE_21__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_22__providers_otu_device_otu_device__["a" /* OtuDeviceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__["a" /* AndroidPermissions */]
                // DatePicker
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtuAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Only this is required


// Only this is required

/*
  Generated class for the OtuAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OtuAuthProvider = /** @class */ (function () {
    // public user: Observable<User>;
    function OtuAuthProvider(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
        console.log('Hello OtuAuthProvider Provider');
    }
    OtuAuthProvider.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    OtuAuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    OtuAuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    OtuAuthProvider.prototype.signupUser = function (newEmail, newPassword) {
        return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    };
    OtuAuthProvider.prototype.getUser = function () {
        // if(this.afAuth.auth.currentUser != undefined) {
        //   console.log('Auth Provider - getUser - ' + this.afAuth.auth.currentUser.email);
        //   return this.afAuth.auth.currentUser;
        // } else {
        //   console.log('Auth Provider - getUser - UNDEFINED');
        //   return null;
        // }
        return this.afAuth.authState;
    };
    OtuAuthProvider.prototype.updateProfile = function (displayName, imgUrl) {
        // this.afAuth.auth.currentUser.photoURL = imgUrl;
        try {
            this.afAuth.auth.currentUser.displayName = displayName;
        }
        catch (e) {
            console.log('updateProfile Error');
            console.log(e);
        }
    };
    OtuAuthProvider.prototype.getDisplayName = function () {
        return this.afAuth.auth.currentUser.displayName;
    };
    OtuAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["AngularFirestore"]])
    ], OtuAuthProvider);
    return OtuAuthProvider;
}());

//# sourceMappingURL=otu-auth.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_age__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_username__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_otu_config_otu_config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { GenricPopupPage } from '../../pages/genric-popup/genric-popup';
/**
 * Generated class for the DynaFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DynaFormComponent = /** @class */ (function () {
    function DynaFormComponent(formBuilder, config, viewCtrl, mdlCtrl, alrtCtrl) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.mdlCtrl = mdlCtrl;
        this.alrtCtrl = alrtCtrl;
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.submitLabel = { en: "Submit", kn: "ಸಲ್ಲಿಸಲು" };
        this.dataArrays = {};
        console.log('Hi From Constructor in Dyna Form');
        this.lang$ = this.config.getLanguage();
        this.lang$.subscribe(function (l) { return _this.lang = l; });
        this.dynaForm = formBuilder.group({});
    }
    DynaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Hi From ngOnInit in Dyna Form');
        this.fields.forEach(function (f) {
            var validatorList = [];
            var asynValidator = [];
            f.validators.forEach(function (v) {
                switch (v.name) {
                    case "required": {
                        validatorList.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
                        break;
                    }
                    case "minLength": {
                        validatorList.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(parseInt(v.param)));
                        break;
                    }
                    case "maxLength": {
                        validatorList.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(parseInt(v.param)));
                        break;
                    }
                    case "pattern": {
                        validatorList.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(v.param));
                        break;
                    }
                    case "age": {
                        validatorList.push(__WEBPACK_IMPORTED_MODULE_3__validators_age__["a" /* AgeValidator */].isValid);
                        break;
                    }
                    default: {
                        //Cry like a baby
                        console.log("Validator: The name is " + v.name + " for " + f.name);
                        break;
                    }
                }
            });
            f.AsyncValidators.forEach(function (v) {
                switch (v.name) {
                    case "checkUsername": {
                        asynValidator.push(__WEBPACK_IMPORTED_MODULE_4__validators_username__["a" /* UsernameValidator */].checkUsername);
                        break;
                    }
                    default: {
                        //Cry like a baby
                        console.log("AsyncValidator: The name is " + v.name + " for " + f.name);
                        break;
                    }
                }
            });
            if (f.dataType == 'stringArray') {
                // this.dynaForm.addControl(f.name, new FormArray([]));
            }
            else {
                _this.dynaForm.addControl(f.name, new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', validatorList, asynValidator));
            }
        });
    };
    DynaFormComponent.prototype.getValidators = function () {
    };
    DynaFormComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DynaPage');
    };
    DynaFormComponent.prototype.addItem = function (f) {
        var _this = this;
        var item = this.mdlCtrl.create("GenricPopupPage", { list: [], label: f.label, lang: this.lang, flag: 1 });
        item.onDidDismiss(function (v) {
            console.log(v);
            if (v != undefined || v.length == 0) {
                _this.dataArrays[f.name] = v;
            }
        });
        item.present();
    };
    DynaFormComponent.prototype.save = function (val) {
        var _this = this;
        console.log(val);
        var keys = Object.keys(this.dataArrays);
        keys.forEach(function (k) {
            val[k] = _this.dataArrays[k];
        });
        this.data.emit(val);
    };
    DynaFormComponent.prototype.changeLanguage = function () {
        if (this.lang == "en") {
            this.lang = "kn";
        }
        else {
            this.lang = "en";
        }
    };
    DynaFormComponent.prototype.getErrorMessage = function (errCode, i) {
        console.log(errCode + " for " + i + " and message is " + this.errMessages[errCode].label[this.lang]);
        switch (errCode) {
            case 0: {
                return this.fields[i].label[this.lang] + " " + this.errMessages[errCode].label[this.lang];
            }
            case 1: {
                var v = this.fields[i].validators.find(function (x) { return x.name == 'minLength'; });
                var len = void 0;
                if (v != undefined) {
                    len = v.param;
                }
                return this.fields[i].label[this.lang] + " " + this.errMessages[errCode].label[this.lang] + " " + len;
            }
            case 2: {
                var v = this.fields[i].validators.find(function (x) { return x.name == 'maxLength'; });
                var len = void 0;
                if (v != undefined) {
                    len = v.param;
                }
                return this.fields[i].label[this.lang] + " " + this.errMessages[errCode].label[this.lang] + " " + len;
            }
            case 3: {
                return this.fields[i].label[this.lang] + " " + this.errMessages[errCode].label[this.lang];
            }
            case 4: {
                return "" + this.errMessages[errCode].label[this.lang];
            }
            case 5: {
                return this.fields[i].label[this.lang] + " " + this.errMessages[errCode].label[this.lang];
            }
            case 6: {
                return this.fields[i].label[this.lang] + " " + this.errMessages[errCode].label[this.lang];
            }
            case 7: {
                return this.errMessages[errCode].label[this.lang] + " " + this.fields[i].label[this.lang];
            }
            default: {
                // How in the world???
                console.log("How in the world???");
                return "Just the crap I was looking for";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fields'),
        __metadata("design:type", Object)
    ], DynaFormComponent.prototype, "fields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('errMessages'),
        __metadata("design:type", Object)
    ], DynaFormComponent.prototype, "errMessages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('data'),
        __metadata("design:type", Object)
    ], DynaFormComponent.prototype, "data", void 0);
    DynaFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dyna-form',template:/*ion-inline-start:"C:\src\seva\src\components\dyna-form\dyna-form.html"*/'<div *ngIf="fields != undefined && errMessages != undefined">\n  <form [formGroup]="dynaForm" (ngSubmit)="save(dynaForm.value)">\n    <ion-list margin-bottom>\n      <section *ngFor="let f of fields; let i = index">\n        <ion-item-group>\n          <!-- For text fields -->\n          <ion-item *ngIf="f.dataType == \'string\'">\n            <ion-label floating>{{f.label[lang]}}:</ion-label>\n            <ion-input type="text" [formControlName]="f.name"></ion-input>\n          </ion-item>\n\n          <!-- For number input fields -->\n          <ion-item *ngIf="f.dataType == \'number\'">\n            <ion-label floating>{{f.label[lang]}}:</ion-label>\n            <ion-input type="number" [formControlName]="f.name"></ion-input>\n          </ion-item>\n\n          <!-- For drop down options -->\n          <ion-item *ngIf="f.dataType == \'option\'">\n            <ion-label floating>{{f.label[lang]}}:</ion-label>\n            <ion-select [formControlName]="f.name">\n              <ion-option *ngFor="let o of f.values" value="{{o.val}}">{{o.label[lang]}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <!-- For date time option -->\n          <ion-item *ngIf="f.dataType == \'datetime\'">\n            <ion-label floating>{{f.label[lang]}}:</ion-label>\n            <ion-datetime [formControlName]="f.name" display-format="MMM DD, YYYY HH:mm" pickerFormat="MMM DD, YYYY hh:mm a"></ion-datetime>\n          </ion-item>\n\n          <!-- For string array -->\n          <!-- [formControlName]="f.name"  -->\n          <ion-item *ngIf="f.dataType == \'stringArray\'" (click)="addItem(f)">\n            <ion-label>{{f.label[lang]}}:</ion-label>\n          </ion-item>\n\n          <p style="color: red; padding-top: 0.2rem"\n            *ngIf="dynaForm.controls[f.name] != undefined && !dynaForm.controls[f.name].pristine && dynaForm.controls[f.name].errors">\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'required\')">\n              {{getErrorMessage(0, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'minlength\')">\n              {{getErrorMessage(1, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'maxlength\')">\n              {{getErrorMessage(2, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'not a whole number\')">\n              {{getErrorMessage(3, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'too young\')">\n              {{getErrorMessage(4, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'not realistic\')">\n              {{getErrorMessage(5, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'not a number\')">\n              {{getErrorMessage(6, i)}}\n            </span>\n            <span *ngIf="dynaForm.controls[f.name].hasError(\'pattern\')">\n              {{getErrorMessage(7, i)}}\n            </span>\n          </p>\n        </ion-item-group>\n      </section>\n    </ion-list>\n    <button ion-button block margin-top color="primary" text-center\n      [disabled]="!dynaForm.valid">{{submitLabel[lang]}}</button>\n  </form>\n</div>'/*ion-inline-end:"C:\src\seva\src\components\dyna-form\dyna-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DynaFormComponent);
    return DynaFormComponent;
}());

//# sourceMappingURL=dyna-form.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otu_config_otu_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otu_auth_otu_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otu_logger_otu_logger__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(config, firestore, auth, logger) {
        var _this = this;
        this.config = config;
        this.firestore = firestore;
        this.auth = auth;
        this.logger = logger;
        this.titles = [{ id: 1, title: "Dyna", lang: { en: "Dyna", kn: "ಡೈನಾ" } },
            { id: 2, title: "Login", lang: { en: "Login", kn: "ಲಾಗಿನ್" } },
            { id: 3, title: "Approve", lang: { en: "Approve", kn: "ಅನುಮೋದಿಸು" } },
            { id: 3, title: "Signup", lang: { en: "Signup", kn: "ಸೈನ್ ಅಪ್" } },
            { id: 4, title: "AM Home", lang: { en: "AM Home", kn: "AM ಮುಖಪುಟ" } },
            { id: 5, title: "SP Home", lang: { en: "SP Home", kn: "ಎಸ್ಪಿ ಹೋಮ್" } },
            { id: 5, title: "User Home", lang: { en: "User Home", kn: "ಬಳಕೆದಾರ ಹೋಮ್" } },
            { id: 6, title: "Itinerary", lang: { en: "Itinerary", kn: "Itinerary" } }
        ];
        console.log('Hello HeaderComponent Component');
        this.config.getLanguage().subscribe(function (l) { return _this.lang = l; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.title);
        if (this.titleObj == undefined) {
            this.config.getCurrentMenu().subscribe(function (m) {
                if (m.length > 0) {
                    console.log("Title Pags is " + _this.title);
                    _this.titles = m[0].menu.menu;
                    console.log(_this.titles);
                    var titleObj = _this.titles.find(function (t) { return t.title == _this.title; });
                    if (titleObj != undefined) {
                        _this.pageTitle = titleObj;
                    }
                }
                console.log(_this.pageTitle);
            });
        }
        else {
            this.pageTitle = this.titleObj;
        }
        console.log('ionViewDidLoad ApprovalPage');
    };
    HeaderComponent.prototype.changeLanguage = function () {
        var from = this.lang;
        if (this.lang == "en") {
            this.lang = "kn";
        }
        else {
            this.lang = "en";
        }
        this.config.setLanguage(this.lang);
        this.logger.eventLog('changeLanguage', { from: from, to: this.lang });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('title'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('titleObj'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "titleObj", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"C:\src\seva\src\components\header\header.html"*/'<ion-navbar>\n\n  <button ion-button menuToggle color="foreground">\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>Trip Alfresco</ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button color="foreground" (click)="changeLanguage()">{{lang}}</button>\n\n  </ion-buttons>\n\n</ion-navbar>\n\n'/*ion-inline-end:"C:\src\seva\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(alertCtrl, firestore) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.userInfo1 = {
            name: "Sudhir Bhandary",
            email: "bhandarys@seva.com",
            mob: "+91.1234567890",
            others: "I am a bird watcher",
            img: "assets/imgs/bheem.jpg",
            address: {
                firstLine: "Roop Nagar, Prem Gali",
                secondLine: "Kholi No. 420",
                city: "Mumbai",
                pin: "420 420",
                state: "MH",
                country: "India",
            }
        };
        console.log('Hello ProfileComponent Component');
        this.text = 'Hello World';
        this.user$ = this.firestore.getCurrentUser();
        this.user$.subscribe(function (u) { return _this.userInfo = u; });
    }
    ProfileComponent.prototype.edit = function (field) {
        var _this = this;
        var label;
        var input;
        switch (field) {
            case 'img': {
                input = [{
                        name: 'img',
                        value: this.userInfo.img
                    }];
                label = "Profile Picture";
                break;
            }
            case 'name': {
                input = [{
                        name: 'name',
                        value: this.userInfo.name,
                        placeholder: "Name"
                    }];
                label = "Name";
                break;
            }
            case 'mob': {
                input = [{
                        name: 'mob',
                        value: this.userInfo.mob,
                        placeholder: "Mobile Number"
                    }];
                label = "Mobile Number";
                break;
            }
            case 'whatsapp': {
                input = [{
                        name: 'whatsapp',
                        value: this.userInfo.mob,
                        placeholder: "whatsapp Number"
                    }];
                label = "whatsapp Number";
                break;
            }
            case 'me': {
                input = [{
                        name: 'me',
                        value: this.userInfo.others,
                        placeholder: "About Myself"
                    }];
                label = "About Myself";
                break;
            }
            case 'address': {
                if (this.userInfo.address == undefined) {
                    this.userInfo['address'] = {};
                }
                input = [{
                        name: 'firstline',
                        value: this.userInfo.address.firstLine,
                        placeholder: "Address Line 1"
                    },
                    {
                        name: 'secondline',
                        value: this.userInfo.address.secondLine,
                        placeholder: "Address Line 2"
                    },
                    {
                        name: 'city',
                        value: this.userInfo.address.city,
                        placeholder: "City"
                    },
                    {
                        name: 'pin',
                        value: this.userInfo.address.pin,
                        placeholder: "Pin"
                    },
                    {
                        name: 'state',
                        value: this.userInfo.address.state,
                        placeholder: "State"
                    },
                    {
                        name: 'country',
                        value: this.userInfo.address.country,
                        placeholder: "Country"
                    }];
                label = "Address";
                break;
            }
        }
        var data = this.alertCtrl.create({
            title: "Modify " + label,
            inputs: input,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        switch (field) {
                            case 'name': {
                                _this.userInfo.name = data.name;
                                break;
                            }
                            case 'mob': {
                                _this.userInfo.mob = data.mob;
                                break;
                            }
                            case 'whatsapp': {
                                _this.userInfo.whatsapp = data.whatsapp;
                                break;
                            }
                            case 'me': {
                                _this.userInfo.others = data.me;
                                break;
                            }
                            case 'img': {
                                _this.userInfo.img = data.img;
                                break;
                            }
                            case 'address': {
                                _this.userInfo.address.firstLine = data.firstline;
                                _this.userInfo.address.secondLine = data.secondline;
                                _this.userInfo.address.city = data.city;
                                _this.userInfo.address.pin = data.pin;
                                _this.userInfo.address.state = data.state;
                                _this.userInfo.address.country = data.country;
                                break;
                            }
                            default: {
                                alert('Report to police');
                            }
                        }
                        _this.firestore.saveUser(_this.userInfo);
                    } // till here
                }
            ]
        });
        data.present();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'profile',template:/*ion-inline-start:"C:\src\seva\src\components\profile\profile.html"*/'<ion-card text-wrap *ngIf="userInfo != undefined">\n  <ion-card-title>\n    <!-- style="float: right: position: static" -->\n    <!-- <ion-avatar float-right  height="126px"> -->\n    <ion-avatar *ngIf="userInfo.img != undefined">\n        <img src="{{userInfo.img}}" alt="{{userInfo.name}}" style="height: auto; width: 25%; float: right" (click)="edit(\'img\')"/>\n    </ion-avatar>\n    <ion-avatar *ngIf="userInfo.img == undefined">\n        <img src="assets/imgs/default-profile-picture.jpg" alt="{{userInfo.name}}" style="height: auto; width: 25%; float: right" (click)="edit(\'img\')"/>\n    </ion-avatar>\n    <h2 style="text-align: center" (click)="edit(\'name\')">\n      <p *ngIf="userInfo.name != undefined && userInfo.name != \'\'" style="font-size: 200%; font-weight: bold;">{{userInfo.name}}</p>\n      <p *ngIf="userInfo.name == undefined || userInfo.name == \'\'">Click to add name</p>\n    </h2>\n    <div>\n      <p><ion-icon name="mail"></ion-icon>&nbsp;&nbsp;{{userInfo.email}}</p>\n      <p (click)="edit(\'mob\')"><ion-icon name="call"></ion-icon>&nbsp;&nbsp;{{userInfo.mob}}</p>\n      <p (click)="edit(\'whatsapp\')"><ion-icon name="logo-whatsapp"></ion-icon>&nbsp;&nbsp;{{userInfo.whatsapp}}</p>\n    </div>\n  </ion-card-title>\n  <ion-card-content>\n    <h4 style="font-weight: bold" (click)="edit(\'me\')">About Myself:</h4>\n    <p (click)="edit(\'me\')">{{userInfo.others}}</p>\n  </ion-card-content>\n  <ion-card-content (click)="edit(\'address\')">\n    <div float-left>\n      <h4 style="font-weight: bold">Address:</h4>\n      <div *ngIf="userInfo.address != undefined">\n          <p>{{userInfo.address.firstLine}}</p>\n          <p>{{userInfo.address.secondLine}}</p>\n          <p>{{userInfo.address.city}}</p>\n          <p>{{userInfo.address.pin}}</p>\n          <p>{{userInfo.address.state}}, {{userInfo.address.country}}</p>\n      </div>\n    </div>\n  </ion-card-content>\n </ion-card>\n'/*ion-inline-end:"C:\src\seva\src\components\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */]])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
        console.log('Hello UserListComponent Component');
        this.text = 'Hello World';
    }
    UserListComponent.prototype.ngOnInit = function () {
        console.log('User-List');
        console.log(this.userList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('userList'),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "userList", void 0);
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-list',template:/*ion-inline-start:"C:\src\seva\src\components\user-list\user-list.html"*/'<ion-list>\n  <ion-item *ngFor="let l of userList">\n    <ion-avatar float-left>\n      <img src="{{l.img}}" alt="{{l.name}}" width="50vw" />\n    </ion-avatar>\n    <div float-right>\n      <p style="font-weight: bold">{{l.name}}</p>\n      <p>\n        <ion-icon name="mail"></ion-icon>&nbsp;{{l.email}}\n      </p>\n      <p>\n        <ion-icon name="call"></ion-icon>&nbsp;{{l.mob}}\n      </p>\n      <p>\n        <ion-icon name="logo-whatsapp"></ion-icon>&nbsp;{{l.whatsapp}}\n      </p>\n    </div>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"C:\src\seva\src\components\user-list\user-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ServiceListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent() {
        this.serviceList = [{
                img: "assets/imgs/temple.jpg",
                name: "Temple Tour",
                time: "15 March 2019, 10:00 AM to 11:00 AM",
                provider: {
                    name: "Tours of Hampi",
                    email: "oldcow@gmail.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                },
                customer: {
                    name: "Sachin Tendulkar",
                    email: "sachin@tendulkar.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                }
            },
            {
                img: "assets/imgs/church.jpg",
                name: "Church Tour",
                time: "15 March 2019, 3:00 PM to 4:00 PM",
                provider: {
                    name: "Tours of Old Goa",
                    email: "newcow@gmail.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                },
                customer: {
                    name: "Rahul Dravid",
                    email: "rahul@dravid.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                }
            },
        ];
        console.log('Hello ServiceListComponent Component');
        this.text = 'Hello World';
        console.log(this.serviceList);
    }
    ServiceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'service-list',template:/*ion-inline-start:"C:\src\seva\src\components\service-list\service-list.html"*/'<ion-list>\n    <ion-card *ngFor="let s of serviceList">\n      <ion-card-title>\n        <ion-avatar float-left height="126px">\n          <img src="{{s.img}}" alt="{{s.name}}" height="126px" />\n        </ion-avatar>\n        <h2>\n          <p style="font-size: 150%; font-weight: bold;" text-center>{{s.name}}</p>\n        </h2>\n      </ion-card-title>\n      <ion-card-content>\n        <ion-item>\n          <p>Time: {{s.time}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Customer: {{s.customer.name}}</p>\n          <h4>Contact Details</h4>\n          <p>email: {{s.customer.email}}</p>\n          <p>mob: {{s.customer.mob}}</p>\n          <p>whatspp: {{s.customer.whatspp}}</p>\n        </ion-item>\n        <ion-item>\n          <p>Provider: {{s.provider.name}}</p>\n          <h4>Contact Details</h4>\n          <p>email: {{s.provider.email}}</p>\n          <p>mob: {{s.provider.mob}}</p>\n          <p>whatspp: {{s.provider.whatspp}}</p>\n        </ion-item>\n        </ion-card-content>\n    </ion-card>\n  </ion-list>'/*ion-inline-end:"C:\src\seva\src\components\service-list\service-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ServiceListComponent);
    return ServiceListComponent;
}());

//# sourceMappingURL=service-list.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the InfoLayoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InfoLayoutComponent = /** @class */ (function () {
    function InfoLayoutComponent() {
        this.showDetails = false;
        console.log('Hello InfoLayoutComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("info"),
        __metadata("design:type", Object)
    ], InfoLayoutComponent.prototype, "info", void 0);
    InfoLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'info-layout',template:/*ion-inline-start:"C:\src\seva\src\components\info-layout\info-layout.html"*/'<ion-card (click)="showDetails = !showDetails">\n    <ion-card-title>\n      {{info.day}}\n      <p>{{info.date}}: {{info.topline}}</p>\n    </ion-card-title>\n    <ion-card-content *ngIf="showDetails">\n      <p><span *ngIf="info.para1.headline != undefined && info.para1.headline != \'\'" style="font-weight: bold">{{info.para1.headline}}:&nbsp;</span>{{info.para1.body}}</p>\n      <p><span *ngIf="info.para2.headline != undefined && info.para2.headline != \'\'" style="font-weight: bold">{{info.para2.headline}}:&nbsp;</span>{{info.para2.body}}</p>\n    </ion-card-content>\n  </ion-card>'/*ion-inline-end:"C:\src\seva\src\components\info-layout\info-layout.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InfoLayoutComponent);
    return InfoLayoutComponent;
}());

//# sourceMappingURL=info-layout.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPointsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ShowPointsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShowPointsComponent = /** @class */ (function () {
    function ShowPointsComponent() {
        this.showDetails = false;
        console.log('Hello ShowPointsComponent Component');
        this.text = 'Hello World';
    }
    ShowPointsComponent.prototype.ngOnInit = function () {
        console.log("Hello ngOnInit");
    };
    ShowPointsComponent.prototype.foo = function () {
        this.showDetails = !this.showDetails;
        console.log(this.list);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('list'),
        __metadata("design:type", Object)
    ], ShowPointsComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('label'),
        __metadata("design:type", Object)
    ], ShowPointsComponent.prototype, "label", void 0);
    ShowPointsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'show-points',template:/*ion-inline-start:"C:\src\seva\src\components\show-points\show-points.html"*/'<ion-label style="font-weight: bold" (click)="foo()">{{label}}</ion-label>\n<ion-item *ngIf="showDetails" (click)="foo()">\n  <ul *ngIf="list != undefined">\n    <li *ngFor="let l of list; let i = index" text-wrap style="font-size: 75%">{{l}}</li>\n  </ul>\n  <h2 *ngIf="list == undefined">Nothing to show here</h2>\n</ion-item>'/*ion-inline-end:"C:\src\seva\src\components\show-points\show-points.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShowPointsComponent);
    return ShowPointsComponent;
}());

//# sourceMappingURL=show-points.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RequestListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RequestListComponent = /** @class */ (function () {
    function RequestListComponent() {
        this.serviceList = [{
                img: "assets/imgs/temple.jpg",
                name: "Temple Tour",
                time: "15 March 2019, 10:00 AM to 11:00 AM",
                provider: {
                    name: "Tours of Hampi",
                    email: "oldcow@gmail.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                },
                customer: {
                    name: "Sachin Tendulkar",
                    email: "sachin@tendulkar.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                }
            },
            {
                img: "assets/imgs/church.jpg",
                name: "Church Tour",
                time: "15 March 2019, 3:00 PM to 4:00 PM",
                provider: {
                    name: "Tours of Old Goa",
                    email: "newcow@gmail.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                },
                customer: {
                    name: "Rahul Dravid",
                    email: "rahul@dravid.com",
                    mob: "99999999999",
                    whatsapp: "99999999999"
                }
            },
        ];
        console.log('Hello RequestListComponent Component');
        this.text = 'Hello World';
        console.log(this.serviceList);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('requests'),
        __metadata("design:type", Object)
    ], RequestListComponent.prototype, "requests", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('first'),
        __metadata("design:type", Object)
    ], RequestListComponent.prototype, "first", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('second'),
        __metadata("design:type", Object)
    ], RequestListComponent.prototype, "second", void 0);
    RequestListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'request-list',template:/*ion-inline-start:"C:\src\seva\src\components\request-list\request-list.html"*/'<ion-list *ngIf="requests != undefined">\n  <h2>Request - {{requests.length}}</h2>\n  <ion-card *ngFor="let s of requests">\n    <ion-card-title>\n      <ion-avatar float-left height="126px">\n        <img src="{{s.img}}" alt="{{s.name}}" height="126px" />\n      </ion-avatar>\n      <h2>\n        <p style="font-size: 150%; font-weight: bold;" text-center>{{s.name}}</p>\n      </h2>\n    </ion-card-title>\n    <ion-card-content>\n      <ion-item>\n        <p>Time: {{s.time}}</p>\n      </ion-item>\n      <ion-item>\n        <p>Customer: {{s.customer.name}}</p>\n        <h4>Contact Details</h4>\n        <p>email: {{s.customer.email}}</p>\n        <p>mob: {{s.customer.mob}}</p>\n        <p>whatspp: {{s.customer.whatspp}}</p>\n      </ion-item>\n      <ion-item>\n        <p>Provider: {{s.provider.name}}</p>\n        <h4>Contact Details</h4>\n        <p>email: {{s.provider.email}}</p>\n        <p>mob: {{s.provider.mob}}</p>\n        <p>whatspp: {{s.provider.whatspp}}</p>\n      </ion-item>\n      </ion-card-content>\n  </ion-card>\n</ion-list>'/*ion-inline-end:"C:\src\seva\src\components\request-list\request-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RequestListComponent);
    return RequestListComponent;
}());

//# sourceMappingURL=request-list.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringArrayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the StringArrayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StringArrayComponent = /** @class */ (function () {
    function StringArrayComponent() {
        this.buttonLabel = "Add";
        this.editMode = false;
        this.index = -1;
        console.log('Hello StringArrayComponent Component');
        this.text = 'Hello World';
    }
    StringArrayComponent.prototype.add = function () {
        if (this.editMode && this.index > -1) {
            this.list[this.index] = this.val;
            this.editMode = false;
            this.index = -1;
            this.buttonLabel = "Add";
        }
        else {
            this.list.push(this.val);
        }
        this.val = "";
        console.log("The length is " + this.list.length);
    };
    StringArrayComponent.prototype.remove = function (i) {
        this.list.splice(i, 1);
    };
    StringArrayComponent.prototype.edit = function (i) {
        this.val = this.list[i];
        this.editMode = true;
        this.index = i;
        this.buttonLabel = "Modify";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('list'),
        __metadata("design:type", Object)
    ], StringArrayComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('label'),
        __metadata("design:type", Object)
    ], StringArrayComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('lang'),
        __metadata("design:type", Object)
    ], StringArrayComponent.prototype, "lang", void 0);
    StringArrayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'string-array',template:/*ion-inline-start:"C:\src\seva\src\components\string-array\string-array.html"*/'<!-- Generated template for the StringArrayComponent component -->\n<ion-item>\n  <ion-label floating>{{label[lang]}}:</ion-label>\n  <ion-input type="text" [(ngModel)]="val"></ion-input>\n  <button ion-button clear item-right (click)="add()">{{buttonLabel}}</button>\n</ion-item>\n<ion-item *ngIf="(list != undefined) && (list.length > 0)">\n  <ion-list>\n    <ion-list-header>{{label[lang]}}</ion-list-header>\n    <ion-item *ngFor="let l of list; let i = index">\n      <ion-item text-wrap (click)="edit(i)">{{l}}<ion-icon name="close-circle" item-right color="danger" right (click)="remove(i)"></ion-icon>\n      </ion-item>\n    </ion-item>\n  </ion-list>\n</ion-item>'/*ion-inline-end:"C:\src\seva\src\components\string-array\string-array.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StringArrayComponent);
    return StringArrayComponent;
}());

//# sourceMappingURL=string-array.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayDaysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DisplayDaysComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DisplayDaysComponent = /** @class */ (function () {
    function DisplayDaysComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.test = [];
        this.day = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dayEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        console.log('Hello DisplayDaysComponent Component');
        this.text = 'Hello World';
    }
    DisplayDaysComponent.prototype.ngOnInit = function () {
        console.log(this.test);
    };
    DisplayDaysComponent.prototype.getNumberArray = function () {
        return Array(this.numberOfDays);
    };
    DisplayDaysComponent.prototype.dayClicked = function (i) {
        this.day.emit(i);
    };
    DisplayDaysComponent.prototype.press = function (i) {
        var _this = this;
        var soundAlert = this.alertCtrl.create({
            message: "Do you want to shift the day?",
            buttons: [
                {
                    text: "Delete",
                    handler: function () {
                        _this.dayEvent.emit({ event: 'delete', day: i });
                    }
                },
                {
                    text: 'Shift Left',
                    handler: function () {
                        _this.dayEvent.emit({ event: 'left', day: i });
                    }
                },
                {
                    text: 'Shift Right',
                    handler: function () {
                        _this.dayEvent.emit({ event: 'right', day: i });
                    }
                }
            ]
        });
        soundAlert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('numberOfDays'),
        __metadata("design:type", Object)
    ], DisplayDaysComponent.prototype, "numberOfDays", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('day'),
        __metadata("design:type", Object)
    ], DisplayDaysComponent.prototype, "day", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('dayEvent'),
        __metadata("design:type", Object)
    ], DisplayDaysComponent.prototype, "dayEvent", void 0);
    DisplayDaysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'display-days',template:/*ion-inline-start:"C:\src\seva\src\components\display-days\display-days.html"*/'<!-- <ion-scroll scrollX>\n  <ion-col col-1 *ngFor="let t of test">\n    <p>{{t}}</p>\n  </ion-col>\n</ion-scroll> -->\n\n<!-- <ion-item>\n  <div *ngFor="let t of test" style="color:black">\n    {{t}}\n  </div>\n</ion-item> -->\n<ion-scroll scrollX style="height:7vh;">\n  <div class="scroll-item">\n    <ion-col col-1 *ngFor="let t of getNumberArray(); let i = index" (tap)="dayClicked(i)" (press)="press(i)">\n      <div class="card card-1">\n        {{i+1}}\n      </div>\n    </ion-col>\n  </div>\n</ion-scroll>\n  '/*ion-inline-end:"C:\src\seva\src\components\display-days\display-days.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DisplayDaysComponent);
    return DisplayDaysComponent;
}());

//# sourceMappingURL=display-days.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(firestore) {
        this.firestore = firestore;
        console.log('Hello ProgressBarComponent Component');
        this.text = 'Hello World';
    }
    ProgressBarComponent.prototype.getTimeInTimeFormat = function (n) {
        if (n == 0) {
            return "00:00";
        }
        var d = new Date(n.toDate());
        var h = d.getUTCHours();
        var m = d.getUTCMinutes();
        var s = '';
        if (h < 10) {
            s = '0';
        }
        s += h.toString() + ':';
        if (m < 10) {
            s += '0';
        }
        s += m.toString();
        return s;
    };
    ProgressBarComponent.prototype.getProgress = function (n) {
        if (n == undefined || n == 0) {
            return 0;
        }
        console.log("n.seconds = " + n.seconds + "; this.startTime.seconds = " + this.startTime.seconds);
        return Math.floor((n.seconds - this.startTime.seconds) / (24 * 60 * 60));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('startTime'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "startTime", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\src\seva\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="getProgress(progress) + \'%\'">\n        {{ getTimeInTimeFormat(progress) }}\n    </div>\n</div>'/*ion-inline-end:"C:\src\seva\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryDayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_otu_logger_otu_logger__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otu_config_otu_config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ItineraryDayViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ItineraryDayViewComponent = /** @class */ (function () {
    function ItineraryDayViewComponent(logger, config) {
        var _this = this;
        this.logger = logger;
        this.config = config;
        this.show = false;
        this.showDetails = [];
        this.lang = 'en';
        this.ACTIVITY_TEMPLATES = {
            name: 'cab', title: { en: 'Cab Booking', kn: 'ಕ್ಯಾಬ್ ಬುಕಿಂಗ್' }, overlap: false,
            fields: [
                {
                    name: 'name',
                    label: {
                        en: 'Service Provider',
                        kn: 'ಸೇವೆ ಒದಗಿಸುವವರು'
                    },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'from',
                    label: {
                        en: 'From', kn: 'ನಿಂದ'
                    },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'to',
                    label: { en: 'To', kn: 'ಗೆ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'rate',
                    label: { en: 'Rate', kn: 'ದರ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'duration',
                    label: { en: 'Duration (mins)', kn: 'ಅವಧಿ (ನಿಮಿಷಗಳು)' },
                    validators: [{ name: 'required', param: '' }], AsyncValidators: [], dataType: 'number',
                    values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'startTime',
                    label: { en: 'Start Time', kn: 'ಆರಂಭವಾಗುವ' },
                    validators: [], AsyncValidators: [], dataType: 'datetime', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'endTime',
                    label: { en: 'End Time', kn: 'ಎಂಡ್ ಟೈಮ್' },
                    validators: [], AsyncValidators: [], dataType: 'datetime', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'description',
                    label: { en: 'Description', kn: 'ವಿವರಣೆ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'status',
                    label: { en: 'Status', kn: 'ಸ್ಥಿತಿ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'payment',
                    label: { en: 'Payment', kn: 'ಪಾವತಿ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'contact',
                    label: { en: 'Contact', kn: 'ಸಂಪರ್ಕಿಸಿ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'contact.name',
                    label: { en: 'Name', kn: 'ಮೊಬೈಲ್' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'contact.mob',
                    label: { en: 'Mob', kn: 'ಮೊಬೈಲ್' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'contact.sms',
                    label: { en: 'SMS', kn: 'SMS' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'contact.whatsapp',
                    label: { en: 'Whatsapp', kn: 'Whatsapp' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'number',
                    label: { en: 'Flight Number', kn: 'ವಿಮಾನ ಸಂಖ್ಯೆ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'meal',
                    label: { en: 'Meal plan', kn: 'ಊಟದ ಯೋಜನೆ' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'audio',
                    label: { en: 'Audio Guide Available', kn: 'ಆಡಿಯೊ ಗೈಡ್ ಲಭ್ಯವಿದೆ' },
                    validators: [{ name: 'required', param: '' }], AsyncValidators: [],
                    dataType: 'option', values: [{ val: 1, label: { en: 'Yes', kn: 'ಹೌದು' } }, { val: 1, label: { en: 'No', kn: 'ಇಲ್ಲ' } }],
                    valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'date',
                    label: { en: 'Date', kn: 'ದಿನಾಂಕ' },
                    validators: [], AsyncValidators: [], dataType: 'datetime', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
                {
                    name: 'pointOfInterest',
                    label: { en: 'Sites to visit', kn: 'ಭೇಟಿ ನೀಡಲು ಸೈಟ್ಗಳು' },
                    validators: [], AsyncValidators: [], dataType: 'string', values: [], valueSource: {}, arrayDetails: {}, show: true
                },
            ]
        };
        console.log('Hello ItineraryDayViewComponent Component');
        this.text = 'Hello World';
        this.lang = 'en';
        this.config.getLanguage().subscribe(function (l) { return _this.lang = l; });
    }
    ItineraryDayViewComponent.prototype.ngOnInit = function () {
        console.log(this.day);
        this.showDetails.fill(false, 0, this.day.length);
        console.log(this.showDetails);
    };
    ItineraryDayViewComponent.prototype.getObjectKeys = function (a) {
        return Object.keys(a);
    };
    ItineraryDayViewComponent.prototype.getDescription = function (k) {
        var activity = this.ACTIVITY_TEMPLATES.fields.find(function (x) { return x.name == k; });
        if (activity == undefined) {
            return "SUDHIR";
        }
        else {
            return activity.label[this.lang];
        }
    };
    ItineraryDayViewComponent.prototype.getValue = function (k, val) {
        if (k == 'startTime' || k == 'endTime') {
            var s = '';
            var d = val.toDate();
            var h = d.getHours();
            if (h < 10) {
                s = '0';
            }
            s += h.toString() + ':';
            var m = d.getMinutes();
            if (m < 10) {
                s += '0';
            }
            s += m.toString();
            return s;
        }
        else if (typeof val == 'object') {
            if (k == 'contact') {
                var contact = [];
                if (val.name != undefined && val.name.trim() == '') {
                    contact.push({ description: 'Name', val: 'To be finalized soon...' });
                }
                else {
                    contact.push({ description: 'Name', val: val.name });
                }
                if (val.mob == '') {
                    contact.push({ description: 'mob', val: ' - ' });
                }
                else {
                    contact.push({ description: 'mob', val: val.mob });
                }
                if (val.sms == '') {
                    contact.push({ description: 'sms', val: ' - ' });
                }
                else {
                    contact.push({ description: 'sms', val: val.sms });
                }
                if (val.whatsapp == '') {
                    contact.push({ description: 'whatsapp', val: ' - ' });
                }
                else {
                    contact.push({ description: 'wjhatsapp', val: val.whatsapp });
                }
                return contact;
            }
        }
        else if (val == '') {
            return 'SUDHIR: NULL';
        }
        else if (val == 0) {
            return 'ZERO';
        }
        else if (val == '0') {
            return 'SUDHIR: ZERO IN STRING';
        }
        else {
            return val;
        }
    };
    ItineraryDayViewComponent.prototype.isMulitiple = function (k, val) {
        if (k == 'contact') {
            return true;
        }
        return false;
    };
    ItineraryDayViewComponent.prototype.funTime = function (day, i) {
        this.logger.eventLog('funTime', { day: day, index: 1 });
        alert('This is under construction. Stay tunned for more details');
    };
    ItineraryDayViewComponent.prototype.toggleShow = function (day) {
        this.logger.eventLog('day click', { day: day });
        this.show = !this.show;
    };
    ItineraryDayViewComponent.prototype.toggleShowDetails = function (day, activity, i, toggle) {
        this.logger.eventLog('activity click' + toggle, { day: day, activity: activity });
        this.showDetails[i] = !this.showDetails[i];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('day'),
        __metadata("design:type", Object)
    ], ItineraryDayViewComponent.prototype, "day", void 0);
    ItineraryDayViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'itinerary-day-view',template:/*ion-inline-start:"C:\src\seva\src\components\itinerary-day-view\itinerary-day-view.html"*/'<ion-item [ngClass]="show ? \'abnormal\': \'normal\'" style="border-radius: 10px"\n\n          style="text-align: center; height:100%; width: 100%" (click)="toggleShow(day.day)">\n\nDay - {{day.day}}:&nbsp;{{day.startTime.toDate() | date: "mediumDate"}}\n\n</ion-item>\n\n\n\n<ion-list *ngIf="show">\n\n  <ion-card *ngFor="let a of day.activities; let i = index" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'" style="border-radius: 10px">\n\n    <ion-card-header (click)="toggleShowDetails(day.day, a, i, \'on\')">\n\n      <ion-card-title text-wrap *ngIf="!showDetails[i]">\n\n        {{a.description}}\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content *ngIf="showDetails[i]" (click)="toggleShowDetails(day.day, a, i, \'off\')">\n\n      <p *ngFor="let k of getObjectKeys(a)">\n\n        <span *ngIf="a[k] != null && a[k] != \'\' && a[k] != 0 && a[k] != \'0\'">\n\n          <span style="font-weight: bold">{{getDescription(k)}}:&nbsp;\n\n          </span>\n\n          <span text-wrap *ngIf="!isMulitiple(k)">\n\n            {{getValue(k, a[k])}}\n\n          </span>\n\n          <span text-wrap *ngIf="isMulitiple(k)">\n\n            <p *ngFor="let lk of getValue(k, a[k])">\n\n              <span style="font-weight: bold">\n\n                {{lk.description}}&nbsp;:&nbsp;\n\n              </span>\n\n              <span>\n\n                {{lk.val}}\n\n              </span>\n\n          </span>\n\n        </span>\n\n        <!-- <span><span style="font-weight: bold">{{getDescription(k)}}:&nbsp;{{k}}:&nbsp;</span>{{getValue(k, a[k])}}</span> -->\n\n      </p>\n\n    </ion-card-content>\n\n    <ion-card-content *ngIf="showDetails[i]" style="font-style: italic" (click)="funTime(day.day, i)">\n\n      Click to know more...\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-list>'/*ion-inline-end:"C:\src\seva\src\components\itinerary-day-view\itinerary-day-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], ItineraryDayViewComponent);
    return ItineraryDayViewComponent;
}());

//# sourceMappingURL=itinerary-day-view.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBxKVsMnMnBYz65usQAZqbBB9LhnmnCbLY",
    authDomain: "seva-6cc88.firebaseapp.com",
    databaseURL: "https://seva-6cc88.firebaseio.com",
    projectId: "seva-6cc88",
    storageBucket: "seva-6cc88.appspot.com",
    messagingSenderId: "578460806647"
};
//# sourceMappingURL=credentials.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map