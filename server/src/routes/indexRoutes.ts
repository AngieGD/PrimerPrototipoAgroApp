import {Router} from 'express';
import {indexControler} from '../controllers/indexControllers'

class IndexRoutes{
    public router:Router= Router();
    constructor() {
        
        this.config();
    }

    config(): void { //definir ruta inicial
        this.router.get('/' , indexControler.index)

    }

}

const indexRoute = new IndexRoutes(); //Aqui se ejecuta todo
export default indexRoute.router;


///Con lo anterior ya está lindo el enrutador 