"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalConfirmComponent = void 0;
var core_1 = require("@angular/core");
var ModalConfirmComponent = /** @class */ (function () {
    function ModalConfirmComponent(activeModal, doctorService) {
        this.activeModal = activeModal;
        this.doctorService = doctorService;
    }
    ModalConfirmComponent.prototype.ngOnInit = function () {
    };
    ModalConfirmComponent.prototype.getData = function () {
        var _this = this;
        this.doctorService.doctorSearchAll().subscribe(function (res) {
            _this.rows = res;
        });
    };
    ModalConfirmComponent.prototype.delete1 = function (id) {
        var _this = this;
        console.log(this.j);
        this.doctorService.deleteData(this.j).subscribe(function (res) {
            _this.getData();
            console.log("delete");
            window.alert("It was successfully deleted!");
            location.reload();
        });
    };
    ModalConfirmComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-confirm',
            templateUrl: './modal-confirm.component.html',
            styleUrls: ['./modal-confirm.component.scss']
        })
    ], ModalConfirmComponent);
    return ModalConfirmComponent;
}());
exports.ModalConfirmComponent = ModalConfirmComponent;
