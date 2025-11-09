import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body = () => {
  // local state variable -> super powerful rreact variable
  const [topRestaurant, setTopRestaurant] = useState();

  // const arr = [topRestaurant , setTopRestaurant] you can pass this arr into below -> const arr = useState(resList);

  // const arr[0] = topRestaurant;
  // const arr[1] = setTopRestaurant;

  // Normal Java-Script variable
  // const listOfRestorant = [];

  useEffect(() => {
    featchData();
  }, []); // useEffect hook is comes with 1.( ) => { callback function }, and 2.[dependancy of Array]

  const featchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2926506&lng=70.7168469&collection=80355&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    console.log(json);
    setTopRestaurant(json?.data?.cards?.card?.card?.info);
  };

  return (
    <div className="body">
      <div className="search">
        <input className="search-input" type="text" placeholder="Search" />
        <button className="filter-btn">🔍 Search</button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = topRestaurant?.filter(
            (res) => res.info.avgRating > 4
          );
          console.log(filteredList);
          setTopRestaurant(filteredList);
        }}
      >
        Top Restro
      </button>

      <div className="res-container">
        {topRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
        {/* function data(restaurant) {
        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
      } */}
      </div>
    </div>
  );
};

export default Body;
