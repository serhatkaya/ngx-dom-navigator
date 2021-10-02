(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1aT":
/*!*************************************************************************!*\
  !*** ./projects/ngx-dom-navigator-demo/src/environments/environment.ts ***!
  \*************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./projects/ngx-dom-navigator-demo/src/main.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\candie\Desktop\Workspace\ngx-dom-navigator\projects\ngx-dom-navigator-demo\src\main.ts */"kWcp");


/***/ }),

/***/ "3Xxm":
/*!**********************************************************************************!*\
  !*** ./projects/ngx-dom-navigator/src/lib/interfaces/dom-navigator.element.i.ts ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "5VBk":
/*!***********************************************************************!*\
  !*** ./projects/ngx-dom-navigator-demo/src/app/app-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "OVEZ":
/*!******************************************************************!*\
  !*** ./projects/ngx-dom-navigator-demo/src/app/app.component.ts ***!
  \******************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var projects_ngx_dom_navigator_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/ngx-dom-navigator/src/public-api */ "iJx1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AppComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const code_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.click(code_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](i_r2 > 30 && i_r2 < 40 ? "ignored-class" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", code_r1, " ");
} }
class AppComponent {
    constructor() {
        this.title = 'ngx-dom-navigator-demo';
        this.codes = [];
    }
    ngOnInit() {
        for (let index = 0; index < 2000; index++) {
            this.codes.push(index);
        }
        let container = document.querySelector('#context');
        // this.navigator = new DomNavigator(container, { mode: DomNavigatorMode.auto, selectedClassName: 'selected', ignoredClassList: ['ignored-class'] });
        this.navigator = new projects_ngx_dom_navigator_src_public_api__WEBPACK_IMPORTED_MODULE_0__["DomNavigator"](container, projects_ngx_dom_navigator_src_public_api__WEBPACK_IMPORTED_MODULE_0__["DomNavigator"].DefaultSettings);
        this.navigator.$selectionSubject.subscribe(r => {
            console.log(r);
        });
    }
    click(c) {
        console.log(`Clicked: ${c}`);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["id", "context"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_li_1_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.codes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  border-color: #3b4253;\n  overflow: hidden;\n  height: 300px;\n}\n\nli[_ngcontent-%COMP%] {\n  background-color: #572525;\n  border-color: #3b4253 !important;\n  color: #b4b7bd;\n  width: 50px;\n  position: relative;\n  margin: 0.25rem;\n  display: block;\n  padding: 1rem;\n  border: 1px solid rgba(34, 41, 47, 0.125);\n  float: left;\n  font-size: 16px;\n}\n\nli.selected[_ngcontent-%COMP%] {\n  background-color: #e0ab3a !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0Msb0NBQUE7RUFDQSxzQkFBQTtBQUNEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0Ym9yZGVyLWNvbG9yOiAjM2I0MjUzO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0aGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxubGkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1NzI1MjU7XHJcblx0Ym9yZGVyLWNvbG9yOiAjM2I0MjUzICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNiNGI3YmQ7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogMC4yNXJlbTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsIDQxLCA0NywgMC4xMjUpO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubGkuc2VsZWN0ZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlMGFiM2EgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "PZKn":
/*!***************************************************************!*\
  !*** ./projects/ngx-dom-navigator-demo/src/app/app.module.ts ***!
  \***************************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "5VBk");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "OVEZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "ariA":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-dom-navigator/src/lib/interfaces/dom-navigator-settings.i.ts ***!
  \***********************************************************************************/
/*! exports provided: DomNavigatorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomNavigatorMode", function() { return DomNavigatorMode; });
var DomNavigatorMode;
(function (DomNavigatorMode) {
    DomNavigatorMode[DomNavigatorMode["auto"] = 1] = "auto";
    DomNavigatorMode[DomNavigatorMode["horizontal"] = 2] = "horizontal";
    DomNavigatorMode[DomNavigatorMode["vertical"] = 3] = "vertical";
    DomNavigatorMode[DomNavigatorMode["grid"] = 4] = "grid";
})(DomNavigatorMode || (DomNavigatorMode = {}));


/***/ }),

/***/ "c4HC":
/*!*************************************************************!*\
  !*** ./projects/ngx-dom-navigator/src/lib/dom-navigator.ts ***!
  \*************************************************************/
/*! exports provided: DomNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomNavigator", function() { return DomNavigator; });
/* harmony import */ var _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/dom-navigator-settings.i */ "ariA");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


class DomNavigator {
    constructor(container, settings) {
        var _a;
        this.$doc = window.document;
        this.$container = container;
        this.settings = DomNavigator.DefaultSettings;
        Object.keys(settings).forEach(key => {
            if (settings[key])
                this.settings[key] = settings[key];
        });
        this.$ignoredClassList = (_a = settings.ignoredClassList) !== null && _a !== void 0 ? _a : [];
        this.init();
    }
    inViewport(el) {
        let rect = el.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth);
    }
    unboxElement(obj) {
        if (obj.jquery || Array.isArray(obj)) {
            return obj[0];
        }
        return obj;
    }
    absoluteOffsetTop(el) {
        let offsetTop = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
        } while ((el = el.offsetParent));
        return offsetTop;
    }
    /**
     * Return the absolute offset left of an element.
     *
     * @param el {Element} The element.
     *
     * @return {Number} The offset left.
     */
    absoluteOffsetLeft(el) {
        let offsetLeft = 0;
        do {
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while ((el = el.offsetParent));
        return offsetLeft;
    }
    addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }
    removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
    /**
     * Directions.
     *
     * @returns {{left: string, up: string, right: string, down: string}}
     * @constructor
     */
    static get DIRECTION() {
        return {
            left: 'left',
            up: 'up',
            right: 'right',
            down: 'down'
        };
    }
    /**
     * Default options.
     *
     * @returns {{mode: string, selected: string, left: number, up: number, right: number, down: number, cols: number}}
     * @constructor
     */
    static get DefaultSettings() {
        return {
            mode: _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].auto,
            selectedClassName: 'selected',
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            cols: 0,
            select: 13,
        };
    }
    /**
     * Create a new DOM Navigator.
     *
     * @param container {Element} The container of the element to navigate.
     * @param settings {Object} The options to configure the DOM navigator.
     *
     * @return void.
     */
    /**
     * Initialize the navigator.
     */
    init() {
        this.validateOptions();
        this.$selected = null;
        this.$keydownHandler = null;
        // Create hotkeys map.
        this.$keys = [];
        this.$keys[this.settings.left] = this.left;
        this.$keys[this.settings.up] = this.up;
        this.$keys[this.settings.right] = this.right;
        this.$keys[this.settings.down] = this.down;
        this.$keys[this.settings.select] = this.triggerClick;
        // Calculate cols if needed for grid mode.
        if (this.settings.mode === _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].grid && !this.settings.cols) {
            let els = this.elements();
            let count = [];
            for (let i = 0; i < els.length; i++) {
                if (i > 0 && count[i - 1] !== els[i].offsetTop) {
                    break;
                }
                count[i] = els[i].offsetTop;
            }
            this.settings.cols = count.length;
        }
        this.enable();
        this.$selectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * Validate current options.
     *
     * @return void.
     */
    validateOptions() {
        let validMode = Object.values(_interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"]).includes(this.settings.mode);
        if (!validMode) {
            throw new Error('Unsupported navigation mode: ' + this.settings.mode);
        }
    }
    /**
     * Enable this navigator.
     *
     * @return void.
     */
    enable() {
        let self = this;
        this.$keydownHandler = function (event) {
            self.handleKeydown.call(self, event);
        };
        this.$doc.addEventListener('keydown', this.$keydownHandler);
    }
    /**
     * Disable this navigator.
     *
     * @return void.
     */
    disable() {
        if (this.$keydownHandler) {
            this.$doc.removeEventListener('keydown', this.$keydownHandler);
        }
        this.clearSelection();
    }
    clearSelection() {
        this.$selected = null;
    }
    /**
     * Destroy this navigator removing any event registered and any other data.
     *
     * @return void.
     */
    destroy() {
        this.disable();
        if (this.$container.domNavigator) {
            delete this.$container.domNavigator;
        }
    }
    /**
     * Navigate left to the next element if any.
     *
     * @return void.
     */
    left() {
        let next = null;
        switch (this.settings.mode) {
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let left = this.$selected.offsetLeft - 1;
                let top = this.$selected.offsetTop;
                next = this.elementsBefore(left, Infinity).reduce((prev, curr) => {
                    let currDistance = Math.abs(left - curr.offsetLeft) + Math.abs(top - curr.offsetTop);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].horizontal:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                next = this.$selected.previousElementSibling;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].vertical:
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let index = this.elements().indexOf(this.$selected);
                if (index % this.settings.cols !== 0) {
                    next = this.$selected.previousElementSibling;
                }
                break;
        }
        this.select(next, DomNavigator.DIRECTION.left);
    }
    /**
     * Navigate up to the next element if any.
     *
     * @return void.
     */
    up() {
        let next = null;
        switch (this.settings.mode) {
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let left = this.$selected.offsetLeft;
                let top = this.$selected.offsetTop - 1;
                next = this.elementsBefore(Infinity, top).reduce((prev, curr) => {
                    let currDistance = Math.abs(left - curr.offsetLeft) + Math.abs(top - curr.offsetTop);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].horizontal:
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].vertical:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let elToSelect = this.$selected.previousElementSibling;
                var count = this.$container.childNodes.length;
                let attempt = 0;
                while (this.findCommonElement(elToSelect === null || elToSelect === void 0 ? void 0 : elToSelect.classList, this.$ignoredClassList)) {
                    if (attempt == count) {
                        break;
                    }
                    attempt++;
                    elToSelect = elToSelect.previousElementSibling;
                }
                if (!elToSelect) {
                    break;
                }
                next = elToSelect;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                next = this.$selected;
                for (let i = 0; i < this.settings.cols; i++) {
                    next = next && next.previousElementSibling;
                }
                break;
        }
        this.select(next, DomNavigator.DIRECTION.up);
    }
    /**
     * Triggers click event of the selected element.
     */
    triggerClick() {
        this.$selected.click();
    }
    /**
     * Navigate right to the next element if any.
     *
     * @return void.
     */
    right() {
        let next = null;
        switch (this.settings.mode) {
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let left = this.$selected.offsetLeft + this.$selected.offsetWidth;
                let top = this.$selected.offsetTop;
                next = this.elementsAfter(left, 0).reduce((prev, curr) => {
                    let currDistance = Math.abs(curr.offsetLeft - left) + Math.abs(curr.offsetTop - top);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].horizontal:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let elToSelect = this.$selected.nextElementSibling;
                var count = this.$container.childNodes.length;
                let attempt = 0;
                while (this.findCommonElement(elToSelect === null || elToSelect === void 0 ? void 0 : elToSelect.classList, this.$ignoredClassList)) {
                    if (attempt == count) {
                        break;
                    }
                    attempt++;
                    elToSelect = elToSelect.nextElementSibling;
                }
                if (!elToSelect) {
                    break;
                }
                next = elToSelect;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].vertical:
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let index = this.elements().indexOf(this.$selected);
                if (index === 0 || (index + 1) % this.settings.cols !== 0) {
                    next = this.$selected.nextElementSibling;
                }
                break;
        }
        this.select(next, DomNavigator.DIRECTION.right);
    }
    /**
     * Navigate down to the next element if any.
     */
    down() {
        let next = null;
        switch (this.settings.mode) {
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let left = this.$selected.offsetLeft;
                let top = this.$selected.offsetTop + this.$selected.offsetHeight;
                next = this.elementsAfter(0, top).reduce((prev, curr) => {
                    let currDistance = Math.abs(curr.offsetLeft - left) + Math.abs(curr.offsetTop - top);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].horizontal:
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].vertical:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                let elToSelect = this.$selected.nextElementSibling;
                var count = this.$container.childNodes.length;
                let attempt = 0;
                while (this.findCommonElement(elToSelect === null || elToSelect === void 0 ? void 0 : elToSelect.classList, this.$ignoredClassList)) {
                    if (attempt == count) {
                        break;
                    }
                    attempt++;
                    elToSelect = elToSelect.nextElementSibling;
                }
                if (!elToSelect) {
                    break;
                }
                next = elToSelect;
                break;
            case _interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_0__["DomNavigatorMode"].grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }
                next = this.$selected;
                for (let i = 0; i < this.settings.cols; i++) {
                    next = next && next.nextElementSibling;
                }
                break;
        }
        this.select(next, DomNavigator.DIRECTION.down);
    }
    /**
     * Return the selected DOM element.
     *
     * @return {Element} The selected DOM element.
     */
    selected() {
        return this.$selected;
    }
    /**
     * Select the given element.
     *
     * @param {Element} el The DOM element to select.
     * @param {string} direction The direction.
     * @return void
     */
    select(el, direction) {
        // Is there an element or is it selected?
        if (!el || el === this.$selected) {
            return; // Nothing to do here.
        }
        el = this.unboxElement(el);
        // Unselect previous element.
        if (this.$selected) {
            this.removeClass(this.$selected, this.settings.selectedClassName);
        }
        // Scroll to given element.
        this.scrollTo(el, direction);
        // Select given element.
        this.addClass(el, this.settings.selectedClassName);
        this.$selected = el;
        this.$selectionSubject.next(el);
    }
    /**
     * Scroll the container to an element.
     *
     * @param el {Element} The destination element.
     * @param direction {String} The direction of the current navigation.
     *
     * @return void.
     */
    scrollTo(el, direction) {
        el = this.unboxElement(el);
        if (!this.inContainerViewport(el)) {
            switch (direction) {
                case DomNavigator.DIRECTION.left:
                    this.$container.scrollLeft = el.offsetLeft - this.$container.offsetLeft;
                    break;
                case DomNavigator.DIRECTION.up:
                    this.$container.scrollTop = el.offsetTop - this.$container.offsetTop;
                    break;
                case DomNavigator.DIRECTION.right:
                    this.$container.scrollLeft = el.offsetLeft - this.$container.offsetLeft - (this.$container.offsetWidth - el.offsetWidth);
                    break;
                case DomNavigator.DIRECTION.down:
                    this.$container.scrollTop = el.offsetTop - this.$container.offsetTop - (this.$container.offsetHeight - el.offsetHeight);
                    break;
            }
        }
        else if (!this.inViewport(el)) {
            switch (direction) {
                case DomNavigator.DIRECTION.left:
                    document.body.scrollLeft = this.absoluteOffsetLeft(el) - document.body.offsetLeft;
                    break;
                case DomNavigator.DIRECTION.up:
                    document.body.scrollTop = this.absoluteOffsetTop(el) - document.body.offsetTop;
                    break;
                case DomNavigator.DIRECTION.right:
                    document.body.scrollLeft = this.absoluteOffsetLeft(el) - document.body.offsetLeft - (document.documentElement.clientWidth - el.offsetWidth);
                    break;
                case DomNavigator.DIRECTION.down:
                    document.body.scrollTop = this.absoluteOffsetTop(el) - document.body.offsetTop - (document.documentElement.clientHeight - el.offsetHeight);
                    break;
            }
        }
    }
    /**
     * Indicate if an element is in the container viewport.
     *
     * @param el {Element} The element to check.
     *
     * @return {Boolean} true if the given element is in the container viewport, otherwise false.
     */
    inContainerViewport(el) {
        el = this.unboxElement(el);
        // Check on left side.
        if (el.offsetLeft - this.$container.scrollLeft < this.$container.offsetLeft) {
            return false;
        }
        // Check on top side.
        if (el.offsetTop - this.$container.scrollTop < this.$container.offsetTop) {
            return false;
        }
        // Check on right side.
        if ((el.offsetLeft + el.offsetWidth - this.$container.scrollLeft) > (this.$container.offsetLeft + this.$container.offsetWidth)) {
            return false;
        }
        // Check on down side.
        if ((el.offsetTop + el.offsetHeight - this.$container.scrollTop) > (this.$container.offsetTop + this.$container.offsetHeight)) {
            return false;
        }
        return true;
    }
    /**
     * Return an array of the navigable elements.
     *
     * @return {Array} An array of elements.
     */
    elements() {
        let children = [];
        for (let i = this.$container.children.length; i--;) {
            // Skip comment nodes on IE8
            if (this.$container.children[i].nodeType !== 8 && !this.findCommonElement(this.$container.children[i].classList, this.$ignoredClassList)) {
                children.unshift(this.$container.children[i]);
            }
        }
        return children;
    }
    findCommonElement(array1, array2) {
        // Loop for array1
        for (let i = 0; i < array1.length; i++) {
            // Loop for array2
            for (let j = 0; j < array2.length; j++) {
                // Compare the element of each and
                // every element from both of the
                // arrays
                if (array1[i] === array2[j]) {
                    // Return if common element found
                    return true;
                }
            }
        }
        // Return if no common element exist
        return false;
    }
    /**
     * Return an array of navigable elements after an offset.
     *
     * @param {number} left The left offset.
     * @param {number} top The top offset.
     *
     * @return {Array} An array of elements.
     */
    elementsAfter(left, top) {
        return this.elements().filter(el => el.offsetLeft >= left && el.offsetTop >= top);
    }
    /**
     * Return an array of navigable elements before an offset.
     *
     * @param {number} left The left offset.
     * @param {number} top The top offset.
     *
     * @return {Array} An array of elements.
     */
    elementsBefore(left, top) {
        return this.elements().filter(el => el.offsetLeft <= left && el.offsetTop <= top);
    }
    /**
     * Handle the key down event.
     *
     * @param {Event} event The event object.
     *
     * @return void.
     */
    handleKeydown(event) {
        if (this.$keys[event.which]) {
            event.preventDefault();
            this.$keys[event.which].call(this);
        }
    }
}


/***/ }),

/***/ "iJx1":
/*!******************************************************!*\
  !*** ./projects/ngx-dom-navigator/src/public-api.ts ***!
  \******************************************************/
/*! exports provided: DomNavigator, DomNavigatorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dom_navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dom-navigator */ "c4HC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomNavigator", function() { return _lib_dom_navigator__WEBPACK_IMPORTED_MODULE_0__["DomNavigator"]; });

/* harmony import */ var _lib_interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/interfaces/dom-navigator-settings.i */ "ariA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomNavigatorMode", function() { return _lib_interfaces_dom_navigator_settings_i__WEBPACK_IMPORTED_MODULE_1__["DomNavigatorMode"]; });

/* harmony import */ var _lib_interfaces_dom_navigator_element_i__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces/dom-navigator.element.i */ "3Xxm");
/* empty/unused harmony star reexport *//*
 * Public API Surface of ngx-dom-navigator
 * Author: Serhat KAYA github.com/serhatkaya
 * Version: 1.0.5-rel
 */





/***/ }),

/***/ "kWcp":
/*!*****************************************************!*\
  !*** ./projects/ngx-dom-navigator-demo/src/main.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "PZKn");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "+1aT");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map