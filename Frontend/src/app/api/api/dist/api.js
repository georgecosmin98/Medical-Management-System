"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.APIS1 = exports.APIS = void 0;
__exportStar(require("./doctor.service"), exports);
var doctor_service_1 = require("./doctor.service");
exports.APIS = [doctor_service_1.DoctorService];
__exportStar(require("./pacient.service"), exports);
var pacient_service_1 = require("./pacient.service");
exports.APIS1 = [pacient_service_1.PacientService];
