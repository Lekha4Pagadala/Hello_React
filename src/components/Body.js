import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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

const [listofRestaurants,setListofRestaurants]= useState([]); //resList

//see this when the body component is loadedfor first time it makes an API call and it updates list of restaurants
//as well as the filtered restaurant , the list of our store so and now i will use this list  of restaurant
// ointact right  whenever  i have to filter  something i will just use this listofRestaurants to filter out 
// and then  i will update my filteredRestaurant and to display , display it  on the UI iam just using these 
//filteredRestaurants

//so above explanation is when body component loads first time it makes Api call and updates list of restaurants and
//filtered rest
//when we type the name in search box  it will filter and what happens  when i clicked on filteredRestauramt and
//gets update and becoz whenever a state variable changes it automatically refreshes so filteredRestaurant
const [filteredRestaurant,setFilteredRestaurant] =useState([]); //copy of above one 

const [searchText,setSearchText]=useState("");
// const [filterRating,setFilterRating]=useState

//whenever state variable updates , react triggers a reconciliation cycle (re renders the component)
console.log("body rendered");


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
//useEffect hook takes 2 arguments with callback fn when we write this inside body component
//it will render the component as soon as render is done it will call the callback fn 
// use efect helps to render the component once it fetch the dqata
//fetch is superpower given by browsers to utilise in JS will fetch data from api
//what will fetch return ? it returns promise we can use aync wait instead of promise
//browsers wont allow to call api call from local host due to cors policy check in 
//akshay saini cors video , but how to unblock the cors policy by installing cors chrome extension
//and enable it under extension tabs


useEffect(()=>{
    //console.log("useEffect called"); fddfgdfdf
    fetchData();
},[]);
// const API_URL=;

const fetchData= async ()=>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
  const json= await data.json();
  

  console.log(json);
  setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//json.data.cards[1].data.data.cards
};
//above just we got the data from swiggy api and want this new data in app by rendering 
// we got previously hardcoded adn that reslist is mapped below this page is rendered by listofrestaurants
//as soon as we got data from api i will put in listofrestaurants and ui will rerender the component listofrestauratns

//shimmer UI till loading the page those blur restaurant cards
//this is conditional rendering , interviewer may ask 
//rendering on basis of condition is called conditional rendering 
// if(listofRestaurants.length === 0){
//   return <Shimmer />;
// }

    return listofRestaurants.length === 0 ? (<Shimmer />) : 
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="searchbox" value={searchText} onChange={(e)=> {
              setSearchText(e.target.value);
              
            }}/>
            
            {/* oncne we give above input with value ={searchText}  and in UI if we try to type in search box it
            doesnt even work it wont show the text we are typing in box so we have to bind the sstate variable to 
            that value ,mentioned above then only it shows unless we change the searchText it wont show any value
            || so we have used onchange handler to bind it . when we search in that search bar whole body component
            gets rerendered like literally if we type each letter it rerenders like if we want to search
            cafe for c ,a,f,e evey letter it gets rerenders . why is becoz whenwe do set listof rest of fetch api
            it rerenders */}
          
            <button onClick={()=>{
              //filter the restaurant cards nd update the UI if we click the search button
              //search text , to get the values typing by user we have to bind the value to state variable

              const filteredRestaurant =listofRestaurants.filter((res)=>
                // this below one works when first lands the page it gives filters the whatever we search
              //but once 1st search is done again on top of that if u type 2nd time in search box with other
              //name it will be blur page so to make that work and all those restaurants got lost 
            //so to rectify that create the state variable copy of listofRestaurants

                res.info.name.toLowerCase().includes(searchText.toLowerCase())     
            );
            setFilteredRestaurant(filteredRestaurant);
            }}
            > Search</button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {

                //this is hooks state variable and filter it

                const filteredList=listofRestaurants.filter((res)=>res.info.avgRating>4.1);
                console.log(filteredList);
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
          {filteredRestaurant.map((restaurant) => (
            //key = {restaurant.id}
            // key = {restaurant.id} resData={restaurant}
            <RestaurantCard {...restaurant.info} key={restaurant.info?.id} />
          ))}
        </div>  
      </div> 
    );  
}

export default Body;