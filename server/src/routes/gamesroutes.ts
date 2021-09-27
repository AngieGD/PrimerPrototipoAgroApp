import {Router} from 'express';
import indexGameControler from '../controllers/gamesControlers'
class GameRoutes{
    public router:Router= Router();
    constructor() {
        
        this.config();
    }

    config(): void { //definir ruta inicial
        this.router.get('/' , indexGameControler.list); //listar todos los juegos
        this.router.get('/:id' , indexGameControler.oneGame);
        this.router.post('/' , indexGameControler.create); //se utiliza para enviar datos
        this.router.delete('/:id' , indexGameControler.delete);  //ruta para eliminar, lo hace por medio del id
        this.router.put('/:id' , indexGameControler.update); 
    }

}

const gameRoute = new GameRoutes(); //Aqui se ejecuta todo
export default gameRoute.router;


///Con lo anterior ya está lindo el enrutador 