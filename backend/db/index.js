const { Pool } = require('pg'); // Importing the Pool class from the 'pg'(postgres) library

// Creating a new Pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'customer_data',
  password: 'Hemu@11848',
  port: 5432, 
});


module.exports = pool; // exporting the pool instance
