import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable -> super powerful rreact variable
  const [topRestaurant, setTopRestaurant] = useState(resList);

  // const arr = [topRestaurant , setTopRestaurant] you can pass this arr into below -> const arr = useState(resList);

  // const arr[0] = topRestaurant;
  // const arr[1] = setTopRestaurant;

  // Normal Java-Script variable
  // const listOfRestorant = [];

  return (
    <div className="body">
      <div className="search">
        <input className="search-input" type="text" placeholder="Search" />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = topRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setTopRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {topRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
