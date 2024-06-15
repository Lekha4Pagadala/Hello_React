//previously header component is in app.js but now we made seperate components so from here we have to 
//export from here by keeping export default header and import in app.js 

import { LOGO_URL } from "../utils/constants";

const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}
export default Header;