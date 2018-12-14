(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_5__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_5__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.page.html":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"welcome-icon\">\n    <img src=\"assets/images/wallet.svg\">\n    <h2 class=\"welcome-title\">Gambling Wallet</h2>\n  </div>\n\n  <video autoplay muted loop class=\"welcome-video\">\n    <source src=\"assets/videos/welcome.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"welcome-overlay\"></div>\n\n  <div class=\"welcome-content\">\n    <h1>Welcome to VoX Wallet</h1>\n    <p>Our first release of VoX wallet. Send, receive and grow your balance.</p>\n    <ion-button color=\"secondary\" expand=\"block\" (click)=\"onCreate();\">Create an account</ion-button>\n    <ion-button color=\"light\" expand=\"block\" fill=\"clear\">Already have an account?</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-icon {\n  position: fixed;\n  top: 130px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 1; }\n\n.welcome-title {\n  color: #fff;\n  margin-top: 100px; }\n\n.welcome-video {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.5); }\n\n.welcome-overlay {\n  position: fixed;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  min-width: 100%;\n  min-height: 100%; }\n\n.welcome-content {\n  position: fixed;\n  bottom: 0;\n  color: #fff;\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9WYXJpdXNXb3JsZFRlY2hMdGQvTWFpbi92b3h3YWxsZXQvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixXQUFVO0VBQ1YsUUFBTztFQUNQLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsV0FBVSxFQUNiOztBQUVEO0VBQ0ksWUFBVztFQUNYLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFVBQVM7RUFDVCwrQkFBOEI7RUFDOUIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFTO0VBRVQsWUFBVztFQUNYLFlBQVc7RUFDWCxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1pY29uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ud2VsY29tZS10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi53ZWxjb21lLXZpZGVvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1pbi13aWR0aDogMTAwJTsgXG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSlcbn1cblxuLndlbGNvbWUtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ud2VsY29tZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = /** @class */ (function () {
    function WelcomePage(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WelcomePage.prototype.ngOnInit = function () {
    };
    WelcomePage.prototype.ngAfterViewInit = function () {
        this.activatedRoute.params.subscribe(function (params) { });
    };
    WelcomePage.prototype.onCreate = function () {
        this.router.navigate(['/phone']);
    };
    WelcomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.page.html */ "./src/app/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map