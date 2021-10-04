"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const manteMNsubterrControlers_1 = __importDefault(require("../controllers/manteMNsubterrControlers"));
class MantenimientoMNsubteRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', manteMNsubterrControlers_1.default.crear);
        this.router.get('/', manteMNsubterrControlers_1.default.listar);
        this.router.get('/:id', manteMNsubterrControlers_1.default.listarUno);
        this.router.put('/:id', manteMNsubterrControlers_1.default.editar);
        this.router.delete('/:id', manteMNsubterrControlers_1.default.eliminar);
    }
}
const mantenimientoMNsubteRoutes = new MantenimientoMNsubteRoute();
exports.default = mantenimientoMNsubteRoutes.router;
