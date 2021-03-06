import pool from "../database";
import {Request ,  Response } from 'express';


class MantenimientoMNsubteControlers {
    public async listar (req:Request , res:Response ){
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos_has_subterreno')
        console.log(mantenimiento)

        
        res.json(mantenimiento)
        
    }

    public async crear (req:Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO mantenimentos_has_subterreno set ?' , [req.body]);
        res.json({message: 'mantenimentos  mn agregado'})
        console.log(req.body)
    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const mantenimiento = await pool.query('SELECT * FROM mantenimentos_has_subterreno WHERE iD_mantenimentos_subterrenocol= ?' , [id])
        if (mantenimiento.length > 0){
            return res.json(mantenimiento[0])
        } else{
        res.status(404).json({text: "mantenimento mn no encontrado"})
        }
        

    }

    public async editar (req:Request , res:Response): Promise<void>{
        const{id} = req.params
        await pool.query('UPDATE mantenimentos_has_subterreno set ? WHERE iD_mantenimentos_subterrenocol = ?' , [req.body , id])

        res.json({message: 'El mantenimento mn fue editado'})

    }

    public async eliminar (req:Request , res:Response) : Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM mantenimentos_has_subterreno WHERE iD_mantenimentos_subterrenocol = ?' , [id]);
        res.json({text: `mantenimentos mn  eliminado ${req.params.id}`});
        

    }

    
}

const manteniMNsubtcontrolers = new MantenimientoMNsubteControlers();
export default manteniMNsubtcontrolers;