"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalUpdateComponent = void 0;
var core_1 = require("@angular/core");
var ModalUpdateComponent = /** @class */ (function () {
    function ModalUpdateComponent(activeModal, doctorService) {
        this.activeModal = activeModal;
        this.doctorService = doctorService;
        this.form = {};
    }
    ModalUpdateComponent.prototype.ngOnInit = function () {
    };
    ModalUpdateComponent.prototype.getData = function () {
        var _this = this;
        this.doctorService.doctorSearchAll().subscribe(function (res) {
            _this.rows = res;
        });
    };
    ModalUpdateComponent.prototype.close = function () {
        this.activeModal.dismiss('Cross click');
        location.reload();
    };
    ModalUpdateComponent.prototype.update = function (j, f) {
        console.log(this.j.id);
        this.doctorService.updateDate(this.j.id, f.value).subscribe(function () { });
        location.reload();
    };
    ModalUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-update',
            templateUrl: './modal-update.component.html',
            styleUrls: ['./modal-update.component.scss']
        })
    ], ModalUpdateComponent);
    return ModalUpdateComponent;
}());
exports.ModalUpdateComponent = ModalUpdateComponent;
