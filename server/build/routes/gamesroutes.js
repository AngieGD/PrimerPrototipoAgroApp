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
        this.router.get('/', gamesControlers_1.default.list); //listar todos los juegos
        this.router.get('/:id', gamesControlers_1.default.oneGame);
        this.router.post('/', gamesControlers_1.default.create); //se utiliza para enviar datos
        this.router.delete('/:id', gamesControlers_1.default.delete); //ruta para eliminar, lo hace por medio del id
        this.router.put('/:id', gamesControlers_1.default.update);
    }
}
const gameRoute = new GameRoutes(); //Aqui se ejecuta todo
exports.default = gameRoute.router;
///Con lo anterior ya está lindo el enrutador 
