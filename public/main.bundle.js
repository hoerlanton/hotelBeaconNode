webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\n.data-col {\n  background-color: #0a7a74;\n}\n\n.upload-col {\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 100vh;\n  max-height: 100vh;\n  overflow: auto;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 140px;\n}\n\n.row1 {\n  height: calc(100vh);\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n  height: calc(100vh - 100px);\n}\n\n.row .container-fluid .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <!--The content below is only a placeholder and can be replaced.-->\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n  <link href=\"https://unpkg.com/@angular/material/prebuilt-themes/indigo-pink.css\" rel=\"stylesheet\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n<flash-messages></flash-messages>\n<body>\n  <nav class=\"navbar navbar-default\" style=\"max-width: 100%\">\n    <ul class=\"nav navbar-nav\" style=\"max-width: 100%; margin-left: 20px\">\n      <li><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2016/05/servicio-logo-hellblau-auto-ohne-hintergrund-1.png\" style=\"height: 45px; width: auto; margin-top:15px; margin-right: 50px; text-align: left; display:table-cell; vertical-align:middle;\"></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\" style=\"max-width: 100%\">\n      <li><img alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/06/Salzburger-Hof_Marke_CMYK-ohne-hintergrund.png\" style=\"height: 45px; width: auto; margin-top: 10px; margin-bottom: 5px; margin-right: 25px;float: right; text-align: right; display:table-cell; vertical-align:middle;\"></li>\n    </ul>\n  </nav>\n\n\n  <div class=\"col-xs-12 col-lg-4 upload-col\">\n    <div class=\"csv\"  style=\" width: 100%; height: 100px;\"><h3>CSV-Datei hochladen</h3>\n      <div class=\"line\"></div>\n      <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n        <input type=\"file\" style=\"float: left; margin-top: 10px; color: #0a7a74\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n        <button style=\" background-color: #0a7a74; float: right; color:  white\" type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n      </form>\n    </div>\n    <h3>Anreise-Liste</h3>\n    <div class=\"row1\">\n      <div class='wrapper'>\n        <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n          <div class='cards-container' id='container1'>\n            <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + anreiseListeElement.bgColor}\">\n              <p> <b>Name:</b> {{anreiseListeElement.name}}<br>\n                <b>Zimmernummer:</b> {{anreiseListeElement.zimmernummer}}<br>\n                <b>Abreise:</b> {{anreiseListeElement.abreise}}<br>\n                <b>Personen Anzahl:</b> {{anreiseListeElement.personenAnzahl}}<br>\n                <b>Notiz1:</b> {{anreiseListeElement.notiz1}}<br>\n                <b>Notiz2:</b> {{anreiseListeElement.notiz2}}<br>\n                <b>Bemerkung:</b> {{anreiseListeElement.bemerkung}}<br>\n              </p>\n              <div *ngIf=\"anreiseListeElement.bgColor === '0a7a74'\">\n                <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-lg-8 data-col\">\n    <div class=\"row1\">\n      <div class='wrapper'>\n        <div class=\"card\" *ngFor=\"let nobleDataElements of nobleData;\" [ngStyle]=\"{'border': + nobleDataElements.border}\">\n          <div class='cards-container' id='container2'>\n            <h3 style=\"color: black\">{{nobleDataElements.roomNumber}}</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noble_service__ = __webpack_require__("../../../../../src/app/noble.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nobleData__ = __webpack_require__("../../../../../src/nobleData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(nobleService, http, _flashMessagesService) {
        var _this = this;
        this.nobleService = nobleService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.nobleData = [];
        this.nobleDataRaw = [];
        this.nobleDataFiltered = [];
        this.filesToUpload = [];
        this.nobleService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            //console.log('IM-HAUS-LISTE before:');
            //console.log(imHausListeElemente);
            _this.imHausListeElemente = imHausListeElemente;
            console.log('IM-HAUS-LISTE:');
            console.log(_this.imHausListeElemente);
        });
        this.nobleService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            _this.anreiseListeElemente = anreiseListeElemente;
            console.log(_this.anreiseListeElemente);
        });
        this.refreshData();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshData();
        this.interval = setInterval(function () {
            _this.refreshData();
        }, 1000);
    };
    AppComponent.prototype.refreshData = function () {
        var _this = this;
        this.nobleService.getNobleData()
            .subscribe(function (noble) {
            console.log(noble);
            _this.nobleDataRaw = _this.nobleDataRaw.concat(noble);
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            _this.nobleDataFiltered = _this.nobleDataRaw.filter(onlyUnique);
            for (var i = 0; i < _this.nobleDataFiltered.length; i++) {
                _this.nobleData[i] = new __WEBPACK_IMPORTED_MODULE_3__nobleData__["a" /* nobleData */]();
            }
            for (var a = 0; a < _this.nobleDataFiltered.length; a++) {
                _this.nobleData[a].roomNumber = _this.nobleDataFiltered[a];
                _this.nobleData[a].border = "";
                if (a === _this.nobleDataFiltered.length - 1) {
                    _this.nobleData[a].border = "solid 3px red";
                }
            }
            console.log('noble:');
            console.log(_this.nobleData);
            if (_this.nobleData && _this.anreiseListeElemente) {
                for (var a = 0; a < _this.nobleData.length; a++) {
                    for (var b = 0; b < _this.anreiseListeElemente.length; b++) {
                        if (_this.nobleData[a].roomNumber === _this.anreiseListeElemente[b].zimmernummer) {
                            _this.nobleData[a].roomNumber += " | " + _this.anreiseListeElemente[b].name + " | " + _this.anreiseListeElemente[b].abreise + " | " + _this.anreiseListeElemente[b].personenAnzahl + " | " + _this.anreiseListeElemente[b].notiz2;
                        }
                    }
                }
            }
        });
    };
    AppComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.successMsg = "Hoi" + fileInput.target.files[0]['name'];
        //console.log(this.successMsg);
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    AppComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            return _this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', { cssClass: 'alert-success', timeout: 10000 });
        })
            .subscribe(function (files) { return console.log('files', files); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__noble_service__["a" /* NobleService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__noble_service__["a" /* NobleService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/noble.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NobleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NobleService = /** @class */ (function () {
    function NobleService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    NobleService.prototype.getNobleData = function () {
        return this.http.get('noble')
            .map(function (res) { return res.json(); });
    };
    NobleService.prototype.getImHausListe = function () {
        return this.http.get('imHausListe')
            .map(function (res) { return res.json(); });
    };
    NobleService.prototype.getAnreiseListe = function () {
        return this.http.get('anreiseListe')
            .map(function (res) { return res.json(); });
    };
    NobleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NobleService);
    return NobleService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/nobleData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nobleData; });
var nobleData = /** @class */ (function () {
    function nobleData() {
    }
    return nobleData;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map