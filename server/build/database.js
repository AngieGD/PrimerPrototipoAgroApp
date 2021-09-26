"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {createPool} from 'promise-mysql';
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
/* export async function connect(){
    const connection = createPool(keys.database);
    console.log('BD is connected');
    return connection;
} */
/* const connect = () => {
    const connection = createPool(keys.database);
    console.log('BD is connected');
    
    return connection;
    
}


export default connect(); */
// la constante llamada pool, es la manera de iniciar la coneción 
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//Aqui inicio la conexion
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('BD is connected');
});
exports.default = pool;
