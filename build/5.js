webpackJsonp([5],{

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpHomePageModule", function() { return SpHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sp_home__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpHomePageModule = /** @class */ (function () {
    function SpHomePageModule() {
    }
    SpHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sp_home__["a" /* SpHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sp_home__["a" /* SpHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SpHomePageModule);
    return SpHomePageModule;
}());

//# sourceMappingURL=sp-home.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_error__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otu_config_otu_config__ = __webpack_require__(47);
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
 * Generated class for the SpHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpHomePage = /** @class */ (function () {
    function SpHomePage(navCtrl, navParams, mdlCtrl, firestore, loadingCtrl, alertCtrl, config) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdlCtrl = mdlCtrl;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.selectedTab = "profile";
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
        this.firestore.getCurrentUser().subscribe(function (u) {
            if (u != null && u.id != undefined) {
                _this.user = u;
                _this.firestore.getMyServices(u.id).valueChanges().subscribe(function (s) {
                    _this.services = s;
                });
            }
        });
    }
    SpHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpHomePage');
    };
    SpHomePage.prototype.selectTab = function (tab) {
        this.selectedTab = tab;
    };
    SpHomePage.prototype.addSP = function () {
        var a = this.mdlCtrl.create('DynaPage');
        a.present();
        // a.onDidDismiss()
    };
    SpHomePage.prototype.addCust = function () {
    };
    SpHomePage.prototype.addService = function () {
        var _this = this;
        var a = this.mdlCtrl.create('DynaPage', { function: 'addService' });
        a.onDidDismiss(function (data) {
            if (data == null) {
                return;
            }
            if (_this.user != undefined && _this.user.id != undefined && _this.user.amId != undefined && data != undefined) {
                data['providerId'] = _this.user.id;
                data['amId'] = _this.user.amId;
                data['appId'] = _this.config.getAppId();
                data['email'] = _this.user.email,
                    data['mob'] = _this.user.mob,
                    data['whatsapp'] = _this.user.whatsapp;
            }
            _this.firestore.saveService(data).then(function (r) {
                alert('Success');
                console.log(r);
                _this.loading.dismiss();
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var errorMessage = error.message;
                    var soundAlert = _this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    soundAlert.present();
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__error_error__["a" /* ErrorPage */], { error: error });
            });
            _this.loading = _this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            _this.loading.present();
        });
        a.present();
    };
    SpHomePage.prototype.viewBookedService = function () {
    };
    SpHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-sp-home',template:/*ion-inline-start:"C:\src\seva\src\pages\sp-home\sp-home.html"*/'<!--\n  Generated template for the SpHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header title="SP Home"></header>\n</ion-header>\n\n<ion-content padding>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="selectedTab">\n      <ion-segment-button value="profile" (tap)="selectTab(\'profile\')">\n        <ion-label>Profile</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="services" (tap)="selectTab(\'services\')">\n        <ion-label>Services</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value="pending" (tap)="selectTab(\'pending\')">\n        <ion-label>Request</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <profile *ngIf="selectedTab == \'profile\'"></profile>\n  <div *ngIf="selectedTab == \'services\'">\n    <button ion-button float-right (click)="addService()">Add New</button>\n    <ion-list *ngIf="services != undefined">\n      <ion-card *ngFor="let s of services">\n        <ion-card-title>\n          <ion-avatar float-left height="126px">\n            <img src="{{s.img}}" alt="{{s.name}}" height="126px" />\n          </ion-avatar>\n          <h2>\n            <p style="font-size: 150%; font-weight: bold;" text-center>{{s.name}}</p>\n          </h2>\n        </ion-card-title>\n        <ion-card-content>\n          <ion-item>\n            <p>Duration: {{s.duration}}</p>\n          </ion-item>\n          <ion-item>\n            <p>Working Hours: {{s.workingHours}}</p>\n          </ion-item>\n          <ion-item>\n            <p>Rate: {{s.currency}}&nbsp;{{s.rate}}</p>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n  <div *ngIf="selectedTab == \'pending\'">\n    <service-list></service-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\src\seva\src\pages\sp-home\sp-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], SpHomePage);
    return SpHomePage;
}());

//# sourceMappingURL=sp-home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map