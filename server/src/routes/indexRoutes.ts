import {Router} from 'express';

class IndexRoutes{
    public router:Router= Router();
    constructor() {
        
        this.config();
    }

    config(): void { //definir ruta inicial
        this.router.get('/' , (req , res) => res.send('HOLIS'))

    }

}

const indexRoute = new IndexRoutes(); //Aqui se ejecuta todo
export default indexRoute.router;


///Con lo anterior ya está lindo el enrutador 