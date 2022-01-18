(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__(/*! D:\zip\src\main.ts */"zUnb");


            /***/
}),

/***/ "2JUs":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: isLoggedIn, isLoggedOut */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function () { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedOut", function () { return isLoggedOut; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

            const isLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth Component] isLoggedIn");
            const isLoggedOut = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Auth Component] isLoggedOut");


            /***/
}),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




            class HeaderComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
            HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "main_header", 2, "z-index", "5"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "nav_wrapper"], [1, "nav-item", "navItem", "active"], ["href", "/Home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "navItem"], ["href", "/Our-Products", 1, "nav-link"], ["href", "/about", 1, "nav-link"], ["href", "/Contact", 1, "nav-link"], ["routerLink", "/register", "type", "submit", 1, "btn", "custom_button", "greenThemeBtn"]], template: function HeaderComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Our Products ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Up");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".navItem[_ngcontent-%COMP%]{\n  margin: 0 11px;\n}\n.navItem.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8cda3f;\n}\n.navItem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: #ffffff;\n  font-weight: 100;\n}\n.navItem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n  color: #8cda3f;\n}\n.navItem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{\n  color: #8cda3f;\n}\n.main_header[_ngcontent-%COMP%]{\n  position: absolute!important;\n  \n  \n  padding: 16px 99px !important;\n  width: 100%;\n\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 52px;\n    padding-right: 110px;\n}\n.nav_wrapper[_ngcontent-%COMP%]{\n  width: 100%;\n  justify-content: flex-end;\n  align-items: center;\n}\n.logo_wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height:50px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNkRBQTZEO0VBQzdELCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsV0FBVzs7RUFFWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2SXRlbXtcbiAgbWFyZ2luOiAwIDExcHg7XG59XG4ubmF2SXRlbS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjOGNkYTNmO1xufVxuLm5hdkl0ZW0gYXtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4ubmF2SXRlbSBhOmhvdmVye1xuICBjb2xvcjogIzhjZGEzZjtcbn1cbi5uYXZJdGVtIGE6Zm9jdXN7XG4gIGNvbG9yOiAjOGNkYTNmO1xufVxuLm1haW5faGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xuICAvKiBib3gtc2hhZG93OiAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjA3NSkhaW1wb3J0YW50OyAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAqL1xuICBwYWRkaW5nOiAxNnB4IDk5cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDUycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG59XG4ubmF2X3dyYXBwZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ29fd3JhcHBlciBpbWd7XG4gIGhlaWdodDo1MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4iXX0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-header',
                        templateUrl: './header.component.html',
                        styleUrls: ['./header.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "5W12":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: initialState, authReducer */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function () { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "2JUs");


            const initialState = false;
            const _authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["isLoggedIn"], state => state = true), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["isLoggedOut"], state => state = false));
            function authReducer(state, action) {
                return _authReducer(state, action);
            }


            /***/
}),

/***/ "7FkI":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/header-only-layout/header-only-layout.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderOnlyLayoutComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderOnlyLayoutComponent", function () { return HeaderOnlyLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




            class HeaderOnlyLayoutComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            HeaderOnlyLayoutComponent.ɵfac = function HeaderOnlyLayoutComponent_Factory(t) { return new (t || HeaderOnlyLayoutComponent)(); };
            HeaderOnlyLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: HeaderOnlyLayoutComponent, selectors: [["app-header-only-layout"]], decls: 2, vars: 0, template: function HeaderOnlyLayoutComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
                    }
                }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvaGVhZGVyLW9ubHktbGF5b3V0L2hlYWRlci1vbmx5LWxheW91dC5jb21wb25lbnQuY3NzIn0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderOnlyLayoutComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-header-only-layout',
                        templateUrl: './header-only-layout.component.html',
                        styleUrls: ['./header-only-layout.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "2MiI");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social/social.component */ "DeXN");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testimonial/testimonial.component */ "CzNu");
/* harmony import */ var _promotional_form_promotional_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../promotional-form/promotional-form.component */ "KYnU");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/footer.component */ "LmEr");







            class AboutComponent {
                constructor() {
                    this.mobile = false;
                }
                ngOnInit() {
                }
            }
            AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
            AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AboutComponent, selectors: [["app-about"]], decls: 20, vars: 0, consts: [[1, "about_container", "container-fuild"], [1, "container", "aboutBanner"], [2, "padding", "20px 0px"], [1, "white"], [1, "yellow"], [1, "about", "container"], [1, "row", "about_content"], [1, "col-md-8"], ["Section", "", 1, "sectioncontent"], [1, "social"]], template: function AboutComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " About ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Us ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A fresh firm culminated from fresh minds, we are an edtech company eager to suffice your academic and professional requirements concerned with the fields of digital marketing, networking, and finance. We provide our services in forms of cutting edge educational courses, integrated career counseling, and consultancy. We would really advice you to check us out. You will thank us later. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "join us : ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-social");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-testimonial");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-promotional-form");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
                    }
                }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"], _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_3__["TestimonialComponent"], _promotional_form_promotional_form_component__WEBPACK_IMPORTED_MODULE_4__["PromotionalFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".about_container[_ngcontent-%COMP%] {\n  background-image: url('header.jpg');\n  background-color: #00322f;\n  min-height: 400px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.about_content[_ngcontent-%COMP%] {\n  padding: 25px 0px;\n}\n\n.about[_ngcontent-%COMP%]   .sectionHeading[_ngcontent-%COMP%] {\n  font-size: 35px !important;\n}\n\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n}\n\n.aboutBanner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n}\n\n.aboutBanner[_ngcontent-%COMP%]{\n  height: 400px;\n    display: flex;\n    align-content: flex-end;\n    align-items: flex-end;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  color: yellowgreen;\n}\n\n.headingCard[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.about_content[_ngcontent-%COMP%]   .sectioncontent[_ngcontent-%COMP%] {\n  font-weight: 100;\n  letter-spacing: 0.5px;\n  line-height: 1.7;\n  font-size: 13px;\n}\n\n.maintitle[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 130px;\n  \n  align-items: flex-end;\n  height: 100%;\n}\n\n.maintitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 55px;\n  padding-top: 37px;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 1.2;\n}\n\n.p[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.our-team[_ngcontent-%COMP%] {\n  background-color: #00322f;\n}\n\n.team[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 80px;\n}\n\n.our-team[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUF1RDtFQUN2RCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXRfY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMjJmO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYWJvdXRfY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggMHB4O1xufVxuXG4uYWJvdXQgLnNlY3Rpb25IZWFkaW5nIHtcbiAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG4uYWJvdXQgaDEge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFib3V0QmFubmVyIGgxIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hYm91dEJhbm5lcntcbiAgaGVpZ2h0OiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi55ZWxsb3cge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG4uaGVhZGluZ0NhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmFib3V0X2NvbnRlbnQgLnNlY3Rpb25jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAvKiBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAqL1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWludGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgcGFkZGluZy10b3A6IDM3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLnAge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ub3VyLXRlYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMjJmO1xufVxuLnRlYW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuLm91ci10ZWFtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbnAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMDtcbn1cbmgzIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-about',
                        templateUrl: './about.component.html',
                        styleUrls: ['./about.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social/social.component */ "DeXN");
/* harmony import */ var _courses_we_offer_courses_we_offer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses-we-offer/courses-we-offer.component */ "Er4b");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info/info.component */ "XSv0");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog/blog.component */ "LgBW");






            class HomeComponent {
                constructor() {
                    this.mobile = false;
                }
                ngOnInit() {
                    if (window.screen.width < 600) { // 768px portrait
                        this.mobile = true;
                    }
                }
            }
            HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
            HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 0, consts: [[1, "home_containner"], [1, "container"], [1, "main-section"], [1, "row"], [1, "col-md-5", "col-sm-12", "col-xs-12"], [1, "maintitle"], [1, "mainTextColor"], [1, "mobileImage", "col-lg-7", "col-md-7", "col-xl-7"], ["src", "../../assets/images/4.png", 2, "position", "absolute", "top", "20.1%", "width", "400px", "height", "85%", "left", "339px"], [1, "container", "Section"], [1, "col-md-5"], [1, "p"], [1, "btn", "custom_button", "bluebtn", 2, "background-color", "#301e27"], [1, "social"]], template: function HomeComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reach your goals with ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "After Smoke");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "We offer you the best online courses in Python, Digital Marketing, Investing and Finance. Get Yourself Job Ready with Our Advance learning Path Desgined by industry Experts With Experiance of More Than 15 Years");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enroll For Workshop");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "join us : ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-social");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-courses-we-offer");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-info");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-blog");
                    }
                }, directives: [_social_social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"], _courses_we_offer_courses_we_offer_component__WEBPACK_IMPORTED_MODULE_2__["CoursesWeOfferComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]], styles: [".home_containner[_ngcontent-%COMP%] {\n  \n  background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);\n  height: 60%;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n}\n.content[_ngcontent-%COMP%] {\n  padding: 25px 40px;\n}\n.maintitle[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 245px;\n  \n  \n  height: 96vh;\n}\n.maintitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 55px;\n  font-weight: bold;\n  padding-bottom: 265px;\n  color: #ffffff;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBaUU7RUFDakUsZ0VBQWdFO0VBQ2hFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNEJBQTRCOztBQUU5QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0tBRUsiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX2NvbnRhaW5uZXIge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTsgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRiYjJkLCAjYjIxZjFmLCAjMWEyYTZjKTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbn1cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xufVxuXG4ubWFpbnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDI0NXB4O1xuICAvKiBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAqL1xuICAvKiBhbGlnbi1pdGVtczogZmxleC1lbmQ7ICovXG4gIGhlaWdodDogOTZ2aDtcbn1cbi5tYWludGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAyNjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4vKiAubWFpbi1zZWN0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxNjBweDtcbiAgfSAqL1xuIl19 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-home',
                        templateUrl: './home.component.html',
                        styleUrls: ['./home.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            const environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


            /***/
}),

/***/ "CzNu":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function () { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


            class TestimonialComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
            TestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 0, vars: 0, template: function TestimonialComponent_Template(rf, ctx) { }, styles: [".contectSection[_ngcontent-%COMP%]{\n    padding-top: 115px;\n    \n}\n\n.testimonial[_ngcontent-%COMP%]   .sectionHeadingLeft[_ngcontent-%COMP%]{\nfont-size: 30px!important;\nmargin-left: -45px;\ncolor: #242c2c;\n\nmargin-top: 21px;\n\n}\n\n.para[_ngcontent-%COMP%]{\n    margin-left: -45px;\n    color: grey;\n    font-size: 12px;\n}\n\nh4[_ngcontent-%COMP%]{\n    margin-left: -45px;\n    font-weight: 500;\n    color: grey;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQixjQUFjOztBQUVkLGdCQUFnQjs7QUFFaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnRlc3RpbW9uaWFse1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9hZnRlci1zbW9rZS5qcGcnKTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICBcbn0gKi9cblxuLmNvbnRlY3RTZWN0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMTVweDtcbiAgICBcbn1cbi50ZXN0aW1vbmlhbCAuc2VjdGlvbkhlYWRpbmdMZWZ0e1xuZm9udC1zaXplOiAzMHB4IWltcG9ydGFudDtcbm1hcmdpbi1sZWZ0OiAtNDVweDtcbmNvbG9yOiAjMjQyYzJjO1xuXG5tYXJnaW4tdG9wOiAyMXB4O1xuXG59XG4ucGFyYXtcbiAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuaDR7XG4gICAgbWFyZ2luLWxlZnQ6IC00NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgXG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-testimonial',
                        templateUrl: './testimonial.component.html',
                        styleUrls: ['./testimonial.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "DeXN":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function () { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


            class SocialComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
            SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: SocialComponent, selectors: [["app-social"]], decls: 5, vars: 0, consts: [[1, "icon-facebook", 2, "align-items", "center"], ["src", "..//..//assets/icons/5365678_fb_facebook_facebook logo_icon.svg"], ["src", "..//..//assets/icons/5296514_bird_tweet_twitter_twitter logo_icon.svg"], ["src", "..//..//assets/icons/5296521_play_video_vlog_youtube_youtube logo_icon.svg"], ["src", "..//..//assets/icons/5296765_camera_instagram_instagram logo_icon.svg"]], template: function SocialComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, styles: [".icon-facebook[_ngcontent-%COMP%]{\n   \n    display: flex;\n    \n}\n.icon-facebook[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin: 0px 5px;\n    height: 15px;\n    width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWZhY2Vib29re1xuICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cbi5pY29uLWZhY2Vib29rIGltZ3tcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xufVxuIl19 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-social',
                        templateUrl: './social.component.html',
                        styleUrls: ['./social.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "Er4b":
/*!****************************************************************!*\
  !*** ./src/app/courses-we-offer/courses-we-offer.component.ts ***!
  \****************************************************************/
/*! exports provided: CoursesWeOfferComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesWeOfferComponent", function () { return CoursesWeOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




            const _c0 = function (a0) { return { "margin-top": a0 }; };
            function CoursesWeOfferComponent_ng_container_17_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 10);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "More Information");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                } if (rf & 2) {
                    const card_r1 = ctx.$implicit;
                    const index_r2 = ctx.index;
                    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, index_r2 == 1 ? "140px" : null));
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.heading);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ellipsis(card_r1.content));
                }
            }
            class CoursesWeOfferComponent {
                constructor() {
                    this.data = [
                        {
                            heading: 'Investment and Finance',
                            icon: 'assets/images/medical.svg',
                            content: `It’s time to au revoir your hesitation for investing because with Techzy's concise course on Indian capital
      markets and finance, we will teach you about investment and finance through and through. Our course
      encapsulates all the fundamentals related to the subject, to lend you a strong foundation. The doubt
      clearing sessions held by our experts offer you a pragmatic sense of knowledge on the field.`
                        },
                        {
                            heading: 'Networking',
                            icon: 'assets/images/Circulatory system-pana.svg',
                            content: `Unsure of how to optimize your graduation years? Enroll on TechZy for the most affordable courses on
      Networking and give your career and edge to excel. Our each course comprises 170+ hours recorded
      video lectures for a detailed learning experience. Our flexibility is what we take our credit in. Our
      courses are designed to let you learn at your own pace and have your doubts cleared at any time by our
      experts. There is absolute compatibility between your regular course and TechZy`
                        },
                        {
                            heading: 'Digital Marketing',
                            icon: 'assets/images/medical-1.svg',
                            content: `Seeking ways to upgrade your resume? Here we are serving your wish on plate. Avail our
      economical courses on TechZy to rocket your skills and command on Digital Marketing. Our
      skillfully crafted courses by our competent experts are made sure to suffice your academic and
      professional needs vis-à-vis the subject of digital marketing. Your search and find of a job in the
      sector will be rendered easy peasy after certification.`
                        }
                    ];
                }
                ngOnInit() {
                }
                ellipsis(content) {
                    if (content.length > 200) {
                        return content.substring(0, 200) + "...";
                    }
                    else {
                        return content;
                    }
                }
            }
            CoursesWeOfferComponent.ɵfac = function CoursesWeOfferComponent_Factory(t) { return new (t || CoursesWeOfferComponent)(); };
            CoursesWeOfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: CoursesWeOfferComponent, selectors: [["app-courses-we-offer"]], decls: 18, vars: 1, consts: [[1, "container", "Section"], [1, "row", 2, "padding-bottom", "30px"], [1, "col-md-3", "pallete", "sec1"], [1, "col-md-3", "pallete", "sec2"], [1, "col-md-3", "pallete", "sec3"], [1, "col-md-3", "pallete", "sec4"], [1, "sectionHeading"], [1, "row", "cardSection"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-xs-12", "col-sm-12", "mobileCard"], [1, "card", 3, "ngStyle"], [1, "cardimg", 3, "src"], [1, "heading", "cardHeading"], [1, "cardContent"], [1, "btn", "custom_button", "bluebtn", "cardBtn", 2, "background-color", "#301e27"]], template: function CoursesWeOfferComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Google certification");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "8 Other certifications");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "100% Career Assistance");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Internships at top corporates");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product We Offer");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CoursesWeOfferComponent_ng_container_17_Template, 10, 6, "ng-container", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    } if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
                    }
                }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".pallete[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pallete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  margin: 0px;\n}\n.pallete.sec1[_ngcontent-%COMP%] {\n  background-color: #301e27;\n}\n.pallete.sec2[_ngcontent-%COMP%] {\n  background-color: #301e27eb;\n}\n.pallete.sec3[_ngcontent-%COMP%] {\n  background-color: #301e27d6;\n}\n.pallete.sec4[_ngcontent-%COMP%] {\n  background-color: #51424ae0;\n}\n.cardSection[_ngcontent-%COMP%]   .cardimg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 70%;\n  left: 10%;\n  bottom: 84%;\n  z-index: 1;\n}\n\n.cardSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 35px;\n  display: flex;\n  align-items: center;\n  padding-top: 70px;\n  margin-top: 60px;\n}\n.cardContent[_ngcontent-%COMP%] {\n  color: #919191;\n  font-weight: 400;\n  font-size: 12px;\n  \n  \n}\n.cardBtn[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n@media only screen and (max-width: 600px) {\n  \n\n  .cardSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-top: 125px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy13ZS1vZmZlci9jb3Vyc2VzLXdlLW9mZmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0g7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0EsMkJBQTJCO0FBRTNCOzs7RUFHRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0Esb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy13ZS1vZmZlci9jb3Vyc2VzLXdlLW9mZmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFsbGV0ZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFsbGV0ZSBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBhbGxldGUuc2VjMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDFlMjc7XG59XG4ucGFsbGV0ZS5zZWMyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMWUyN2ViO1xufVxuLnBhbGxldGUuc2VjMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDFlMjdkNjtcbn1cbi5wYWxsZXRlLnNlYzQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE0MjRhZTA7XG59XG5cbi5jYXJkU2VjdGlvbiAuY2FyZGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTAlO1xuICBib3R0b206IDg0JTtcbiAgei1pbmRleDogMTtcbn1cbi8qIC5jYXJkU2VjdGlvbiAuY2FyZGltZzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4OSU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IC01MC41JTtcbiAgei1pbmRleDogMTtcbn1cbi5jYXJkU2VjdGlvbiAuY2FyZGltZzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDQlO1xuICB0b3A6IC00Ny41JTtcbiAgei1pbmRleDogMTtcbn0gKi9cbi5jYXJkU2VjdGlvbiAuY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gIGNvbG9yOiAjOTE5MTkxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qIG1heC1oZWlnaHQ6IDEwMHB4OyAqL1xuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufVxuLmNhcmRCdG4ge1xuICB3aWR0aDogNjAlO1xufVxuLyogY3NzIGZvciBtb2JpbGUgZGV2aWNlcyAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIFxuXG4gIC5jYXJkU2VjdGlvbiAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTI1cHg7XG4gIH1cbn1cbi8qIGNzcyBmb3IgbW9iaWxlIGRldmljZXMgZW5kcyBoZXJlKi8iXX0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesWeOfferComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-courses-we-offer',
                        templateUrl: './courses-we-offer.component.html',
                        styleUrls: ['./courses-we-offer.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "KYnU":
/*!****************************************************************!*\
  !*** ./src/app/promotional-form/promotional-form.component.ts ***!
  \****************************************************************/
/*! exports provided: PromotionalFormComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionalFormComponent", function () { return PromotionalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



            class PromotionalFormComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            PromotionalFormComponent.ɵfac = function PromotionalFormComponent_Factory(t) { return new (t || PromotionalFormComponent)(); };
            PromotionalFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: PromotionalFormComponent, selectors: [["app-promotional-form"]], decls: 51, vars: 0, consts: [[1, "container-fluid", "promotional"], [1, "overlay"], [1, "row"], [1, "col-md-4"], [1, "sectionHeadingLeft"], [1, "mainTextColor"], [1, "slogan"], [1, "form-group"], ["for", "firstname", 1, "form_label"], ["type", "text", "formControlName", "firstName", "id", "firstname", 1, "form-control"], [1, "col-xl-6"], ["for", "phone", 1, "form_label"], ["type", "tel", "formControlName", "phoneNumber", "maxlength", "10", "id", "mobile", 1, "form-control"], ["for", "mobile", 1, "form_label"], ["type", "tel", "formControlName", "email", "maxlength", "10", "id", "email", 1, "form-control"], ["for", "email", 1, "form_label"], ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"], ["for", "password", 1, "form_label"], ["type", "text", "formControlName", "password", "id", "txt", 1, "form-control"], ["for", "Cpassword", 1, "form_label"], ["type", "text", "formControlName", "confirmPassword", "id", "Cpassword", 1, "form-control"], ["type", "submit", 1, "btn", "signup_button", "form_button"]], template: function PromotionalFormComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NOW AT ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "20%");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LESS THAN ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "REGULAR PRICE");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "lets sign up to a world of limitless knowledge and possiblities");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Name*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone No.*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Profession*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "educational Qualification*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "educational Institution/Employe*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "How did you get to know about techZy Education?*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "RID No.(option)");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sign Up");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: 'Nunito', sans-serif;\n    color: #384047;\n\n  }\n  \n  .promotional[_ngcontent-%COMP%] {\n   position: relative;\n    background-image: url('cig.jfif');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n  \n  .overlay[_ngcontent-%COMP%]{\n    background-color: #000;\n    opacity: 0.7;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n  }\n  \n  .promotional[_ngcontent-%COMP%]   .form_label[_ngcontent-%COMP%]{\n      color:#fff;\n  }\n  \n  .form-control[_ngcontent-%COMP%]{\n    height: calc(0.5em + .75rem + 10px);\n }\n  \n  .promotional[_ngcontent-%COMP%]   .signup_button[_ngcontent-%COMP%]{\n   color: white;\n   background-color: #0d5aa6;\n   display: block;\n   width: 100%;\n   margin-bottom: 20px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW90aW9uYWwtZm9ybS9wcm9tb3Rpb25hbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7O0VBRWhCOztFQUVBO0dBQ0Msa0JBQWtCO0lBQ2pCLGlDQUFxRDtJQUNyRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUNBO01BQ0ksVUFBVTtFQUNkOztFQUNEO0lBQ0csbUNBQW1DO0NBQ3RDOztFQUNBO0dBQ0UsWUFBWTtHQUNaLHlCQUF5QjtHQUN6QixjQUFjO0dBQ2QsV0FBVztHQUNYLG1CQUFtQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb21vdGlvbmFsLWZvcm0vcHJvbW90aW9uYWwtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzM4NDA0NztcblxuICB9XG4gIFxuICAucHJvbW90aW9uYWwge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9jaWcuamZpZicpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIC5vdmVybGF5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21vdGlvbmFsIC5mb3JtX2xhYmVse1xuICAgICAgY29sb3I6I2ZmZjtcbiAgfVxuIC5mb3JtLWNvbnRyb2x7XG4gICAgaGVpZ2h0OiBjYWxjKDAuNWVtICsgLjc1cmVtICsgMTBweCk7XG4gfVxuIC5wcm9tb3Rpb25hbCAuc2lnbnVwX2J1dHRvbntcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMwZDVhYTY7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiB9Il19 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromotionalFormComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-promotional-form',
                        templateUrl: './promotional-form.component.html',
                        styleUrls: ['./promotional-form.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function () { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



            class BlogComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
            BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: BlogComponent, selectors: [["app-blog"]], decls: 38, vars: 0, consts: [[1, "container", "Section", "blog"], [1, "sectionHeading"], [1, "mainTextColor"], [1, "row", "cardSection"], [1, "col-md-4", "col-sm-12", "col-xs-12"], [1, "cardshadow"], [1, "heading", "cardHeading"], [1, "headingLine"], [1, "sectioncontent"]], template: function BlogComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "After Smoke");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " blog");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "mission");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " To save you all the trouble and provide you with the best courses along with counseling and guidance that you will ever receive with a few clicks and types on your computer. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "vision");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " TechZy envisages to facilitate its students with proper guidance and impart knowledge that will channelize their career in a desired direction. We intend to fuse technology, innovation, and knowledge together and craft courses that are class apart from any other curriculum. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "value");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " You can always expect the best from us.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " We are not afraid to set high standards for ourselves.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Value for your money.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " We always wish your best.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]], styles: [".blog[_ngcontent-%COMP%]   .cardHeading[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.blog[_ngcontent-%COMP%] {\n  padding-top: 45px;\n  padding-bottom: 45px;\n\n}\n\n.blog[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px 30px 35px 30px;\n}\n\n.blog[_ngcontent-%COMP%]   .sectionHeading[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  font-size: 35px !important;\n}\n\n.cardshadow[_ngcontent-%COMP%] {\n  min-height: 180px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9COztBQUV0Qjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZyAuY2FyZEhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ibG9nIHtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuXG59XG4uYmxvZyBtYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweCAzMHB4IDM1cHggMzBweDtcbn1cblxuLmJsb2cgLnNlY3Rpb25IZWFkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZHNoYWRvdyB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-blog',
                        templateUrl: './blog.component.html',
                        styleUrls: ['./blog.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../social/social.component */ "DeXN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




            class FooterComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
            FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: FooterComponent, selectors: [["app-footer"]], decls: 64, vars: 0, consts: [[1, "container-fluid", "footer", "section"], [1, "container"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "col-md-4"], [1, "heading"], [1, "footercontent"], [1, "p"], [1, "social"], [1, "heading", "newslatterheading"], [1, "form-group"], ["for", "mobile", 1, "form_label"], ["type", "tel", "formControlName", "phoneNumber", "id", "mobile", 1, "form-control", "bottomBorderInput"], ["for", "email", 1, "form_label"], ["type", "email", "formControlName", "email", "id", "email", 1, "form-control", "bottomBorderInput"], ["for", "password", 1, "form_label"], ["type", "phon No.", "formControlName", "password", "id", "password", 1, "form-control", "bottomBorderInput"], [1, "btn"], ["type", "submit", 1, "btn", "signup_button", "form_button"]], template: function FooterComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Menu");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Courses");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CSR");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Career");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Policies");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "FAQ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Privacy Policy");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quries");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mob: +91-8480345367");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bhubaneswar, Odisha");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Mail:e-learning@techzy.co.in");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "join us : ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-social");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sign Up for exclusive updates, and newslatters");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Your Name* ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Your Email Here*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Phon No.*");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Submit");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, directives: [_social_social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".footer[_ngcontent-%COMP%] {\n    color:white;\n    padding: 55px 0px;\n    background-color: #301e27;\n}\n\n.footercontent[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n\n.footer[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{\n    color: #fff;\n    font-weight: 400!important;\n\n}\n\n.newslatterheading[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n}\n\n.footer[_ngcontent-%COMP%]   .footercontent[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%]{\n    color: #fff;\n    padding: 5px 0px;\n    font-weight: 100;\n    font-size: 11px;\n}\n\n.footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #fff;\n    font-weight: 100;\n}\n\n.form_label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 9px;\n    margin-bottom: 0px;\n}\n\n.signup_button[_ngcontent-%COMP%]{\n    margin-top: 15px;\n   background-color: #4452a0;\n    color: white;\n    width: 110px;\n    margin-left: -12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxnQkFBZ0I7R0FDakIseUJBQXlCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1NXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAxZTI3O1xufVxuXG4uZm9vdGVyY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9vdGVyIC5oZWFkaW5ne1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xuXG59XG5cbi5uZXdzbGF0dGVyaGVhZGluZ3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZvb3RlciAuZm9vdGVyY29udGVudCAucHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZm9vdGVyIC5zb2NpYWwgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uZm9ybV9sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zaWdudXBfYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ1MmEwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xufVxuIl19 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: '',
                        templateUrl: './footer.component.html',
                        styleUrls: ['./footer.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


            class AdminLayoutComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(); };
            AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 2, vars: 0, template: function AdminLayoutComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-layout works!");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-admin-layout',
                        templateUrl: './admin-layout.component.html',
                        styleUrls: ['./admin-layout.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



            class AppComponent {
                constructor() {
                    this.title = 'techzy';
                }
            }
            AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
                    }
                }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.css']
                    }]
                }], null, null);
            })();


            /***/
}),

/***/ "XSv0":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function () { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


            class InfoComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
            InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: InfoComponent, selectors: [["app-info"]], decls: 40, vars: 0, consts: [[1, "container-fuild"], ["width", "100%", "src", "../../assets/images/DSC01462.JPG", "alt", ""], [1, "container-fuild", "info"], [1, "row", "firstrow"], [1, "col-md-3", "col-lg-3", "col-xl-3", "mobileImage", "themebg", "imgsection"], ["src", "../../assets/images/4.png", "alt", "", 1, "infoimg"], [1, "col-md-3", "col-lg-3", "col-xl-3"], [1, "col-md-6", "col-lg-6", "col-xl-6", "col-sm-12", "col-xs-12", "Sectioninfo"], [1, "subsection"], [1, "heading"], [1, "sectioncontent"], [1, "container-fuild", "after-smokes"], [1, "container", 2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "100%"], [1, "row"], [1, "col-md-6", "col-xs-12", "col-sm-12"], [1, "opacity"], [2, "font-size", "40px"]], template: function InfoComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Engaging Video Lessons");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Video Lessons are designed as per our syllabus and you will get lifetime ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " access to the video contents which will help you out even after your coureses over.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Personalized Learning ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A mix of self-paced, interactive, and applied to learn - better experience,");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " better results.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Engaging Interactive Questions ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Designed to evoke curiosity, this all-new feature will develop your ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " critical thinking abilities and strengthen your understanding of the ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " concept.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Whats Your Purpose ?");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vitae facere numquam reiciendis ipsa dolores repellendus minus. Incidunt, cumque voluptatum delectus nisi recusandae unde? Eligendi illo nulla ipsam voluptate. Quibusdam eligendi quia explicabo, cum consectetur laudantium similique?");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, styles: [".Sectioninfo[_ngcontent-%COMP%]{\n    padding: 80px 0px;\n}\n.subsection[_ngcontent-%COMP%]{\n    padding: 20px 0px;\n}\n.imgsection[_ngcontent-%COMP%]{\n    position: relative;\n}\n.infoimg[_ngcontent-%COMP%]{\n    position: absolute;\n    \n    \n    height: 100%;\n    width: 112%;\n}\n.after-smokes[_ngcontent-%COMP%]{\n    background-image: url('DSC01713.JPG');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 100%;\n}\n.opacity[_ngcontent-%COMP%]{\n    background: #00000026;\n    padding: 19px;\n    border-radius: 9px;\n    margin-bottom: 26%;\n    box-shadow: 0px 2px 9px -2px #000;\n}\n\n@media only screen and (max-width: 600px) {\n  \n\n    .Sectioninfo[_ngcontent-%COMP%]{\n        padding: 10px 41px;\n    }\n\n    .info[_ngcontent-%COMP%]   .firstrow[_ngcontent-%COMP%]{\n        margin-left:0px;\n        margin-right:0px;\n\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxxQ0FBdUQ7SUFDdkQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQztBQUtBLDJCQUEyQjtBQUUzQjs7O0lBR0k7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCOztJQUVwQjtFQUNGO0FBQ0Esb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2VjdGlvbmluZm97XG4gICAgcGFkZGluZzogODBweCAwcHg7XG59XG4uc3Vic2VjdGlvbntcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cbi5pbWdzZWN0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbmZvaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBsZWZ0OiAyOC4zJTsgKi9cbiAgICAvKiB0b3A6IDIwJTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDExMiU7XG59XG4uYWZ0ZXItc21va2Vze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL0RTQzAxNzEzLkpQRyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ub3BhY2l0eXtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjY7XG4gICAgcGFkZGluZzogMTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjYlO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOXB4IC0ycHggIzAwMDtcbn1cblxuXG5cblxuLyogY3NzIGZvciBtb2JpbGUgZGV2aWNlcyAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIFxuXG4gICAgLlNlY3Rpb25pbmZve1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDQxcHg7XG4gICAgfVxuXG4gICAgLmluZm8gLmZpcnN0cm93e1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDowcHg7XG5cbiAgICB9XG4gIH1cbiAgLyogY3NzIGZvciBtb2JpbGUgZGV2aWNlcyBlbmRzIGhlcmUqL1xuXG5cbiJdfQ== */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-info',
                        templateUrl: './info.component.html',
                        styleUrls: ['./info.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_header_only_layout_header_only_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/header-only-layout/header-only-layout.component */ "7FkI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









            const routes = [
                // {
                //   path: '',
                //   component: HeaderComponent,
                //   children: [
                {
                    path: 'login',
                    component: _layouts_header_only_layout_header_only_layout_component__WEBPACK_IMPORTED_MODULE_5__["HeaderOnlyLayoutComponent"],
                    pathMatch: 'full',
                    children: [
                        {
                            path: '',
                            component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                        }
                    ]
                },
                {
                    path: 'register',
                    component: _layouts_header_only_layout_header_only_layout_component__WEBPACK_IMPORTED_MODULE_5__["HeaderOnlyLayoutComponent"],
                    pathMatch: 'full',
                    children: [
                        {
                            path: '',
                            component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
                        }
                    ]
                }
                //   ]
                // }
            ];
            class AuthModule {
            }
            AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
            AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
                factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                ]]
            });
            (function () {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
                    declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
                });
            })();
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                    args: [{
                        declarations: [
                            _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                        ],
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                        ]
                    }]
                }], null, null);
            })();


            /***/
}),

/***/ "Z5yq":
/*!******************************************************!*\
  !*** ./src/app/our-product/our-product.component.ts ***!
  \******************************************************/
/*! exports provided: OurProductComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurProductComponent", function () { return OurProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/footer.component */ "LmEr");




            class OurProductComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            OurProductComponent.ɵfac = function OurProductComponent_Factory(t) { return new (t || OurProductComponent)(); };
            OurProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: OurProductComponent, selectors: [["app-our-product"]], decls: 81, vars: 0, consts: [[1, "home_containner"], [1, "container"], [1, "main-section"], [1, "row"], [1, "col-md-5", "col-sm-12", "col-xs-12"], [1, "maintitle"], [1, "mainTextColor"], [1, "bg", "container-fluid", 2, "background-color", "white"], [2, "padding", "60px 0px 46px 0px"], [1, "product"], [2, "color", "#001675"], [1, "col", "xxl", "6"], [1, "col-xl-6", "img1"], ["src", "../../assets/images/1.png", 2, "height", "404px", "width", "307px"], [1, "col-xl-6"], [1, "col-md-8", "alignment", 2, "padding-top", "75px"], [1, "buttOn"], ["type", "button", 1, "btn", "btn-primary", 2, "background-color", "#301e27", "color", "white"], [1, "col-md-4"], ["src", "../../assets/images/2.png", 2, "height", "404px", "width", "307px"], [1, "col", "xxl", "6", "fuelproduct"], ["src", "../../assets/images/3.png", 2, "height", "404px", "width", "307px"], ["src", "../../assets/images/4.png", 2, "height", "404px", "width", "307px"]], template: function OurProductComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reach health goals with ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "After Smoke");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WELLNESS ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Support your health on a molecular level.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " WELLNESS");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Collagen Powder (16 oz) $39.99 ($0.89/dose)");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shop Now");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " WELLNESS");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Collagen Powder (8 oz) $29.99 ($1.25/dose)");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Shop Now");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " WELLNESS");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Magnesium Capsules $19.99 ($0.33/dose)");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Shop Now");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " WELLNESS");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Beef Liver Capsules $24.99 ($0.14/dose)");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Shop Now");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-footer");
                    }
                }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".home_containner[_ngcontent-%COMP%] {\r\n    background-image: url('shutterstock_458145142.jpg');\r\n    \r\n    height: 60%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  \r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 25px 40px;\r\n  }\r\n  \r\n  .maintitle[_ngcontent-%COMP%] {\r\n    padding-top: 52%;\r\n    \r\n    align-items: flex-end;\r\n    height: 96vh;\r\n  }\r\n  \r\n  .maintitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 52px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .product[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n  \r\n  @media screen  and (min-width: 360px) and (max-width:640px){\r\n  .img1[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n  }\r\n  .alignment[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  .maintitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 94px;\r\n    font-size: 42px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLXByb2R1Y3Qvb3VyLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1EQUF1RTtJQUN2RSxzRUFBc0U7SUFDdEUsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7O0VBRTlCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vdXItcHJvZHVjdC9vdXItcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfY29udGFpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2h1dHRlcnN0b2NrXzQ1ODE0NTE0Mi5qcGcnKTtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZkYmIyZCwgI2IyMWYxZiwgIzFhMmE2Yyk7ICovXHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWludGl0bGUge1xyXG4gICAgcGFkZGluZy10b3A6IDUyJTtcclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDMwcHg7ICovXHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBoZWlnaHQ6IDk2dmg7XHJcbiAgfVxyXG4gIC5tYWludGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbiAgLnByb2R1Y3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCl7XHJcbiAgLmltZzF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICB9XHJcbiAgLmFsaWdubWVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm1haW50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA5NHB4O1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gIH1cclxufSJdfQ== */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurProductComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-our-product',
                        templateUrl: './our-product.component.html',
                        styleUrls: ['./our-product.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _layouts_header_only_layout_header_only_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/header-only-layout/header-only-layout.component */ "7FkI");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ "rQ7a");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.reducer */ "5W12");
/* harmony import */ var _courses_we_offer_courses_we_offer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./courses-we-offer/courses-we-offer.component */ "Er4b");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "CzNu");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "addu");
/* harmony import */ var _promotional_form_promotional_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./promotional-form/promotional-form.component */ "KYnU");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./social/social.component */ "DeXN");
/* harmony import */ var _our_product_our_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./our-product/our-product.component */ "Z5yq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");


























            // import { ContactComponent } from './contact/contact.component';




            class AppModule {
            }
            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
                factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ loginStatus: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_14__["authReducer"] }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ]]
            });
            (function () {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layouts_header_only_layout_header_only_layout_component__WEBPACK_IMPORTED_MODULE_7__["HeaderOnlyLayoutComponent"],
                    _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__["MainLayoutComponent"],
                    _courses_we_offer_courses_we_offer_component__WEBPACK_IMPORTED_MODULE_15__["CoursesWeOfferComponent"],
                    _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                    _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_21__["TestimonialComponent"],
                    _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_22__["ComingSoonComponent"],
                    _promotional_form_promotional_form_component__WEBPACK_IMPORTED_MODULE_23__["PromotionalFormComponent"],
                    _social_social_component__WEBPACK_IMPORTED_MODULE_24__["SocialComponent"],
                    _our_product_our_product_component__WEBPACK_IMPORTED_MODULE_25__["OurProductComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
                });
            })();
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                    args: [{
                        declarations: [
                            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                            _layouts_header_only_layout_header_only_layout_component__WEBPACK_IMPORTED_MODULE_7__["HeaderOnlyLayoutComponent"],
                            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
                            _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                            _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__["MainLayoutComponent"],
                            _courses_we_offer_courses_we_offer_component__WEBPACK_IMPORTED_MODULE_15__["CoursesWeOfferComponent"],
                            _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
                            _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                            _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                            _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_21__["TestimonialComponent"],
                            _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_22__["ComingSoonComponent"],
                            _promotional_form_promotional_form_component__WEBPACK_IMPORTED_MODULE_23__["PromotionalFormComponent"],
                            _social_social_component__WEBPACK_IMPORTED_MODULE_24__["SocialComponent"],
                            _our_product_our_product_component__WEBPACK_IMPORTED_MODULE_25__["OurProductComponent"],
                            _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"]
                        ],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ loginStatus: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_14__["authReducer"] }),
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                        ],
                        providers: [],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                    }]
                }], null, null);
            })();


            /***/
}),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





            class RegisterComponent {
                constructor(fb) {
                    this.fb = fb;
                    this.isSubmited = false;
                }
                ngOnInit() {
                    this.initRegisterForm();
                }
                initRegisterForm() {
                    this.registerForm = this.fb.group({
                        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        courses: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
                        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        joinCommunity: [''],
                        agreeTermCond: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        newsLetter: [''],
                    });
                }
            }
            RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
            RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: RegisterComponent, selectors: [["app-register"]], decls: 70, vars: 1, consts: [[1, "main_containner", "home_containner"], [1, "container"], [1, "content"], [1, "row"], [1, "col-md-5"], [1, "card", "registerCard"], [1, "card-body", "cardBody"], [1, "heading_wrapper"], [1, "heading"], [1, "subheading"], [1, "form_section"], [3, "formGroup"], [1, "form-group"], ["for", "firstname", 1, "form_label"], ["type", "text", "formControlName", "firstName", "id", "firstname", 1, "form-control"], ["for", "lastname", 1, "form_label"], ["type", "text", "formControlName", "lastName", "id", "lastname", 1, "form-control"], ["for", "course", 1, "form_label"], ["formControlName", "courses", "id", "course", 1, "form-control", "course_select"], ["for", "mobile", 1, "form_label"], ["type", "tel", "formControlName", "phoneNumber", "maxlength", "10", "id", "mobile", 1, "form-control"], ["for", "email", 1, "form_label"], ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"], ["for", "password", 1, "form_label"], ["type", "password", "formControlName", "password", "id", "password", 1, "form-control"], ["for", "Cpassword", 1, "form_label"], ["type", "password", "formControlName", "confirmPassword", "id", "Cpassword", 1, "form-control"], [1, "form-check", "checkboxes"], ["type", "checkbox", "formControlName", "joinCommunity", "id", "community", 1, "form-check-input"], ["for", "community", 1, "form-check-label"], ["type", "checkbox", "formControlName", "agreeTermCond", "id", "termandconditions", 1, "form-check-input"], ["for", "termandconditions", 1, "form-check-label"], ["type", "checkbox", "formControlName", "newsLetter", "id", "newsletter", 1, "form-check-input"], ["for", "newsletter", 1, "form-check-label"], ["type", "submit", 1, "btn", "signup_button", "form_button"], [1, "col-md-7"], [1, "maintitle"], [1, "mainTextColor"], [1, "login_link"], ["routerLink", "/login", 1, "login_link"]], template: function RegisterComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign Up");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We offer you the best online courses in Python, Digital, Marketing, Investment, and Finance");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Name");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last Name");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Choose the course");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PYTHON");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "JavaScript");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Phone Number");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 24);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Confirm Password");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Join the community");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "I agree to the term & conditions and privacy policy");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 33);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "I want to subscribe the newsletter");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sign Up");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 36);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reach your goals with ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 37);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "After Smoke");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 38);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Already a member? ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 39);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "LOG IN");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    } if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
                    }
                }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".home_containner[_ngcontent-%COMP%] {\n  background-image: url('background.jpg');\n  min-height: 500px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n.registerCard[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 0.125rem 1.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.cardBody[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  padding-left: 30px;\n}\n.heading_wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.form_section[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n}\n.form_section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  \n  box-shadow: 0px 0px 5px 5px rgba(206, 212, 218, 0.075) !important;\n}\n.course_select[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.course_select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.maintitle[_ngcontent-%COMP%] {\n  padding: 125px 0 0 72px;\n}\n.maintitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 55px;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 1.2;\n}\n.form_button[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 5px 30px;\n}\n.checkboxes[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 10px;\n}\n.checkboxes[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #424242;\n  margin-left: 8px;\n}\n.login_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.login_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8cda3f;\n  text-decoration: none;\n}\n.login_link[_ngcontent-%COMP%] {\n  font-weight: 200;\n  color: #ffffff;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQThEO0VBQzlELGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4REFBOEQ7QUFDaEU7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUVBQWlFO0FBQ25FO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX2NvbnRhaW5uZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xufVxuXG4ucmVnaXN0ZXJDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDEuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDtcbn1cbi5jYXJkQm9keSB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5oZWFkaW5nX3dyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtX3NlY3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG59XG5cbi5mb3JtX3NlY3Rpb24gaW5wdXQge1xuICAvKiBib3JkZXI6IDAuNXB4IHNvbGlkICNkNGQ0ZDQ7ICovXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDIwNiwgMjEyLCAyMTgsIDAuMDc1KSAhaW1wb3J0YW50O1xufVxuLmNvdXJzZV9zZWxlY3Qge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jb3Vyc2Vfc2VsZWN0IG9wdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4ubWFpbnRpdGxlIHtcbiAgcGFkZGluZzogMTI1cHggMCAwIDcycHg7XG59XG4ubWFpbnRpdGxlIHAge1xuICBmb250LXNpemU6IDU1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmZvcm1fYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogNXB4IDMwcHg7XG59XG4uY2hlY2tib3hlcyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNoZWNrYm94ZXMgaW5wdXQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNoZWNrYm94ZXMgbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmxvZ2luX2xpbmsgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubG9naW5fbGluayBhOmhvdmVyIHtcbiAgY29sb3I6ICM4Y2RhM2Y7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5sb2dpbl9saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-register',
                        templateUrl: './register.component.html',
                        styleUrls: ['./register.component.css']
                    }]
                }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null);
            })();


            /***/
}),

/***/ "addu":
/*!******************************************************!*\
  !*** ./src/app/coming-soon/coming-soon.component.ts ***!
  \******************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function () { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


            class ComingSoonComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(); };
            ComingSoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 2, vars: 0, template: function ComingSoonComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "coming-soon works!");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5jc3MifQ== */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingSoonComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-coming-soon',
                        templateUrl: './coming-soon.component.html',
                        styleUrls: ['./coming-soon.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





            class LoginComponent {
                constructor(fb) {
                    this.fb = fb;
                    this.isFormSubmited = false;
                }
                ngOnInit() {
                    this.initLoginForm();
                }
                initLoginForm() {
                    this.loginForm = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
                    });
                }
            }
            LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
            LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: LoginComponent, selectors: [["app-login"]], decls: 34, vars: 0, consts: [[1, "main_containner", "home_containner"], [1, "container"], [1, "row", "mainsection"], [1, "col-md-6"], [1, "maintitle"], [1, "mainTextColor"], [1, "login_link"], ["routerLink", "/register", 1, "login_link"], [1, "col-md-5"], [1, "card", "registerCard"], [1, "card-body", "cardBody"], [1, "heading_wrapper"], [1, "heading"], [1, "subheading"], [1, "content-section"], [1, "btn", "login-button", "facebook"], [1, "btn", "login-button", "google"], [1, "linesection"], [1, "line"], [1, "btn", "login-button", "email"]], template: function LoginComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reach your goals with ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TechZy");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Already a member? ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Up");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log in");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "We offer you the best online courses in Python, Digital, Marketing, Investment, and Finance");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log in with Facebook");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log in with Google");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " or ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Log in with Email");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".home_containner[_ngcontent-%COMP%]{\n  background-image: url('background.jpg');\n  min-height: 500px;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  }\n  .content[_ngcontent-%COMP%]{\n    padding:25px 40px;\n  }\n  .registerCard[_ngcontent-%COMP%]{\n    margin: 0 20px;\n    border-radius: 8px;\n    padding: 20px 0;\n    box-shadow: 0 0.125rem 1.25rem rgba(0,0,0,.075)!important;\n  }\n  .cardBody[_ngcontent-%COMP%]{\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n  .heading_wrapper[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n  .form_section[_ngcontent-%COMP%]{\n    padding: 10px 25px;\n\n  }\n  .form_section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n      \n      box-shadow: 0px 0px 5px 5px rgba(206,212,218,.075)!important;\n  }\n  .course_select[_ngcontent-%COMP%]{\n    font-size: 13px;\n  }\n  .course_select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    padding: 5px 10px;\n  }\n  .maintitle[_ngcontent-%COMP%] {\n    padding: 10px  72px 0 0;\n  }\n  .maintitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size:55px;\n    font-weight: bold;\n    color: #ffffff;\n    line-height: 1.2;\n  }\n  .mainsection[_ngcontent-%COMP%]{\n    padding-top: 115px;\n  }\n  .form_button[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    padding: 5px 30px;\n  }\n  .checkboxes[_ngcontent-%COMP%]{\n    padding-top: 5px;\n    padding-bottom: 10px;\n  }\n  .checkboxes[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    padding: 20px\n  }\n  .checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-size: 12px;\n    color: #424242;\n    margin-left: 8px;\n  }\n  .login_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-weight: bold;\n  }\n  .login_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: #8cda3f;\n    text-decoration: none;\n  }\n  .login_link[_ngcontent-%COMP%]{\n    font-weight: 200;\n   color: #ffffff;\n   font-size: 13px;\n  }\n  .content-section[_ngcontent-%COMP%]{\n    padding:10px 32px;\n  }\n  .login-button[_ngcontent-%COMP%]{\n    color: #ffffff;\n    font-size: 13px;\n    width: 100%;\n    font-weight: 300;\n    padding: 5px 10px;\n    margin: 5px 0;\n    box-shadow:0px 0px 2px 2px rgba(0,0,0,0.035)!important;\n  }\n  .facebook[_ngcontent-%COMP%]{\n    background-color: #3b5998;\n  }\n  .google[_ngcontent-%COMP%]{\n    background-color: #4285f4;\n  }\n  .linesection[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .linesection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin: 5px;\n  }\n  .line[_ngcontent-%COMP%]{\n\n    height: 1px;\n    background-color: #dedede;\n    width: 100%;\n  }\n  .email[_ngcontent-%COMP%]{\n    color: #000000;\n    border:1px solid #000000;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQThEO0VBQzlELGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5REFBeUQ7RUFDM0Q7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjtFQUVBO01BQ0ksaUNBQWlDO01BQ2pDLDREQUE0RDtFQUNoRTtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxnQkFBZ0I7R0FDakIsY0FBYztHQUNkLGVBQWU7RUFDaEI7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0RBQXNEO0VBQ3hEO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUVBOztJQUVFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBRUE7SUFDRSxjQUFjO0lBQ2Qsd0JBQXdCO0VBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfY29udGFpbm5lcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgLmNvbnRlbnR7XG4gICAgcGFkZGluZzoyNXB4IDQwcHg7XG4gIH1cblxuICAucmVnaXN0ZXJDYXJke1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxLjI1cmVtIHJnYmEoMCwwLDAsLjA3NSkhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJkQm9keXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuICAuaGVhZGluZ193cmFwcGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mb3JtX3NlY3Rpb257XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuXG4gIH1cblxuICAuZm9ybV9zZWN0aW9uIGlucHV0e1xuICAgICAgLyogYm9yZGVyOiAwLjVweCBzb2xpZCAjZDRkNGQ0OyAqL1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMjA2LDIxMiwyMTgsLjA3NSkhaW1wb3J0YW50O1xuICB9XG4gIC5jb3Vyc2Vfc2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5jb3Vyc2Vfc2VsZWN0IG9wdGlvbntcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxuXG4gIC5tYWludGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggIDcycHggMCAwO1xuICB9XG4gIC5tYWludGl0bGUgcCB7XG4gICAgZm9udC1zaXplOjU1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5tYWluc2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTE1cHg7XG4gIH1cblxuICAuZm9ybV9idXR0b257XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgfVxuICAuY2hlY2tib3hlc3tcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jaGVja2JveGVzIGlucHV0e1xuICAgIHBhZGRpbmc6IDIwcHhcbiAgfVxuICAuY2hlY2tib3hlcyBsYWJlbHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAubG9naW5fbGluayBhe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5sb2dpbl9saW5rIGE6aG92ZXJ7XG4gICAgY29sb3I6ICM4Y2RhM2Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5sb2dpbl9saW5re1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICBjb2xvcjogI2ZmZmZmZjtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5jb250ZW50LXNlY3Rpb257XG4gICAgcGFkZGluZzoxMHB4IDMycHg7XG4gIH1cblxuICAubG9naW4tYnV0dG9ue1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYm94LXNoYWRvdzowcHggMHB4IDJweCAycHggcmdiYSgwLDAsMCwwLjAzNSkhaW1wb3J0YW50O1xuICB9XG4gIC5mYWNlYm9va3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICB9XG5cbiAgLmdvb2dsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICB9XG5cbiAgLmxpbmVzZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubGluZXNlY3Rpb24gcHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIC5saW5le1xuXG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5lbWFpbHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDA7XG4gIH1cblxuXG4iXX0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-login',
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.css']
                    }]
                }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null);
            })();


            /***/
}),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/footer.component */ "LmEr");








            class ContactComponent {
                constructor(fb) {
                    this.fb = fb;
                }
                ngOnInit() {
                    this.initForm();
                }
                initForm() {
                    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                        message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                    });
                }
                submit() {
                    alert(this.formGroup.value);
                }
            }
            ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
            ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: ContactComponent, selectors: [["app-contact"]], decls: 45, vars: 1, consts: [[1, "home_containner"], [1, "container"], [1, "main-section"], [1, "row"], [1, "col-md-5", "col-sm-12", "col-xs-12"], [1, "maintitle"], [1, "mainTextColor"], [1, "col-xl-6", "formSection"], [3, "formGroup"], ["appearance", "fill", 1, "displayBlock"], ["type", "text", "matInput", ""], ["type", "email", "matInput", ""], ["type", "message", "matInput", ""], ["type", "submit", 1, "btn", "signup_button", "form_button", 3, "click"], [1, "col-xl-4"], [1, "column"], [1, "col-md-6"]], template: function ContactComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "feel free to contact us any time. we will get back to you as soon as we can!");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Name");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Message");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_30_listener() { return ctx.submit(); });
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Send");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "lf");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ljsnvk");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ksbfvkjb");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "ljndvk");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-footer");
                    } if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
                    }
                }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".home_containner[_ngcontent-%COMP%] {\r\n    background-image: url('shutterstock_458145142.jpg');\r\n    \r\n    height: 60%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  \r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 25px 40px;\r\n  }\r\n  \r\n  .maintitle[_ngcontent-%COMP%] {\r\n    padding-top: 65%;\r\n    \r\n    align-items: flex-end;\r\n    height: 96vh;\r\n  }\r\n  \r\n  .maintitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n    font-weight: bold;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .promotional[_ngcontent-%COMP%]   .form_label[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n}\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n  height: calc(0.5em + .75rem + 10px);\r\n}\r\n  \r\n  .signup_button[_ngcontent-%COMP%]{\r\n color: white;\r\n background-color: #0d5aa6;\r\n display: block; \r\n width: 100%;\r\n margin-bottom: 20px;\r\n border: none;\r\n}\r\n  \r\n  .formSection[_ngcontent-%COMP%]{\r\n  text-align: center;\r\npadding:60px;\r\nborder: 0px solid;\r\nbox-shadow: 0px 0px 9px -2px grey;\r\nmargin-top: 60px;\r\nmargin-bottom: 60px;\r\npadding-left: 80px;\r\npadding-right: 80px;\r\n}\r\n  \r\n  .column[_ngcontent-%COMP%]{\r\n    background-image: url('cigarette-broken.jpg');\r\n    height: 51%;\r\n    color: white;\r\n    padding: 28px;\r\n    \r\n    width: 150%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    left: 78px;\r\n    bottom: 125px;\r\n    border-radius: 2pc;\r\n    box-shadow: 10px 10px #88888840;\r\n}\r\n  \r\n  @media screen{\r\n  .column[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtREFBdUU7SUFDdkUsc0VBQXNFO0lBQ3RFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCOztFQUU5Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsVUFBVTtBQUNkOztFQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDOztFQUNBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEIsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQ0FBaUM7QUFDakMsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25COztFQUNBO0lBQ0ksNkNBQStEO0lBQy9ELFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztFQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfY29udGFpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2h1dHRlcnN0b2NrXzQ1ODE0NTE0Mi5qcGcnKTtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZkYmIyZCwgI2IyMWYxZiwgIzFhMmE2Yyk7ICovXHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWludGl0bGUge1xyXG4gICAgcGFkZGluZy10b3A6IDY1JTtcclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDMwcHg7ICovXHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBoZWlnaHQ6IDk2dmg7XHJcbiAgfVxyXG4gIC5tYWludGl0bGUgcCB7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG4gIC5wcm9tb3Rpb25hbCAuZm9ybV9sYWJlbHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICBoZWlnaHQ6IGNhbGMoMC41ZW0gKyAuNzVyZW0gKyAxMHB4KTtcclxufVxyXG4uc2lnbnVwX2J1dHRvbntcclxuIGNvbG9yOiB3aGl0ZTtcclxuIGJhY2tncm91bmQtY29sb3I6ICMwZDVhYTY7XHJcbiBkaXNwbGF5OiBibG9jazsgXHJcbiB3aWR0aDogMTAwJTtcclxuIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtU2VjdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6NjBweDtcclxuYm9yZGVyOiAwcHggc29saWQ7XHJcbmJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0ycHggZ3JleTtcclxubWFyZ2luLXRvcDogNjBweDtcclxubWFyZ2luLWJvdHRvbTogNjBweDtcclxucGFkZGluZy1sZWZ0OiA4MHB4O1xyXG5wYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG59XHJcbi5jb2x1bW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9jaWdhcmV0dGUtYnJva2VuLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDUxJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDI4cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3OHB4O1xyXG4gICAgYm90dG9tOiAxMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJwYztcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAjODg4ODg4NDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbntcclxuICAuY29sdW1ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0iXX0= */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-contact',
                        templateUrl: './contact.component.html',
                        styleUrls: ['./contact.component.css']
                    }]
                }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null);
            })();


            /***/
}),

/***/ "rQ7a":
/*!**************************************************************!*\
  !*** ./src/app/layouts/main-layout/main-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





            class MainLayoutComponent {
                constructor() { }
                ngOnInit() {
                }
            }
            MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
            MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 3, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
                    }
                }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
            });
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-main-layout',
                        templateUrl: './main-layout.component.html',
                        styleUrls: ['./main-layout.component.css']
                    }]
                }], function () { return []; }, null);
            })();


            /***/
}),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ "rQ7a");
/* harmony import */ var _our_product_our_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-product/our-product.component */ "Z5yq");









            const routes = [
                // Fallback when no prior route is matched
                {
                    path: '',
                    component: _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
                    pathMatch: 'full',
                    children: [
                        {
                            path: '',
                            component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
                        }
                    ]
                },
                {
                    path: 'about',
                    component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
                },
                {
                    path: 'Our-Products',
                    component: _our_product_our_product_component__WEBPACK_IMPORTED_MODULE_6__["OurProductComponent"]
                },
                {
                    path: 'Contact',
                    component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
                },
                {
                    path: '**',
                    redirectTo: '',
                    pathMatch: 'full'
                }
            ];
            class AppRoutingModule {
            }
            AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
            AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
            (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                    args: [{
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                    }]
                }], null, null);
            })();


            /***/
}),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(err => console.error(err));


            /***/
}),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "zn8P";

            /***/
})

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map