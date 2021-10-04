import pool from '../database';
import {Request , response, Response } from 'express';

class TerrenosControlers {
    public async listar (req:Request , res:Response ){
        const terreno = await pool.query('SELECT * FROM terrenos')
        console.log(req.body)
        res.json(terreno)
        
        res.json('Terreno listado')
        
    }

    public async crear (req:Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO terrenos set ?' , [req.body]);
        res.json({message: 'Terreno agregado'})
        console.log(req.body)
    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const terreno = await pool.query('SELECT * FROM terrenos WHERE idterrenos= ?' , [id])
        if (terreno.length > 0){
            return res.json(terreno[0])
        }
        res.status(404).json({text: "Terreno no encontrado"})
        

    }

    public async editar (req:Request , res:Response): Promise<void>{
        const{id} = req.params
        await pool.query('UPDATE trabajador set ? WHERE trabajadorId = ?' , [req.body , id])

        res.json({message: 'El trabajador fue editado'})

    }


};

const terrenocontrolers = new TerrenosControlers();
export default terrenocontrolers;