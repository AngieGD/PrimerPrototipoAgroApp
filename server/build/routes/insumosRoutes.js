"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const insumosControllers_1 = __importDefault(require("../controllers/insumosControllers"));
class InsumesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', insumosControllers_1.default.crear);
        this.router.get('/:id', insumosControllers_1.default.listarUno);
    }
}
const insumesRoutes = new InsumesRoutes();
exports.default = insumesRoutes.router;
