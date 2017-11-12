webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\nfont-family: mg;\n/*src:url('|harry.ttf');*/\n}\n\nbody\n{font-family:mg; }\n.card{\nbackground-color: darkslategrey;\n}\n\nhtml, body {\noverflow-y:hidden;\nheight:100%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_guidelines_guidelines_component__ = __webpack_require__("../../../../../src/app/components/guidelines/guidelines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ca_profile_ca_profile_component__ = __webpack_require__("../../../../../src/app/components/ca-profile/ca-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_guidelines_guidelines_component__["a" /* GuidelinesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_ca_profile_ca_profile_component__["a" /* CaProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_15__events_events_component__["a" /* EventsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_ca_data_service__["a" /* CaDataService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__["a" /* SidebarComponent */]]
    })
], AppModule);

//https://stackoverflow.com/questions/34672987/django-with-angular-2/39438567#39438567 
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_posts_posts_component__ = __webpack_require__("../../../../../src/app/components/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_guidelines_guidelines_component__ = __webpack_require__("../../../../../src/app/components/guidelines/guidelines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ca_profile_ca_profile_component__ = __webpack_require__("../../../../../src/app/components/ca-profile/ca-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BASE_URL = 'dashboard';
var appRoutes = [
    {
        path: BASE_URL,
        component: __WEBPACK_IMPORTED_MODULE_2__components_posts_posts_component__["a" /* PostsComponent */],
    },
    {
        path: BASE_URL + '/guidelines',
        component: __WEBPACK_IMPORTED_MODULE_4__components_guidelines_guidelines_component__["a" /* GuidelinesComponent */],
    },
    {
        path: BASE_URL + '/ca-profile',
        component: __WEBPACK_IMPORTED_MODULE_5__components_ca_profile_ca_profile_component__["a" /* CaProfileComponent */],
    },
    {
        path: BASE_URL + '/tasks',
        component: __WEBPACK_IMPORTED_MODULE_7__components_tasks_tasks_component__["a" /* TasksComponent */],
    },
    {
        path: BASE_URL + '/leaderboard',
        component: __WEBPACK_IMPORTED_MODULE_6__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
    },
    {
        path: BASE_URL + '/notifications',
        component: __WEBPACK_IMPORTED_MODULE_3__components_notifications_notifications_component__["a" /* NotificationsComponent */],
    },
    {
        path: BASE_URL + '/events',
        component: __WEBPACK_IMPORTED_MODULE_8__events_events_component__["a" /* EventsComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//https://angular.io/guide/forms 
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/ca-profile/ca-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ca-profile/ca-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\" style=\"background-color:rgba(39,39,43,0.9)\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\">Edit Profile</h4>\n\t\t\t\t\t\t<p class=\"category\">Complete your profile</p>\n                    </div>\n                    <div class=\"card-content\">\n                       <form id=\"user-update\" #userform=\"ngForm\">\n                            <div class=\"row\">\n\t\t\t\t\t\t\t     <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" value=\"{{user.email}}\"  disabled>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                            </div>\n\t\t\t\t\t\t     <div class=\"row\">\n                                <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" >Full Name</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fullname\" value=\"{{user.full_name}}\" disabled>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Gender</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"{{user.gender}}\" disabled>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n                            </div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Mobile Number</label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" required [(ngModel)]=\"user.mobile_number\" class=\"form-control\" name=\"mobile_number\" value={{user.mobile_number}}>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">WhatsApp Number</label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" required [(ngModel)]=\"user.whatsapp_number\" class=\"form-control\" name=\"whatsapp_number\" value={{user.whatsapp_number}}>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">College</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"college\" class=\"form-control\" value=\"{{user.college}}\" required=\"true\" disabled>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.postal_address\" required name=\"postal_address\" value=\"{{user.postal_address}}\">\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Year of study</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"year\" value=\"{{user.year}}\" required=\"true\" disabled>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Postal Code</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"pincode\" required [(ngModel)]=\"user.pincode\" value=\"{{user.pincode}}\">\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n\t\t\t\t\t\t\t</div>\n                            <button type=\"submit\" class=\"btn btn-primary pull-right\" data-background-color=\"green\" [disabled]=\"!userform.form.valid\" (click)=\"updateuser($event)\" >{{button}}</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/ca-profile/ca-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_causerprofile__ = __webpack_require__("../../../../../src/app/models/causerprofile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CaProfileComponent = (function () {
    function CaProfileComponent(http, caservice) {
        this.http = http;
        this.caservice = caservice;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_causerprofile__["a" /* causerprofile */](0, '', '', 0, '', '', 0, 0, '');
        this.BASE_URL = window.location.origin;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });
        // get diagnostic() { return JSON.stringify(this.causer); }
        this.button = "Update Profile";
    }
    CaProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.BASE_URL + "/api/ca-profile/";
        this.http.get(url, { headers: this.headers }).subscribe(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_causerprofile__["a" /* causerprofile */](res.json()['user']['mobile_number'], res.json()['user']['email'], res.json()['user']['full_name'], res.json()['user']['year'], res.json()['user']['college'], res.json()['user']['gender'], res.json()['ca']['whatsapp_number'], res.json()['ca']['pincode'], res.json()['ca']['postal_address']);
        });
    };
    CaProfileComponent.prototype.updateuser = function (event) {
        var _this = this;
        this.button = "Updating ..";
        event.preventDefault();
        var url = this.BASE_URL + "/api/updatecauser/";
        this.http.post(url, this.user, { headers: this.headers }).subscribe(function (res) {
            if (res['status'] == 200) {
                _this.button = "Updated";
            }
        });
    };
    return CaProfileComponent;
}());
CaProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ca-profile',
        template: __webpack_require__("../../../../../src/app/components/ca-profile/ca-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/ca-profile/ca-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_ca_data_service__["a" /* CaDataService */]) === "function" && _b || Object])
], CaProfileComponent);

var _a, _b;
//# sourceMappingURL=ca-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/guidelines/guidelines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/guidelines/guidelines.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\" style=\"background-color:rgba(39,39,43,0.9)\">\n            <div class=\"card-header\" data-background-color=\"purple\">\n                <h4 class=\"title\">Guidlines for KY CAs</h4>\n\t\t</div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-10 col-md-offset-1\">\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <p><a href=\"#\">Leaderboard: It displays the top 10 leading CAs and their points, among all the CAs across India. Bonus points will be awarded to those CAs who do exceptional work.</a></p>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <p><a href=\"#\">Top 5 CAs according to the leaderboard and their work will be awarded with grand prizes worth Lakhs.</a></p>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <p><a href=\"#\">Each shared post from the KY Campus Ambassador Portal will contribute 10 points to your score.</a></p>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <p><a href=\"#\">Each public relation detail provided by you will contribute 10 points to your score.</a></p>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <p><a href=\"#\">Each new registration from your CA ID will fetch you 30 points and each payment done by them will award you with 100 extra points.</a></p>\n                        </div>\n                        .\n                    </div>\n\n                </div>\n\n                <br>\n                <br>\n\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/guidelines/guidelines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidelinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuidelinesComponent = (function () {
    function GuidelinesComponent() {
    }
    GuidelinesComponent.prototype.ngOnInit = function () {
    };
    return GuidelinesComponent;
}());
GuidelinesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-guidelines',
        template: __webpack_require__("../../../../../src/app/components/guidelines/guidelines.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/guidelines/guidelines.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GuidelinesComponent);

//# sourceMappingURL=guidelines.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/leaderboard/leaderboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "\t        <div class=\"content\" >\n\t            <div class=\"container-fluid\">\n\t                <div class=\"row\">\n\t                    <div class=\"col-md-12\">\n\t                        <div class=\"card\" style=\"background-color:rgba(39,39,43,0.9)\">\n\t                            <div class=\"card-header\" data-background-color=\"green\">\n\t                                <h4 class=\"title\">Kashiyatra CA Leader Board</h4>\n\t                                <p class=\"category\">See your rank among all CAs of KY</p>\n\t                            </div>\n\t                            <div class=\"card-content table-responsive\">\n            <table class=\"table table-inverse\" style=\"background-color: whitesmoke\">\n              <thead>\n                <tr>\n                  <th>Rank</th>\n                  <th>Name</th>\n                  <th>College</th>\n                  <th>Points</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let user of userData; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td>{{user.name}}</td>\n                  <td>{{user.college}}</td>\n                  <td>{{user.total_points}}</td>\n                </tr>\n              </tbody>\n            </table>\n\n\t                            </div>\n\t                        </div>\n\t                    </div>\n\n\t                </div>\n\t            </div>\n\t        </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderboardComponent = (function () {
    function LeaderboardComponent(caservice) {
        this.caservice = caservice;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caservice.getLeaderBoard()
            .then(function (data) {
            console.log(data);
            _this.userData = data.json();
        });
    };
    return LeaderboardComponent;
}());
LeaderboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-leaderboard',
        template: __webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */]) === "function" && _a || Object])
], LeaderboardComponent);

var _a;
//# sourceMappingURL=leaderboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "      <nav class=\"navbar navbar-transparent navbar-absolute\" style=\"background-color:#34133c\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" style=\"color:white; font-family:cursive;\">KY CA Dashboard</a>\n          </div>\n          <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"nav-item hidden-sm\">\n                    <a routerLink=\"dashboard/guidelines\" routerLinkActive=\"active\" class=\"link\" style=\"color:aliceblue\">\n                     <p style=\"color:aliceblue;font-size: 15px\">Guidlines</p>\n                    </a>\n                </li>\n              <li class=\"dropdown\"> \n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"material-icons\" style=\"color:aliceblue\">notifications</i>\n                  <span class=\"notification\" style=\"font-size:15px\">{{ notice_count }}</span>\n                  <p class=\"notice hidden-lg hidden-md\">Notifications</p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                  <li  *ngFor=\"let notice of unread_notices\"><a class=\"notice\">{{notice.text}}</a></li>\n                  <li *ngFor=\"let notice of read_notices\"><a class=\"notice\">{{notice.text}}</a></li>\n                  <li><a routerLink=\"dashboard/notifications\" routerLinkActive=\"active\" class=\"pull-right notice\">Show All</a></li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(caservice) {
        this.caservice = caservice;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caservice.getTop5Notices()
            .then(function (data) {
            // console.log(data.json());
            _this.unread_notices = data.json()['unread'];
            _this.read_notices = data.json()['read'];
            _this.notice_count = data.json()['unread'].length.toString();
            // console.log(typeof this.notice_count);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\" style=\"background-color:rgba(39,39,43,0.9)\">\n            <div class=\"card-header\" data-background-color=\"purple\">\n                <h4 class=\"title\">Notifications</h4>\n\t\t\t</div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-10 col-md-offset-1\">\n                        <div *ngFor=\"let notice of notifications\" class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <p><a>{{notice.text}}</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(http) {
        this.http = http;
        this.BASE_URL = window.location.origin;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.BASE_URL + "/api/all-notifications/";
        this.http.get(url, { headers: this.headers }).subscribe(function (res) {
            _this.notifications = res.json();
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notifications',
        template: __webpack_require__("../../../../../src/app/components/notifications/notifications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notifications/notifications.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" >\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngFor=\"let post of posts\" style=\"margin:auto\">\n        <div class=\"card\" style=\"background-color:rgba(39,39,43,0.9)\">\n          <div class=\"card-header card-chart\" data-background-color=\"red\">\n            <div class=\"ct-chart\" id=\"\">\n              <img src=\"{{post.full_picture}}\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"card-content\">\n            <p class=\"category\" style=\"color:bisque\">{{post.message}}</p>\n            <div class=\"pull-right\">\n              <button class=\"btn\" style=\"width:100%;background-color:#3b5998\" (click)=\"shareIt(post.link)\"><i class=\"fa fa-share\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Share to Facebook</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class= \"card m-b-0\" *ngIf=\"!if_canceled\" style=\"margin:4%;width:90%\">\n            <div class=\"card-header collapsed\" style=\"margin:3%\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                <a class=\"card-title\" >\n                    <p style=\"color:whitesmoke;margin:auto;font-size:20px;cursor:pointer;\">Click to see your registration</p>\n                </a>\n            </div>\n            <div id=\"collapseOne\" class=\"card-block collapse\" style=\"margin:4%\">\n            <table class=\"table table-inverse\" style=\"background-color: whitesmoke\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Team ID</th>\n                  <th>Event</th>\n                  <th>Team name</th>\n                  <th>Members</th>\n                   \n                  <th>Cancel</th>\n                  \n             \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let pr of previous_reg; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td>{{pr.teamId}}</td>\n                  <td>{{eventName(pr.event)}}</td>\n                  <td>{{pr.teamName}}</td>\n                  <td>\n                  <div *ngFor=\"let member of pr.members\">\n                    {{member.ky_id}}\n                  </div>\n                  </td>\n                  <div *ngIf=\"pr.teamLeader['ky_id']==ky_id\">\n              <!--     instead of 3 ky_id -->\n                  <td>\n                     <button type=\"submit\" class=\"btn btn-default\" (click)=\"cancelRegister(pr.teamId)\"    name=\"cancel\">Delete team</button>\n                  </td>\n                  </div>\n         \n         <div *ngIf=\"!pr.teamLeader['ky_id']==ky_id\">\n              <!--     instead of 3 ky_id -->\n                  <td>\n                     Only Teamleader can delete it!\n                  </td>\n                  </div>\n\n\n                </tr>\n              </tbody>\n            </table>\n            </div>\n\n\n\n\n        </div>\n<div class=\"card m-b-0\" *ngIf=\"if_canceled\">\n  <div class=\"card-header collapsed\" style=\"margin:3%\" data-toggle=\"collapse\">\n                \n                    <p style=\"color:whitesmoke;margin:auto;font-size:20px;cursor:pointer;\">Are you sure?</p>\n               \n            </div>\n  <div  style=\"margin:4%\">\n  <table class=\"table table-inverse\" style=\"background-color: whitesmoke\">\n              <thead>\n                <tr>\n                  <th><button type=\"submit\" class=\"btn btn-default\" (click)=\"yesButton()\"    name=\"cancel\">yes</button></th>\n                  <th><button type=\"submit\" class=\"btn btn-default\" (click)=\"cancelButton()\"    name=\"cancel\">cancel</button></th>\n         \n             \n                </tr>\n              </thead>\n              </table>\n              </div>\n\n\n </div>"

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostsComponent = (function () {
    function PostsComponent(http, caservice) {
        this.http = http;
        this.caservice = caservice;
        this.BASE_URL = window.location.origin;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        this.if_canceled = false;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caservice.getResgistration()
            .then(function (data) {
            console.log("data:");
            console.log(data.json());
            _this.previous_reg = data.json();
            // for (var i in this.previous_reg){
            //   console.log(this.previous_reg[i].teamLeader)
            // }
        });
        this.caservice.getCaData()
            .then(function (data) {
            _this.ky_id = data.json()['ky_id'];
        })
            .catch(function (err) {
            console.log(err);
        });
        this.caservice.getAllEvents()
            .then(function (data) {
            // console.log("data:");
            // console.log(data.json());
            _this.allevents = data.json();
        });
        var url = this.BASE_URL + "/api/posts/";
        this.http.get(url, { headers: this.headers }).subscribe(function (res) {
            _this.posts = res.json();
        });
    };
    PostsComponent.prototype.shareIt = function (post_link) {
        // console.log(post_link);
        window.share(post_link);
    };
    PostsComponent.prototype.cancelRegister = function (event) {
        this.en_to_cancel = event;
        this.if_canceled = true;
        console.log(this.if_canceled);
    };
    PostsComponent.prototype.cancelButton = function () {
        this.en_to_cancel = null;
        this.if_canceled = false;
    };
    PostsComponent.prototype.yesButton = function () {
        var _this = this;
        var data = {
            'event': this.en_to_cancel,
        };
        var url = this.BASE_URL + "/api/deleteteam/";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });
        this.http.post(url, JSON.stringify(data), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (res) {
            console.log(res['status']);
            if (res['status'] == "deleted") {
                //console.log("res")
                _this.caservice.getResgistration()
                    .then(function (data) {
                    console.log("data:");
                    console.log(data.json());
                    _this.previous_reg = data.json();
                    // for (var i in this.previous_reg){
                    //   console.log(this.previous_reg[i].teamLeader)
                    // }
                });
            }
        });
        this.en_to_cancel = null;
        this.if_canceled = false;
        return;
    };
    PostsComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    PostsComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    PostsComponent.prototype.eventName = function (ev) {
        // console.log("da:");
        //console.log(ev);
        var i;
        var e;
        for (i in this.allevents) {
            var subevent = this.allevents[i];
            for (e in subevent) {
                //console.log(subevent[e].eventId);
                if (subevent[e].eventId == ev) {
                    return subevent[e].eventName;
                }
            }
        }
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/components/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */]) === "function" && _b || Object])
], PostsComponent);

var _a, _b;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" style=\"overflow:scroll;background-color:rgba(13,13,14,0.85)\" >\n  <div class=\"logo\">\n        <img src=\"{{profile_picture}}\" alt=\"Smiley face\" class=\"\" height=\"200\" width=\"200\"> <br>\n        <h6 class=\"simple-text\" style=\"color:bisque; font-family:cursive;\">\n          CA ID: {{ca_id}}\n        </h6>\n      </div>\n        <div class=\"sidebar-wrapper\">\n              <ul class=\"nav\">\n                  <li>\n                      <a routerLink=\"dashboard\" routerLinkActive=\"active\">\n                          <i class=\"material-icons\">dashboard</i>\n                          <p style=\"color:aliceblue\">Dashboard</p>\n                      </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"dashboard/ca-profile\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">person</i>\n                        <p style=\"color:aliceblue\">User Profile</p>\n                    </a>\n                  </li>\n\n                  <li>\n                      <a routerLink=\"dashboard/events\" routerLinkActive=\"active\">\n                          <i class=\"material-icons\">events</i>\n                          <p style=\"color:aliceblue\">Event Registration</p>\n                      </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"dashboard/tasks\" routerLinkActive=\"active\">\n                          <i class=\"material-icons\">content_paste</i>\n                          <p style=\"color:aliceblue\">Public Relations</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"dashboard/leaderboard\" routerLinkActive=\"active\">\n                      <i class=\"material-icons\">content_paste</i>\n                      <p style=\"color:aliceblue\">Leader Board</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"/logout\">\n                      <i class=\"fa fa-sign-out\"></i>\n                      <p style=\"color:aliceblue\">Logout</p>\n                    </a>\n                  </li>\n              </ul>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(caservice) {
        this.caservice = caservice;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caservice.getCaData()
            .then(function (data) {
            _this.profile_picture = data.json()['profile_picture'];
            _this.ca_id = data.json()['ca_id'];
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ca_data_service__["a" /* CaDataService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<div class=\"container-fluid\">\n    <div id=\"accordion\" class=\"accordion\">\n        <div class=\"card m-b-0\">\n            <div class=\"card-header collapsed\" style=\"margin:3%\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                <a class=\"card-title\" >\n                    <p style=\"color:whitesmoke;margin:auto;font-size:20px;cursor:pointer;\">Click to see previous entries</p>\n                </a>\n            </div>\n            <div id=\"collapseOne\" class=\"card-block collapse\" style=\"margin:4%\">\n            <table class=\"table table-inverse\" style=\"background-color: whitesmoke\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Related To</th>\n                  <th>Name</th>\n                  <th>Email</th>\n                  <th>Contact</th>\n                  <th>Designation</th>\n                  <th>College</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let pr of PRData; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td>{{pr.related_to}}</td>\n                  <td>{{pr.name}}</td>\n                  <td>{{pr.email}}</td>\n                  <td>{{pr.contact}}</td>\n                  <td>{{pr.designation}}</td>\n                  <td>{{pr.college}}</td>\n                </tr>\n              </tbody>\n            </table>\n            </div>\n        </div>\n        <div class=\"card m-b-0\" style=\"background-color:rgb(49, 49, 50)\">\n            <div class=\"card-header collapsed\" style=\"margin:3%\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                <a class=\"card-title\" >\n                    <p style=\"color:whitesmoke;margin:auto;font-size:20px;cursor:pointer;\">Click to add new entry</p>\n                </a>\n            </div>\n            <div id=\"collapseTwo\" class=\"card-block collapse\" style=\"margin:4%\">\n        <form class=\"form-inline\" style=\"margin:3%\" #prForm=\"ngForm\">\n\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label>Related To</label> <br>\n              <select class=\"form-control\" [(ngModel)]=\"newPR.related_to\" name= \"related_to\" required style=\"color:whitesmoke;background: rgb(72, 69, 66)\">\n                <option *ngFor=\"let rel of relations\"  [value]=\"rel\">{{rel}}</option>\n              </select>\n            </div>\n            <div *ngIf=\"othersChoosen()\" class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Add Relation </label> <br>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newRelation\" name=\"newRelation\" required=\"true\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Name </label> <br>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newPR.name\" name=\"name\" required=\"true\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Contact</label> <br>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"newPR.contact\" name=\"contact\" required=\"true\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Email</label> <br>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"newPR.email\" name=\"email\" required=\"true\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Designation</label> <br>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newPR.designation\" name=\"designation\" required=\"true\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">College</label> <br>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newPR.college\" name=\"college\" required=\"true\">\n            </div>\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addPR();prForm.reset();\" [disabled]=\"!prForm.form.valid\">{{button}}</button>\n          </div>\n        </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PR__ = __webpack_require__("../../../../../src/app/models/PR.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = (function () {
    function TasksComponent(caservice) {
        this.caservice = caservice;
        this.newPR = new __WEBPACK_IMPORTED_MODULE_1__models_PR__["a" /* PR */](null, null, null, null, null, null);
        this.button = "Add";
        this.newRelation = null;
        this.relations = ['Cultural Events', 'Cultural Festival', 'Dance Society',
            'Literary Society', 'Music Society', 'Theatre Society', 'Fine Arts Society',
            'Quiz Society', 'Others'];
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caservice.getPRs()
            .then(function (data) {
            console.log(data.json());
            _this.PRData = data.json();
        });
    };
    Object.defineProperty(TasksComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.newPR); },
        enumerable: true,
        configurable: true
    });
    TasksComponent.prototype.addPR = function () {
        var _this = this;
        this.button = "Adding..";
        console.log("creating new PR");
        if (this.newPR.related_to == "Others") {
            this.newPR.related_to = this.newRelation;
        }
        this.caservice.createNewPR(this.newPR)
            .then(function (data) {
            console.log(data.json());
            _this.button = "Added";
            _this.caservice.getPRs()
                .then(function (data) {
                console.log(data.json());
                _this.PRData = data.json();
            });
        });
    };
    TasksComponent.prototype.othersChoosen = function () {
        if (this.newPR.related_to == "Others") {
            return true;
        }
        else {
            return false;
        }
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tasks',
        template: __webpack_require__("../../../../../src/app/components/tasks/tasks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tasks/tasks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ca_data_service__["a" /* CaDataService */]) === "function" && _a || Object])
], TasksComponent);

var _a;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<div class=\"container-fluid\">\n    <div id=\"accordion\" class=\"accordion\">\n\n            <div class=\"card-header collapsed\" style=\"margin:3%\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" *ngIf=\"message\">\n                \n                    <p style=\"color:whitesmoke;margin:auto;font-size:20px;cursor:pointer;\">*{{message}}</p>\n               \n            </div>\n    \n        <div class=\"card m-b-0\" style=\"background-color:rgb(49, 49, 50)\">\n            <div style=\"margin:3%\"  >  \n              <p style=\"color:whitesmoke;margin:auto;font-size:20px;cursor:pointer;\">REGISTER FOR EVENT</p>\n                \n            </div>\n            <div   style=\"margin:4%\" class=\"controls \">\n        <form class=\"form-inline\"  role=\"form\" autocomplete=\"off\"style=\"margin:3%\" #eventForm=\"ngForm\">\n\n          <div class=\"row\">\n            <div  class=\"form-group\">\n              <label>EVENTS</label> <br>\n              <select class=\"form-control\" [(ngModel)]=\"team.parent_event\" (change)=\"updateParent()\" name= \"related_to\" required style=\"color:whitesmoke;background: rgb(72, 69, 66)\">\n                <option *ngFor=\"let rel of parent_events  \" [value]=\"rel\">{{rel}}</option>\n              </select>\n            </div>\n          \n           <div class=\"form-group\" >\n           <label>SUB-EVENTS</label> <br>\n     \t\t\t<select class=\"form-control\" [(ngModel)]=\"team.event\" (change)=\"updateSub()\" name= \"related_to\" required style=\"color:whitesmoke;background: rgb(72, 69, 66)\">\n                <option *ngFor=\"let rel of subevents\"  [value]=\"rel.eventName\">{{rel.eventName}}</option>\n              </select>\n            </div>\n\n            <div class=\"form-group\">\n            <div *ngIf=\"!indReg\">\n                    \n           <label>TOTAL TEAM-MEMBERS </label> <br>\n            <select class=\"form-control\" [(ngModel)]=\"team.team_size\" (change)=\"updateMember()\" name= \"related_to\" required style=\"color:whitesmoke;background: rgb(72, 69, 66)\">\n                <option *ngFor=\"let rel of number_of_members \"  [value]=\"rel\">{{rel}}</option>\n              </select>\n            </div>\n            </div>\n            </div>\n\n        <!--  {{diagnostic}} -->\n\n\n  <div>\n<div *ngIf=\"!message\">\n    \n              <div *ngIf=\"indReg\">\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"individualRegister()\" >Individual Register</button>\n              </div>\n  <div *ngIf=\"teamReg\">\n      <div class=\"control-group col-xs-8\" id=\"fields\">\n          <div >\n            <div class=\" input-group \">\n\n              <label class=\"control-label\" for=\"\">Team Leader</label>\n              <input class=\"form-control\" name=\"leader\" type=\"text\" value=\"{{ky_id}}\" readonly placeholder=\"Team Leader's KY Id\" />\n              </div>\n              <br>\n              <div class=\" input-group \">\n                  <label class=\"control-label\" for=\"\">Team Name</label>\n                    <input class=\"form-control\" [(ngModel)]=\"team.name\"  name=\"teamName\" type=\"text\" placeholder=\"Team Name\" />\n              </div>\n               <br>\n               <label class=\"control-label\"  for=\"field1\">Team member details :</label>\n              <div *ngFor=\"let mem of members; let in=index\" >\n                  <div class=\"input-group\" >\n                      <input class=\"form-control\" [(ngModel)]=\"members_kyid[in]\" name=\"members[in]\" required=\"true\" type=\"text\" placeholder=\"Member's KY Id (KY####)\" />\n                  </div><br>\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\" (click)=\"teamRegister($event)\" name=\"register\">Register</button>\n      </div>\n  </div>\n</div>\n  </div>\n\n\n</div>\n\n</form>\n</div>\n</div>\n\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ca_data_service__ = __webpack_require__("../../../../../src/app/services/ca-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_team__ = __webpack_require__("../../../../../src/app/models/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventsComponent = (function () {
    function EventsComponent(http, caservice) {
        this.http = http;
        this.caservice = caservice;
        this.team = new __WEBPACK_IMPORTED_MODULE_4__models_team__["a" /* Team */]('', '', '', '', null, null);
        this.button = "register";
        this.newRelation = null;
        this.parent_events = [];
        this.fields = [];
        this.indReg = false;
        this.teamReg = false;
        this.members_kyid = [];
        this.BASE_URL = window.location.origin;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caservice.getAllEvents()
            .then(function (data) {
            console.log("data:");
            console.log(data.json());
            _this.allevents = data.json();
            for (var i in data.json()) {
                console.log(i);
                _this.parent_events.push(i);
            }
            console.log(_this.parent_events);
        })
            .catch(function (err) {
            // console.log(err);
        });
        this.caservice.getCaData()
            .then(function (data) {
            _this.ky_id = data.json()['ky_id'];
            _this.team.team_leader = _this.ky_id;
        })
            .catch(function (err) {
            console.log(err);
        });
        ///console.log(this.selected_parent_events)
    };
    EventsComponent.prototype.updateParent = function () {
        console.log("updateParent");
        var pe = this.team.parent_event;
        this.subevents = this.allevents[pe];
        console.log(this.allevents[pe]);
        console.log(this.team.parent_event);
    };
    ;
    EventsComponent.prototype.updateSub = function () {
        var _this = this;
        this.message = null;
        var ev = this.team.event;
        console.log("updateSub:");
        for (var i in this.subevents) {
            if (this.subevents[i].eventName == this.team.event) {
                this.minMembers = this.subevents[i].minMembers;
                this.maxMembers = this.subevents[i].maxMembers;
                if (this.maxMembers == 1) {
                    this.indReg = true;
                    this.teamReg = false;
                }
                else {
                    this.indReg = false; // if in case if was already toggled 
                }
            }
        }
        this.team.team_size = null; // if in case it was set earlier
        console.log(this.indReg);
        console.log(this.subevents);
        console.log(this.minMembers, this.maxMembers);
        this.number_of_members = Array(this.maxMembers - this.minMembers + 1).fill(0).map(function (x, i) { return i + _this.minMembers; });
    };
    ;
    EventsComponent.prototype.individualRegister = function () {
        var _this = this;
        var url = this.BASE_URL + "/api/indregister/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });
        this.http.post(url, JSON.stringify(this.team), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (res) {
            console.log(res);
            _this.message = res['status'];
        });
        //$('.alert').show();
    };
    EventsComponent.prototype.teamRegister = function (event) {
        var _this = this;
        var url = this.BASE_URL + "/api/teamregister/";
        this.team.member = this.members_kyid;
        console.log(url);
        var dtt = "name";
        var body = {
            dtt: dtt
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });
        this.http.post(url, JSON.stringify(this.team), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (res) {
            console.log(res);
            _this.message = res['status'];
        });
        //this.http.post(url, JSON.stringify(dtt), {headers: this.headers}).subscribe((res)=>{});
        // this.team_json=JSON.parse(team);
        // let url: string = `${this.BASE_URL}/api/teamregister/`;
        //  this.http.post(url, JSON.stringify(serializedForm), {headers: this.headers}).subscribe((res)=>{
        // //      this.team = new Team(res.json()['team']['name'],
        // // res.json()['team']['parent_event'],
        // // res.json()['team']['event'],
        // // res.json()['team']['team_leader'],
        // // res.json()['team']['member'],)
        //  });
    };
    EventsComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EventsComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    EventsComponent.prototype.updateMember = function () {
        // console.log(this.selected_number_of_members)
        // var number=+this.selected_number_of_members;//string to int
        if (this.team.team_size == 1) {
            this.indReg = true;
        }
        else {
            this.teamReg = true;
        }
        this.members = Array(this.team.team_size - 1);
        console.log(this.members);
    };
    Object.defineProperty(EventsComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.team); },
        enumerable: true,
        configurable: true
    });
    EventsComponent.prototype.sendCredential = function (team) {
        console.log(team);
        var url = this.BASE_URL + "/api/teamregister/";
        //do not need to stringify your body
        var body = {
            team: team
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, body, { headers: headers });
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-events',
        template: __webpack_require__("../../../../../src/app/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_ca_data_service__["a" /* CaDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_ca_data_service__["a" /* CaDataService */]) === "function" && _b || Object])
], EventsComponent);

var _a, _b;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/PR.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PR; });
var PR = (function () {
    function PR(name, email, contact, related_to, college, designation) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.related_to = related_to;
        this.college = college;
        this.designation = designation;
    }
    return PR;
}());

//# sourceMappingURL=PR.js.map

/***/ }),

/***/ "../../../../../src/app/models/causerprofile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return causerprofile; });
var causerprofile = (function () {
    function causerprofile(mobile_number, email, full_name, year, college, gender, whatsapp_number, pincode, postal_address) {
        this.mobile_number = mobile_number;
        this.email = email;
        this.full_name = full_name;
        this.year = year;
        this.college = college;
        this.gender = gender;
        this.whatsapp_number = whatsapp_number;
        this.pincode = pincode;
        this.postal_address = postal_address;
    }
    return causerprofile;
}());

//# sourceMappingURL=causerprofile.js.map

/***/ }),

/***/ "../../../../../src/app/models/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team(name, parent_event, event, team_leader, member, team_size) {
        this.name = name;
        this.parent_event = parent_event;
        this.event = event;
        this.team_leader = team_leader;
        this.member = member;
        this.team_size = team_size;
    }
    return Team;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ "../../../../../src/app/services/ca-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaDataService = (function () {
    function CaDataService(http) {
        this.http = http;
        this.BASE_URL = window.location.origin;
        // private BASE_URL: string = 'http://localhost:8000/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
    }
    CaDataService.prototype.getCaData = function () {
        var url = this.BASE_URL + "/api/current_user/";
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getLeaderBoard = function () {
        var url = this.BASE_URL + "/api/leaderboard/";
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getTop5Notices = function () {
        var url = this.BASE_URL + "/api/notifications/";
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getPRs = function () {
        var url = this.BASE_URL + "/api/public-relations/";
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getResgistration = function () {
        var url = this.BASE_URL + "/api/get-reg/";
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getAllEvents = function () {
        var url = this.BASE_URL + "/api/all-event/";
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getSubEvents = function (pEvent) {
        var url = this.BASE_URL + "/api/sub-event/" + pEvent;
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.createNewPR = function (PR) {
        var url = this.BASE_URL + "/api/public-relations/";
        return this.http.post(url, PR, { headers: this.headers }).toPromise();
    };
    CaDataService.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    return CaDataService;
}());
CaDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CaDataService);

var _a;
//# sourceMappingURL=ca-data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map