
import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {

  // search state
  const [searchTerm, setSearchTerm] = useState(''); 

  // updates search state when changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // invokes the onSearch() of parent component there by to trigger useEffect Hook.
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };


  // custom styles to search bar
  const searchStyle = {
    'float' : 'left',
    'margin-left': '150px',
     'margin-bottom' : '30px',
     'width' : '35%'
  }


  return (
    <div className="container" style={searchStyle}>

      {/* form to hold search bar */}
      <form onSubmit={handleSearchSubmit} className='form'>

        {/* input group for search-icon + input-control */}
        <div className="input-group input-group-lg">

          {/* search icon */}
          <span class="input-group-text" id="search-icon">🔍</span>

          {/* text-input-control*/}
          <div className="form-floating">
            <input className='form-control' id='search' type='text' value={searchTerm} onChange={handleSearchChange} placeholder='' onKeyUp={handleSearchSubmit}/>
            <label htmlFor="#search">Search name/location</label>
          </div>

        </div>

      </form>

    </div>
  );
};

export default SearchBar;


