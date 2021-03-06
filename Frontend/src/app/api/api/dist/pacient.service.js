"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PacientService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var encoder_1 = require("../encoder");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var PacientService = /** @class */ (function () {
    function PacientService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8080';
        this.defaultHeaders = new http_1.HttpHeaders();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PacientService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PacientService.prototype.addPacient = function (body, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling add.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/patient/addPatient", body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PacientService.prototype.pacientSearchAll = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/patient/listOfPatient", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PacientService.prototype.deleteData = function (id) {
        var _this = this;
        return this.httpClient["delete"](this.basePath + "/patient/deletePatient/" + encodeURIComponent(String(id)))
            .map(function (res) {
            _this.rows;
        });
    };
    PacientService.prototype.updatePacient = function (id, body, observe, reportProgress) {
        var _this = this;
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }
        var headers = this.defaultHeaders;
        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/xml',
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/x-www-form-urlencoded'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var formParams;
        var useForm = false;
        var convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        }
        else {
            formParams = new http_1.HttpParams({ encoder: new encoder_1.CustomHttpUrlEncodingCodec() });
        }
        return this.httpClient.put(this.basePath + "/patient/updatePatient/" + encodeURIComponent(String(id)), body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(function (res) {
            _this.rows;
        });
    };
    PacientService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
    ], PacientService);
    return PacientService;
}());
exports.PacientService = PacientService;
