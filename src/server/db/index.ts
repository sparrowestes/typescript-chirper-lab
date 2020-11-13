import * as mysql from 'mysql';
import chirps from './chirps';


// SQL Connection
export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'password123',
    database: 'chirpr'
});

// Makes all queries to the database
export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject (err);
            // console.log('sql connected');
            return resolve(results);
        })
    });
};

export default {
    chirps
}