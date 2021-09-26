//import {createPool} from 'promise-mysql';
//import keys from '../keys';
//const connection = createPool(keys.database);
import pool from '../database';
import {Request , Response } from 'express';

// traer conexión 
   
//const connect  = require('../database');
class IndexgameControler {
    public index (req:Request , res:Response) {
       // connection.query('DESCRIBE games');

        pool.query('DESCRIBE games')
        res.json('games')


    }
};

const indexGameControler = new IndexgameControler();
//se exporta la instancia
export default indexGameControler;

