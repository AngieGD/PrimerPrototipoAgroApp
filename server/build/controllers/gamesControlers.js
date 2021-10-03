"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // connection.query('DESCRIBE games');
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
            //pool.query('DESCRIBE games')
            //res.json('listing games')
        });
    }
    oneGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games WHERE id = ? ', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The game doesn't exist " });
            console.log(games);
        });
    }
    //Metodo para crear un juego
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            //console.log(req.body); //Cuando angular envie datos va a ser por medio de este req.body
            res.json({ message: 'game saved' });
            //Crear consulta
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            yield res.json({ text: `deleting a game ${req.params.id}` });
            res.json({ message: 'The game was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE games set ? WHERE id = ? ', [req.body, id]);
            //res.json({text:`update a game ${req.params.id}`})
            res.json({ message: 'The Game was Update' });
        });
    }
}
;
const indexGameControler = new IndexgameControler();
//se exporta la instancia
exports.default = indexGameControler;
