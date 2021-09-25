import {Router} from 'express';

class GameRoutes{
    public router:Router= Router();
    constructor() {
        
        this.config();
    }

    config(): void { //definir ruta inicial
        this.router.get('/' , (req , res) => res.send('Game'))

    }

}

const gameRoute = new GameRoutes(); //Aqui se ejecuta todo
export default gameRoute.router;


///Con lo anterior ya está lindo el enrutador 