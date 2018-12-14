(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["phone-phone-module"],{

/***/ "./src/app/phone/phone.module.ts":
/*!***************************************!*\
  !*** ./src/app/phone/phone.module.ts ***!
  \***************************************/
/*! exports provided: PhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _phone_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phone.page */ "./src/app/phone/phone.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _phone_page__WEBPACK_IMPORTED_MODULE_5__["PhonePage"]
    }
];
var PhonePageModule = /** @class */ (function () {
    function PhonePageModule() {
    }
    PhonePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_phone_page__WEBPACK_IMPORTED_MODULE_5__["PhonePage"]]
        })
    ], PhonePageModule);
    return PhonePageModule;
}());



/***/ }),

/***/ "./src/app/phone/phone.page.html":
/*!***************************************!*\
  !*** ./src/app/phone/phone.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"phone-icon\">\n    <img src=\"assets/images/wallet.svg\">\n  </div>\n\n  <video autoplay muted loop class=\"phone-video\">\n    <source src=\"assets/videos/welcome.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"phone-overlay\"></div>\n\n  <div class=\"phone-content\">\n    <h1>Verify your phone number</h1>\n    <ion-item>\n      <ion-input required type=\"number\" placeholder=\"Phone number\" clearInput></ion-input>\n    </ion-item>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/phone/phone.page.scss":
/*!***************************************!*\
  !*** ./src/app/phone/phone.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".phone-icon {\n  position: fixed;\n  top: 130px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 1; }\n\n.phone-video {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.5); }\n\n.phone-overlay {\n  position: fixed;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  min-width: 100%;\n  min-height: 100%; }\n\n.phone-content {\n  position: fixed;\n  top: 240px;\n  color: #fff;\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9WYXJpdXNXb3JsZFRlY2hMdGQvTWFpbi92b3h3YWxsZXQvc3JjL2FwcC9waG9uZS9waG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLFdBQVU7RUFDVixRQUFPO0VBQ1AsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFNBQVE7RUFDUixVQUFTO0VBQ1QsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsK0JBQThCLEVBQ2pDOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFTO0VBQ1QsK0JBQThCO0VBQzlCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsV0FBVTtFQUVWLFlBQVc7RUFDWCxZQUFXO0VBQ1gsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9waG9uZS9waG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvbmUtaWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTMwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnBob25lLXZpZGVvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1pbi13aWR0aDogMTAwJTsgXG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSlcbn1cblxuLnBob25lLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgIG1pbi13aWR0aDogMTAwJTsgXG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLnBob25lLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDI0MHB4O1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/phone/phone.page.ts":
/*!*************************************!*\
  !*** ./src/app/phone/phone.page.ts ***!
  \*************************************/
/*! exports provided: PhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePage", function() { return PhonePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhonePage = /** @class */ (function () {
    function PhonePage() {
    }
    PhonePage.prototype.ngOnInit = function () {
    };
    PhonePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone',
            template: __webpack_require__(/*! ./phone.page.html */ "./src/app/phone/phone.page.html"),
            styles: [__webpack_require__(/*! ./phone.page.scss */ "./src/app/phone/phone.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PhonePage);
    return PhonePage;
}());



/***/ })

}]);
//# sourceMappingURL=phone-phone-module.js.map