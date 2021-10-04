import pool from '../database';
import {Request , response, Response } from 'express';


class TrabajadorControlers {


    public async listar (req:Request , res:Response ){
        const traba = await pool.query('SELECT * FROM trabajador')
        res.json(traba)
        
        res.json('Listar trabajadores')
        
    }

    public async crear (req:Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO trabajador set ?' , [req.body]);
        res.json({message: 'Trabajador agregado'})
        console.log(req.body)
    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const trabajador = await pool.query('SELECT * FROM trabajador WHERE trabajadorId = ?' , [id])
        if (trabajador.length > 0){
            return res.json(trabajador[0])
        }
        res.status(404).json({text: "El trabajador no existe"})
        

    }

    public async editar (req:Request , res:Response): Promise<void>{
        const{id} = req.params
        await pool.query('UPDATE trabajador set ? WHERE trabajadorId = ?' , [req.body , id])

        res.json({message: 'El trabajador fue editado'})

    }

    public async eliminar (req:Request , res:Response) : Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM trabajador WHERE trabajadorId = ?' , [id]);
        res.json({text: `Trabajador eliminado ${req.params.id}`});
        

    }
};

//Creo objeto de la clase y lo exporto
const trabajadorcontrolers = new TrabajadorControlers();
export default trabajadorcontrolers;
