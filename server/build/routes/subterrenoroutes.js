"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subterrenoscontrolers_1 = __importDefault(require("../controllers/subterrenoscontrolers"));
class Subterrenoroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', subterrenoscontrolers_1.default.crear);
        this.router.get('/', subterrenoscontrolers_1.default.listar);
        this.router.get('/:id', subterrenoscontrolers_1.default.listarUno);
        this.router.put('/:id', subterrenoscontrolers_1.default.editar);
        this.router.delete('/:id', subterrenoscontrolers_1.default.eliminar);
    }
}
const subterrenoroute = new Subterrenoroutes();
exports.default = subterrenoroute.router;
