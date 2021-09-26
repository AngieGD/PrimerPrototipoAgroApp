"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = require("promise-mysql");
const keys_1 = __importDefault(require("../keys"));
const connection = promise_mysql_1.createPool(keys_1.default.database);
// traer conexión 
//const connect  = require('../database');
class IndexgameControler {
    index(req, res) {
        connection.query('DESCRIBE games');
        res.json('games');
    }
}
;
const indexGameControler = new IndexgameControler();
//se exporta la instancia
exports.default = indexGameControler;
