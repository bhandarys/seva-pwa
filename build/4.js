webpackJsonp([4],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItineraryPageModule", function() { return UserItineraryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_itinerary__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(342);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_itinerary__["a" /* UserItineraryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_itinerary__["a" /* UserItineraryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UserItineraryPageModule);
    return UserItineraryPageModule;
}());

//# sourceMappingURL=user-itinerary.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otu_logger_otu_logger__ = __webpack_require__(120);
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
    function UserItineraryPage(navCtrl, navParams, firestore, logger) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firestore = firestore;
        this.logger = logger;
        this.itrList = [
            { name: 'Sri Lanka', description: 'The joy of the emeralds' },
            { name: 'Hampi', description: 'Revisit the ancient' },
            { name: 'Lakshadweep', description: 'A true beach holiday' },
            { name: 'Kerala', description: 'The spice of spice' },
            { name: 'Kashmir', description: 'The trip to paradise' },
            { name: 'Sikkim', description: 'In the lap of the Himalayas' },
        ];
        this.itrCode = this.firestore.getItrCode();
        if (this.itrCode != null) {
            this.getItinerary();
        }
    }
    UserItineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserItineraryPage');
    };
    UserItineraryPage.prototype.getItinerary = function () {
        this.logger.eventLog('getItinerary', { code: this.itrCode });
        this.itinerary$ = this.firestore.getItinerary(this.itrCode).valueChanges();
        // this.itinerary$.subscribe(i => {
        //   console.log(i);
        // })
    };
    UserItineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-user-itinerary',template:/*ion-inline-start:"C:\src\seva\src\pages\user-itinerary\user-itinerary.html"*/'<!--\n\n  Generated template for the UserItineraryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Itinerary</ion-title>\n\n  </ion-navbar> -->\n\n\n\n  <header title="Itinerary"></header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Enter Itinerary Code</ion-label>\n\n    <ion-input type="text" [(ngModel)]="itrCode"></ion-input>\n\n    <button ion-button item-right (click)="getItinerary()">Submit</button>\n\n  </ion-item>\n\n  <div *ngFor="let i of itinerary$ | async">\n\n    <itinerary-day-view *ngFor="let d of i.days" [day]="d">\n\n    </itinerary-day-view>\n\n  </div>\n\n  <br>\n\n  <br><br>\n\n\n\n  <div>\n\n    <h2>Our Other Packages</h2>\n\n    <ion-list>\n\n      <ion-item *ngFor="let l of itrList">\n\n        <p><span style="font-weight: bold; font-size: 200%">{{l.name}}</span>:&nbsp;{{l.description}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\src\seva\src\pages\user-itinerary\user-itinerary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */]])
    ], UserItineraryPage);
    return UserItineraryPage;
}());

//# sourceMappingURL=user-itinerary.js.map

/***/ })

});
//# sourceMappingURL=4.js.map