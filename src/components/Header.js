//previously header component is in app.js but now we made seperate components so from here we have to 
//export from here by keeping export default header and import in app.js 

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{
    // let btnName= "Login";
    const [btnNameReact,setBtnNameReact]=useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* once we write btnName=logout and print this var we get logout in console once we click the login button
                    but UI it wont be updated  . so this can be done by refreshing the header may take the name thats why 
                    we cant use JS variables to update(remaining explanation in page 3) */}
                    <button className="login" onClick={()=>{
                      btnNameReact==="Login"?  setBtnNameReact("Logout") : setBtnNameReact("Login")}}>
                            {btnNameReact}</button>

                </ul>
            </div>
        </div>
    )
}
export default Header;