import {CDN_URL} from "../utils/constants.js";

const RestaurantCard=({cloudinaryImageId, name, cuisines, avgRating, costForTwo,deliveryTime,sla})=>{
    // const {resData} =props;
    // const {image, name, cuisines, avgRating, costForTwo,deliveryTime} =  resData; //deliveryTime
    // const RestaurantCard=(props)=>{
    //     const {resData} =props;
    //     const{cloudinaryImageId, name, cuisines, avgRating, costForTwo,deliveryTime,sla }=resData?.info ||{};
    
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" 
            src={
                CDN_URL+
            cloudinaryImageId
            }/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
    )
}
{/* <h4>{resData.sla.deliveryTime} mins</h4> */}
export default RestaurantCard;