import {db} from '../db/connection.js';

export async function createTable( ) {
    await db.sync()
        .then(() => console.log('Conectado al Servidor'))
        .catch(error => console.log(error));
}
