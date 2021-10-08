import { Router } from "express";
import cargascontrollers from "../controllers/cargasControllers";


class CargasRoute {
    public router:Router = Router();
    constructor(){
        this.config()
    }


    config():void {
        this.router.get('/' , cargascontrollers.listar);
        this.router.get('/:id', cargascontrollers.listarUno);

   
    }
}

const cargasroute = new CargasRoute();
export default cargasroute.router;