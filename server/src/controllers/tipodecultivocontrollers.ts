import pool from "../database";
import { Request , Response } from "express";

class Tipocultivocontrollers {
    public async listar (req:Request , res:Response) {

        const tcultivos = await pool.query('SELECT * FROM tipo_cultivos')
        res.json(tcultivos);

    }


    public async crear (req:Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO tipo_cultivos set ?' , [req.body]);
        res.json({message: 'Cultivo agregado agregado'})
        console.log(req.body)
    }


    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const tcultivo = await pool.query('SELECT * FROM tipo_cultivos WHERE idtipo_cultivos = ?' , [id])
        if (tcultivo.length > 0){
            return res.json(tcultivo[0])
        }
        res.status(404).json({text: "El cultivo no esta en el sistema"})
        

    }
    public async editar (req:Request , res:Response): Promise<void>{
        const{id} = req.params
        await pool.query('UPDATE tipo_cultivos set ? WHERE idtipo_cultivos = ?' , [req.body , id])

        res.json({message: 'El cultivo fue editado'})

    }

    public async eliminar (req:Request , res:Response) : Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM tipo_cultivos WHERE idtipo_cultivos = ?' , [id]);
        res.json({text: `Cultivo eliminado eliminado ${req.params.id}`});
        

    }    

}

const tipocultivocontrollers = new Tipocultivocontrollers();
export default tipocultivocontrollers;