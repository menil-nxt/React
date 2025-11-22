import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div className="res-card">
      <img alt="Image of Foods" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div className="card-rating">
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla.deliveryTime} Minute</h5>
        <h5>{locality}</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
