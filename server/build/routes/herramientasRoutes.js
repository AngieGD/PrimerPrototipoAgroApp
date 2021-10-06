"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HerramientasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
    }
}
const herramienasRoutes = new HerramientasRoutes();
exports.default = herramienasRoutes.router;
