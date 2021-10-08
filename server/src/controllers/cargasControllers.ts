import pool from "../database";
import { Request , Response } from "express";


class CargasControllers {

    public async listar (req:Request , res:Response) {

        const herramienta = await pool.query('SELECT * FROM cargas')
        res.json(herramienta);

    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const herramienta = await pool.query('SELECT * FROM cargas WHERE idcargas = ?' , [id])
        if (herramienta.length > 0){
            return res.json(herramienta[0])
        }
        res.status(404).json({text: "CARGA NO EXISTE"})
        

    }

}

const  cargascontrollers = new CargasControllers();
export default cargascontrollers;