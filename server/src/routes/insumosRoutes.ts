import { Router } from "express";
import insumosControllers from "../controllers/insumosControllers";


class InsumesRoutes  {
    public router:Router = Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/' , insumosControllers.crear);
        this.router.get('/:id', insumosControllers.listarUno);

    }
}

const insumesRoutes = new InsumesRoutes();
export default insumesRoutes.router;