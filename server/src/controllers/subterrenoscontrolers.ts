import pool from '../database';
import {Request , response, Response } from 'express';
 class SubterrenosControlers {

    public async listar (req:Request , res:Response ){
        const terreno = await pool.query('SELECT * FROM subterreno')
        console.log(req.body)
        res.json(terreno)
        
        res.json('Subterreno listado')
        
    }

    public async crear (req:Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO subterreno set ?' , [req.body]);
        res.json({message: 'Suberreno agregado'})
        console.log(req.body)
    }

    public async listarUno (req:Request , res:Response): Promise<any>{
        const{id} = req.params
        const terreno = await pool.query('SELECT * FROM subterreno WHERE idsubterreno = ?' , [id])
        if (terreno.length > 0){
            return res.json(terreno[0])
        } else{
        res.status(404).json({text: "Subterreno no encontrado"})
        }
        

    }

    public async editar (req:Request , res:Response): Promise<void>{
        const{id} = req.params
        await pool.query('UPDATE subterreno set ? WHERE idsubterreno  = ?' , [req.body , id])

        res.json({message: 'El Subterreno fue editado'})

    }

    public async eliminar (req:Request , res:Response) : Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM subterreno WHERE idsubterreno = ?' , [id]);
        res.json({text: `Subterreno eliminado eliminado ${req.params.id}`});
        

    }    


 };

 const subterrenocontrolers = new SubterrenosControlers();
 export default subterrenocontrolers;
 