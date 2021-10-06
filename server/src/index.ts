console.log('Esto funciona')
import indexRoute from './routes/indexRoutes';
import trabajadorroute from './routes/trabajadorroutes';
import terrenosroutes from './routes/terrenosroutes';
import express, {Application, urlencoded} from 'express'
import morgan from 'morgan';
import cors from 'cors'
import subterrenoroute from './routes/subterrenoroutes';
import mantenimientoMNsubteRoutes from './routes/manteMNsubterrroutes';
import mantenimientoroutes from './routes/mantenimientosroutes';
import insumesRoutes from './routes/insumosRoutes';
import herramientasRoutes from './routes/herramientasRoutes';



class Server { //Clase que iniciará el servidor
    public app:Application;
    constructor(){ //constructor inicializa 
        this.app = express();
        this.config();
        this.route();

    }

    config():void { //configura la propiedad app
        this.app.set('Port' , process.env.PORT || 3000); //VERIFICAMOS QUE EL PUERTO ESTE LIBRE 
        this.app.use(morgan('dev')); //Así puedo ver lo que piden los clientes
        this.app.use(cors()); //Con esta parte angular puede pedir los datos al servidor 
        this.app.use(express.json()); //este metodo hace que se acepten formatos json 
        this.app.use(express.urlencoded({extended: false})); //es para enviar desde un formulario html

    }

    route():void { //va a configurar las rutas de App
        this.app.use('/',indexRoute)      

        this.app.use('/api/trabajador', trabajadorroute);
        this.app.use('/api/terrenos', terrenosroutes);
        this.app.use('/api/subterreno', subterrenoroute);
        this.app.use('/api/mantenimiento' , mantenimientoroutes);
        this.app.use('/api/mantemnsubte' , mantenimientoMNsubteRoutes);
        this.app.use('/api/insumos' , insumesRoutes) //Solo tiene get
        this.app.use('/api/herramientas' , herramientasRoutes) //Solo tiene get

    }
    star():void{
        this.app.listen(this.app.get('Port'))
        console.log( `Server on port ${this.app.get('Port')}` )
    }//inicializar servidor



}

const server = new Server();

server.star()