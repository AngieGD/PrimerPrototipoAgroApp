import { Router } from "express";
import facturasControllers from "../controllers/facturasControllers";

class FacturasRoutes {
    public router:Router= Router();
    constructor() {
        
        this.config();
    }
    config(): void { //definir ruta inicial
        this.router.get('/' , facturasControllers.listar);
        this.router.get('/:id', facturasControllers.listarUno);

    }
}

const facturasRoutes = new FacturasRoutes();
export default facturasRoutes.router;