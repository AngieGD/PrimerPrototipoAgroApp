"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// traer conexión 
//const connect  = require('../database');
class IndexgameControler {
    list(req, res) {
        // connection.query('DESCRIBE games');
        //pool.query('DESCRIBE games')
        res.json('listing games');
    }
    oneGame(req, res) {
        res.json({ text: `One game ${req.params.id}` });
    }
    //Metodo para crear un juego
    create(req, res) {
        console.log(req.body); //Cuando angular envie datos va a ser por medio de este req.body
        res.json({ text: 'creating a game' });
        //Crear consulta
    }
    delete(req, res) {
        res.json({ text: `deleting a game ${req.params.id}` });
    }
    update(req, res) {
        res.json({ text: `update a game ${req.params.id}` });
    }
}
;
const indexGameControler = new IndexgameControler();
//se exporta la instancia
exports.default = indexGameControler;
