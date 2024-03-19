import RestaurantCard, { isRestaturantOpen } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState();
  const [searchText, setSearchText] = useState("");

  const OpenRestaurant = isRestaturantOpen(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline!!!</h1>;
  // console.log(filteredResturant);
  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRes = listOfResturant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );

              setFilteredResturant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
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
        <div className="search p-4 m-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <OpenRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
