import React, { useState } from "react";
import countriesData from "../countriesData";

const SearchBar = ({setQuery}) => {

  function handleSearch(e) {
     setQuery(e.target.value.toLowerCase());
  
  }

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
         
      />
    </div> 
  );
};

export default SearchBar;
