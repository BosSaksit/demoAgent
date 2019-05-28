webpackJsonp([1],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_callapi_callapi__ = __webpack_require__(99);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, fb, callapi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.callapi = callapi;
        this.dataUser = this.fb.group({
            'id': [null],
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'tel': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'address': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'idcard': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.regis = function () {
        var _this = this;
        this.submitRequested = true;
        console.log(this.dataUser.value);
        this.data = this.dataUser.value;
        this.callapi.addUser(this.data).subscribe(function (data) {
            data.name = _this.data.name,
                data.address = _this.data.address,
                data.idcard = _this.data.idcard,
                data.tel = _this.data.tel;
            console.log(data);
        });
        // this.navCtrl.pop();
    };
    RegisterPage.prototype.isValid = function (name) {
        var ctrl = this.dataUser.get(name);
        return ctrl.invalid && (ctrl.dirty || this.submitRequested);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\workthes\demoAgent\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n\n\n  <form [formGroup]="dataUser" (ngSubmit)="regis()">\n\n\n\n  <h2>สมัครสมาชิก</h2>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>ชื่อ</ion-label>\n\n    <ion-input formControlName="name" [class.invalid]="isValid(\'name\')"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="isValid(\'name\')">\n\n      <span class="invalid-msg">\n\n        กรุณากรอกข้อมูล\n\n      </span>\n\n    </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>เบอร์โทร</ion-label>\n\n    <ion-input formControlName="tel" [class.invalid]="isValid(\'tel\')"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="isValid(\'tel\')">\n\n      <span class="invalid-msg">\n\n        กรุณากรอกข้อมูล\n\n      </span>\n\n    </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>ที่อยู่</ion-label>\n\n    <ion-input formControlName="address" [class.invalid]="isValid(\'address\')"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="isValid(\'address\')">\n\n      <span class="invalid-msg">\n\n        กรุณากรอกข้อมูล\n\n      </span>\n\n    </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>รหัสบัตรประจำตัวประชาชน</ion-label>\n\n    <ion-input formControlName="idcard" [class.invalid]="isValid(\'idcard\')"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="isValid(\'idcard\')">\n\n      <span class="invalid-msg">\n\n        กรุณากรอกข้อมูล\n\n      </span>\n\n    </ion-item>\n\n\n\n  <button ion-button round block color="secondary" type="submit">Done</button>\n\n\n\n</form>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\workthes\demoAgent\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_callapi_callapi__["a" /* CallapiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_callapi_callapi__["a" /* CallapiProvider */]) === "function" && _d || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map