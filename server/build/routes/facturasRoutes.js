"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturasControllers_1 = __importDefault(require("../controllers/facturasControllers"));
class FacturasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', facturasControllers_1.default.listar);
        this.router.get('/:id', facturasControllers_1.default.listarUno);
    }
}
const facturasRoutes = new FacturasRoutes();
exports.default = facturasRoutes.router;
