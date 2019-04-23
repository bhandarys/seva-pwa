webpackJsonp([0],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItineraryPageModule", function() { return UserItineraryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_itinerary__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserItineraryPageModule = /** @class */ (function () {
    function UserItineraryPageModule() {
    }
    UserItineraryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_itinerary__["a" /* UserItineraryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_itinerary__["a" /* UserItineraryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UserItineraryPageModule);
    return UserItineraryPageModule;
}());

//# sourceMappingURL=user-itinerary.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otu_logger_otu_logger__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otu_config_otu_config__ = __webpack_require__(111);
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
 * Generated class for the UserItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserItineraryPage = /** @class */ (function () {
    function UserItineraryPage(navCtrl, navParams, firestore, logger, config, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firestore = firestore;
        this.logger = logger;
        this.config = config;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.lang = 'en';
        alert('Inside Cons');
        this.lang = 'en';
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.itrCode = this.firestore.getItrCode();
        if (this.itrCode == undefined || this.itrCode == '') {
            alert('itrCode is undefined or empty');
            var loopCount_1 = 0;
            var interval_1 = setInterval(function () {
                _this.token = _this.logger.getToken();
                if (_this.token != undefined && _this.token != null && _this.token != '' && loopCount_1 > 30) {
                    loopCount_1++;
                    alert('token is not empty');
                    clearInterval(interval_1);
                    alert("token is " + _this.token);
                    _this.firestore.getLastUsedItrCode(_this.token).valueChanges().subscribe(function (c) {
                        alert('Inside Subscribe of get Last Used Itr Code');
                        if (c != undefined && c.length > 0) {
                            alert(c[0]['itrCode']);
                            _this.itrCode = c[0]['itrCode'];
                            _this.getItinerary();
                        }
                        else {
                            alert('No token received from FS');
                            _this.loading.dismiss();
                        }
                    });
                }
                else {
                    alert('No token received - ' + loopCount_1);
                    _this.loading.dismiss();
                }
            }, 100);
        }
        else {
            alert('itrCode is defined');
            this.getItinerary();
        }
        this.config.getLanguage().subscribe(function (l) { return _this.lang = l; });
        this.firestore.getOtherPackages().valueChanges().subscribe(function (p) {
            _this.itrList = p;
        });
    }
    UserItineraryPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad UserItineraryPage');
    };
    // ionViewWillLeave() {
    //   if(this.token != undefined) {
    //     this.firestore.rememberItrCode(this.token, this.itrCode);
    //   }
    // }
    UserItineraryPage.prototype.getItinerary = function () {
        var _this = this;
        // alert(`Token Id: ${this.token} & Itr Code: ${this.itrCode}`)
        this.logger.eventLog('getItinerary', { code: this.itrCode });
        if (this.token != undefined) {
            this.firestore.rememberItrCode(this.token, this.itrCode);
        }
        this.itinerary$ = this.firestore.getItinerary(this.itrCode.trim()).valueChanges();
        this.itinerary$.subscribe(function (i) {
            // console.log(i);
            _this.loading.dismiss();
        }, function (e) {
            _this.errMessage = e;
            _this.loading.dismiss();
        });
    };
    UserItineraryPage.prototype.changeLanguage = function () {
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
    UserItineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user-itinerary',template:/*ion-inline-start:"C:\src\alfresco\src\pages\user-itinerary\user-itinerary.html"*/'<!--\n\n  Generated template for the UserItineraryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Trip Alfresco</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="foreground" (click)="changeLanguage()">{{lang}}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Enter Itinerary Code</ion-label>\n\n    <ion-input type="text" [(ngModel)]="itrCode"></ion-input>\n\n    <button ion-button item-right (click)="getItinerary()">Submit</button>\n\n  </ion-item>\n\n  <div *ngIf="errMessage == undefined">\n\n    <ion-item *ngFor="let i of itinerary$ | async" style="border: 1px solid green">\n\n      <h1 style="text-align: center">{{i.name}}</h1>\n\n      <itinerary-day-view *ngFor="let d of i.days" [day]="d">\n\n      </itinerary-day-view>\n\n    </ion-item>\n\n  </div>\n\n  <div *ngIf="errMessage != undefined && (itinerary$ | async)?.length == 0">\n\n    <h2>Something went wrong - {{errMessage}}</h2>\n\n  </div>\n\n  <br>\n\n  <br><br>\n\n\n\n  <div style="color: green; border: 1px solid green" *ngIf="itrList != undefined">\n\n    <h2 style="text-align: center">Our Other Packages</h2>\n\n    <ion-list>\n\n      <ion-item *ngFor="let l of itrList">\n\n        <p><span style="font-weight: bold; font-size: 200%; color: green">{{l.name}}</span>:&nbsp;{{l.description}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\src\alfresco\src\pages\user-itinerary\user-itinerary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], UserItineraryPage);
    return UserItineraryPage;
}());

//# sourceMappingURL=user-itinerary.js.map

/***/ })

});
//# sourceMappingURL=0.js.map