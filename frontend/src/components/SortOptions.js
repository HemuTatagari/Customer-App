
import React, { useState } from 'react';

const SortOptions = ({ onSort }) => {

  // sort state
  const [sortOption, setSortOption] = useState('');

  /* Handles the changes in search state.
    1.updates the search state
    2. invokes onSort() of parent thereby to invoke useEffect hook
  */
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSort(selectedOption);
  };

  // custom styling to sort-select
  const sortStyle = {
    'float' : 'right',
    'margin-right': '150px',
    'margin-bottom': '5px',
    'margin-top': '10px'
  }

  return (

    <div className="container w-25" style={sortStyle}>

      {/* Select-control for sorting options */}
      <select id='sort' value={sortOption} onChange={handleSortChange} className="form-control">
        <option value='' disabled>-- Sort --</option>  {/* default option */}
        <option value='date'>Date</option>  {/* sort by date */}
        <option value='time'>Time</option>  {/* sort by time */}
        <option value=''>Default</option>   {/* default order */}
      </select>
      
    </div>

  );
};

export default SortOptions;
