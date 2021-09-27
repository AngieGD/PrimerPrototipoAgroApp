//import {createPool} from 'promise-mysql';
//import keys from '../keys';
//const connection = createPool(keys.database);
import pool from '../database';
import {Request , Response } from 'express';

// traer conexión 
   
//const connect  = require('../database');
class IndexgameControler {
    public list (req:Request , res:Response) {
       // connection.query('DESCRIBE games');

        //pool.query('DESCRIBE games')
        res.json('listing games')
    }

    public oneGame(req:Request , res:Response){
        res.json({text: `One game ${req.params.id}`})
    }

    //Metodo para crear un juego
    public create (req:Request , res:Response){
        console.log(req.body); //Cuando angular envie datos va a ser por medio de este req.body
        res.json({text: 'creating a game'});
        //Crear consulta
    }

    public delete (req:Request , res:Response){
        res.json({text: `deleting a game ${req.params.id}`});
    }

    public update (req:Request , res:Response){
        res.json({text:`update a game ${req.params.id}`})
    }
};

const indexGameControler = new IndexgameControler();
//se exporta la instancia
export default indexGameControler;

