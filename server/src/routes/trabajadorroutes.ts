import { Router } from "express";
import trabajadorcontroler from "../controllers/trabajadorControlers";

 class TrabajadorRoutes {
     //creo entidad tipo Router 
     public router:Router = Router();
     constructor() {
         this.config();

     }

     config(): void {
         this.router.get('/' , trabajadorcontroler.listar);
         this.router.post('/' , trabajadorcontroler.crear);
         this.router.put('/:id', trabajadorcontroler.editar);
         this.router.get('/:id', trabajadorcontroler.listarUno);
         this.router.delete('/:id' , trabajadorcontroler.eliminar);


     }
 }

const trabajadorroute = new TrabajadorRoutes();
export default trabajadorroute.router; 