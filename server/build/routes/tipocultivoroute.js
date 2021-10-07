"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipodecultivocontrollers_1 = __importDefault(require("../controllers/tipodecultivocontrollers"));
class TipocultivoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipodecultivocontrollers_1.default.listar);
        this.router.get('/:id', tipodecultivocontrollers_1.default.listarUno);
        this.router.post('/', tipodecultivocontrollers_1.default.crear);
        this.router.put('/:id', tipodecultivocontrollers_1.default.editar);
        this.router.delete('/:id', tipodecultivocontrollers_1.default.eliminar);
    }
}
const tipocultivoRoute = new TipocultivoRouter();
exports.default = tipocultivoRoute.router;
