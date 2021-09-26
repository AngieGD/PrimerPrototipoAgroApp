"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexControler.index);
    }
}
const indexRoute = new IndexRoutes(); //Aqui se ejecuta todo
exports.default = indexRoute.router;
///Con lo anterior ya está lindo el enrutador 
