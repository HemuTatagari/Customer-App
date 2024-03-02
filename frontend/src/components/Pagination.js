
import React from 'react';

const Pagination = ({ currentPage, totalCustomers, customersPerPage, onPageChange }) => {

  // Number of Pages (20 per each page)
  const totalPages = Math.ceil(totalCustomers / customersPerPage); 
  
  // handles the routing among pages
  const handleClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      
      {/* navigation to pages */}
      <div className="d-flex justify-content-between w-25 mb-5 mt-4">

        {/* button to previous page */}
        <button className={`btn ${currentPage == 1 ? 'd-none' : 'btn'}`} onClick={() => handleClick(currentPage - 1)} disabled={currentPage == 1} style={{'font-size' : '18px'}}>⏮️</button>
        
        {/* Page numbers to directly go to */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button className={`btn ${page === currentPage ? 'btn-primary active' : 'btn-white'}`} key={page} onClick={() => handleClick(page)}>
            {page}
          </button>
        ))}

        {/* button to next page */}
        <button className={`btn ${currentPage == totalPages ? 'd-none' : 'btn'}`} onClick={() => handleClick(currentPage + 1)} disabled={currentPage == totalPages} style={{'font-size' : '18px'}}> ⏭️</button>
      
      </div>
      
    </div>
  );

};

export default Pagination;

