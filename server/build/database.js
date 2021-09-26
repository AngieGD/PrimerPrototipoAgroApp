"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = require("promise-mysql");
const keys_1 = __importDefault(require("./keys"));
/* export async function connect(){
    const connection = createPool(keys.database);
    console.log('BD is connected');
    return connection;
} */
const connect = () => {
    const connection = promise_mysql_1.createPool(keys_1.default.database);
    console.log('BD is connected');
    return connection;
};
exports.default = connect();
/* // la constante llamada pool, es la manera de iniciar la coneción
const pool = mysql.createPool(keys.database)
//Aqui inicio la conexion
pool.getConnection()
    .then(connection => { //Si existe la conexión realicela
        pool.releaseConnection(connection);
        console.log('BD is connected');
    });
export default pool; */ 
