import { Router } from "express";
import tipocultivocontrollers from "../controllers/tipodecultivocontrollers";



class TipocultivoRouter {
    public router:Router = Router();
    constructor(){
        this.config()
    }

    config():void {
        this.router.get('/' , tipocultivocontrollers.listar);
        this.router.get('/:id', tipocultivocontrollers.listarUno);
        this.router.post('/', tipocultivocontrollers.crear);
        this.router.put('/:id', tipocultivocontrollers.editar);
        this.router.delete('/:id', tipocultivocontrollers.eliminar);
   
    }
}

const tipocultivoRoute = new TipocultivoRouter()
export default tipocultivoRoute.router;