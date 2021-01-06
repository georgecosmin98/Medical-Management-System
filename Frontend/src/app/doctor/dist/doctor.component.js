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
var DoctorComponent = /** @class */ (function () {
    function DoctorComponent(formBuilder, doctService, router, modalService) {
        this.formBuilder = formBuilder;
        this.doctService = doctService;
        this.router = router;
        this.modalService = modalService;
        this.form = {};
        this.displayedColumns = ['id', 'fullName', 'emailAddress', 'phoneNumber', 'department', 'specialization', 'salary'];
        this.user = {
            fullName: '',
            emailAddress: '',
            phoneNumber: '',
            department: '',
            specialization: '',
            salary: ''
        };
    }
    DoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
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
<<<<<<< HEAD
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
=======
        location.reload();
>>>>>>> 68ccd4840456473ef0ff90e60955e383d740171f
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
