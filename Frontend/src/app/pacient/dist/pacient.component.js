"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PacientComponent = void 0;
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var core_1 = require("@angular/core");
var modal_pacient_add_component_1 = require("../modal-pacient-add/modal-pacient-add.component");
require("rxjs/Rx");
var modal_confirm_component_1 = require("../modal-confirm/modal-confirm.component");
var modal_update_component_1 = require("../modal-update/modal-update.component");
var PacientComponent = /** @class */ (function () {
    function PacientComponent(formBuilder, pactientService, router, modalService, token) {
        this.formBuilder = formBuilder;
        this.pactientService = pactientService;
        this.router = router;
        this.modalService = modalService;
        this.token = token;
        this.form = {};
        this.displayedColumns = ['id', 'fullName', 'phoneNumber', 'emailAddress', 'address', 'age', 'sex', 'prescription', 'delete', 'update'];
        this.user = {
            fullName: '',
            phoneNumber: '',
            emailAddress: '',
            address: '',
            age: '',
            sex: '',
            prescription: ''
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    PacientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pactientService.pacientSearchAll().subscribe(function (res) {
            //  this.dateFromBackend = res.map(object => object.data)
            // console.log(this.dateFromBackend)
            _this.rows = res;
            // console.log(this.rows);
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    PacientComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PacientComponent.prototype.searchName = function () {
        var _this = this;
        this.dataSource = new table_1.MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.name1 != "") {
            this.rows = this.rows.filter(function (res) {
                return res.fullName.toLocaleLowerCase().match(_this.name1.toLocaleLowerCase());
            });
        }
        else if (this.name1 == "") {
            this.ngOnInit();
        }
    };
    PacientComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(modal_pacient_add_component_1.ModalPacientAddComponent);
        modalRef.componentInstance.user = this.user;
        modalRef.result.then(function (result) {
            if (result) {
                console.log(result);
            }
        });
    };
    PacientComponent.prototype.getData = function () {
        var _this = this;
        this.pactientService.pacientSearchAll().subscribe(function (res) {
            _this.rows = res;
        });
    };
    PacientComponent.prototype.delete1 = function (j) {
        var _this = this;
        this.pactientService.deleteData(j).subscribe(function (res) {
            _this.getData();
            console.log("delete");
            location.reload();
        });
    };
    PacientComponent.prototype.deleteWithModal = function (j) {
        console.log(j);
        var modalRef = this.modalService.open(modal_confirm_component_1.ModalConfirmComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
            }
        });
    };
    PacientComponent.prototype.updateWithModal = function (j) {
        console.log(j);
        var modalRef = this.modalService.open(modal_update_component_1.ModalUpdateComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
            }
        });
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], PacientComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], PacientComponent.prototype, "paginator");
    PacientComponent = __decorate([
        core_1.Component({
            selector: 'app-pacient',
            templateUrl: './pacient.component.html',
            styleUrls: ['./pacient.component.scss']
        })
    ], PacientComponent);
    return PacientComponent;
}());
exports.PacientComponent = PacientComponent;
