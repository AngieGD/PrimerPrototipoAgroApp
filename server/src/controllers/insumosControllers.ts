import pool from "../database";
import { Request , Response } from "express";

class InsumosControllers {

        public async crear (req:Request , res:Response) {

            const insumos = await pool.query('SELECT * FROM insumos')
            res.json(insumos);

        }

        public async listarUno (req:Request , res:Response): Promise<any>{
            const{id} = req.params
            const insumo = await pool.query('SELECT * FROM insumos WHERE insu_id = ?' , [id])
            if (insumo.length > 0){
                return res.json(insumo[0])
            }
            res.status(404).json({text: "El insumo no esta disponible"})
            
    
        }
}

const insumosControllers = new InsumosControllers()
export default insumosControllers;