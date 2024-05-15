import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockdata";
import { useState } from "react";



const Body = () => {
  const [list, setList] = useState(resList)

  return (

    <div className="body">
      <div className="search-bar">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={
          () => {
            console.log("btn clicked");
            const filterdList = list.filter(
              (res) =>

                res.info.avgRatingString == 4

            );

            setList(filterdList)
            console.log("hell");
          }
        }
        >
          Top Rated</button>
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




{/* <RestrauntCard resData={Kfcobj} /> */ }
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