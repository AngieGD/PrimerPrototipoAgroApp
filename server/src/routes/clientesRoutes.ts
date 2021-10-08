import { Router } from "express";
import clientesControllers from "../controllers/clientesControllers";

class ClientesRoutes {
    public router:Router = Router();
    constructor(){
        this.config()
    }

    config():void {
        this.router.get('/' , clientesControllers.listar);
        this.router.get('/:id' , clientesControllers.listarUno);


        
    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;