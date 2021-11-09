"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacionesBasicas = void 0;
var OperacionesBasicas = /** @class */ (function () {
    function OperacionesBasicas(numeroUno, numeroDos) {
        this.numUno = numeroUno;
        this.numDos = numeroDos;
    }
    OperacionesBasicas.prototype.sumar = function () {
        return this.numUno + this.numDos;
    };
    OperacionesBasicas.prototype.restar = function () {
        return this.numUno - this.numDos;
    };
    OperacionesBasicas.prototype.multiplicar = function () {
        return this.numUno * this.numDos;
    };
    OperacionesBasicas.prototype.dividir = function () {
        return this.numUno / this.numDos;
    };
    return OperacionesBasicas;
}());
exports.OperacionesBasicas = OperacionesBasicas;
