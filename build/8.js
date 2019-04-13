webpackJsonp([8],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryPageModule", function() { return ItineraryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itinerary__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItineraryPageModule = /** @class */ (function () {
    function ItineraryPageModule() {
    }
    ItineraryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__itinerary__["a" /* ItineraryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__itinerary__["a" /* ItineraryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ItineraryPageModule);
    return ItineraryPageModule;
}());

//# sourceMappingURL=itinerary.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firestore_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_error__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otu_config_otu_config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItineraryPage = /** @class */ (function () {
    function ItineraryPage(navCtrl, navParams, mdlCtrl, firestore, loadingCtrl, alertCtrl
        // , private datePicker: DatePicker
        , config) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdlCtrl = mdlCtrl;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.list = [];
        this.label = { en: "Heading", kn: "Heading Kannada" };
        this.lang = "en";
        this.name = "myName";
        this.test = [];
        this.currentDay = 0;
        this.counter = 0;
        this.editStartDateTime = false;
        this.firestore.getCurrentUser().subscribe(function (u) {
            _this.user = u;
        });
        this.getAllItinary();
        this.printList();
        this.test = [1, 2, 3, 4, 5];
        // this.startDateTimeInDateFormat = new Date();
    }
    ItineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItineraryPage');
        // this.minDate = new Date();
        // this.maxDate = this.minDate;
        // this.maxDate.setFullYear(this.minDate.getFullYear() + 1);
        this.minDate = "2019-04-08";
        this.maxDate = "2020-12-31";
        var d = new Date();
        this.minDate = d.getFullYear() + "-" + d.getMonth + "-" + d.getDate;
        this.minDate = d.getFullYear() + 1 + "-" + d.getMonth + "-" + d.getDate;
    };
    ItineraryPage.prototype.addActivity = function () {
        var _this = this;
        var a = this.mdlCtrl.create('DynaPage', { function: 'addActivityAirportTransfer' });
        a.onDidDismiss(function (data) {
            if (data == null) {
                return;
            }
            if (_this.user != undefined && _this.user.id != undefined && _this.user.amId != undefined && data != undefined) {
                // data['providerId'] = this.user.id;
                data['amId'] = _this.user.amId;
                data['appId'] = _this.config.getAppId();
                // data['email'] = this.user.email,
                // data['mob'] = this.user.mob,
                // data['whatsapp'] = this.user.whatsapp
            }
            _this.firestore.saveActivityTemplates(data).then(function (r) {
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
    ItineraryPage.prototype.saveList = function (event) {
        console.log(event);
    };
    ItineraryPage.prototype.printList = function () {
        console.log('Printing List');
        console.log(this.list);
    };
    ItineraryPage.prototype.createItnr = function () {
        // this.itinerary = {
        //   startDateTime: '',
        //   days: [ { day: 1, activities: [
        //           {name: "1. Some Name", time: "Some Time"},
        //           {name: "1. Some Name", time: "Some Time"},
        //           {name: "1. Some Name", time: "Some Time"},
        //           {name: "1. Some Name", time: "Some Time"},
        //           {name: "1. Some Name", time: "Some Time"}
        //         ]},
        //         { day: 2, activities: [
        //           {name: "2 Some Name", time: "Some Time"},
        //           {name: "2 Some Name", time: "Some Time"},
        //           {name: "2 Some Name", time: "Some Time"},
        //           {name: "2 Some Name", time: "Some Time"},
        //           {name: "2 Some Name", time: "Some Time"},
        //         ]},
        //         { day: 3, activities: [
        //           {name: "3 Some Name", time: "Some Time"},
        //           {name: "3 Some Name", time: "Some Time"},
        //           {name: "3 Some Name", time: "Some Time"},
        //           {name: "3 Some Name", time: "Some Time"},
        //           {name: "3 Some Name", time: "Some Time"}
        //         ]},
        //         { day: 4, activities: [
        //           {name: "4. Some Name", time: "Some Time"},
        //           {name: "4. Some Name", time: "Some Time"},
        //           {name: "4. Some Name", time: "Some Time"},
        //           {name: "4. Some Name", time: "Some Time"},
        //           {name: "4. Some Name", time: "Some Time"},
        //         ]}                                    
        //         ]
        // picker.open()
        this.itinerary = {
            startDateTime: this.startDateTime,
            days: [
                { day: 1, startTime: '', activities: [] }
            ]
        };
        this.showItinerary = true;
        this.currentDay = 0;
    };
    ItineraryPage.prototype.setTime = function () {
        console.log('setProgerss is called');
        console.log(this.startDateTime);
        this.startDateTime = this.firestore.getTimeInFSFormat(this.startDateTimeInDateFormat);
        var d = new Date(this.startDateTime);
        console.log("UTC - " + d.getUTCHours() + ":" + d.getUTCMinutes());
        console.log("Normal - " + d.getHours() + ":" + d.getMinutes());
        // this.loadProgress = Math.floor(((d.getUTCHours() * 60) + d.getUTCMinutes())/15);
        this.loadProgress = this.startDateTime;
        if (!this.editStartDateTime) {
            this.addNewDay(this.startDateTime);
        }
        else {
            this.itinerary.days[this.currentDay].startTime = this.startDateTime;
            this.resetTimes(this.itinerary.days[this.currentDay]);
        }
        this.editStartDateTime = false;
        this.itinerary['startDateTime'] = this.startDateTime;
        this.showItinerary = true;
    };
    ItineraryPage.prototype.save = function () {
        var _this = this;
        if (this.itinerary.name != undefined) {
            this.firestore.updateItinerary(this.itinerary);
        }
        else {
            var data = this.alertCtrl.create({
                title: "Itinerary Name",
                inputs: [{
                        name: 'name',
                        value: ''
                    }],
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
                            if (data.name == '') {
                                alert('Not a valid name');
                            }
                            else {
                                _this.itinerary['name'] = data.name;
                                _this.firestore.saveItinerary(_this.itinerary).then(function () {
                                    // this.cancel();
                                }, function () { return alert('Something went wrong!!!'); });
                            }
                        } // till here
                    }
                ]
            });
            data.present();
        }
    };
    ItineraryPage.prototype.cancel = function () {
        console.log('called close');
        this.showItinerary = false;
        this.itinerary = {};
    };
    ItineraryPage.prototype.selectDay = function (event) {
        this.currentDay = event;
    };
    ItineraryPage.prototype.prev = function () {
        if (this.currentDay == 0) {
            this.currentDay = this.itinerary['days'].length - 1;
        }
        else {
            this.currentDay -= 1;
        }
    };
    ItineraryPage.prototype.next = function () {
        var _this = this;
        if (this.currentDay == this.itinerary['days'].length - 1) {
            var soundAlert = this.alertCtrl.create({
                message: "You are on the last day of this itinerary. Do you want to add another day?",
                buttons: [
                    {
                        text: "Yes",
                        handler: function () {
                            // this.itinerary['days'].push({ day: this.currentDay + 1, activities: []});
                            // this.currentDay++;
                            // console.log(this.itinerary);
                            // console.log(`The number of days in the itinary is ${this.itinerary['days'].length}`);
                            // this.picker.open();
                            // console.log(`Before assigning ${this.startDateTime1}`);
                            // this.startDateTime2 = this.startDateTime1;
                            // this.startDateTime1 = new Date(this.startDateTime1);
                            // console.log(`After assigning ${this.startDateTime1}`);
                            // this.startDateTime2 = new Date(this.startDateTime1)
                            // this.startDateTime1 = this.startDateTime2;
                            // this.startDateTime1.setDate(this.startDateTime1.getDate())
                            _this.editStartDateTime = false;
                            _this.picker.open();
                            // this.datePicker.show({
                            //   date: new Date(),
                            //   mode: 'date',
                            //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
                            // }).then(
                            //   date => {
                            //     console.log('Got date: ', date);
                            //   },
                            //   err => {
                            //     console.log('Error occurred while getting date: ', err);
                            //   }
                            // );
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.currentDay = 0;
                        }
                    }
                ]
            });
            soundAlert.present();
        }
        else {
            this.currentDay += 1;
        }
    };
    ItineraryPage.prototype.addService = function () {
        var t = (Math.floor(Math.random() * 8) + 1) * 15;
        var o = { name: this.currentDay + ". Day Service " + t + " - " + this.counter,
            time: "Some Time",
            duration: t
        };
        this.counter++;
        this.itinerary['days'][this.currentDay].activities.push(o);
        this.loadProgress = this.loadProgress + Math.floor(t / 15);
        //Sudhir: TEST THIS
    };
    ItineraryPage.prototype.addActivityNow = function () {
        var t = (Math.floor(Math.random() * 8) + 1) * 15;
        var o = { name: this.currentDay + ". Day Activity " + t + " - " + this.counter,
            time: "Some Time",
            duration: t
        };
        this.counter++;
        this.itinerary['days'][this.currentDay].activities.push(o);
        this.loadProgress = this.loadProgress + Math.floor(t / 15);
        // Sudhir: TEST THIS
    };
    ItineraryPage.prototype.addActivityFromFS = function () {
        var _this = this;
        var activity$ = this.firestore.getAllActivityTemplates().valueChanges();
        var item = this.mdlCtrl.create("GenricPopupPage", { list: activity$, label: 'f.label', lang: this.lang, flag: 2 });
        item.onDidDismiss(function (v) {
            console.log(v);
            if (v != undefined || v != null) {
                // v.startTime = this.getTimeInTimeFormat(this.loadProgress);
                console.log("Are we there " + _this.itinerary['days'][_this.currentDay].startTime);
                var st = void 0;
                if (_this.itinerary['days'][_this.currentDay].activities != undefined && _this.itinerary['days'][_this.currentDay].activities.length > 0) {
                    st = _this.itinerary['days'][_this.currentDay].activities[_this.itinerary['days'][_this.currentDay].activities.length - 1].endTime;
                }
                else {
                    st = _this.itinerary['days'][_this.currentDay].startTime;
                }
                v.startTime = st;
                console.log(v.startTime + " + " + _this.loadProgress + " is " + (v.startTime + _this.loadProgress.seconds + (v.duration * 60)));
                // v.startTime.setMinutes(v.startTime.getMinutes()+ (this.loadProgress * 15));
                // v.startTime = this.loadProgress;
                v.endTime = _this.firestore.getTimeFromSecs(v.startTime.seconds + (v.duration * 60));
                _this.itinerary['days'][_this.currentDay].activities.push(v);
                _this.loadProgress = v.endTime;
                // this.startDateTimeInDateFormat = v.endTime.toDate();
                // v.endTime  = new Date(this.itinerary['days'][this.currentDay].startTime);
                // v.endTime.setMinutes(v.startTime.getMinutes()+ (this.loadProgress * 15));
                // console.log(`${v.endTime} is rep as ${this.firestore.getTimeInFSFormat(v.endTime)}`);
            }
        });
        item.present();
    };
    ItineraryPage.prototype.remove = function (i) {
        // this.loadProgress = this.loadProgress - Math.floor(this.itinerary['days'][this.currentDay].activities[i].duration/15);
        this.itinerary['days'][this.currentDay].activities.splice(i, 1);
        this.resetTimes(this.itinerary['days'][this.currentDay]);
    };
    ItineraryPage.prototype.addNewDay = function (s) {
        if (this.itinerary == undefined ||
            this.itinerary['startDateTime'] == undefined ||
            this.itinerary['days'] == undefined) {
            this.itinerary = {
                startDateTime: s,
                days: [
                    { day: this.currentDay + 1, startTime: s, activities: [] }
                ]
            };
        }
        else {
            this.currentDay++;
            this.itinerary['days'].push({ day: this.currentDay + 1, startTime: s, activities: [] });
        }
        console.log(this.itinerary);
    };
    ItineraryPage.prototype.edit = function (i) {
    };
    ItineraryPage.prototype.moveUp = function (i) {
        var a = this.itinerary['days'][this.currentDay].activities[i];
        this.itinerary['days'][this.currentDay].activities[i] = this.itinerary['days'][this.currentDay].activities[i - 1];
        this.itinerary['days'][this.currentDay].activities[i - 1] = a;
        this.resetTimes(this.itinerary['days'][this.currentDay]);
    };
    ItineraryPage.prototype.moveDown = function (i) {
        var a = this.itinerary['days'][this.currentDay].activities[i];
        this.itinerary['days'][this.currentDay].activities[i] = this.itinerary['days'][this.currentDay].activities[i + 1];
        this.itinerary['days'][this.currentDay].activities[i + 1] = a;
        this.resetTimes(this.itinerary['days'][this.currentDay]);
    };
    ItineraryPage.prototype.clickEvent = function (event) {
        if (event.day >= 0 && event.day < this.itinerary['days'].length) {
            switch (event.event) {
                case 'delete':
                    {
                        console.log(this.itinerary);
                        alert('delete');
                        this.currentDay = 0;
                        // delete this.itinerary['days'][event.day];
                        this.itinerary['days'].splice(event.day, 1);
                        console.log("Length: " + this.itinerary['days'].length + " & CurrentDay is " + this.currentDay);
                        console.log(this.itinerary);
                        if (this.itinerary['days'].length == 0) {
                            this.cancel();
                        }
                        break;
                    }
                    ;
                case 'left':
                    {
                        alert('left');
                        if (event.day == 0) {
                            alert('nothing doing');
                        }
                        else {
                            var d = this.itinerary['days'][event.day - 1];
                            this.itinerary['days'][event.day - 1] = this.itinerary['days'][event.day];
                            this.itinerary['days'][event.day] = d;
                            this.currentDay = event.day - 1;
                            console.log("Length: " + this.itinerary['days'].length + " & CurrentDay is " + this.currentDay);
                        }
                        break;
                    }
                    ;
                case 'right': {
                    alert('right');
                    if (event.day == (this.itinerary['days'].length - 1)) {
                        alert('nothing doing');
                    }
                    else {
                        var d = this.itinerary['days'][event.day + 1];
                        this.itinerary['days'][event.day + 1] = this.itinerary['days'][event.day];
                        this.itinerary['days'][event.day] = d;
                        this.currentDay = event.day + 1;
                        console.log("Length: " + this.itinerary['days'].length + " & CurrentDay is " + this.currentDay);
                    }
                    break;
                }
            }
        }
    };
    ItineraryPage.prototype.getTimeInTimeFormat = function (n) {
        var t = n * 15;
        var s = '';
        var h = Math.floor(t / 60);
        if (h < 10) {
            s = '0';
        }
        s += h.toString() + ':';
        var m = t - (h * 60);
        if (m < 10) {
            s += '0';
        }
        s += m.toString();
        return s;
    };
    ItineraryPage.prototype.getAllItinary = function () {
        console.log('getAllItinary Called');
        this.showItinerary = false;
        this.itnrList$ = this.firestore.getAllItinerary().valueChanges();
    };
    ItineraryPage.prototype.editItr = function (i) {
        this.itinerary = i;
        this.currentDay = 0;
        this.startDateTime = this.itinerary.startDateTime;
        // this.startDateTimeInDateFormat = this.itinerary.startDateTime.toDate();
        this.showItinerary = true;
        this.editStartDateTime = true;
        if (this.itinerary.days != undefined && this.itinerary.days.length > 0) {
            this.resetTimes(this.itinerary.days[this.currentDay]);
        }
        else {
            this.loadProgress = this.itinerary.startDateTime;
        }
    };
    ItineraryPage.prototype.saveItrAs = function (i) {
    };
    ItineraryPage.prototype.removeItr = function (i) {
        var _this = this;
        var data = this.alertCtrl.create({
            title: "Delete Itinerary",
            message: "Are you sure",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'I am sure',
                    handler: function (data) {
                        _this.firestore.deleteItinerary(i.id);
                    }
                }
            ]
        });
        data.present();
    };
    ItineraryPage.prototype.quickEditItr = function (i) {
        var _this = this;
        var data = this.alertCtrl.create({
            title: "Itinerary Name",
            inputs: [{
                    name: 'name',
                    value: '',
                    placeholder: "Save as Itinerary Name"
                },
                {
                    name: 'date',
                    value: '',
                    type: 'date',
                    placeholder: "Start Date"
                },
                {
                    name: 'time',
                    value: '',
                    type: 'time',
                    placeholder: "Start Time"
                }],
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
                        if (data.name == '' || data.date == '' || data.time == '') {
                            alert('Not a valid input');
                        }
                        else {
                            i.name = data.name;
                            var dateParts = data.date.split('-');
                            var timeParts = data.time.split(':');
                            i.startDateTime = new Date(Date.UTC.apply(undefined, dateParts.concat(timeParts)));
                            i.startDateTime.setMinutes(i.startDateTime.getMinutes() - 330);
                            // i.startDateTime = new Date(Date.UTC.apply(undefined,dateParts.concat(timeParts)));
                            // let utc = new Date(Date.UTC.apply(undefined,dateParts.concat(timeParts)));
                            // let local = new Date(Date.apply(new Date,dateParts.concat(timeParts)));
                            if (i.days.length > 0) {
                                i.days[0].startTime = i.startDateTime;
                                i.days.forEach(function (d) { return _this.resetTimes(d); });
                            }
                            _this.firestore.saveItinerary(i);
                        }
                    } // till here
                }
            ]
        });
        data.present();
    };
    ItineraryPage.prototype.resetTimes = function (day) {
        var _this = this;
        var time = day.startTime;
        day.activities.forEach(function (d) {
            d.startTime = time;
            d.endTime = _this.firestore.getTimeFromSecs(d.startTime.seconds + (d.duration * 60));
            time = d.endTime;
        });
        this.loadProgress = time;
    };
    ItineraryPage.prototype.editTodaysStartDateTime = function () {
        this.editStartDateTime = true;
        this.picker.open();
    };
    ItineraryPage.prototype.addCustomers = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('picker'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DateTime */])
    ], ItineraryPage.prototype, "picker", void 0);
    ItineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-itinerary',template:/*ion-inline-start:"C:\src\seva\src\pages\itinerary\itinerary.html"*/'<!--\n\n  Generated template for the ItineraryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <header title="Itinerary"></header>\n\n  <ion-title>\n\n    <span *ngIf="itinerary != undefined" (click)="editTodaysStartDateTime()">\n\n      {{startDateTime.toDate() | date: "dd MMM yy HH:mm a"}}\n\n      <!-- {{startDateTime}} -->\n\n    </span>\n\n    <ion-datetime [hidden]="true" #picker [(ngModel)]="startDateTimeInDateFormat" display-format="MMM DD, YYYY HH:mm"\n\n      pickerFormat="MMM DD, YYYY hh:mm a" min="2019-04-07" max="2020-12-31" (ionChange)="setTime()"></ion-datetime>\n\n    <ion-buttons end *ngIf="showItinerary">\n\n      <button ion-button (click)="save()">\n\n        <ion-icon name="cloud-upload"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="!showItinerary">\n\n      <button ion-button (click)="getAllItinary()">\n\n        <ion-icon name="list"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="picker.open()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-grid *ngIf="showItinerary" style="position: fixed; border: 1px black solid; width: 90vw">\n\n      <display-days [numberOfDays]="itinerary[\'days\'].length" (day)="selectDay($event)" (dayEvent)="clickEvent($event)">\n\n      </display-days>\n\n    </ion-grid>\n\n  </ion-title>\n\n</ion-header>\n\n\n\n\n\n<!-- <ion-content padding>\n\n  <button ion-button (click)="addActivity()">Add Hotel Transfer</button>\n\n  <button ion-button (click)="printList()">Print List</button>\n\n\n\n    <string-array [list]="list" [label]="label" [lang]="lang">\n\n    </string-array>\n\n    <ion-label floating>{{label[lang]}}:</ion-label>\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n\n\n</ion-content> -->\n\n\n\n<ion-content padding>\n\n  <div *ngIf="showItinerary && itinerary != undefined"\n\n    style="position: relative; top: 11vh">\n\n    <!-- <progress-bar [progress]="loadProgress" [startTime]="startDateTime"></progress-bar> -->\n\n    <ion-item *ngIf="itinerary[\'days\'].length > 0 && itinerary[\'days\'][currentDay].activities != undefined">\n\n      <ion-scroll scrollY="true" style="height: 50vh">\n\n        <ion-list>\n\n          <ion-item-sliding *ngFor="let a of itinerary[\'days\'][currentDay].activities; let i = index">\n\n            <ion-item>\n\n              <h2>{{a.description}}</h2>\n\n              <!-- <p>Starting at : {{a.startTime | date: \'shortTime\'}}</p> -->\n\n              <p>Starting at : {{a.startTime.toDate() | date: \'shortTime\'}}</p>\n\n\n\n              <!-- <p>Ending at : {{a.endTime | date: \'shortTime\'}}</p> -->\n\n              <p>Ending at : {{a.endTime.toDate() | date: \'shortTime\'}}</p>\n\n            </ion-item>\n\n            <ion-item-options>\n\n              <button class="optionButtons" ion-button (click)="edit(i)">\n\n                <ion-icon large primary name="create"></ion-icon>\n\n              </button>\n\n              <button class="optionButtons" ion-button [disabled]="i == 0" (click)="moveUp(i)">\n\n                <ion-icon name="arrow-up"></ion-icon>\n\n              </button>\n\n              <button class="optionButtons" ion-button\n\n                [disabled]="i == itinerary[\'days\'][currentDay].activities.length - 1" (click)="moveDown(i)">\n\n                <ion-icon name="arrow-down"></ion-icon>\n\n              </button>\n\n              <button color="danger" class="optionButtons" ion-button (click)="remove(i)">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-scroll>\n\n    </ion-item>\n\n    <ion-item class="your-class">\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <button ion-button (click)="prev()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-button (click)="addActivityFromFS()">\n\n            <ion-icon name="cog"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-button (click)="addCustomers()">\n\n            <ion-icon name="person-add"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-button (click)="next()">\n\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </div>\n\n  <div *ngIf="!showItinerary" style="position: relative; top: 11vh">\n\n    <ion-list>\n\n      <ion-item-sliding *ngFor="let i of itnrList$ | async" style="border: 1px black solid">\n\n        <ion-item>\n\n          {{i.name}}\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button class="optionButtons" ion-button (click)="editItr(i)">\n\n            <ion-icon large primary name="create"></ion-icon>\n\n          </button>\n\n          <button class="optionButtons" ion-button (click)="quickEditItr(i)">\n\n            E\n\n          </button>\n\n          <button color="danger" class="optionButtons" ion-button (click)="removeItr(i)">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\src\seva\src\pages\itinerary\itinerary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firestore_firestore__["a" /* FirestoreProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]
            // , private datePicker: DatePicker
            ,
            __WEBPACK_IMPORTED_MODULE_4__providers_otu_config_otu_config__["a" /* OtuConfigProvider */]])
    ], ItineraryPage);
    return ItineraryPage;
}());

//# sourceMappingURL=itinerary.js.map

/***/ })

});
//# sourceMappingURL=8.js.map