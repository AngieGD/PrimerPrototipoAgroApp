
import { Router } from 'express';
import terrenocontrolers from '../controllers/terrenosControlers';


 class Terrenosroutes {
    public router:Router= Router();
    constructor() {
        
        this.config();
    }

     config(): void {
         this.router.post('/' , terrenocontrolers.crear);
         this.router.get('/', terrenocontrolers.listar);
         this.router.get('/:id', terrenocontrolers.listarUno);
         this.router.put('/:id', terrenocontrolers.editar);
         this.router.delete('/:id', terrenocontrolers.eliminar);
         

     }
 }
 

 const terrenoroute = new Terrenosroutes();
 export default terrenoroute.router;