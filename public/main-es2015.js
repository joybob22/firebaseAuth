(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>AngularFire Example</span>\n  <span fxFlex=\"auto\"></span>\n  <button mat-button [routerLink]=\"['/company/all']\">Companies</button>\n  <button mat-button [routerLink]=\"['/contact/all']\">Contacts</button>\n</mat-toolbar>\n\n<div>\n  <div fxFlexOffset.gt-sm=\"15%\" fxFlex.gt-sm=\"70%\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-edit/company-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-edit/company-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Company Edit</h1>\n<mat-card *ngIf=\"company$ | async as company\">\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"company.name\">\n  </mat-form-field>\n  <mat-card-actions align=\"right\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveCompany(company)\" *ngIf=\"isNew\">Add</button>\n    <button mat-raised-button color=\"primary\" (click)=\"editCompany(company)\" *ngIf=\"!isNew\">Save</button>\n    <button mat-raised-button (click)=\"deleteCompany()\" *ngIf=\"!isNew\">Delete</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-list/company-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-list/company-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Companies</h1>\n<mat-card *ngFor=\"let company of companies$ | async\" fxLayoutAlign=\"center center\">\n  <span>{{ company.name }}</span>\n  <span fxFlex=\"auto\"></span>\n  <button mat-button [routerLink]=\"['/company', company.id]\">Edit</button>\n</mat-card>\n<button mat-fab [routerLink]=\"['/company/new']\"><mat-icon>add</mat-icon></button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/company-edit/contact-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/company-edit/contact-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact Edit</h1>\n<mat-card *ngIf=\"contact$ | async as contact\">\n  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"start start\">\n    <mat-form-field>\n      <input type=\"text\" matInput [(ngModel)]=\"contact.name\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Company\" [(ngModel)]=\"contact.companyId\">\n        <mat-option *ngFor=\"let company of companies$ | async\" [value]=\"company.id\">{{company.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions align=\"right\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveContact(contact)\" *ngIf=\"isNew\">Add</button>\n    <button mat-raised-button color=\"primary\" (click)=\"editContact(contact)\" *ngIf=\"!isNew\">Save</button>\n    <button mat-raised-button (click)=\"deleteContact()\" *ngIf=\"!isNew\">Delete</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/company-list/contact-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/company-list/contact-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between center\">\n  <h1>Contacts</h1>\n  <span fxFlex=\"auto\"></span>\n  <mat-form-field>\n    <mat-select (selectionChange)=\"getContacts($event.value)\">\n      <mat-option [value]=\"undefined\">All</mat-option>\n      <mat-option *ngFor=\"let company of companies$ | async\" [value]=\"company.id\">{{company.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<mat-card *ngFor=\"let contact of contacts$ | async\" fxLayoutAlign=\"center center\">\n  <span>{{ contact.name }}</span>\n  <span fxFlex=\"auto\"></span>\n  <button mat-button [routerLink]=\"['/contact', contact.id]\">Edit</button>\n</mat-card>\n<button mat-fab [routerLink]=\"['/contact/new']\"><mat-icon>add</mat-icon></button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-auth-firebaseui (onSuccess)=\"printUser($event)\"\n                     (onError)=\"printError()\">\n</ngx-auth-firebaseui>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company-edit/company-edit.component */ "./src/app/company/company-edit/company-edit.component.ts");
/* harmony import */ var _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/company-list/company-list.component */ "./src/app/company/company-list/company-list.component.ts");
/* harmony import */ var _contact_company_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/company-list/contact-list.component */ "./src/app/contact/company-list/contact-list.component.ts");
/* harmony import */ var _contact_company_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/company-edit/contact-edit.component */ "./src/app/contact/company-edit/contact-edit.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");








const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'company/all', component: _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_4__["CompanyListComponent"] },
    { path: 'company/:id', component: _company_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_3__["CompanyEditComponent"] },
    { path: 'contact/all', component: _contact_company_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__["ContactListComponent"] },
    { path: 'contact/:id', component: _contact_company_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"] },
    { path: '**', redirectTo: 'company/all' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularfire-firestore-example';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _company_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company/company-edit/company-edit.component */ "./src/app/company/company-edit/company-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company/company-list/company-list.component */ "./src/app/company/company-list/company-list.component.ts");
/* harmony import */ var _contact_company_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/company-list/contact-list.component */ "./src/app/contact/company-list/contact-list.component.ts");
/* harmony import */ var _contact_company_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/company-edit/contact-edit.component */ "./src/app/contact/company-edit/contact-edit.component.ts");
/* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _company_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompanyEditComponent"],
            _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_13__["CompanyListComponent"],
            _contact_company_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_15__["ContactEditComponent"],
            _contact_company_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__["ContactListComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__["NgxAuthFirebaseUIModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase, () => 'your_app_name_factory', {
                enableFirestoreSync: true,
                toastMessageOnAuthSuccess: false,
                toastMessageOnAuthError: false,
                authGuardFallbackURL: '/loggedout',
                authGuardLoggedInURL: '/loggedin',
                passwordMaxLength: 60,
                passwordMinLength: 8,
                // Same as password but for the name
                nameMaxLength: 50,
                nameMinLength: 2
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company/company-edit/company-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/company-edit/company-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1lZGl0L2NvbXBhbnktZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/company-edit/company-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/company-edit/company-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEditComponent", function() { return CompanyEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__);





let CompanyEditComponent = class CompanyEditComponent {
    constructor(companyService, activatedRoute, router) {
        this.companyService = companyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        if (!this.isNew) {
            this.company$ = companyService.getCompanyObservable(this.id);
        }
        else {
            this.company$ = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }
    }
    ngOnInit() {
    }
    get id() {
        return this.activatedRoute.snapshot.paramMap.get('id');
    }
    get isNew() {
        return this.id === 'new';
    }
    saveCompany(company) {
        this.companyService.saveCompany(company)
            .then(_ => this.router.navigate(['/company/all']));
    }
    editCompany(company) {
        this.companyService.editCompany(Object.assign({ id: this.id }, company))
            .then(_ => this.router.navigate(['/company/all']));
    }
    deleteCompany() {
        this.companyService.deleteCompany(this.id)
            .then(_ => this.router.navigate(['/company/all']));
    }
};
CompanyEditComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CompanyEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-edit',
        template: __webpack_require__(/*! raw-loader!./company-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-edit/company-edit.component.html"),
        styles: [__webpack_require__(/*! ./company-edit.component.css */ "./src/app/company/company-edit/company-edit.component.css")]
    })
], CompanyEditComponent);



/***/ }),

/***/ "./src/app/company/company-list/company-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/company-list/company-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button[mat-fab] {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jb21wYW55LWxpc3QvY29tcGFueS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1saXN0L2NvbXBhbnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW21hdC1mYWJdIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAyNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/company/company-list/company-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/company-list/company-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company/company.service.ts");



let CompanyListComponent = class CompanyListComponent {
    constructor(companyService) {
        this.companyService = companyService;
    }
    ngOnInit() {
        this.getCompanies();
    }
    getCompanies() {
        this.companies$ = this.companyService.getCompaniesObservable();
    }
};
CompanyListComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
];
CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-list',
        template: __webpack_require__(/*! raw-loader!./company-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-list/company-list.component.html"),
        styles: [__webpack_require__(/*! ./company-list.component.css */ "./src/app/company/company-list/company-list.component.css")]
    })
], CompanyListComponent);



/***/ }),

/***/ "./src/app/company/company.service.ts":
/*!********************************************!*\
  !*** ./src/app/company/company.service.ts ***!
  \********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CompanyService = class CompanyService {
    constructor(db) {
        this.db = db;
        this.companyRef = this.db.doc('companies/9pMLuG9tpU4utRtci8o9');
        this.companiesRef = this.db.collection('companies');
    }
    getCompanyObservable(id) {
        return this.db.doc(`companies/${id}`)
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCompaniesObservable() {
        return this.companiesRef.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((items) => {
            return items.map((item) => {
                return {
                    id: item.payload.doc.id,
                    name: item.payload.doc.data().name,
                    phone: item.payload.doc.data().phone
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveCompany(company) {
        return this.companiesRef.add(company)
            .then(_ => console.log('success on add'))
            .catch(error => console.log('add', error));
    }
    editCompany(company) {
        return this.companiesRef.doc(company.id).update(company)
            .then(_ => console.log('Success on update'))
            .catch(error => console.log('update', error));
    }
    deleteCompany(id) {
        return this.companiesRef.doc(id).delete()
            .then(_ => console.log('Success on delete'))
            .catch(error => console.log('delete', error));
    }
    errorHandler(error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/contact/company-edit/contact-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/company-edit/contact-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29tcGFueS1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/company-edit/contact-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/company-edit/contact-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../company/company.service */ "./src/app/company/company.service.ts");






let ContactEditComponent = class ContactEditComponent {
    constructor(contactService, activatedRoute, router, companyService) {
        this.contactService = contactService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.companyService = companyService;
        if (!this.isNew) {
            this.contact$ = contactService.getContactObservable(this.id);
        }
        else {
            this.contact$ = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }
        this.companies$ = companyService.getCompaniesObservable();
    }
    ngOnInit() {
    }
    get id() {
        return this.activatedRoute.snapshot.paramMap.get('id');
    }
    get isNew() {
        return this.id === 'new';
    }
    saveContact(contact) {
        this.contactService.saveContact(contact)
            .then(_ => this.router.navigate(['/contact/all']));
    }
    editContact(contact) {
        this.contactService.editContact(Object.assign({ id: this.id }, contact))
            .then(_ => this.router.navigate(['/contact/all']));
    }
    deleteContact() {
        this.contactService.deleteContact(this.id)
            .then(_ => this.router.navigate(['/contact/all']));
    }
};
ContactEditComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }
];
ContactEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-edit',
        template: __webpack_require__(/*! raw-loader!./contact-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/company-edit/contact-edit.component.html"),
        styles: [__webpack_require__(/*! ./contact-edit.component.css */ "./src/app/contact/company-edit/contact-edit.component.css")]
    })
], ContactEditComponent);



/***/ }),

/***/ "./src/app/contact/company-list/contact-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/company-list/contact-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button[mat-fab] {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb21wYW55LWxpc3QvY29udGFjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29tcGFueS1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW21hdC1mYWJdIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAyNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact/company-list/contact-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/company-list/contact-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company/company.service */ "./src/app/company/company.service.ts");




let ContactListComponent = class ContactListComponent {
    constructor(contactService, companyService) {
        this.contactService = contactService;
        this.companyService = companyService;
    }
    ngOnInit() {
        this.getContacts();
        this.companies$ = this.companyService.getCompaniesObservable();
    }
    getContacts(companyId = null) {
        this.contacts$ = this.contactService.getContactsObservable(companyId);
    }
};
ContactListComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }
];
ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-list',
        template: __webpack_require__(/*! raw-loader!./contact-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/company-list/contact-list.component.html"),
        styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contact/company-list/contact-list.component.css")]
    })
], ContactListComponent);



/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ContactService = class ContactService {
    constructor(db) {
        this.db = db;
        this.contactRef = this.db.doc('contacts/9pMLuG9tpU4utRtci8o9');
        this.contactsRef = this.db.collection('contacts');
    }
    getContactObservable(id) {
        return this.db.doc(`contacts/${id}`)
            .valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getContactsObservable(companyId) {
        const filteredContacts = companyId != null ?
            this.db.collection('contacts', (ref) => ref.where('companyId', '==', companyId))
            : this.contactsRef;
        return filteredContacts.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((items) => {
            return items.map((item) => {
                return {
                    id: item.payload.doc.id,
                    companyId: item.payload.doc.data().companyId,
                    name: item.payload.doc.data().name,
                    phone: item.payload.doc.data().phone
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveContact(contact) {
        return this.contactsRef.add(contact)
            .then(_ => console.log('success on add'))
            .catch(error => console.log('add', error));
    }
    editContact(contact) {
        return this.contactsRef.doc(contact.id).update(contact)
            .then(_ => console.log('Success on update'))
            .catch(error => console.log('update', error));
    }
    deleteContact(id) {
        return this.contactsRef.doc(id).delete()
            .then(_ => console.log('Success on delete'))
            .catch(error => console.log('delete', error));
    }
    errorHandler(error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
    printUser($event) {
        console.log($event);
    }
    printError() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC4lBUZS69GxObmVMwV0FXGSPjyi4UWFh0",
        authDomain: "auth-project-346e7.firebaseapp.com",
        databaseURL: "https://auth-project-346e7.firebaseio.com",
        projectId: "auth-project-346e7",
        storageBucket: "auth-project-346e7.appspot.com",
        messagingSenderId: "457860093015",
        appId: "1:457860093015:web:41dc4357181ee6330dbf12",
        measurementId: "G-KV07GXFY87"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braydenlemke/Documents/projects/learnAngular/angFires/angularfire-firestore-example-day-17-final-code/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map