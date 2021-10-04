"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mantenimentoControlers_1 = __importDefault(require("../controllers/mantenimentoControlers"));
class MantenientosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', mantenimentoControlers_1.default.crear);
        this.router.get('/', mantenimentoControlers_1.default.listar);
        this.router.get('/:id', mantenimentoControlers_1.default.listarUno);
        this.router.put('/:id', mantenimentoControlers_1.default.editar);
        this.router.delete('/:id', mantenimentoControlers_1.default.eliminar);
    }
}
;
const mantenimientoroutes = new MantenientosRoutes();
exports.default = mantenimientoroutes.router;
