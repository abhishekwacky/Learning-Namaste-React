import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 ">
      <img
        className="res-log rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{deliveryTime}min</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const isRestaturantOpen =(RestaurantCard)=>{

  return (props) => {
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
          <RestaurantCard {...props}/>
        </div>
      )
  }
}
export default RestaurantCard;
