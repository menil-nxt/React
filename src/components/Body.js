import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable -> super powerful rreact variable
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const arr = [topRestaurant , setTopRestaurant] you can pass this arr into below -> const arr = useState(resList);

  // const arr[0] = topRestaurant;
  // const arr[1] = setTopRestaurant;

  // Normal Java-Script variable
  // const listOfRestorant = [];

  // Whenever state variable update , react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");
  useEffect(() => {
    fatchData();
  }, []); // useEffect hook is comes with 1.( ) => { callback function }, and 2.[dependancy of Array]

  const fatchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0240649&lng=72.60021069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Optional chaining
      // Get data from API and store it into variable
      let resList = json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid")
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      console.log(resList);
      setTopRestaurant(resList);
      setFilteredRestaurant(resList);
    } catch (err) {
      console.error(err.messages);
    }
  };

  // Conditional Rendring
  return topRestaurant.length === 0 ? ( // used ternary operator
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filtered">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filtered the restraunt cards an Update the UI
              // for that we need (SerchText) also
              console.log(searchText);
              const filterData = topRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterData);
            }}
          >
            🔍 Search
          </button>
        </div>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = topRestaurant?.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Reated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
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
