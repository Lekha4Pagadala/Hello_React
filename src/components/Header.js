//previously header component is in app.js but now we made seperate components so from here we have to 
//export from here by keeping export default header and import in app.js 

import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    // let btnName= "Login";
    const [btnNameReact,setBtnNameReact]=useState("Login");
    // this below use effect for understanding it and in page 4 in book have explanation
    console.log("header");
    useEffect(()=>{console.log("useEffect called")},[btnNameReact]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* //and this can be direct link by adding anchor tag and add href="/about" or href="/contact" which should not use anchor tag
// becoz it refreshes whole page we can navigate to these pages without loading whole page we use "link" from react routerdom
//link component */}

{/* as we are in react we no need to refresh full page when navigating diff pages this is called single page webapplication */}
        {/* types of routing in readme.md page  */}
                 
                    <li><Link to="/About">About us</Link></li>
                    {/* now as we used link if we click it wont reload completely page */}
                    <li><Link to="/Contact"> Contact Us</Link></li>
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