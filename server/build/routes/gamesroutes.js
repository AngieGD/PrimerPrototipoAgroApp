"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControlers_1 = __importDefault(require("../controllers/gamesControlers"));
class GameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControlers_1.default.index);
    }
}
const gameRoute = new GameRoutes(); //Aqui se ejecuta todo
exports.default = gameRoute.router;
///Con lo anterior ya está lindo el enrutador 
