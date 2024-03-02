
import React from 'react';

const Table = ({ customers, loading, currentPage }) => {

  // to handle delay or error when fetching data
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    
    <table className = 'table table-hover w-75 mx-auto text-start'>  {/* customer table */}

      {/* Header Row */}
      <thead className='table-primary'> 

        <tr>
          <th>S.No</th>
          <th>Customer_sno</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>

      </thead>

      {/* body -> Customer Details */}
      <tbody className='table-group-divider'>

        {
          customers.map((customer, index) => (
            <tr key={customer.sno}>
              <th scope='row'>{index + 1 + (20*(currentPage-1))}</th>
              <td>{customer.sno}</td>
              <td>{customer.customer_name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{customer.date}</td>
              <td>{customer.time}</td>
            </tr>
          ))
        }
      </tbody>

    </table>
  );
};

export default Table;

