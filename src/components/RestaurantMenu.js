import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_URL } from "../utils/constants";


const RestaurantMenu= () =>{
   
const [resInfo,setResInfo]=useState(null);
const {resId}=useParams();


useEffect(()=>{
 fetchMenu();
}, []);
//why we have added empty dependency array page 6 in book

const fetchMenu = async () => {
   //+"&catalog_qa=undefined&submitAction=ENTER"
 const data = await fetch(ITEM_URL+resId);

 const json = await data.json();
setResInfo(json.data);
// setResInfo(json?.resInfo?.cards[0]?.card?.card?.info);
};
//that ||{ } is added becoz it may be empty initially so it cant destructure so mentioning it as {} can destructure without error

const { name,cuisines,cloudinaryImageId,costForTwoMessage,avgRating,sla} = resInfo?.cards[2]?.card?.card?.info || {};
const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||{};
console.log(itemCards);

    return resInfo === null ? (
      <Shimmer />
    ) : (
      <div className="menu">
        
        <h1>{name}</h1>
        <p>
          {cuisines} - {costForTwoMessage}
        </p>

        <h3>{avgRating}</h3>
        <h3>{sla?.deliveryTime}</h3>
        <h2>Menu</h2>
        <ul>
          <ol>
            {itemCards?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info?.name}-{"Rs "}
              {item.card.info?.price/100 || item.card.info?.defaultPrice/100}
              </li>
            ))}
          </ol>
        </ul>
      </div>
    );
}
export default RestaurantMenu;