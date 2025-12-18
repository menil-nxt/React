import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    const resMenu =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResInfo(resMenu);
    console.log(resMenu);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo, sla } = resInfo?.[0]?.info;

  // for get MENU data
  // const {itemCard} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.RAGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwo}
      </p>

      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCard[0]?.card?.info?.name}</li>
        <li>{itemCard[1]?.card?.info?.name}</li>
        <li>{itemCard[2]?.card?.info?.name}</li>
        <li>{itemCard[3]?.card?.info?.name}</li> */}

        {/* // for each restaurant menu items is show in this} */}
        {/* {itemCard.map((item) => 
          <li> key={tem?.card?.info.id} 
          {item?.card?.info.name} - {item?.card?.info.price} || {item?.card?.info.defaultPrice} </li>) } */}
        <li>Burger</li>
        <li>Cold drinks</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
