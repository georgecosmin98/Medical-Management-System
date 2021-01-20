"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
        this.isAdmin = false;
        this.isDoctor = false;
    }
    AppComponent.prototype.title = function (title) {
        throw new Error('Method not implemented.');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        console.log(this.tokenStorageService.getUser().role);
        if (this.tokenStorageService.getUser().role == '[administrator]') {
            this.isAdmin = true;
            this.isDoctor = false;
        }
        else if (this.tokenStorageService.getUser().role == '[doctor]') {
            this.isAdmin = false;
            this.isDoctor = true;
        }
    };
    AppComponent.prototype.logout = function () {
        this.tokenStorageService.signOut();
        window.location.reload();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
