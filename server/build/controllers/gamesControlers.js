"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {createPool} from 'promise-mysql';
//import keys from '../keys';
//const connection = createPool(keys.database);
const database_1 = __importDefault(require("../database"));
// traer conexión 
//const connect  = require('../database');
class IndexgameControler {
    index(req, res) {
        // connection.query('DESCRIBE games');
        database_1.default.query('DESCRIBE games');
        res.json('games');
    }
}
;
const indexGameControler = new IndexgameControler();
//se exporta la instancia
exports.default = indexGameControler;
