import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable -> super powerful react variable
  // Original
  const [topRestaurant, setTopRestaurant] = useState([]);
  // Copy
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // make a copy of this topRestaurant variable
  // after searching anything topRestaurant(data) is not updated but this filteredRestaurant(data) is changed that's why topRestaurant(data) is static it's naver changes
  // we are allways change this filteredRestaurant(data)

  const [searchText, setSearchText] = useState("");

  // const arr = [topRestaurant , setTopRestaurant] you can pass this arr into below -> const arr = useState(resList);

  // const arr[0] = topRestaurant;
  // const arr[1] = setTopRestaurant;

  // Normal Java-Script variable
  // const listOfRestorant = [];

  // Whenever state variable update , react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []); // useEffect hook is comes with 1.( ) => { callback function }, and 2.[dependancy of Array]

  const fetchData = async () => {
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
      setFilteredRestaurant(resList); // copy of topRestaurant
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
              setSearchText(e.target.value); // target the search value
            }}
          />
          <button
            onClick={() => {
              // Filtered the restraunt cards an Update the UI
              // for that we need (SerchText) also
              console.log(searchText); // each and every latter this whole body componente is rendered -> but only changes appeer when is needed
              const filterData = topRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterData); //filtering this filteredRestaurant variable with new searchText(filterData)
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
            setFilteredRestaurant(filteredList); // Changes Applicable for only new filteredList(data)
          }}
        >
          Top Reated Restaurant
        </button>
      </div>
      {/* every time new or old filteredRestaurant is maped */}
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
