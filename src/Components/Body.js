<<<<<<< HEAD
import React, { useState } from 'react';
import RestrauntCard from './RestrauntCard';
import resList from '../utils/mockdata';
=======
<<<<<<< HEAD
import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockdata";
import { useState } from "react";


>>>>>>> 4d9aca63547f9b55f501ba633b97db1c8edc2033

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



/* import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resList);
  const [searchText, setsearchText] = useState([]);

  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
          <button onClick={
            () => {
              const filteredRestaurant = list.filter((res) => { res.info })
                .includes(searchText)

              setList(filteredRestaurant)
            }
          } >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("btn clicked");
            const filterdList = list.filter(
              (res) => res.info.avgRatingString == 4
            );

            setList(filterdList);
            console.log("hell");
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {list.map((Restraunt) => (
          <RestrauntCard key={Restraunt.info.id} resData={Restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
 */
/* FILTER BTN
  make sure that we are maping on the state variable bcs we are rendering our state variable to the page



*/

// onClick={
//   () => {
//     const filterdList = list.filter(
//       (res) =>

//         res.info.avgRating === 4

//     );
//     setList(filterdList)
//   }
// }

{
  /* <RestrauntCard resData={Kfcobj} /> */
}
{
  /* <RestrauntCard resData={resList[0]} />
          <RestrauntCard resData={resList[1]} />
          <RestrauntCard resData={resList[2]} />
          <RestrauntCard resData={resList[3]} />
          <RestrauntCard resData={resList[4]} />
          <RestrauntCard resData={resList[5]} />
          <RestrauntCard resData={resList[6]} />
          <RestrauntCard resData={resList[7]} />
          <RestrauntCard resData={resList[8]} />
          <RestrauntCard resData={resList[9]} />
          <RestrauntCard resData={resList[10]} />
          <RestrauntCard resData={resList[11]} />
          <RestrauntCard resData={resList[12]} />
          <RestrauntCard resData={resList[13]} />
          <RestrauntCard resData={resList[14]} />
          <RestrauntCard resData={resList[15]} />
          <RestrauntCard resData={resList[16]} />
          <RestrauntCard resData={resList[17]} />
          <RestrauntCard resData={resList[18]} />
          <RestrauntCard resData={resList[19]} /> 
          
          
<<<<<<< HEAD
          PROBLEM WITH THIS APPROACH IS THAT WE DONT KNOW HOW MUCH DATA WILL COME IN AND WHAT WILL BE COUNT SO W WILL USE MAP FUNCTION */
}
=======
          PROBLEM WITH THIS APPROACH IS THAT WE DONT KNOW HOW MUCH DATA WILL COME IN AND WHAT WILL BE COUNT SO W WILL USE MAP FUNCTION */}
=======
import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">
        {/* <RestrauntCard resData={Kfcobj} /> */}
        {/* <RestrauntCard resData={resList[0]} />
          <RestrauntCard resData={resList[1]} />
          <RestrauntCard resData={resList[2]} />
          <RestrauntCard resData={resList[3]} />
          <RestrauntCard resData={resList[4]} />
          <RestrauntCard resData={resList[5]} />
          <RestrauntCard resData={resList[6]} />
          <RestrauntCard resData={resList[7]} />
          <RestrauntCard resData={resList[8]} />
          <RestrauntCard resData={resList[9]} />
          <RestrauntCard resData={resList[10]} />
          <RestrauntCard resData={resList[11]} />
          <RestrauntCard resData={resList[12]} />
          <RestrauntCard resData={resList[13]} />
          <RestrauntCard resData={resList[14]} />
          <RestrauntCard resData={resList[15]} />
          <RestrauntCard resData={resList[16]} />
          <RestrauntCard resData={resList[17]} />
          <RestrauntCard resData={resList[18]} />
          <RestrauntCard resData={resList[19]} /> 
          
          
          PROBLEM WITH THIS APPROACH IS THAT WE DONT KNOW HOW MUCH DATA WILL COME IN AND WHAT WILL BE COUNT SO W WILL USE MAP FUNCTION */}

        {resList.map((Restraunt) => (
          <RestrauntCard key={Restraunt.info.id} resData={Restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
>>>>>>> 9f64da325ef260fc7e84d7b8f5e4c15c6130ee79
>>>>>>> 4d9aca63547f9b55f501ba633b97db1c8edc2033
