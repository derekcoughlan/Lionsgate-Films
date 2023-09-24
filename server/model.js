const { Pool } = require('pg');
require('dotenv').config();

const PG_URI= process.env.PG_URI;

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('successful query for: ', text);
        return pool.query(text, params, callback);
    }
}

// QUERY TEST:
// pool.query('SELECT * FROM films', (err, result) => {
//     if (err){console.log('error: ', err)}
//     else{console.log(result.rows[0])}
// })