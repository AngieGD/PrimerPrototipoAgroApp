"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('HOLIS'));
    }
}
const indexRoute = new IndexRoutes(); //Aqui se ejecuta todo
exports.default = indexRoute.router;
///Con lo anterior ya está lindo el enrutador 
