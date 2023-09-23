const { Pool } = require('pg');

const PG_URI='postgres://imxsfupm:fEr5b87xKX7UW3Ra9y1SWbkerjYbbxSI@peanut.db.elephantsql.com/imxsfupm';

const pool = new Pool({
    connectionString: PG_URI
})

pool.query('SELECT * FROM Users', (err, result) => {
    if (err){err: error}
    else{console.log(result.rows)}
})