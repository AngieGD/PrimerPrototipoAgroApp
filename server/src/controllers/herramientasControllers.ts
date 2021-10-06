import pool from "../database";
import { Request , Response } from "express";


class HerramientasControllers {
    public async crear (req:Request , res:Response) {

        const herramienta = await pool.query('SELECT * FROM herramientas')
        res.json(herramienta);

    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const herramienta = await pool.query('SELECT * FROM herramientas WHERE insu_id = ?' , [id])
        if (herramienta.length > 0){
            return res.json(herramienta[0])
        }
        res.status(404).json({text: "El insumo no esta disponible"})
        

    }

}

const herramientasControllers = new HerramientasControllers();
export default herramientasControllers;