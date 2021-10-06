"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Esto funciona');
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const trabajadorroutes_1 = __importDefault(require("./routes/trabajadorroutes"));
const terrenosroutes_1 = __importDefault(require("./routes/terrenosroutes"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const subterrenoroutes_1 = __importDefault(require("./routes/subterrenoroutes"));
const manteMNsubterrroutes_1 = __importDefault(require("./routes/manteMNsubterrroutes"));
const mantenimientosroutes_1 = __importDefault(require("./routes/mantenimientosroutes"));
const insumosRoutes_1 = __importDefault(require("./routes/insumosRoutes"));
const herramientasRoutes_1 = __importDefault(require("./routes/herramientasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.route();
    }
    config() {
        this.app.set('Port', process.env.PORT || 3000); //VERIFICAMOS QUE EL PUERTO ESTE LIBRE 
        this.app.use(morgan_1.default('dev')); //Así puedo ver lo que piden los clientes
        this.app.use(cors_1.default()); //Con esta parte angular puede pedir los datos al servidor 
        this.app.use(express_1.default.json()); //este metodo hace que se acepten formatos json 
        this.app.use(express_1.default.urlencoded({ extended: false })); //es para enviar desde un formulario html
    }
    route() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/trabajador', trabajadorroutes_1.default);
        this.app.use('/api/terrenos', terrenosroutes_1.default);
        this.app.use('/api/subterreno', subterrenoroutes_1.default);
        this.app.use('/api/mantenimiento', mantenimientosroutes_1.default);
        this.app.use('/api/mantemnsubte', manteMNsubterrroutes_1.default);
        this.app.use('/api/insumos', insumosRoutes_1.default); //Solo tiene get
        this.app.use('/api/herramientas', herramientasRoutes_1.default); //Solo tiene get
    }
    star() {
        this.app.listen(this.app.get('Port'));
        console.log(`Server on port ${this.app.get('Port')}`);
    } //inicializar servidor
}
const server = new Server();
server.star();
