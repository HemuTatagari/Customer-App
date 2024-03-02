
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';

const App = () => {

  // States declaration 
  const [customers, setCustomers] = useState([]);   //  customers 
  const [loading, setLoading] = useState(false);         // boolean to track wether details are fetched/not
  const [currentPage, setCurrentPage] = useState(1);     // currentPage
  const [customersPerPage] = useState(20);               // customers per page
  const [sortBy, setSortBy] = useState('');              // sort by date/time
  const [searchTerm, setSearchTerm] = useState('');      // search state


  /* use Effect Hook to Fetch the customers matching the current conditions.
     Executes :-
      1. when page gets loaded for the fist time
      2. When the sort state changes
      3. When search state changes
  */
  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/customers?sortBy=${sortBy}&searchTerm=${searchTerm}`);
      setCustomers(res.data);
      setLoading(false);
    };

    fetchCustomers();
  }, [sortBy, searchTerm]);


  // handles the search state changes
  const handleSearch = async (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // handles the sort state changes
  const handleSort = async (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);
  };

  // handle the page routing
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Slice the customers array to display 20 records per page
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  

  return (
    <div className='container'>
      <h1 className='text-primary text-center mb-4'>CUSTOMER DATA</h1>

        {/* Search Component*/}
        <SearchBar onSearch={handleSearch} />
        
        {/* Sort Component*/}
        <SortOptions onSort={handleSort} />  

        {/* Customers Table */}
        <Table customers={currentCustomers} loading={loading} currentPage={currentPage}/>

        {/* Pagination Handling Component*/}
        <Pagination
        currentPage={currentPage}
        totalCustomers={customers.length}
        customersPerPage={customersPerPage}
        onPageChange={handlePagination}
        />
        
    </div>
  );
};

export default App;

