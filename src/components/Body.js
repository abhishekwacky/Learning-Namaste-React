import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant, index) => (
          <ResturantCard key={index} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
