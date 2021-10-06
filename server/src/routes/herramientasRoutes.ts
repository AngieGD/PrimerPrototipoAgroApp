import { Router } from "express";
import herramientasControllers from "../controllers/herramientasControllers";


class HerramientasRoutes {
    public router:Router = Router();
    constructor(){
        this.config()
    }

    config():void {

        
    }
}

const herramienasRoutes = new HerramientasRoutes();
export default herramienasRoutes.router;