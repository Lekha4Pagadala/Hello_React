import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

//after 1-17 steps done we get error that reslist is not defined bcoz we moved from app.js to seperate
//component
//actually can paste the resList obj here but this is not good practice bcoz it is hardcoded data 
//we should nt keep hardcoded data or image urls etc in component all these are kept in utils folder 
//we can give names utils/common/config under this constants.js file 


//we have added filter button to get only top rated like more than 4.2 star rating restaurants
//using listofRestaurants instead of resList objwhich is static data

//there is ui and data layer if data has only 2 data then ui shows 2 data
//once we add the below onClick logic it should filter data but here it filters data and in console it 
//shows top rated but in UI it doesnt as we have created as normal JS var listofRestaurants 
//we use State variable -super powerful variable for this we use HOOKS 


const Body=()=>{


// when we call th usestate fn we are creating using hook inside keeping array we cant modify this below
//listofRestaurants by giving listofRestaurants={}; so we add setlistofrestaurants beside listofRestaurants
// to update the list when we need
//below listofRestaurants it is superpowerful suppose i need to filter or make the list empty then 
//using setlistofRestaurants and pass the value accordingly this var keeps data in sync with UI
//react will make ui and data layer in sync react only does DOM operations not bundling,minifying code

//whenever a sstate var updates React rerenders the component 

//Local State variable -super powerful variable
//below one is nothing but  const arr=useState(resList); but in below line we are destructuring the array like below commented
//const listofRestaurants=arr[0];
//const setListofRestaurants=arr[1];

//reven more explanation of react hooks in book page 2

const [listofRestaurants,setListofRestaurants]= useState(resList);

     //normal JS variable
// let listofRestaurantsJS=[    {
//     id: "93741",
//     name: "Subway",
//     cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
//     locality: "The Nexus Mall",
//     areaName: "Koramangala",
//     costForTwo: "₹350 for two",
//     cuisines: [
//     "Salads",
//     "Snacks",
//     "Desserts",
//     "Beverages"
//     ],
//     avgRating: 3.8,
//     parentId: "2",
//     avgRatingString: "3.8",
//     totalRatingsString: "5K+",
//     sla: {
//     deliveryTime: 37,
//     lastMileTravel: 1.6,
//     serviceability: "SERVICEABLE",
//     slaString: "35-40 mins",
//     lastMileTravelString: "1.6 km",
//     iconType: "ICON_TYPE_EMPTY"
//     }
  
// },
// {
//     id: "93742",
//     name: "Dominos",
//     cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
//     locality: "The Nexus Mall",
//     areaName: "Koramangala",
//     costForTwo: "₹350 for two",
//     cuisines: [
//     "Salads",
//     "Snacks",
//     "Desserts",
//     "Beverages"
//     ],
//     avgRating: 4.5,
//     parentId: "2",
//     avgRatingString: "4.5",
//     totalRatingsString: "5K+",
//     sla: {
//     deliveryTime: 37,
//     lastMileTravel: 1.6,
//     serviceability: "SERVICEABLE",
//     slaString: "35-40 mins",
//     lastMileTravelString: "1.6 km",
//     iconType: "ICON_TYPE_EMPTY"
//     }
  
// },
// {
//     id: "93743",
//     name: "Pizza Hut",
//     cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
//     locality: "The Nexus Mall",
//     areaName: "Koramangala",
//     costForTwo: "₹350 for two",
//     cuisines: [
//     "Salads",
//     "Snacks",
//     "Desserts",
//     "Beverages"
//     ],
//     avgRating: 4.1,
//     parentId: "2",
//     avgRatingString: "4.1",
//     totalRatingsString: "5K+",
//     sla: {
//     deliveryTime: 37,
//     lastMileTravel: 1.6,
//     serviceability: "SERVICEABLE",
//     slaString: "35-40 mins",
//     lastMileTravelString: "1.6 km",
//     iconType: "ICON_TYPE_EMPTY"
//     }
  
// }
// ];

    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {

                //this is hooks state variable and filter it

                const filteredList=listofRestaurants.filter(res=>res.avgRating>4.0);
                setListofRestaurants(filteredList);

                //normal way of using js var
              //filter logic to get top rated restaurants when we click the button
            //   listofRestaurants=listofRestaurants.filter(res=>res.avgRating>4.0);
            //   console.log(listofRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {/* <RestaurantCard resData={resList[0]}/> */}
          {listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
}

export default Body;