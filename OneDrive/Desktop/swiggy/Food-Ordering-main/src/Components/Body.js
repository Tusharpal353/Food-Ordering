
import React, { useState } from 'react';
import RestrauntCard from './RestrauntCard';
import resList from '../utils/mockdata';


const Body = () => {
  const [list, setList] = useState(resList);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const filteredRestaurant = resList.filter(res =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredRestaurant);
  };

  const handleFilter = () => {
    const filteredList = resList.filter(
      res => parseFloat(res.info.avgRatingString) === 4
    );
    setList(filteredList);
  };

  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={handleFilter}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {Array.isArray(list) && list.map((res) => (
          <RestrauntCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

