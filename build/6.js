webpackJsonp([6],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otu_auth_otu_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_username__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_error__ = __webpack_require__(343);
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









/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(nav, authData, formBuilder, loadingCtrl, alertCtrl, firestore, refCheck, config) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.refCheck = refCheck;
        this.config = config;
        this.roles = ['admin', 'am', 'sp', 'cust'];
        this.appId = this.config.getAppIdWithDetails();
        if (this.appId.appId == 1) {
            this.signupForm = formBuilder.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])],
                password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])],
                reference: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid]), refCheck.checkReference.bind(refCheck)],
                appliedFor: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])],
            });
        }
        else {
            this.signupForm = formBuilder.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])],
                password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])]
            });
        }
        // this.signupForm = formBuilder.group({
        //   email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        //   password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        //   reference: ['', Validators.compose([Validators.required, EmailValidator.isValid]), refCheck.checkReference.bind(refCheck)],
        //   appliedFor: ['', Validators.compose([Validators.required])],
        // });
    }
    /**
     * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
     *  component while the user waits.
     *
     * If the form is invalid it will just log the form value, feel free to handle that as you like.
     */
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            console.log(this.signupForm.value);
            this.firestore.getUser(this.signupForm.value.reference).valueChanges().subscribe(function (u) {
                if (u != undefined && u != null && u.length > 0) {
                    //////From here //////
                    _this.authData.signupUser(_this.signupForm.value.email, _this.signupForm.value.password)
                        .then(function (user) {
                        // this.authData.updateProfile("Vidya Bhandary", "https://pbs.twimg.com/profile_images/1045303961681453057/M-UYoU7h_400x400.jpg")
                        console.log(user);
                        console.log(user.user.email);
                        console.log(user.user.uid);
                        console.log(user.user.password);
                        console.log("uid is " + user.user.uid + "; email is " + _this.signupForm.value.email + "; ref is " + _this.signupForm.value.reference + " & applied is " + _this.signupForm.value.appliedFor);
                        var applied;
                        var ref;
                        if (_this.appId.appId == 1) {
                            applied = _this.signupForm.value.reference;
                            ref = _this.signupForm.value.appliedFor;
                        }
                        else {
                            applied = _this.appId.appliedFor;
                            ref = _this.appId.ref;
                        }
                        _this.firestore.addAppliedUser(user.user.uid, _this.signupForm.value.email, applied, ref, false, u[0]['id']).then(function () {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__error_error__["a" /* ErrorPage */], { msg: "Your request has been sent for approval. You'll be informed by email once it is approved." });
                        }, function (e) {
                            console.log("From Signup.ts");
                            console.log(e);
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__error_error__["a" /* ErrorPage */], { error: e });
                        });
                    }, function (error) {
                        _this.loading.dismiss().then(function () {
                            var errorMessage = error.message;
                            var alert = _this.alertCtrl.create({
                                message: errorMessage,
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
                    _this.loading = _this.loadingCtrl.create({
                        dismissOnPageChange: true,
                    });
                    _this.loading.present();
                    ////// Till here /////          
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__error_error__["a" /* ErrorPage */], { msg: "Your have provided an invalid reference. Please check with your reference and try again after some time." });
                }
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\src\seva\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Signup</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-content padding>\n\n    <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input formControlName="email" type="email" placeholder="Your email address"\n\n          [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n\n        <p>Please enter a valid email.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Password</ion-label>\n\n        <ion-input formControlName="password" type="password"  placeholder="Your password"\n\n          [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n\n        <p>Your password needs more than 6 characters.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Reference</ion-label>\n\n        <ion-input formControlName="reference" type="email" placeholder="Reference email address"\n\n          [class.invalid]="!signupForm.controls.reference.valid && signupForm.controls.reference.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!signupForm.controls.reference.valid  && signupForm.controls.reference.dirty">\n\n        <p>Please enter a valid reference.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Applied For</ion-label>\n\n        <ion-select formControlName="appliedFor" [class.invalid]="!signupForm.controls.reference.valid && signupForm.controls.reference.dirty">\n\n          <ion-option *ngFor="let r of roles" value="{{r}}">{{r}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!signupForm.controls.appliedFor.valid  && signupForm.controls.appliedFor.dirty">\n\n        <p>Please select atleast one.</p>\n\n      </ion-item>\n\n\n\n      <button [disabled]="!signupForm.valid"  ion-button block type="submit">\n\n      <!-- <button [disabled]="true"  ion-button block type="submit"> -->\n\n        Create an Account\n\n      </button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\src\seva\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_6__validators_username__["a" /* UsernameValidator */],
            __WEBPACK_IMPORTED_MODULE_8__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=6.js.map