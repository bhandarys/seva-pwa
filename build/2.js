webpackJsonp([2],{

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageModule", function() { return UserHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_home__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserHomePageModule = /** @class */ (function () {
    function UserHomePageModule() {
    }
    UserHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_home__["a" /* UserHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_home__["a" /* UserHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UserHomePageModule);
    return UserHomePageModule;
}());

//# sourceMappingURL=user-home.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otu_config_otu_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otu_auth_otu_auth__ = __webpack_require__(56);
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
 * Generated class for the DynaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DynaPage = /** @class */ (function () {
    function DynaPage(navCtrl, navParams, config, firestore, auth, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.firestore = firestore;
        this.auth = auth;
        this.viewCtrl = viewCtrl;
        this.fields1 = [{ name: "firstName", label: { en: "First Name", kn: "ಮೊದಲ ಹೆಸರು" }, validators: [{ name: "required", param: "" }, { name: "minLength", param: "3" }, { name: "maxLength", param: "10" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "lastName", label: { en: "Last Name", kn: "ಕೊನೆಯ ಹೆಸರು" }, validators: [{ name: "required", param: "" }, { name: "minLength", param: "3" }, { name: "maxLength", param: "10" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "age", label: { en: "Age", kn: "ವಯಸ್ಸು" }, validators: [{ name: "age", param: "" }], AsyncValidators: [], dataType: "number", values: [], valueSource: {}, arrayDetails: {} },
            { name: "gender", label: { en: "Gender", kn: "ಲಿಂಗ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "option", values: [{ val: 1, label: { en: "male", kn: "ಪುರುಷ" } }, { val: 2, label: { en: "female", kn: "ಸ್ತ್ರೀ" } }], valueSource: {}, arrayDetails: {} },
            { name: "username", label: { en: "Username", kn: "ಬಳಕೆದಾರ ಹೆಸರು" }, validators: [{ name: "required", param: "" }, { name: "minLength", param: "3" }, { name: "maxLength", param: "10" }], AsyncValidators: [{ name: "checkUsername", param: "" }], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "privacy", label: { en: "Privacy", kn: "ಗೌಪ್ಯತೆ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "option", values: [{ val: 1, label: { en: "Public", kn: "ಸಾರ್ವಜನಿಕ" } }, { val: 2, label: { en: "Private", kn: "ಖಾಸಗಿ" } }, { val: 3, label: { en: "Friends", kn: "ಸ್ನೇಹಿತರು" } }], valueSource: {}, arrayDetails: {} },
            { name: "bio", label: { en: "Bio", kn: "ಬಯೋ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} }
        ];
        this.fields2 = [{ name: "email", label: { en: "Photo", kn: "ಫೋಟೋ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "password", label: { en: "Name", kn: "ಹೆಸರು" }, validators: [{ name: "required", param: "" }, { name: "minLength", param: "3" }, { name: "maxLength", param: "10" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "reference", label: { en: "Duration", kn: "ಅವಧಿ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "appliedFor", label: { en: "Working Hours", kn: "ಕೆಲಸದ ಸಮಯ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} }
        ];
        this.fields3 = [{ name: "img", label: { en: "Photo", kn: "ಫೋಟೋ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "name", label: { en: "Name", kn: "ಹೆಸರು" }, validators: [{ name: "required", param: "" }, { name: "minLength", param: "3" }, { name: "maxLength", param: "10" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "duration", label: { en: "Duration", kn: "ಅವಧಿ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "workingHours", label: { en: "Working Hours", kn: "ಕೆಲಸದ ಸಮಯ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "rate", label: { en: "Rate", kn: "ದರ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "currency", label: { en: "Currency", kn: "ಕರೆನ್ಸಿ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
            { name: "active", label: { en: "Active", kn: "ಸಕ್ರಿಯ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "string", values: [{ val: 1, label: { en: "Active", kn: "ಸಕ್ರಿಯ" } }, { val: 2, label: { en: "Inactive", kn: "ಖನಿಷ್ಕ್ರಿಯವಾಗಿದೆ" } }], valueSource: {}, arrayDetails: {} },
        ];
        this.errMessages1 = [{ errCode: 0, label: { en: "is a required field", kn: "ಅಗತ್ಯ ಕ್ಷೇತ್ರ" } },
            { errCode: 1, label: { en: "has a miumum length of", kn: "ಮಿಮಿಯಮ್ ಉದ್ದವನ್ನು ಹೊಂದಿದೆ" } },
            { errCode: 2, label: { en: "has a maximum length of", kn: "ಗರಿಷ್ಠ ಉದ್ದವನ್ನು ಹೊಂದಿದೆ" } },
            { errCode: 3, label: { en: "is too young", kn: "ತುಂಬಾ ಚಿಕ್ಕದಾಗಿದೆ" } },
            { errCode: 4, label: { en: "Are you sure?", kn: "ನೀವು ಖಚಿತವಾಗಿರುವಿರಾ?" } },
            { errCode: 5, label: { en: "not realistic", kn: "ವಾಸ್ತವಿಕವಲ್ಲ" } }
        ];
        this.errMessages2 = [{ errCode: 0, label: { en: "is a required field", kn: "ಅಗತ್ಯ ಕ್ಷೇತ್ರ" } },
            { errCode: 1, label: { en: "has a miumum length of", kn: "ಮಿಮಿಯಮ್ ಉದ್ದವನ್ನು ಹೊಂದಿದೆ" } },
            { errCode: 2, label: { en: "has a maximum length of", kn: "ಗರಿಷ್ಠ ಉದ್ದವನ್ನು ಹೊಂದಿದೆ" } },
            { errCode: 3, label: { en: "is too young", kn: "ತುಂಬಾ ಚಿಕ್ಕದಾಗಿದೆ" } },
            { errCode: 4, label: { en: "Are you sure?", kn: "ನೀವು ಖಚಿತವಾಗಿರುವಿರಾ?" } },
            { errCode: 5, label: { en: "not realistic", kn: "ವಾಸ್ತವಿಕವಲ್ಲ" } }
        ];
        // , valueSource: {col: "Users", filter: {field: "role", val: "sp"}}
        this.activityTemplates = [
            { name: 'cab', title: { en: 'Cab Booking', kn: 'ಕ್ಯಾಬ್ ಬುಕಿಂಗ್' },
                fields: [
                    { name: "name", label: { en: "Service Provider", kn: "ಸೇವೆ ಒದಗಿಸುವವರು" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "from", label: { en: "From", kn: "ನಿಂದ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "to", label: { en: "To", kn: "ಗೆ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "rate", label: { en: "Rate", kn: "ದರ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "duration", label: { en: "Duration (mins)", kn: "ಅವಧಿ (ನಿಮಿಷಗಳು)" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "number", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "startTime", label: { en: "Start Time", kn: "ಆರಂಭವಾಗುವ" }, validators: [], AsyncValidators: [], dataType: "datetime", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "description", label: { en: "Description", kn: "ವಿವರಣೆ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "status", label: { en: "Status", kn: "ಸ್ಥಿತಿ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "payment", label: { en: "Payment", kn: "ಪಾವತಿ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.name", label: { en: "Name", kn: "ಮೊಬೈಲ್" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.mob", label: { en: "Mob", kn: "ಮೊಬೈಲ್" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.sms", label: { en: "SMS", kn: "SMS" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.whatsapp", label: { en: "Whatsapp", kn: "Whatsapp" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                ]
            },
            { name: 'hotelName', title: { en: 'Add Hotel Booking', kn: 'ಹೋಟೆಲ್ ಬುಕಿಂಗ್ ಸೇರಿಸಿ' },
                fields: [
                    { name: "name", label: { en: "Hotel Name", kn: "ಹೋಟೆಲ್ ಹೆಸರು" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "address", label: { en: "Address", kn: "ವಿಳಾಸ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.name", label: { en: "Name", kn: "ಮೊಬೈಲ್" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.mob", label: { en: "Mob", kn: "ಮೊಬೈಲ್" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.sms", label: { en: "SMS", kn: "SMS" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.whatsapp", label: { en: "Whatsapp", kn: "Whatsapp" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "startTime", label: { en: "Checkin", kn: "ಚೆಕ್ಇನ್" }, validators: [], AsyncValidators: [], dataType: "datetime", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "endTime", label: { en: "Check-out", kn: "ಚೆಕ್ಔಟ್" }, validators: [], AsyncValidators: [], dataType: "datetime", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "amenities", label: { en: "Amenities", kn: "ಸೌಕರ್ಯಗಳು" }, validators: [], AsyncValidators: [], dataType: "stringArray", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "meal", label: { en: "Meal plan", kn: "ಊಟದ ಯೋಜನೆ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "inclusion", label: { en: "Inclusion", kn: "ಸೇರ್ಪಡೆ" }, validators: [], AsyncValidators: [], dataType: "stringArray", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "exclusion", label: { en: "Exclusion", kn: "ಪ್ರತ್ಯೇಕಿಸುವಿಕೆ" }, validators: [], AsyncValidators: [], dataType: "stringArray", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "policies", label: { en: "Policies", kn: "ನೀತಿಗಳು" }, validators: [], AsyncValidators: [], dataType: "stringArray", values: [], valueSource: {}, arrayDetails: {} },
                ]
            },
            { name: 'sightseeing', title: { en: 'Sight Seeing', kn: 'ಸೈಟ್ ವೀಕ್ಷಣೆ' },
                fields: [
                    { name: "name", label: { en: "Title", kn: "ಶೀರ್ಷಿಕೆ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "pointOfInterest", label: { en: "Sites to visit", kn: "ಭೇಟಿ ನೀಡಲು ಸೈಟ್ಗಳು" }, validators: [], AsyncValidators: [], dataType: "array", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "description", label: { en: "Description", kn: "ವಿವರಣೆ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.mob", label: { en: "Mob", kn: "ಮೊಬೈಲ್" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.sms", label: { en: "SMS", kn: "SMS" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "contact.whatsapp", label: { en: "Whatsapp", kn: "Whatsapp" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "date", label: { en: "Date", kn: "ದಿನಾಂಕ" }, validators: [], AsyncValidators: [], dataType: "datetime", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "place", label: { en: "Reporting Place", kn: "ವರದಿ ಸ್ಥಳ" }, validators: [], AsyncValidators: [], dataType: "string", values: [], valueSource: {}, arrayDetails: {} },
                    { name: "audio", label: { en: "Audio Guide Available", kn: "ಆಡಿಯೊ ಗೈಡ್ ಲಭ್ಯವಿದೆ" }, validators: [{ name: "required", param: "" }], AsyncValidators: [], dataType: "option", values: [{ val: 1, label: { en: "Yes", kn: "ಹೌದು" } }, { val: 1, label: { en: "No", kn: "ಇಲ್ಲ" } }], valueSource: {}, arrayDetails: {} }
                ]
            },
        ];
        this.submitLabel = { en: "Submit", kn: "ಸಲ್ಲಿಸಲು" };
        this.data = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.config.getLanguage().subscribe(function (l) { return _this.lang = l; });
        this.user$ = this.firestore.getCurrentUser();
        this.errMessages = this.errMessages2;
        // this.auth.getUser().subscribe((au) => {
        //   if(au != undefined && au != null) {
        //     this.firestore.getUser(au.email).valueChanges().subscribe((u) => {
        //       this.config.getFields(u[0]['role']).valueChanges().subscribe((f) => {
        //         if (u[0]['role'] == 'am') {
        //           this.fields = this.fields1;
        //         } else {
        //           this.fields = this.fields2;
        //         }
        //       }, e => {
        //       });
        //       this.config.getErrorMessages(u[0]['role']).valueChanges().subscribe((e) => {
        //         if (u[0]['role'] == 'am') {
        //           this.errMessages = this.errMessages1;
        //         } else {
        //           this.errMessages = this.errMessages2;
        //         }
        //       });
        //     });
        //   } else {
        //     this.navCtrl.setRoot(ErrorPage, {msg: "From Dyna.ts - email not available"});
        //   }
        // });
    }
    DynaPage.prototype.ionViewDidEnter = function () {
        // }
        // ionViewDidLoad() {
        console.log('ionViewDidLoad SpHomePage');
        var page = this.navParams.get('function');
        var activity = this.navParams.get('activity');
        if (page == 'activity') {
            this.fields = activity['fields'];
            this.title = activity['title'];
        }
        else {
            this.doGeneric(page);
        }
    };
    // doActivity(id) {
    //   this.firestore.getActivityTemplate(id).valueChanges().subscribe((a) => {
    //     if(a != undefined && a.length > 0) {
    //       this.fields = a['fields'];
    //       this.title = a['title'];
    //     }
    //   });
    // }
    DynaPage.prototype.doGeneric = function (page) {
        var _this = this;
        this.user$.subscribe(function (u) {
            if (u != null && u.id != undefined && u.id != '') {
                _this.user = u;
                _this.config.getPageDetails(u.role, page).valueChanges().subscribe(function (p) {
                    if (p != undefined && p.length > 0) {
                        var f = p[0]['pages'].find(function (pa) {
                            return pa.name == page;
                        });
                        if (f != undefined) {
                            console.log(f);
                            _this.fields = f.fields;
                            _this.title = f.title;
                        }
                        else {
                            _this.fields = _this.activityTemplates[1].fields;
                            _this.title = _this.activityTemplates[1].title;
                        }
                        // this.fields = p[0];
                    }
                    else {
                        if (page = "addActivityAirportTransfer") {
                            _this.fields = _this.activityTemplates[1];
                        }
                    }
                });
            }
        });
    };
    DynaPage.prototype.save = function (event) {
        console.log(event);
        // this.data.emit(event);
        var keys = Object.keys(event);
        keys.forEach(function (k) {
            var i = k.indexOf('.');
            if (i > -1) {
                var n = k.split('.');
                if (event[n[0]] == undefined) {
                    event[n[0]] = {};
                    event[n[0]][n[1]] = event[k];
                }
                else {
                    var temp = n[1];
                    event[n[0]][n[1]] = event[k];
                }
                delete event[k];
            }
        });
        this.viewCtrl.dismiss(event);
        console.log("Why am I not here?");
        // if(this.user != undefined && this.user.id != undefined && this.user.amId != undefined) {
        //   event['providerId'] = this.user.id;
        //   event['amId'] = this.user.amId;
        //   event['appId'] = this.config.getAppId();
        // }
        // this.firestore.saveService(event).then((r) => {
        //   alert('Success');
        //   console.log(r);
        //   this.loading.dismiss();
        //   this.navCtrl.pop();
        // }, (error) => {
        //   this.loading.dismiss().then( () => {
        //     var errorMessage: string = error.message;
        //       let soundAlert = this.alertCtrl.create({
        //         message: errorMessage,
        //         buttons: [
        //           {
        //             text: "Ok",
        //             role: 'cancel'
        //           }
        //         ]
        //       });
        //       soundAlert.present();
        //   });
        //   this.navCtrl.setRoot(ErrorPage, {error: error});
        // });
        // this.loading = this.loadingCtrl.create({
        //   dismissOnPageChange: true,
        // });
        // this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */])('data'),
        __metadata("design:type", Object)
    ], DynaPage.prototype, "data", void 0);
    DynaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-dyna',template:/*ion-inline-start:"C:\src\seva\src\pages\dyna\dyna.html"*/'<!--\n\n  Generated template for the DynaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <header title="DynaPage" [titleObj]="title"></header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <dyna-form  *ngIf="fields != undefined && errMessages != undefined" \n\n              [fields]="fields" \n\n              [errMessages]="errMessages"\n\n              (data)="save($event)">\n\n  </dyna-form>\n\n</ion-content>'/*ion-inline-end:"C:\src\seva\src\pages\dyna\dyna.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */]])
    ], DynaPage);
    return DynaPage;
}());

//# sourceMappingURL=dyna.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dyna_dyna__ = __webpack_require__(625);
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
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserHomePage = /** @class */ (function () {
    function UserHomePage(navCtrl, navParams, mdlCtrl, firestore, alertCtrl, popCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdlCtrl = mdlCtrl;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
        this.popCtrl = popCtrl;
        this.spList = [{
                img: "assets/imgs/temple.jpg",
                name: "Temple Tour",
                duration: "2 hours",
                workingHours: "8:30 AM to 4:30 PM",
                rate: "200",
                currency: "Rs.",
                active: true
            },
            {
                img: "assets/imgs/church.jpg",
                name: "Chruch Tour",
                duration: "1.5 hours",
                workingHours: "8:30 AM to 4:30 PM",
                rate: "250",
                currency: "Rs.",
                active: true
            }];
        this.custList = [{
                name: "Old Cow",
                email: "oldcow@gmail.com",
                mob: "99999999999",
                whatsapp: "99999999999",
                others: "Long story",
                img: "assets/imgs/cow.jpg",
                address: {
                    firstLine: "address 1",
                    secondLine: "address 2",
                    city: "city",
                    pin: "pin",
                    state: "state",
                    country: "country",
                }
            },
            {
                name: "Old Cow",
                email: "oldcow@gmail.com",
                mob: "99999999999",
                whatsapp: "99999999999",
                others: "Long story",
                img: "assets/imgs/cow.jpg",
                address: {
                    firstLine: "address 1",
                    secondLine: "address 2",
                    city: "city",
                    pin: "pin",
                    state: "state",
                    country: "country",
                }
            }
        ];
        this.spList1 = [{
                name: "New Cow",
                email: "newcow@gmail.com",
                mob: "1111111111111",
                whatsapp: "11111111111",
                others: "Long story",
                img: "assets/imgs/cow.jpg",
                address: {
                    firstLine: "address 1",
                    secondLine: "address 2",
                    city: "city",
                    pin: "pin",
                    state: "state",
                    country: "country",
                }
            },
            {
                name: "New Cow",
                email: "newcow@gmail.com",
                mob: "11111111111",
                whatsapp: "1111111111",
                others: "Long story",
                img: "assets/imgs/cow.jpg",
                address: {
                    firstLine: "address 1",
                    secondLine: "address 2",
                    city: "city",
                    pin: "pin",
                    state: "state",
                    country: "country",
                }
            }
        ];
        this.selectedTab = "request";
        this.firestore.getCurrentUser().subscribe(function (u) {
            if (u != null) {
                _this.user = u;
                _this.services$ = _this.firestore.getServices(u.amId).valueChanges();
                _this.request$ = _this.firestore.getCustRequest(u.id).valueChanges();
            }
        });
    }
    UserHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserHomePage');
    };
    UserHomePage.prototype.selectTab = function (tab) {
        this.selectedTab = tab;
    };
    UserHomePage.prototype.addSP = function () {
        var a = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_3__dyna_dyna__["a" /* DynaPage */]);
        a.present();
        // a.onDidDismiss()
    };
    UserHomePage.prototype.addCust = function () {
    };
    UserHomePage.prototype.addRequest = function (service) {
        var _this = this;
        var data = this.alertCtrl.create({
            title: "Select Time",
            inputs: [{
                    name: 'date',
                    placeholder: 'Select date & time',
                    type: 'date'
                },
                {
                    name: 'time',
                    placeholder: 'Select date & time',
                    type: 'time'
                }
            ],
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
                        var request = {
                            img: service.img,
                            name: service.name,
                            date: data.date,
                            time: data.time,
                            customerId: _this.user.id,
                            customer: {
                                email: _this.user.email,
                                mob: _this.user.mob,
                                whatsapp: _this.user.whatsapp
                            },
                            providerId: service.providerId,
                            provider: service.contact,
                            status: "assigned"
                            // {
                            //   email: 
                            //   mob:
                            //   whatsapp:
                            // }
                        };
                        _this.firestore.addRequest(request).then(function (resp) {
                            console.log(resp);
                        }, function (e) {
                            console.log(e);
                        });
                    } // till here
                }
            ]
        });
        data.present();
    };
    UserHomePage.prototype.addRequest1 = function (myEvent) {
        var PopoverPage = "    <ion-list>\n    <ion-list-header>Ionic</ion-list-header>\n    <button ion-item (click)=\"close()\">Learn Ionic</button>\n    <button ion-item (click)=\"close()\">Documentation</button>\n    <button ion-item (click)=\"close()\">Showcase</button>\n    <button ion-item (click)=\"close()\">GitHub Repo</button>\n    </ion-list>";
        var popover = this.popCtrl.create(PopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    UserHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-user-home',template:/*ion-inline-start:"C:\src\seva\src\pages\user-home\user-home.html"*/'<!--\n  Generated template for the UserHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header title="User Home"></header>\n</ion-header>\n\n<ion-content padding>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="selectedTab">\n      <ion-segment-button value="profile" (tap)="selectTab(\'profile\')">\n        <ion-label>Profile</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="services" (tap)="selectTab(\'services\')">\n        <ion-label>Services</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="request" (tap)="selectTab(\'request\')">\n        <ion-label>Request</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <profile *ngIf="selectedTab == \'profile\'"></profile>\n  <div *ngIf="selectedTab == \'services\'">\n    <ion-list>\n      <ion-card *ngFor="let s of services$ | async" (click)="addRequest(s)" \n      [style.background-image]="\'url(\' + s.img + \')\'">\n\n        <ion-card-title>\n          <!-- <ion-avatar float-left height="126px">\n            <img src="{{s.img}}" alt="{{s.name}}" height="126px" />\n          </ion-avatar> -->\n          <h2>\n            <p style="font-size: 150%; font-weight: bold;" text-center>{{s.name}}</p>\n          </h2>\n        </ion-card-title>\n        <ion-card-content>\n          <ion-item style="background-color: transparent">\n            <p>Duration: {{s.duration}}</p>\n          </ion-item>\n          <ion-item style="background-color: transparent">\n            <p>Working Hours: {{s.workingHours}}</p>\n          </ion-item>\n          <ion-item style="background-color: transparent">\n            <p>Rate: {{s.currency}}&nbsp;{{s.rate}}</p>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n  <div *ngIf="selectedTab == \'request\'">\n    <request-list [requests]="request$ | async"></request-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\src\seva\src\pages\user-home\user-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */]])
    ], UserHomePage);
    return UserHomePage;
}());

//# sourceMappingURL=user-home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map