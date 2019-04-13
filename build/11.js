webpackJsonp([11],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalPageModule", function() { return ApprovalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approval__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApprovalPageModule = /** @class */ (function () {
    function ApprovalPageModule() {
    }
    ApprovalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__approval__["a" /* ApprovalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__approval__["a" /* ApprovalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ApprovalPageModule);
    return ApprovalPageModule;
}());

//# sourceMappingURL=approval.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otu_auth_otu_auth__ = __webpack_require__(56);
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
 * Generated class for the ApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApprovalPage = /** @class */ (function () {
    function ApprovalPage(navCtrl, navParams, auth, firestore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.firestore = firestore;
    }
    ApprovalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ApprovalPage');
        this.auth.getUser().subscribe(function (u) {
            if (u != undefined || u != null) {
                _this.email = u.email;
                _this.firestore.getAppliedUser(u.email).valueChanges().subscribe(function (a) {
                    console.log(u.email);
                    _this.appliedUsers = a;
                    console.log(a);
                    if (a != undefined && a.length > 0) {
                        a.forEach(function (au) {
                            _this.firestore.getRole(au['appliedFor']).valueChanges().subscribe(function (r) {
                                if (r != undefined && r.length > 0) {
                                    au['canAdd'] = r[0]['canAdd'];
                                }
                            });
                        });
                    }
                    else {
                        _this.msg = "No applied users available";
                    }
                });
            }
        });
    };
    ApprovalPage.prototype.submit = function () {
        var _this = this;
        console.log("The is is " + this.appliedUsers[0].$id);
        this.firestore.updateApprovedUsers(this.appliedUsers).then(function () {
            alert("Success");
            _this;
        }, function (e) { return alert("Failed"); });
    };
    ApprovalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-approval',template:/*ion-inline-start:"C:\src\seva\src\pages\approval\approval.html"*/'<!--\n  Generated template for the ApprovalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <header title="Approve"></header>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="appliedUsers != undefined">\n    <ion-item *ngFor="let a of appliedUsers"><\n      <ion-label>{{a.email}} / {{a.approved}} / {{a.appliedFor}}</ion-label>\n      <ion-checkbox [(ngModel)]="a.approved"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)="submit()">Submit</button>\n  <p *ngIf="appliedUsers == undefined || appliedUsers.length == 0">{{msg}}</p>\n</ion-content>\n'/*ion-inline-end:"C:\src\seva\src\pages\approval\approval.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otu_auth_otu_auth__["a" /* OtuAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */]])
    ], ApprovalPage);
    return ApprovalPage;
}());

//# sourceMappingURL=approval.js.map

/***/ })

});
//# sourceMappingURL=11.js.map