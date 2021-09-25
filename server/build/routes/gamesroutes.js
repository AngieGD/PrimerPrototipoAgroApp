"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Game'));
    }
}
const gameRoute = new GameRoutes(); //Aqui se ejecuta todo
exports.default = gameRoute.router;
///Con lo anterior ya está lindo el enrutador 
