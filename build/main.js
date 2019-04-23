webpackJsonp([1],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtuConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
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
    function OtuConfigProvider(firestore) {
        this.firestore = firestore;
        this.lang$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this.app = {
            amId: 'oEAdPhLK9pB8ghCQeFi1',
            appId: 2,
            appWidget: 'com.exploritage.alfresco_test'
        };
        // console.log('Hello OtuConfigProvider Provider');
        this.lang = "en";
        this.lang$.next(this.lang);
        // this.getAppIdWithDetails().valueChanges().subscribe((a) => this.app = Object.assign({}, a[0]))
    }
    OtuConfigProvider.prototype.getLanguage = function () {
        return this.lang$;
    };
    OtuConfigProvider.prototype.setLanguage = function (lang) {
        this.lang = lang;
        this.lang$.next(lang);
    };
    // getFields(role){
    //   return this.firestore.collection('fields', ref => ref.where("appId", "==", this.getAppId()).where("role", "==", role));
    // }
    // getErrorMessages(role) {
    //   return this.firestore.collection('errorMessages', ref => ref.where("appId", "==", this.getAppId()).where("role", "==", role));
    // }
    // getMenuItems(role) {
    //   console.log(`getMenuItems ${role}`);
    //   return this.firestore.collection('pageConfig', ref => ref.where("name", "==", role).where("appId", "==", this.getAppId()));
    // }
    // getPageDetails(role, page) {
    //   console.log(`getMenuItems ${role}`);
    //   return this.firestore.collection('pageConfig', ref => ref.where("name", "==", role)
    //   // .where("pages.name", "==", page)
    //   .where("appId", "==", this.getAppId()));
    // }
    // logFire(log) {
    //   let id = this.firestore.createId()
    //   this.firestore.collection('logs').doc(id).set({
    //     id,
    //     log
    //   })
    // }
    OtuConfigProvider.prototype.getAppId = function () {
        return this.app.appId;
    };
    OtuConfigProvider.prototype.getAppIdWithDetails = function () {
        return this.firestore.collection('appConfig', function (ref) { return ref.where("appWidget", "==", 'com.exploritage.alfresco_test'); });
    };
    OtuConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], OtuConfigProvider);
    return OtuConfigProvider;
}());

//# sourceMappingURL=otu-config.js.map

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/user-itinerary/user-itinerary.module": [
		584,
		0
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
webpackAsyncContext.id = 274;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__otu_logger_otu_logger__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
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
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(firebase, afs, platform, logger) {
        this.firebase = firebase;
        this.afs = afs;
        this.platform = platform;
        this.logger = logger;
    }
    AlertProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token1, token2, token3, token4, token5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        alert('android');
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 1:
                        token1 = _a.sent();
                        this.firebase.getToken().then(function (t) { return token5 = t; });
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        alert('ios');
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 3:
                        token2 = _a.sent();
                        return [4 /*yield*/, this.firebase.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 8];
                        alert('cordova');
                        return [4 /*yield*/, this.firebase.grantPermission()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 7:
                        token3 = _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!this.platform.is('pwa')) return [3 /*break*/, 10];
                        alert('pwa');
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 9:
                        // await this.firebase.grantPermission();
                        token4 = _a.sent();
                        _a.label = 10;
                    case 10:
                        alert(this.platform.platforms());
                        alert(typeof this.platform.platforms());
                        this.saveToken(token1, token2, token3, token4, token5);
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertProvider.prototype.saveToken = function (token1, token2, token3, token4, token5) {
        if (!token1)
            token1 = "Not received";
        if (!token2)
            token2 = "Not received";
        if (!token3)
            token3 = "Not received";
        if (!token4)
            token4 = "Not received";
        if (!token5)
            token5 = "Not received";
        var devicesRef = this.afs.collection('devices');
        // android: token1,
        // ios: token2,
        // cordova: token3,
        // pwa: token4,
        // promise: token5
        var data = {
            userId: 'userId',
            android: "Not received",
            ios: "Not received",
            cordova: "Not received",
            pwa: "Not received",
            promise: "Not received"
        };
        this.logger.setToken(token1);
        this.logger.eventLog('getToken', data);
        var id = this.afs.createId();
        alert("Writing in FS with code " + id);
        return devicesRef.doc(id).set(data).then(function (s) { return alert('Success in writing to FS'); }, function (f) { alert('Failed to write to FS'); alert(f); });
    };
    AlertProvider.prototype.onNotifications = function () {
        return this.firebase.onNotificationOpen();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__otu_logger_otu_logger__["a" /* OtuLoggerProvider */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itinerary_day_view_itinerary_day_view__ = __webpack_require__(558);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__itinerary_day_view_itinerary_day_view__["a" /* ItineraryDayViewComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__itinerary_day_view_itinerary_day_view__["a" /* ItineraryDayViewComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(466);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__credentials_credentials__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_firestore_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_otu_config_otu_config__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_otu_logger_otu_logger__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_alert_alert__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/user-itinerary/user-itinerary.module#UserItineraryPageModule', name: 'UserItineraryPage', segment: 'user-itinerary', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__credentials_credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_firestore_firestore__["a" /* FirestoreProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_15__providers_alert_alert__["a" /* AlertProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryDayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otu_logger_otu_logger__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otu_config_otu_config__ = __webpack_require__(111);
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
    function ItineraryDayViewComponent(logger, config, firestore) {
        var _this = this;
        this.logger = logger;
        this.config = config;
        this.firestore = firestore;
        this.show = false;
        this.showDetails = [];
        this.lang = 'en';
        // console.log('Hello ItineraryDayViewComponent Component');
        // this.text = 'Hello World';
        this.lang = 'en';
        this.config.getLanguage().subscribe(function (l) { return _this.lang = l; });
        this.firestore.getActivityMasterList().valueChanges().subscribe(function (a) {
            _this.activityTemplates = a[0];
        });
    }
    ItineraryDayViewComponent.prototype.ngOnInit = function () {
        // console.log(this.day);
        this.showDetails.fill(false, 0, this.day.length);
        // console.log(this.showDetails);
    };
    ItineraryDayViewComponent.prototype.getObjectKeys = function (a) {
        // this.orderedKeys = Object.keys(a);
        // this.orderedKeys.forEach(x => {
        //   let activity = this.activityTemplates.fields.find(y => y.name == x);
        //   a[x]['displayOrder'] = activity.displayOrder;
        // })
        // a.sort(this.compare);
        // this.orderedKeys = Object.keys(a);
        // console.log(`The length is ${Object.keys(a).length}`);
        return Object.keys(a);
    };
    ItineraryDayViewComponent.prototype.compare = function (a, b) {
        if (a.displayOrder < b.displayOrder)
            return -1;
        if (a.displayOrder > b.displayOrder)
            return 1;
        return 0;
    };
    ItineraryDayViewComponent.prototype.getDescription = function (k) {
        var activity = this.activityTemplates.fields.find(function (x) {
            return x.name == k;
        });
        if (activity == undefined) {
            return "NOT FOUND";
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
                    contact.push({ description: 'whatsapp', val: val.whatsapp });
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('day'),
        __metadata("design:type", Object)
    ], ItineraryDayViewComponent.prototype, "day", void 0);
    ItineraryDayViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'itinerary-day-view',template:/*ion-inline-start:"C:\src\alfresco\src\components\itinerary-day-view\itinerary-day-view.html"*/'<ion-item [ngClass]="show ? \'abnormal\': \'normal\'" style="border-radius: 10px"\n\n          style="text-align: center; height:100%; width: 100%" (click)="toggleShow(day.day)">\n\nDay - {{day.day}}:&nbsp;{{day.startTime.toDate() | date: "mediumDate"}}\n\n</ion-item>\n\n<ion-list *ngIf="show && activityTemplates != undefined">\n\n  <ion-card *ngFor="let a of day.activities; let i = index" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'" style="border-radius: 10px">\n\n    <ion-card-header (click)="toggleShowDetails(day.day, a, i, \'on\')" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">\n\n      <ion-card-title text-wrap *ngIf="!showDetails[i]" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">\n\n        <span *ngIf="a.title != undefined || a.title != \'\'">{{a.title}}</span>\n\n        <span *ngIf="a.title == undefined || a.title == \'\'">Click to know more</span>\n\n      </ion-card-title>\n\n    </ion-card-header>\n\n    <ion-card-content *ngIf="showDetails[i]" (click)="toggleShowDetails(day.day, a, i, \'off\')" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">\n\n      <p style="font-weight: bold; font-size: 125%" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">{{a.title}}</p>\n\n      <p *ngFor="let k of getObjectKeys(a)" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">\n\n        <span *ngIf="a[k] != null && a[k] != \'\' && a[k] != 0 && a[k] != \'0\' && k != \'metadata\' && k != \'title\'">\n\n          <span style="font-weight: bold">{{getDescription(k)}}:&nbsp;\n\n          </span>\n\n          <span text-wrap *ngIf="!isMulitiple(k)">\n\n            {{getValue(k, a[k])}}\n\n          </span>\n\n          <span text-wrap *ngIf="isMulitiple(k)">\n\n            <p *ngFor="let lk of getValue(k, a[k])" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">\n\n              <span style="font-weight: bold">\n\n                {{lk.description}}&nbsp;:&nbsp;\n\n              </span>\n\n              <span>\n\n                {{lk.val}}\n\n              </span>\n\n          </span>\n\n        </span>\n\n        <!-- <span><span style="font-weight: bold">{{getDescription(k)}}:&nbsp;{{k}}:&nbsp;</span>{{getValue(k, a[k])}}</span> -->\n\n      </p>\n\n    </ion-card-content>\n\n    <!-- <ion-card-content *ngIf="showDetails[i]" style="font-style: italic" (click)="funTime(day.day, i)" [ngClass]="showDetails[i] ? \'normal \': \'abnormal\'">\n\n      Click to know more...\n\n    </ion-card-content> -->\n\n  </ion-card>\n\n</ion-list>'/*ion-inline-end:"C:\src\alfresco\src\components\itinerary-day-view\itinerary-day-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otu_config_otu_config__["a" /* OtuConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firestore_firestore__["a" /* FirestoreProvider */]])
    ], ItineraryDayViewComponent);
    return ItineraryDayViewComponent;
}());

//# sourceMappingURL=itinerary-day-view.js.map

/***/ }),

/***/ 582:
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

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firestore_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_otu_logger_otu_logger__ = __webpack_require__(84);
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








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, firestore, location, alertProvider, toastController, logger) {
        var _this = this;
        this.platform = platform;
        this.firestore = firestore;
        this.location = location;
        this.alertProvider = alertProvider;
        this.toastController = toastController;
        this.logger = logger;
        this.rootPage = "UserItineraryPage";
        this.logger.eventLog('App Comp Const', {});
        this.initializeURLParams();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.notificationSetup();
        });
    }
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
        if (params == undefined || params == null) {
            this.logger.eventLog('initializeURLParams', { param: '' });
        }
        else {
            this.logger.eventLog('initializeURLParams', { param: params });
        }
        this.firestore.setItrCode(params);
    };
    MyApp.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.eventLog('received notification', { message: message });
                        return [4 /*yield*/, this.toastController.create({
                                message: message,
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.notificationSetup = function () {
        var _this = this;
        this.alertProvider.getToken();
        this.alertProvider.onNotifications().subscribe(function (msg) {
            if (_this.platform.is('ios')) {
                _this.presentToast(msg.aps.alert);
            }
            else {
                _this.presentToast(msg.body);
            }
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\src\alfresco\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\src\alfresco\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_otu_logger_otu_logger__["a" /* OtuLoggerProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_otu_config_otu_config__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirestoreProvider = /** @class */ (function () {
    function FirestoreProvider(firestore, config) {
        this.firestore = firestore;
        this.config = config;
        // console.log('Hello FirestoreProvider Provider');
        // this.user$.next(null);
        // this.refUser$.next(null);
        // this.sps$.next([]);
        // this.cust$.next([]);
        // this.coord$.next([]);
    }
    FirestoreProvider.prototype.getTimeInFSFormat = function (d) {
        var date = new Date(d);
        date.setHours(date.getUTCHours());
        date.setMinutes(date.getUTCMinutes());
        // firebase.firestore.Timestamp.
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["firestore"].Timestamp.fromDate(date);
    };
    FirestoreProvider.prototype.getTimeFromSecs = function (m) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["firestore"].Timestamp.fromMillis(m * 1000);
    };
    FirestoreProvider.prototype.getItinerary = function (id) {
        // console.log(`Called with ${id} & ${this.config.getAppId()}`);
        var _this = this;
        return this.firestore.collection('itinerary', function (ref) { return ref.where("appId", "==", _this.config.getAppId())
            .where('id', "==", id); });
    };
    // This is used
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
    FirestoreProvider.prototype.getOtherPackages = function () {
        var _this = this;
        return this.firestore.collection('packages', function (ref) { return ref.where("appId", "==", _this.config.getAppId()); });
    };
    FirestoreProvider.prototype.getActivityMasterList = function () {
        var _this = this;
        return this.firestore.collection('activityMasterList', function (ref) { return ref.where("appId", "==", _this.config.getAppId()); });
    };
    FirestoreProvider.prototype.rememberItrCode = function (token, itrCode) {
        // let id = this.firestore.createId();
        this.firestore.doc("itrUser/" + token).set({
            id: token,
            token: token,
            itrCode: itrCode,
            appId: this.config.getAppId(),
            createdAt: new Date()
        });
    };
    FirestoreProvider.prototype.getLastUsedItrCode = function (token) {
        var _this = this;
        if (token == undefined || token == null) {
            token = '';
        }
        console.log("token is " + token);
        return this.firestore.collection('itrUser', function (ref) { return ref.where("appId", "==", _this.config.getAppId())
            .where("token", "==", token); });
    };
    FirestoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_5__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], FirestoreProvider);
    return FirestoreProvider;
}());

//# sourceMappingURL=firestore.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtuLoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firestore_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(61);
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
    function OtuLoggerProvider(fba, firestore, platform) {
        this.fba = fba;
        this.firestore = firestore;
        this.platform = platform;
        this.events = ['Itinerary clicked'];
        this.location = {};
        this.token = '';
        // console.log('Hello OtuLoggerProvider Provider');
    }
    OtuLoggerProvider.prototype.eventLog = function (event, code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log("eventLog");
                if (this.platform.is('cordova')) {
                    this.eventLogFB(event, code);
                    this.eventLogFS(event, code);
                    // console.log("On device");
                }
                else {
                    // console.log("On Windows");
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
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider.prototype.eventLogFB = function (event, code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                code['timestamp'] = new Date();
                code['token'] = this.token;
                this.fba.logEvent(event, {
                    code: code
                }).then(function (s) {
                    // console.log("Success");
                    // console.log(s);
                }, function (e) {
                    // console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider.prototype.saveEvent = function (event, code, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.firestore.eventLog({
                    token: this.token,
                    event: event,
                    code: code,
                    device: this.device,
                    readStatus: e,
                    location: this.location,
                    createdAt: new Date()
                });
                return [2 /*return*/];
            });
        });
    };
    OtuLoggerProvider.prototype.setToken = function (token) {
        this.token = token;
    };
    OtuLoggerProvider.prototype.getToken = function () {
        return this.token;
    };
    OtuLoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_0__firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]])
    ], OtuLoggerProvider);
    return OtuLoggerProvider;
}());

//# sourceMappingURL=otu-logger.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map