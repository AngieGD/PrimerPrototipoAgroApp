//import {createPool} from 'promise-mysql';
//import keys from '../keys';
//const connection = createPool(keys.database);
import pool from '../database';
import {Request , Response } from 'express';

// traer conexión 
   
//const connect  = require('../database');
class IndexgameControler {
    public async list (req:Request , res:Response) {
       // connection.query('DESCRIBE games');
        const games = await pool.query('SELECT * FROM games')
        res.json(games);
        //pool.query('DESCRIBE games')
        //res.json('listing games')
    }

    public async oneGame(req:Request , res:Response): Promise<any>{
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ? ' , [id]);
        if(games.length > 0){
            return res.json(games[0])
        }
        res.status(404).json({text: "The game doesn't exist "});
        console.log(games);
    }

    //Metodo para crear un juego
    public async create (req:Request , res:Response){  //Las consultas a la base de datos son eventos asincronos, por eso se pone async
        await pool.query('INSERT INTO games set ?' , [req.body]);
        //console.log(req.body); //Cuando angular envie datos va a ser por medio de este req.body
        res.json({message: 'game saved'});
        //Crear consulta
    }

    public async delete (req:Request , res:Response) : Promise<void>{
        const {id} = req.params
        pool.query('DELETE FROM games WHERE id = ?' , [id]);
        await res.json({text: `deleting a game ${req.params.id}`});
        res.json({message : 'The game was deleted'});

    }

    public async update (req:Request , res:Response): Promise<void>{
        const{id} = req.params;
        await pool.query('UPDATE games set ? WHERE id = ? ' , [req.body , id]);
        //res.json({text:`update a game ${req.params.id}`})
        res.json({message: 'The Game was Update'});

    }
};

const indexGameControler = new IndexgameControler();
//se exporta la instancia
export default indexGameControler;

