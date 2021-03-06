"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.form).subscribe(function (data) {
            console.log(data);
            if (data == "CREATED") {
                _this.isSuccessful = true;
                _this.isSignUpFailed = false;
                console.log("Succesful?: " + _this.isSuccessful);
                console.log("Failed?: " + _this.isSignUpFailed);
            }
            else {
                _this.isSuccessful = false;
                _this.isSignUpFailed = true;
            }
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isSignUpFailed = true;
            console.log("Succesful?: " + _this.errorMessage);
            console.log("Failed?: " + _this.isSignUpFailed);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
// onSubmit(f: NgForm) {
//   this.authService.register(f.value).subscribe(
//     data => {
