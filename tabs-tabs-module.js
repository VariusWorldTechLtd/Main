(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/activity/activity.module.ts":
/*!*********************************************!*\
  !*** ./src/app/activity/activity.module.ts ***!
  \*********************************************/
/*! exports provided: ActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _activity_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity.page */ "./src/app/activity/activity.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _activity_page__WEBPACK_IMPORTED_MODULE_5__["ActivityPage"] }])
            ],
            declarations: [_activity_page__WEBPACK_IMPORTED_MODULE_5__["ActivityPage"]]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());



/***/ }),

/***/ "./src/app/activity/activity.page.html":
/*!*********************************************!*\
  !*** ./src/app/activity/activity.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title-icon\">\n        <img src=\"/assets/icons/logo.svg\" width=\"100px\" />\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card shadow=\"none\">\n    <ion-card-header>\n      <h2 color=\"light\">Welcome, Andy!</h2>\n      <p color=\"dark\">Follow the story map!</p>\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/activity/activity.page.scss":
/*!*********************************************!*\
  !*** ./src/app/activity/activity.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L2FjdGl2aXR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/activity/activity.page.ts":
/*!*******************************************!*\
  !*** ./src/app/activity/activity.page.ts ***!
  \*******************************************/
/*! exports provided: ActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPage", function() { return ActivityPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActivityPage = /** @class */ (function () {
    function ActivityPage() {
    }
    ActivityPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.page.html */ "./src/app/activity/activity.page.html"),
            styles: [__webpack_require__(/*! ./activity.page.scss */ "./src/app/activity/activity.page.scss")]
        })
    ], ActivityPage);
    return ActivityPage;
}());



/***/ }),

/***/ "./src/app/deposit/deposit.module.ts":
/*!*******************************************!*\
  !*** ./src/app/deposit/deposit.module.ts ***!
  \*******************************************/
/*! exports provided: DepositPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositPageModule", function() { return DepositPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _deposit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deposit.page */ "./src/app/deposit/deposit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DepositPageModule = /** @class */ (function () {
    function DepositPageModule() {
    }
    DepositPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _deposit_page__WEBPACK_IMPORTED_MODULE_5__["DepositPage"] }])
            ],
            declarations: [_deposit_page__WEBPACK_IMPORTED_MODULE_5__["DepositPage"]]
        })
    ], DepositPageModule);
    return DepositPageModule;
}());



/***/ }),

/***/ "./src/app/deposit/deposit.page.html":
/*!*******************************************!*\
  !*** ./src/app/deposit/deposit.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <div class=\"title-icon\">\n        <img src=\"/assets/icons/logo.svg\" width=\"100px\" />\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/deposit/deposit.page.scss":
/*!*******************************************!*\
  !*** ./src/app/deposit/deposit.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcG9zaXQvZGVwb3NpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/deposit/deposit.page.ts":
/*!*****************************************!*\
  !*** ./src/app/deposit/deposit.page.ts ***!
  \*****************************************/
/*! exports provided: DepositPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositPage", function() { return DepositPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DepositPage = /** @class */ (function () {
    function DepositPage() {
    }
    DepositPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deposit',
            template: __webpack_require__(/*! ./deposit.page.html */ "./src/app/deposit/deposit.page.html"),
            styles: [__webpack_require__(/*! ./deposit.page.scss */ "./src/app/deposit/deposit.page.scss")]
        })
    ], DepositPage);
    return DepositPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _activity_activity_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activity/activity.module */ "./src/app/activity/activity.module.ts");
/* harmony import */ var _deposit_deposit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../deposit/deposit.module */ "./src/app/deposit/deposit.module.ts");
/* harmony import */ var _transfer_transfer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transfer/transfer.module */ "./src/app/transfer/transfer.module.ts");
/* harmony import */ var _withdraw_withdraw_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../withdraw/withdraw.module */ "./src/app/withdraw/withdraw.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _activity_activity_module__WEBPACK_IMPORTED_MODULE_6__["ActivityPageModule"],
                _deposit_deposit_module__WEBPACK_IMPORTED_MODULE_7__["DepositPageModule"],
                _transfer_transfer_module__WEBPACK_IMPORTED_MODULE_8__["TransferPageModule"],
                _withdraw_withdraw_module__WEBPACK_IMPORTED_MODULE_9__["WithdrawPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab tab=\"activity\">\n    <ion-router-outlet name=\"activity\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"deposit\">\n    <ion-router-outlet name=\"deposit\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"transfer\">\n    <ion-router-outlet name=\"transfer\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"withdraw\">\n    <ion-router-outlet name=\"withdraw\"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab-bar color=\"primary\" slot=\"bottom\">\n\n    <ion-tab-button tab=\"activity\" href=\"/tabs/(activity:activity)\">\n      <!-- <ion-icon name=\"flash\"></ion-icon> -->\n      <img src=\"/assets/icons/activity.svg\" width=\"24px\" margin-4 />\n      <ion-label>Activity</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"deposit\" href=\"/tabs/(deposit:deposit)\">\n      <!-- <ion-icon name=\"apps\"></ion-icon> -->\n      <img src=\"/assets/icons/deposit.svg\" width=\"24px\" margin-4 />\n      <ion-label>Deposit</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"transfer\" href=\"/tabs/(transfer:transfer)\">\n      <!-- <ion-icon name=\"send\"></ion-icon> -->\n      <img src=\"/assets/icons/transfer.svg\" width=\"24px\" margin-4 />\n      <ion-label>Transfer</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"withdraw\" href=\"/tabs/(withdraw:withdraw)\">\n      <!-- <ion-icon name=\"send\"></ion-icon> -->\n      <img src=\"/assets/icons/withdraw.svg\" width=\"24px\" margin-4 />\n      <ion-label>Withdraw</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[margin-4] {\n  margin-bottom: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9WYXJpdXNXb3JsZFRlY2hMdGQvTWFpbi92b3h3YWxsZXQvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0ksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlttYXJnaW4tNF0ge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7IH1cbiIsIlttYXJnaW4tNF0ge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _activity_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../activity/activity.page */ "./src/app/activity/activity.page.ts");
/* harmony import */ var _deposit_deposit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deposit/deposit.page */ "./src/app/deposit/deposit.page.ts");
/* harmony import */ var _transfer_transfer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transfer/transfer.page */ "./src/app/transfer/transfer.page.ts");
/* harmony import */ var _withdraw_withdraw_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../withdraw/withdraw.page */ "./src/app/withdraw/withdraw.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: '/tabs/(activity:activity)',
                pathMatch: 'full',
            },
            {
                path: 'activity',
                outlet: 'activity',
                component: _activity_activity_page__WEBPACK_IMPORTED_MODULE_3__["ActivityPage"]
            },
            {
                path: 'deposit',
                outlet: 'deposit',
                component: _deposit_deposit_page__WEBPACK_IMPORTED_MODULE_4__["DepositPage"]
            },
            {
                path: 'transfer',
                outlet: 'transfer',
                component: _transfer_transfer_page__WEBPACK_IMPORTED_MODULE_5__["TransferPage"]
            },
            {
                path: 'withdraw',
                outlet: 'withdraw',
                component: _withdraw_withdraw_page__WEBPACK_IMPORTED_MODULE_6__["WithdrawPage"]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(activity:activity)',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/*! exports provided: TransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer.page */ "./src/app/transfer/transfer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _transfer_page__WEBPACK_IMPORTED_MODULE_5__["TransferPage"] }])
            ],
            declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_5__["TransferPage"]]
        })
    ], TransferPageModule);
    return TransferPageModule;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.page.html":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>\n        <div class=\"title-icon\">\n          <img src=\"/assets/icons/logo.svg\" width=\"100px\" />\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/transfer/transfer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyL3RyYW5zZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/transfer/transfer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/transfer/transfer.page.ts ***!
  \*******************************************/
/*! exports provided: TransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPage", function() { return TransferPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransferPage = /** @class */ (function () {
    function TransferPage() {
    }
    TransferPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.page.html */ "./src/app/transfer/transfer.page.html"),
            styles: [__webpack_require__(/*! ./transfer.page.scss */ "./src/app/transfer/transfer.page.scss")]
        })
    ], TransferPage);
    return TransferPage;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.module.ts":
/*!*********************************************!*\
  !*** ./src/app/withdraw/withdraw.module.ts ***!
  \*********************************************/
/*! exports provided: WithdrawPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPageModule", function() { return WithdrawPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _withdraw_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withdraw.page */ "./src/app/withdraw/withdraw.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WithdrawPageModule = /** @class */ (function () {
    function WithdrawPageModule() {
    }
    WithdrawPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _withdraw_page__WEBPACK_IMPORTED_MODULE_5__["WithdrawPage"] }])
            ],
            declarations: [_withdraw_page__WEBPACK_IMPORTED_MODULE_5__["WithdrawPage"]]
        })
    ], WithdrawPageModule);
    return WithdrawPageModule;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.page.html":
/*!*********************************************!*\
  !*** ./src/app/withdraw/withdraw.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>\n        <div class=\"title-icon\">\n          <img src=\"/assets/icons/logo.svg\" width=\"100px\" />\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/withdraw/withdraw.page.scss":
/*!*********************************************!*\
  !*** ./src/app/withdraw/withdraw.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhkcmF3L3dpdGhkcmF3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/withdraw/withdraw.page.ts":
/*!*******************************************!*\
  !*** ./src/app/withdraw/withdraw.page.ts ***!
  \*******************************************/
/*! exports provided: WithdrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPage", function() { return WithdrawPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WithdrawPage = /** @class */ (function () {
    function WithdrawPage() {
    }
    WithdrawPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.page.html */ "./src/app/withdraw/withdraw.page.html"),
            styles: [__webpack_require__(/*! ./withdraw.page.scss */ "./src/app/withdraw/withdraw.page.scss")]
        })
    ], WithdrawPage);
    return WithdrawPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map