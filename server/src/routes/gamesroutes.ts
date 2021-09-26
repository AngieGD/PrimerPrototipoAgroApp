import {Router} from 'express';
import indexGameControler from '../controllers/gamesControlers'
class GameRoutes{
    public router:Router= Router();
    constructor() {
        
        this.config();
    }

    config(): void { //definir ruta inicial
        this.router.get('/' , indexGameControler.index)

    }

}

const gameRoute = new GameRoutes(); //Aqui se ejecuta todo
export default gameRoute.router;


///Con lo anterior ya está lindo el enrutador 