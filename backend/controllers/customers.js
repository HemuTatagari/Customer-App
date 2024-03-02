
const pool = require('../db'); // importing db pool instance 

const getCustomers = async (req, res) => {
  try {

    // Destructing sortBy and searchTerm parameters from the request.
    let { sortBy, searchTerm } = req.query;

    // constructing the base query
    let query = `
      SELECT *,
             TO_CHAR(created_at, 'YYYY-MM-DD') AS date,
             TO_CHAR(created_at, 'HH24:MI:SS') AS time
      FROM customers
    `;

    let conditions = [];
    if (searchTerm) {
      conditions.push(`LOWER(customer_name) LIKE LOWER('%${searchTerm}%') OR LOWER(location) LIKE LOWER('%${searchTerm}%')`);
    }

    // adding search filter to the base query
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    // addng sort filter to the base query 
    if (sortBy === 'date') {
      query += ` ORDER BY created_at::date`;
    } else if (sortBy === 'time') {
      query += ` ORDER BY created_at::time`;
    }
    
    // Executing the query using the database pool and storing the result
    const customers = await pool.query(query);

    // sending retrieved customers result as response 
    res.json(customers.rows);

  } catch (error) {

    // Handling errors
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // sending 500  Internal server error status with a JSON object
  }
};


// exporting module
module.exports = {
  getCustomers,
};

