
import React, { useState, useEffect } from 'react';
import RestrauntCard from './RestrauntCard';
import resList from '../utils/mockdata';
import RestrauntMenu from './RestrauntMenu';
import { Link, useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_API_URL } from '../utils/constants';

import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { resid } = useParams();

  //writing logic to fetch data from siggy api
  //1st the mockdata will come then the API data will come
  //so we are removing reslist from here const [list, setList] = useState(resList); and passing []
  useEffect(() => {
    fetchData();
  }, [resid]);

  //fetching data from the Swiggy website
  const fetchData = async () => {

    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    console.log(json);
    setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  //search button
  const handleSearch = () => {
    const filteredRestaurant = resList.filter(res =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredRestaurant);
  };

  //top rated button
  const handleFilter = () => {
    const filteredList = resList.filter(
      res => parseFloat(res.info.avgRatingString) === 4
    );
    setList(filteredList);
  };


  //check online or offline
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline.</h1>;
  }


  return list.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="search-bar m-4 p-4">Search</div>
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border-s-2 border-b-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className='bg-green-400 py-2 px-4 rounded-md' onClick={handleSearch}>Search</button>
        </div>
        <div className='search m-4 p-4 flex items-center' >


          <button
            className="px-4 py-2 bg-gray-100 rounded-xl"
            onClick={handleFilter}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {Array.isArray(list) && list.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}> <RestrauntCard resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


/* 
import React, { useState, useEffect } from 'react';
import RestrauntCard from './RestrauntCard';
import resList from '../utils/mockdata';
import { Link, useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_API_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { resid } = useParams();

  useEffect(() => {
    fetchData();
  }, [resid]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API_URL + resid);
      const json = await data.json();
      console.log(json);
      setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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

 
  return list.length === 0 ? (<Shimmer />) : (
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
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestrauntCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
 */