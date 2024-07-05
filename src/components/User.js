//this component created to understand diff betwn class and functional components

import { useEffect, useState } from "react";

const User=({name})=>{
    const [count,setCount] =useState(0);
    const [count2,setCount2] =useState(1);
    useEffect(()=>{
         //api calls
    },[]);
    return (
        <div className="user-card"> 
        <h2>Count={count}</h2>
        <h2>Count={count2}</h2>
            <h1>Name :{name}</h1>
            <h3>Hyderabad</h3>
            <h4>Contact:lekhapagadala@4</h4>
        </div>
    )
}
export default User;
