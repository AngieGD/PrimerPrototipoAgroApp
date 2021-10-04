"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const terrenosControlers_1 = __importDefault(require("../controllers/terrenosControlers"));
class Terrenosroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', terrenosControlers_1.default.crear);
        this.router.get('/', terrenosControlers_1.default.listar);
        this.router.get('/:id', terrenosControlers_1.default.listarUno);
        this.router.put('/:id', terrenosControlers_1.default.editar);
        this.router.delete('/:id', terrenosControlers_1.default.eliminar);
    }
}
const terrenoroute = new Terrenosroutes();
exports.default = terrenoroute.router;
