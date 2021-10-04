import { Router } from "express";
import subterrenocontrolers from '../controllers/subterrenoscontrolers';




class Subterrenoroutes {
    public router:Router = Router();
    constructor() {
        this.config();

    }

    config(): void {

        this.router.post('/' , subterrenocontrolers.crear);
        this.router.get('/', subterrenocontrolers.listar);
        this.router.get('/:id', subterrenocontrolers.listarUno);
        this.router.put('/:id', subterrenocontrolers.editar);
        this.router.delete('/:id', subterrenocontrolers.eliminar);
              

    }
    
}

const subterrenoroute = new Subterrenoroutes();
export default subterrenoroute.router;