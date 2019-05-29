webpackJsonp([0],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePageModule", function() { return SalePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sale__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SalePageModule = /** @class */ (function () {
    function SalePageModule() {
    }
    SalePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sale__["a" /* SalePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sale__["a" /* SalePage */]),
            ],
        })
    ], SalePageModule);
    return SalePageModule;
}());

//# sourceMappingURL=sale.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_callapi_callapi__ = __webpack_require__(99);
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
 * Generated class for the SalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SalePage = /** @class */ (function () {
    // name:string
    // tel:string
    // address:string
    // idcard:string
    function SalePage(navCtrl, navParams, callapi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callapi = callapi;
        this.getid = navParams.get('_id');
        console.log(this.getid);
        this.callapi.getUserById(this.getid).subscribe(function (data) {
            console.log(data);
            _this.userData = data;
        });
    }
    SalePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad SalePage');
    };
    SalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sale',template:/*ion-inline-start:"D:\demoAgent\src\pages\sale\sale.html"*/'<!--\n  Generated template for the SalePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>sale</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  <ion-item>\n    <ion-label floating>ชื่อ</ion-label>\n    <ion-input type="text">{{ name }}</ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>เบอร์โทร</ion-label>\n    <ion-input type="text">{{ tel }}</ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>ที่อยู่</ion-label>\n    <ion-input type="text">{{ address }}</ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>รหัสบัตรประจำตัวประชาชน</ion-label>\n    <ion-input type="text">{{ idcard }}</ion-input>\n  </ion-item>\n</ion-list>\n  <button ion-button round block color="secondary" type="submit">Done</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\demoAgent\src\pages\sale\sale.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_callapi_callapi__["a" /* CallapiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_callapi_callapi__["a" /* CallapiProvider */]) === "function" && _c || Object])
    ], SalePage);
    return SalePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=sale.js.map

/***/ })

});
//# sourceMappingURL=0.js.map