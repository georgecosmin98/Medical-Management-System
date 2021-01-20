"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DoctorComponent = void 0;
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var core_1 = require("@angular/core");
var modal_content_component_1 = require("../modal-content/modal-content.component");
require("rxjs/Rx");
var modal_confirm_component_1 = require("../modal-confirm/modal-confirm.component");
var modal_update_component_1 = require("../modal-update/modal-update.component");
var DoctorComponent = /** @class */ (function () {
    function DoctorComponent(formBuilder, doctService, router, modalService, token) {
        this.formBuilder = formBuilder;
        this.doctService = doctService;
        this.router = router;
        this.modalService = modalService;
        this.token = token;
        this.form = {};
        this.displayedColumns = ['id', 'fullName', 'cnp', 'emailAddress', 'phoneNumber', 'department', 'specialization', 'salary', 'delete', 'update'];
        this.user = {
            fullName: '',
            cnp: '',
            emailAddress: '',
            phoneNumber: '',
            department: '',
            specialization: '',
            salary: ''
        };
        this.isLoggedIn = false;
        this.role = 'administrator';
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.isAdmin = false;
        this.isDoctor = false;
    }
    DoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.token.getUser();
        this.doctService.doctorSearchAll().subscribe(function (res) {
            //  this.dateFromBackend = res.map(object => object.data)
            // console.log(this.dateFromBackend)
            _this.rows = res;
            // console.log(this.rows);
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    DoctorComponent.prototype.register = function (f) {
        this.doctService.add(f.value).subscribe(function () { });
        location.reload();
    };
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    // }
    DoctorComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(modal_content_component_1.ModalContentComponent);
        modalRef.componentInstance.user = this.user;
        modalRef.result.then(function (result) {
            if (result) {
                console.log(result);
            }
        });
        // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
        //   console.log(receivedEntry);
        // })
    };
    DoctorComponent.prototype.searchName = function () {
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
    DoctorComponent.prototype.searchCNP = function () {
        var _this = this;
        this.dataSource = new table_1.MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.cnp1 != "") {
            this.rows = this.rows.filter(function (res) {
                return res.cnp.toLocaleLowerCase().match(_this.cnp1.toLocaleLowerCase());
            });
        }
        else if (this.cnp1 == "") {
            this.ngOnInit();
        }
    };
    DoctorComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DoctorComponent.prototype.getData = function () {
        var _this = this;
        this.doctService.doctorSearchAll().subscribe(function (res) {
            _this.rows = res;
        });
    };
    DoctorComponent.prototype.delete1 = function (j) {
        var _this = this;
        this.doctService.deleteData(j).subscribe(function (res) {
            _this.getData();
            console.log("delete");
            location.reload();
        });
    };
    DoctorComponent.prototype.deleteWithModal = function (j) {
        console.log(j);
        var modalRef = this.modalService.open(modal_confirm_component_1.ModalConfirmComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
                //   this.doctService.deleteData(j).subscribe(res=>
                // {
                //     this.getData()
                //     console.log("delete");
                //   // location.reload();
                // })
            }
        });
    };
    DoctorComponent.prototype.updateWithModal = function (j) {
        console.log(j);
        var modalRef = this.modalService.open(modal_update_component_1.ModalUpdateComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
                //   this.doctService.deleteData(j).subscribe(res=>
                // {
                //     this.getData()
                //     console.log("delete");
                //   // location.reload();
                // })
            }
        });
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], DoctorComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], DoctorComponent.prototype, "sort");
    DoctorComponent = __decorate([
        core_1.Component({
            selector: 'app-doctor',
            templateUrl: './doctor.component.html',
            styleUrls: ['./doctor.component.scss']
        })
    ], DoctorComponent);
    return DoctorComponent;
}());
exports.DoctorComponent = DoctorComponent;
