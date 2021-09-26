webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blogpost_blogpost_component__ = __webpack_require__("./src/app/blogpost/blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");



var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    // { path: 'home', component: HomeComponent },
    // { path: 'contact', component: ContactComponent },
    { path: "projects", component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */] },
    // { path: "skills", component: SkillsComponent },
    { path: "blog", component: __WEBPACK_IMPORTED_MODULE_0__blogpost_blogpost_component__["a" /* BlogpostComponent */] },
    // { path: "resume", component: BlogpostComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blogpost_blogpost_component__ = __webpack_require__("./src/app/blogpost/blogpost.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__blogpost_blogpost_component__["a" /* BlogpostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost.component.css":
/***/ (function(module, exports) {

module.exports = ".text-white {\n  margin-top: 5%;\n  float: none;\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n\n.text-white .main-text {\n  font-size: 14px;\n  background-color: rgb(8, 25, 36);\n  opacity: 0.9;\n  padding: 5px 10px 5px 10px;\n}\n\nimg {\n  display: block;\n  /* margin-left: auto;\n  margin-right: auto; */\n  width: 200px;\n  height: auto;\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\n\n@media only screen and (max-width: 1200px) {\n  img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 120px;\n    height: auto;\n  }\n  .text-white p {\n    font-size: 13px;\n  }\n}\n\n.blog-btn {\n  color: white;\n}\n\n.main-text {\n  color: white;\n}\n\n.sub-text {\n  margin-bottom: 2px;\n  line-height: 1.8;\n}\n\n.container-padding {\n  padding: 20px 30px 20px 10px;\n}\n\n@media screen and (min-width: 760px) {\n  .container-padding {\n    padding: 40px 120px 40px 20px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/blogpost/blogpost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-white\">\n  <a class=\"blog-btn\" routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-angle-double-left\"></i> Back</a>\n\n  <div class=\"row main-text\">\n    <div class=\"container-padding\">\n      <a class=\"blog-btn\" href=\"https://hasura.io/blog/handling-graphql-hasura-errors-with-react/\">\n        Handling GraphQL Errors with Hasura & React\n      </a>\n      <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://hasura.io/blog/instagram-clone-react-graphql-hasura-part1/\">Building an\n        Instagram clone in React with GraphQL and Hasura - Part I</a>\n      <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://hasura.io/blog/instagram-clone-react-graphql-hasura-part2/\">Building an\n        Instagram clone in React with GraphQL and Hasura - Part 2</a>\n      <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://hasura.io/blog/hackernews-tutorial-using-graphql-react-hasura-part1/\">Building a\n        Hacker News Clone with GraphQL, Hasura and React - Part 1</a>\n      <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://hasura.io/blog/hackernews-tutorial-using-graphql-react-hasura-part2/\">Building a\n        Hacker News Clone with GraphQL, Hasura and React - Part 2</a>\n      <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://medium.com/kuzok/brain-mri-segmentation-using-deep-learning-217eb1bb5e82\">Brain\n        MRI Segmentation using Deep Learning</a>\n      <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://medium.com/kuzok/hand-gesture-recognition-using-deep-learning-8435d11c548a\">Hand\n        Gesture Recognition using Deep Learning</a>\n      <br>\n      <br>\n      <a class=\"blog-btn\"\n        href=\"https://medium.com/kuzok/news-documents-clustering-using-python-latent-semantic-analysis-b95c7b68861c\">News\n        documents clustering using python (latent semantic analysis)</a>\n      <!-- <br>\n      <br>\n      <a class=\"blog-btn\" href=\"https://medium.com/@abhi_khangarot/what-the-heck-is-haskell-9176ee499922\">What the heck\n        is haskell</a> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blogpost/blogpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogpostComponent = /** @class */ (function () {
    function BlogpostComponent() {
    }
    BlogpostComponent.prototype.ngOnInit = function () {
    };
    BlogpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blogpost',
            template: __webpack_require__("./src/app/blogpost/blogpost.component.html"),
            styles: [__webpack_require__("./src/app/blogpost/blogpost.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogpostComponent);
    return BlogpostComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".margin {\n\tmargin-top: 40px;\n  }\n  \n  p {\n\tcolor: #f4f7f9;\n\tfont-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n  }\n  \n  .sketch {\n\tmargin: 0;\n\ttop: 0;\n\tleft: 0;\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n  }\n  \n  p.bottom {\n\tfont-size: 15px;\n\tcolor: white;\n  }\n  \n  #form-send ul li {\n\tfont-size: 13px;\n\tcolor: white;\n  }\n  \n  label {\n\tcolor: grey;\n  }\n  \n  p.text-muted {\n\tfont-size: 12px;\n  }\n  \n  #form-send {\n\tmargin-top: 20%;\n\t/*margin-left: 0;*/\n  }\n  \n  @media screen and (min-width: 600px) {\n\t#form-send {\n\t  margin-top: 10%;\n\t  /*margin-left: 0;*/\n\t}\n  }\n  \n  a.font {\n\tcolor: #f4f7f9;\n\tfont-size: 20px;\n\tletter-spacing: 5px;\n\ttext-decoration: none;\n  }\n  \n  @media screen and (min-width: 760px) {\n\ta.font {\n\t  color: #f4f7f9;\n\t  font-size: 25px;\n\t  letter-spacing: 15px;\n\t  text-decoration: none;\n\t}\n  }\n  \n  a.font:hover {\n\tcolor: rgba(56, 167, 241, 0.884);\n  }\n  \n  p {\n\tcolor: white;\n\tfont-size: 18px;\n  }\n  "

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margin\">\n  <div class=\"row\">\n    <a class=\"font\" href=\"https://www.linkedin.com/in/abhijeetkhangarot/\" target=\"_blank\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n\n    <a class=\"font git\" href=\"https://github.com/abhi40308\" target=\"_blank\">\n      <i class=\"fa fa-github\"></i>\n    </a>\n\n    <a class=\"font tw\" href=\"https://twitter.com/abhi_khangarot\" target=\"_blank\">\n      <i class=\"fa fa-twitter\"></i>\n    </a>\n\n    <a class=\"font gp\" href=\"https://www.instagram.com/abhi_khangarot/\" target=\"_blank\">\n      <i class=\"fa fa-instagram\"></i>\n    </a>\n\n    <a class=\"font fb\" href=\"https://www.facebook.com/abhijeetsingh.khangarot\" target=\"_blank\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n\n    <!-- <a class=\"font q\" href=\"https://medium.com/@abhi_khangarot\" target=\"_blank\">\n      <i class=\"fa fa-medium\"></i>\n    </a> -->\n\n    <!-- <a class=\"font tw\" href=\"https://stackoverflow.com/users/7088648/abhijeet-khangarot?tab=profile\" target=\"_blank\">\n      <i class=\"fa fa-stack-overflow\"></i>\n    </a> -->\n\n    <!-- <a class=\"font tw\" href=\"https://www.codechef.com/users/abhi_khangarot\" target=\"_blank\">\n        <i class=\"fa fa-code\"></i>\n      </a> -->\n\n    <!-- <a class=\"font tw\" href=\"https://codeforces.com/profile/abhijeet_khangarot\" target=\"_blank\">\n        <i class=\"fa fa-code\"></i>\n      </a> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\ta{\n\t\t-webkit-transition: all 0.5s;\n\t\ttransition: all 0.5s;\n\t\tfont-family: Lucida Sans Unicode;\n\t\tfont-size: 15px;\n\t}\n\n\ta.contact-btn.active {\n\t\tcolor: rgb(112, 200, 241) !important;\n\t}\n\n\ta.navbar-brand.active {\n\t\tcolor: white\t\t!important;\n\t}\n\n\ta.skills-btn.active {\n\t\tcolor: rgb(112, 200, 241)\t\t!important;\n\t}\n\n\ta.project-btn.active {\n\t\tcolor: rgb(112, 200, 241)\t\t!important;\n\t}\n\n\ta.navbar-brand:hover {\n\t\tcolor: white\t\t!important;\n\t}\n\n\ta.contact-btn:hover {\n\t\tcolor: rgb(112, 200, 241)\t\t!important;\n\t}\n\n\ta.skills-btn:hover {\n\t\tcolor: rgb(112, 200, 241)\t\t!important;\n\t}\n\n\ta.project-btn:hover {\n\t\tcolor: rgb(112, 200, 241)\t\t!important;\n\t}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<nav class=\"navbar navbar-fixed-top navbar-inverse\">\n    <div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a routerLink=\"/home\" (click)=\"toggleState()\" routerLinkActive=\"active\" class=\"navbar-brand act\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Home</a>\n    </div>\n    \n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in' : isIn }\">\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a class=\"project-btn\" (click)=\"toggleState()\" routerLink=\"/projects\" routerLinkActive=\"active\"><i class=\"fa fa-folder-open\"></i>Projects</a></li>\n            <li><a class=\"skills-btn\" (click)=\"toggleState()\" routerLink=\"/skills\" routerLinkActive=\"active\"><i class=\"fa fa-cogs\"></i>Skills</a></li>\n            <li><a class=\"contact-btn\" (click)=\"toggleState()\" routerLink=\"/contact\" routerLinkActive=\"active\"><i class=\"fa fa-phone\"></i>Contact</a></li>\n        </ul>\n    </div>\n</div>\n</nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isExpanded = false;
        this.isIn = false; // store state
    }
    HeaderComponent.prototype.toggleState = function () {
        // click handler
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".text-white {\n  margin-top: 5%;\n  float: none;\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n\n.text-white .main-text {\n  font-size: 14px;\n  background-color: rgb(8, 25, 36);\n  opacity: 0.9;\n  padding: 5px 10px 5px 10px;\n}\n\nimg {\n  display: block;\n  /* margin-left: auto;\n  margin-right: auto; */\n  width: 200px;\n  height: auto;\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\n\n@media only screen and (max-width: 1200px) {\n  img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 120px;\n    height: auto;\n  }\n  .text-white p {\n    font-size: 13px;\n  }\n}\n\n.blog-btn {\n  color: white;\n}\n\n.main-text {\n  color: white;\n}\n\n.sub-text {\n  margin-bottom: 2px;\n  line-height: 1.8;\n}\n\n.container-padding {\n  padding: 20px 30px 20px 10px;\n}\n\n@media screen and (min-width: 760px) {\n  .container-padding {\n    padding: 40px 120px 40px 20px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-white\">\n  <div class=\"row\">\n    <img style=\"border-radius: 5%\" class=\"img-fluid\" src=\"./assets/images/3.jpeg\" />\n  </div>\n\n  <div class=\"row main-text\">\n    <div class=\"container-padding\">\n      <p class=\"sub-text\">\n        Hi 👋 I am Abhijeet, currently working as a software engineer at Hasura.\n      </p>\n      <br />\n      <p class=\"sub-text\">\n        I care about tech ⚡, pressing problems of the world 🌎, and the impact\n        and meaning of my work. I'm a startup enthusiast. I love contributing to\n        awesome open source projects, and doing product design and development.\n      </p>\n        \n      <br />\n      <p class=\"sub-text\">\n        I have worked in web-dev, mainly in Javascript/Typescript frontend\n        (React-Redux, Angular) and python-based backend (Django). I'm also\n        interested in machine learning projects, and algorithmic programming.\n      </p>\n      <br />\n      <a class=\"blog-btn\" routerLink=\"/blog\" routerLinkActive=\"active\">Blog</a>\n      |\n      <a class=\"blog-btn\" routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a>\n      <!-- <a class=\"blog-btn\" href=\"../../assets/pdf/abhijeet.pdf\" target=\"_self\" download>Resume</a> -->\n      <app-contact></app-contact>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".text-white {\n  margin-top: 5%;\n  float: none;\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n\n.text-white .main-text {\n  font-size: 14px;\n  background-color: rgb(8, 25, 36);\n  opacity: 0.9;\n  padding: 5px 10px 5px 10px;\n}\n\nimg {\n  display: block;\n  /* margin-left: auto;\n  margin-right: auto; */\n  width: 200px;\n  height: auto;\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\n\n@media only screen and (max-width: 1200px) {\n  img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 120px;\n    height: auto;\n  }\n  .text-white p {\n    font-size: 13px;\n  }\n}\n\n.blog-btn {\n  color: white;\n}\n\n.main-text {\n  color: white;\n}\n\n.sub-text {\n  margin-bottom: 2px;\n  line-height: 1.8;\n}\n\n.container-padding {\n  padding: 20px 30px 20px 10px;\n}\n\n@media screen and (min-width: 760px) {\n  .container-padding {\n    padding: 40px 120px 40px 20px;\n  }\n}\n\n.note-text {\n  font-size: 12px;\n  \n}\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-white\">\n  <a class=\"blog-btn\" routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-angle-double-left\"></i> Back</a>\n\n  <div class=\"row main-text\">\n      <div class=\"container-padding\">\n          <!-- <p class=\"note-text\">Projects I've build/contributed to (approx sorted by new/major ones first)</p> -->\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/hasura/graphql-engine/commits?author=abhi40308\">\n              Hasura GraphQL Engine\n          </a>\n          - Blazing fast, instant realtime GraphQL APIs on your DB\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/openMF/web-app\">\n              Mifos Web App\n          </a>\n          - Mifos X Banking App built on top of the Fineract Platform\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/openMF/digital-bank-ui/commits?author=abhi40308\">\n              Digital Bank\n          </a>\n          - Digital Bank user interface for staff on top of Fineract CN\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/onvif-django-client\">\n              Onvif Django Client</a>\n          - Django app to connect to onvif cameras (Onvif hackathon)\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/instagram-clone\">\n              Instagram clone</a>\n          - IG clone in React with GraphQL and Hasura\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/vaibhavshukla182/Brain-MRI-Segmentation\">\n              Brain MRI\n          </a>\n          - Brain MRI Segmentation using Machine Learning (Smart India Hackathon 2019 -\n          Department of Atomic Energy)\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/fossasia/badgeyay/commits?author=abhi40308\">\n              Badgeyay</a>\n          - Attendee Badge Generator for Conferences\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/hackernews-clone\">\n              HackerNews Clone</a>\n          - HN clone with GraphQL, Hasura and React\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/custom-error-pages-graphQL\">\n              GraphQL Error Pages\n          </a>\n          - Building custom error pages in React with Hasura GraphQL engine\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/Hand-gesture-recognition\">\n              Hand Gesture Recognition\n          </a>\n          - Hand Gesture Recognition using machine learning\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/News-Documents-Clustering\">\n              News Similarity Detection\n          </a>\n          - News document clustering and similarity detection using LSA and K-means (NLP)\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/iiitkalyaniWebsite\">\n              IIIT Kalyani Website\n          </a>\n          - Website of IIIT Kalyani as a part of Web Team\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/notes-app\">\n              Notes app\n          </a>\n          - Notes app created using react and firebase realtime database\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/Library_management\">\n              Library Management System\n          </a>\n          - Desktop app using java as a group project\n          <!-- <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/ecomm-org\">\n              Ecomm org\n          </a>\n          - Django ecommerce platform for non-profit organisations to sell their merchandise -->\n          <!-- <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/code-stamper\">\n              Code Stamper\n          </a>\n          - Blog app using Django -->\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/typing_hacks\">\n              Typing Websites Hack\n          </a>\n          - Python scripts to hack some major typing websites\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/Android_projects/tree/master/NewsReader\">\n              News Reader Android App\n          </a>\n          - Android app to fetch latest news from HackerNews API\n          <!-- <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/github-data-viewer\">\n              Github stats viewer\n          </a>\n          - Fetch Github stats for users\n          -->\n          <br>\n          <br>\n          <a class=\"blog-btn\" href=\"https://github.com/abhi40308/crypcheck\">\n              Cryptocurrency Price Tracker\n          </a>\n          - Fetch crypto price using CoinMarketCap API\n          <br>\n          <br>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ".wrap\n{\n  margin:50px auto 0 auto;\n  width:100%;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:space-around;\n      -ms-flex-align:space-around;\n          align-items:space-around;\n  max-width:1200px;\n}\n\n.top{\n  margin-top: 25%;\n}\n\n.tile\n{\n  width:340px;\n  height:340px;\n  margin:10px;\n  background-color:silver;\n  display:inline-block;\n  background-size:cover;\n  position:relative;\n  cursor:pointer;\n  -webkit-transition: all 0.4s ease-out;\n  transition: all 0.4s ease-out;\n  -webkit-box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);\n          box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);\n  overflow:hidden;\n  color:white;\n  font-family:'Roboto';\n\n}\n\n.tile img\n{\n  height:100%;\n  width:100%;\n  position:absolute;\n  top:0;\n  left:0;\n  z-index:0;\n  -webkit-transition: all 0.4s ease-out;\n  transition: all 0.4s ease-out;\n}\n\n.tile .text\n{\n/*   z-index:99; */\n  position:absolute;\n  padding-left:30px;\n  /*height:calc(100% - 60px);*/\n}\n\n.tile h2\n{\n  font-weight:100;\n  font-size: 17px;\n  margin:20px 0 0 0;\n  font-family: Lucida Sans Unicode;\n  -webkit-transform: translateX(200px);\n          transform: translateX(200px);\n}\n\n.tile p li\n{\n  font-weight:300;\n  font-size: 15px;\n  margin:20px 0 0 0;\n  line-height: 25px;\n/*   opacity:0; */\n  -webkit-transform: translateX(-200px);\n          transform: translateX(-200px);\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n\n.animate-text\n{\n  font-family: Lucida Sans Unicode;\n  font-size: 15px;\n  opacity:0;\n  -webkit-transition: all 0.6s ease-in-out;\n  transition: all 0.6s ease-in-out;\n}\n\n.tile:hover\n{\n/*   background-color:#99aeff; */\n  -webkit-transform:scale(1.05);\n          transform:scale(1.05);\n}\n\n.tile:hover img\n{\n  opacity: 0.2;\n}\n\n.tile:hover .animate-text\n{\n  -webkit-transform:translateX(0);\n          transform:translateX(0);\n  opacity:1;\n}\n\n@media only screen and (max-width: 600px) {\n  .tile\n{\n  width:250px;\n  height:250px;\n  margin:10px;\n  background-color:silver;\n  display:inline-block;\n  background-size:cover;\n  position:relative;\n  cursor:pointer;\n  -webkit-transition: all 0.4s ease-out;\n  transition: all 0.4s ease-out;\n  overflow:hidden;\n  color:white;\n  font-family:'Roboto';\n\n}\n\n.animate-text\n{\n  font-family: Lucida Sans Unicode;\n  font-size: 10px;\n  opacity:0;\n  -webkit-transition: all 0.6s ease-in-out;\n  transition: all 0.6s ease-in-out;\n}\n}\n\n@media (max-width: 1000px) {\n  .wrap {\n   -webkit-box-orient: vertical;\n   -webkit-box-direction: normal;\n       -ms-flex-direction: column;\n           flex-direction: column;\n    width:400px;\n  }\n}\n\n@media screen and (min-width: 600px){\n\t.top{\n  margin-top: 15%;\n}\n}\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n      <div class=\"tile\">\n        <img src=\"./assets/images/image1.png\" class=\"img-fluid\" />\n        <div class=\"text\">\n          <h2 class=\"animate-text\">Programming Languages</h2>\n          <br>\n          <!-- <a class=\"animate-text\" href=\"https://github.com/abhi40308\" target=\"_blank\">\n              <i class=\"fa fa-github\"></i>\n          </a> -->\n          <ul class=\"animate-text\">\n            <li>C </li>\n            <li>C++ (STL)</li>\n            <li>Python</li>\n            <li>Java</li>\n            <li>Java Script</li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n      <div class=\"tile\">\n        <img class=\"img-fluid\" src=\"./assets/images/image2.png\" />\n        <div class=\"text\">\n          <h2 class=\"animate-text\">Web Development</h2>\n          <br>\n          <ul class=\"animate-text\">\n            <li>Front End</li>\n            <div class=\"animate-text\">\n              <ul>\n                <li>HTML5</li>\n                <li>CSS3</li>\n                <li>Typescript</li>\n                <li>Angular-material</li>\n              </ul>\n              <li>Frameworks</li>\n              <ul>\n                <li>Angular 2+</li>\n                <li>Ember.js</li>\n                <li>Bootstrap 4</li>\n                <li>Semantic UI</li>\n              </ul>\n              <li>Libraries</li>\n              <ul>\n                <li>Jquery</li>\n              </ul>\n            </div>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n      <div class=\"tile\">\n        <img src=\"./assets/images/image3.png\" class=\"img-fluid\" />\n        <div class=\"text\">\n          <h2 class=\"animate-text\">Web Development</h2>\n          <br>\n          <ul class=\"animate-text\">\n            <li>Back End</li>\n            <div class=\"animate-text\">\n              <ul>\n                <li>Python</li>\n                <li>Java Script</li>\n                <li>JSON</li>\n                <li>RESTFul API's</li>\n                <li>AJAX</li>\n              </ul>\n\n              <li>Frameworks</li>\n              <ul>\n                <li>Django</li>\n                <li>Flask</li>\n                <li>MEAN Stack</li>\n              </ul>\n\n              <li>Database</li>\n              <ul>\n                <li>MySQL</li>\n                <li>Postgresql</li>\n              </ul>\n            </div>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n      <div class=\"tile\">\n        <img src=\"./assets/images/image4.png\" class=\"img-fluid\" />\n        <div class=\"text\">\n          <h2 class=\"animate-text\">Java Desktop Apps</h2>\n          <br>\n          <div class=\"animate-text\">\n            <ul>\n              <li>Swing</li>\n              <li>JavaFX</li>\n              <li>Netbeans</li>\n            </ul>\n\n          </div>\n\n          <h2 class=\"animate-text\">ML and AI</h2>\n          <br>\n          <div class=\"animate-text\">\n            <ul>\n              <li>ML (Keras, Tensorflow)</li>\n              <li>DL</li>\n              <li>NLP</li>\n            </ul>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n      <div class=\"tile\">\n        <img src=\"./assets/images/image5.png\" class=\"img-fluid\" />\n        <div class=\"text\">\n          <h2 class=\"animate-text\">Mobile App Development</h2>\n          <br>\n          <ul class=\"animate-text\">\n            <li>Android Development</li>\n            <ul>\n              <li>Java</li>\n              <li>Kotlin</li>\n              <li>Firebase</li>\n              <li>API's</li>\n              <li>Android Studio</li>\n            </ul>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n      <div class=\"tile\">\n        <img src=\"./assets/images/image6.png\" class=\"img-fluid\" />\n        <div class=\"text\">\n          <h2 class=\"animate-text\">Others</h2>\n          <br>\n          <ul class=\"animate-text\">\n            <li>Version Control</li>\n            <ul>\n              <li>Git</li>\n              <li>Github</li>\n            </ul>\n            <li>Competitive Programming</li>\n            <li>Data Structures and Algorithms</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map