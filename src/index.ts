//console.log('Esto funciona')
import indexRoute from './routes/indexRoutes';
import express, {Application} from 'express'


class Server { //Clase que iniciará el servidor
    public app:Application;
    constructor(){ //constructor inicializa 
        this.app = express();
        this.config();
        this.route();

    }

    config():void { //configura la propiedad app
        this.app.set('Port' , process.env.PORT || 3000); //VERIFICAMOS QUE EL PUERTO ESTE LIBRE 
    }

    route():void { //va a configurar las rutas de App


    }
    star():void{
        this.app.listen(this.app.get('Port'))
        console.log( `Server on port ${this.app.get('Port')}` )
    }//inicializar servidor



}

const server = new Server();

server.star()