import { Router } from "express";

import mantenimientoMNsubteControlers from '../controllers/manteMNsubterrControlers';


class MantenimientoMNsubteRoute {
    public router:Router = Router()
    constructor (){
        this.config()
    }

    config():void {
        this.router.post('/' , mantenimientoMNsubteControlers.crear);
        this.router.get('/', mantenimientoMNsubteControlers.listar);
        this.router.get('/:id', mantenimientoMNsubteControlers.listarUno);
        this.router.put('/:id', mantenimientoMNsubteControlers.editar);
        this.router.delete('/:id', mantenimientoMNsubteControlers.eliminar);
        
    }
}
const mantenimientoMNsubteRoutes = new MantenimientoMNsubteRoute();
export default mantenimientoMNsubteRoutes.router;