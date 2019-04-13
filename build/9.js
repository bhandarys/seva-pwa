webpackJsonp([9],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenricPopupPageModule", function() { return GenricPopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__genric_popup__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GenricPopupPageModule = /** @class */ (function () {
    function GenricPopupPageModule() {
    }
    GenricPopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__genric_popup__["a" /* GenricPopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__genric_popup__["a" /* GenricPopupPage */]),
            ],
        })
    ], GenricPopupPageModule);
    return GenricPopupPageModule;
}());

//# sourceMappingURL=genric-popup.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenricPopupPage; });
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
 * Generated class for the GenricPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GenricPopupPage = /** @class */ (function () {
    function GenricPopupPage(navCtrl, navParams, viewCtrl, loadingCtrl, mdlCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mdlCtrl = mdlCtrl;
        this.alertCtrl = alertCtrl;
        this.label = '';
        this.lang = '';
        this.buttonLabel = "Add";
        this.editMode = false;
        this.index = -1;
        this.flag = 2;
        /////////////////////////////// For String Arrays
        this.list = [];
        this.activity$ = this.navParams.get('list');
        this.label = this.navParams.get('label');
        this.lang = this.navParams.get('lang');
        this.flag = this.navParams.get('flag');
        console.log(this.list);
        // this.list.subscribe((l) => {
        //   console.log(l);
        // })
    }
    GenricPopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GenricPopupPage');
    };
    GenricPopupPage.prototype.add = function () {
        if (this.val == undefined || this.val == '') {
            alert('Cannot add blank');
            return;
        }
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
    GenricPopupPage.prototype.remove = function (i) {
        this.list.splice(i, 1);
    };
    GenricPopupPage.prototype.edit = function (i) {
        this.val = this.list[i];
        this.editMode = true;
        this.index = i;
        this.buttonLabel = "Modify";
    };
    GenricPopupPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.list);
    };
    /// For Itenary ////
    GenricPopupPage.prototype.getActivityDetails = function (l) {
        var _this = this;
        var a = this.mdlCtrl.create('DynaPage', { function: 'activity', activity: l });
        a.onDidDismiss(function (data) {
            if (data == null) {
                return;
            }
            else {
                _this.viewCtrl.dismiss(data);
            }
        });
        a.present();
    };
    GenricPopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-genric-popup',template:/*ion-inline-start:"C:\src\seva\src\pages\genric-popup\genric-popup.html"*/'<!-- \n<string-array [list]="list" [label]="label" [lang]="lang">\n</string-array> -->\n\n<header>\n  <ion-navbar>\n    <ion-title>Select Activity</ion-title>\n    <ion-buttons end>\n      <button ion-button><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</header>\n\n<ion-item *ngIf="flag == 1">\n  Enter Amenties here and click add to list\n  <ion-label floating>{{label[lang]}}:</ion-label>\n  <ion-input type="text" [(ngModel)]="val"></ion-input>\n  <button ion-button clear item-right (click)="add()">{{buttonLabel}}</button>\n</ion-item>\n<ion-item *ngIf="(list != undefined) && (list.length > 0)">\n  <ion-scroll scrollY="true" style="height: 50vh">\n    <ion-list>\n      <ion-item *ngFor="let l of list; let i = index">\n        <ion-item text-wrap (click)="edit(i)">{{l}}<ion-icon name="close-circle" item-right color="danger" right\n            (click)="remove(i)"></ion-icon>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n  </ion-scroll>\n</ion-item>\n<ion-item *ngIf="flag == 1">\n  <button ion-button [disabled]="list == undefined || list.length == 0" (click)="save()">Save</button>\n  <button ion-button (click)="save()">Cancel</button>\n</ion-item>\n\n<ion-list *ngIf="flag == 2">\n  <ion-item *ngFor="let a of activity$ | async" (click)="getActivityDetails(a)">\n    {{a.title[lang]}}\n  </ion-item>\n</ion-list>'/*ion-inline-end:"C:\src\seva\src\pages\genric-popup\genric-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GenricPopupPage);
    return GenricPopupPage;
}());

//# sourceMappingURL=genric-popup.js.map

/***/ })

});
//# sourceMappingURL=9.js.map