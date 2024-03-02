
const express = require('express');  // Importing the express library

const router = express.Router(); // Creating an instance of the Express router

const { getCustomers } = require('../controllers/customers'); // Importing the controller function for handling GET requests for customers

router.get('/', getCustomers);  // Defining a route for handling GET requests to the root endpoint ('/')

module.exports = router;  // exporting the router module, so to be imported by other modules
