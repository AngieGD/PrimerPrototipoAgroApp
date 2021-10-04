import pool from '../database';
import {Request , response, Response } from 'express';

class Mantenimientocontrolers {
    public async listar (req:Request , res:Response ){
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos')
        console.log(mantenimiento)

        
        res.json(mantenimiento)
        
    }

    public async crear (req:Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO mantenimentos set ?' , [req.body]);
        res.json({message: 'mantenimentos agregado'})
        console.log(req.body)
    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos WHERE idmantenimentos= ?' , [id])
        if (mantenimiento.length > 0){
            return res.json(mantenimiento[0])
        } else{
        res.status(404).json({text: "mantenimento no encontrado"})
        }
        

    }

    public async editar (req:Request , res:Response): Promise<void>{
        const{id} = req.params
        await pool.query('UPDATE mantenimentos set ? WHERE idmantenimentos = ?' , [req.body , id])

        res.json({message: 'El mantenimento fue editado'})

    }

    public async eliminar (req:Request , res:Response) : Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM mantenimentos WHERE idmantenimentos = ?' , [id]);
        res.json({text: `mantenimentos eliminado eliminado ${req.params.id}`});
        

    }

}


const mantenimientocontrolers = new Mantenimientocontrolers();
export default mantenimientocontrolers;

