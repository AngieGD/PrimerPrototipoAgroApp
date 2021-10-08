import pool from "../database";
import { Request , Response } from "express";

class ClientesControllers {
    public async listar (req:Request , res:Response) {

        const insumos = await pool.query('SELECT * FROM clientes')
        res.json(insumos);

    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const insumo = await pool.query('SELECT * FROM clientes WHERE idcliente = ?' , [id])
        if (insumo.length > 0){
            return res.json(insumo[0])
        }
        res.status(404).json({text: "Factura no disponible"})
        

    }       

}

const clientesControllers = new ClientesControllers();
export default clientesControllers;