"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log('Esto funciona')
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.route();
    }
    config() {
        this.app.set('Port', process.env.PORT || 3000); //VERIFICAMOS QUE EL PUERTO ESTE LIBRE 
    }
    route() {
        this.app.use(indexRoutes_1.default);
    }
    star() {
        this.app.listen(this.app.get('Port'));
        console.log(`Server on port ${this.app.get('Port')}`);
    } //inicializar servidor
}
const server = new Server();
server.star();
