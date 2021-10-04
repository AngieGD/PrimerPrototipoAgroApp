"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trabajadorControlers_1 = __importDefault(require("../controllers/trabajadorControlers"));
class TrabajadorRoutes {
    constructor() {
        //creo entidad tipo Router 
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', trabajadorControlers_1.default.listar);
        this.router.post('/', trabajadorControlers_1.default.crear);
        this.router.put('/:id', trabajadorControlers_1.default.editar);
        this.router.get('/:id', trabajadorControlers_1.default.listarUno);
        this.router.delete('/:id', trabajadorControlers_1.default.eliminar);
    }
}
const trabajadorroute = new TrabajadorRoutes();
exports.default = trabajadorroute.router;
