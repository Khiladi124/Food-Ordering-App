import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import about from "./About.js";
import {Link} from "react-router-dom";
import Shimmer from "./shimmer.js";
import HandleClick from "./HandleClick.js";

    
const Header = () => {
    const [logBtnName,setLogBtnName]=useState("Login");
    
    //if no dependency array =>useEffect is called on every render
    // if there is an empty dependecy array [] then the useEffect is only called on first render
    // if the [] is not empty then everytime the dependecy changes then useEffect is called
    useEffect(()=>{
        console.log("useEffect is rendered")

    },[logBtnName]);
    return (
        <div className="header">
            <div className="logoContainer">
                

                <img className="logo" src={LOGO_URL}/>

              
                

            </div>
            <div className="navItems">
                <ul>
                       {/* we dont use anchor tag in react because it will reload whole page which might slowdown our webapp */
                       
                       /* 
                       we can navigate to new page without reloading complete page by using <Link></Link> from importing from "react-router-dom"

                        so rather we use
                       */
                       }
                    <li><Link className="linkTag" to="/">Home</Link></li>
                    <li><Link className="linkTag" to="/about" >About us</Link></li>
                    <li><Link className="linkTag" to="/contact" >Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn"
                    onClick={()=>{
                    logBtnName==="Login"?setLogBtnName("LogOut"):setLogBtnName("Login");
                    }}>{logBtnName}</button>
                </ul>
            </div>
        </div>
    )
 }
 export default Header;