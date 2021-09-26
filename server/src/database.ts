import {createPool} from 'promise-mysql';
import keys from './keys';

/* export async function connect(){
    const connection = createPool(keys.database);
    console.log('BD is connected');
    return connection;
} */
const connect = () => {
    const connection = createPool(keys.database);
    console.log('BD is connected');
    
    return connection;
    
}


export default connect();







/* // la constante llamada pool, es la manera de iniciar la coneción 
const pool = mysql.createPool(keys.database)
//Aqui inicio la conexion
pool.getConnection()
    .then(connection => { //Si existe la conexión realicela 
        pool.releaseConnection(connection);
        console.log('BD is connected');
    });
export default pool; */