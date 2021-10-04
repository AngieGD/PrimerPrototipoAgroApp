import { Router } from "express";
import mantenimientocontrolers from '../controllers/mantenimentoControlers';

class MantenientosRoutes {
    public router:Router = Router();
    constructor() {
        this.config();
        

    }
    config(): void {

        this.router.post('/' , mantenimientocontrolers.crear);
        this.router.get('/', mantenimientocontrolers.listar);
        this.router.get('/:id', mantenimientocontrolers.listarUno);
        this.router.put('/:id', mantenimientocontrolers.editar);
        this.router.delete('/:id', mantenimientocontrolers.eliminar);
              

    }



};

const mantenimientoroutes = new MantenientosRoutes();
export default mantenimientoroutes.router;