"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cargasControllers_1 = __importDefault(require("../controllers/cargasControllers"));
class CargasRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cargasControllers_1.default.listar);
        this.router.get('/:id', cargasControllers_1.default.listarUno);
    }
}
const cargasroute = new CargasRoute();
exports.default = cargasroute.router;
