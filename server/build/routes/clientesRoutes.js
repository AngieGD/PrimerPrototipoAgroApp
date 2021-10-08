"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesControllers_1 = __importDefault(require("../controllers/clientesControllers"));
class ClientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientesControllers_1.default.listar);
        this.router.get('/:id', clientesControllers_1.default.listarUno);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
