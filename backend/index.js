
const express = require('express');    // Importing the express library/module

const app = express();   // instance of express application

const db = require("./db")   // importing db module for database operations

const PORT = process.env.PORT || 5000;  // setting up port number for server (5001 if environment variables are not set)

const customerRoutes = require('./routes/customers'); // import routes for handling customer requests

const cors = require('cors');  // importing CORS middle-ware for CROSS-ORIGIN-RESOURCE-SHARING

app.use(cors()); // Adding CORS to EXPRESS application

app.use(express.json()); // Adding middle-ware to parse JSON bodies of incoming requests

app.use('/api/customers', customerRoutes);  // Mounting the customer routes to handle requests starting with '/api/customers'

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // starting the server on specified port 
