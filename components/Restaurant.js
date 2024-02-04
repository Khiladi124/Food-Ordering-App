import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
const Restaurant=({resApi})=>{
    const {resId} =useParams();
    const [resInfo,setResInfo] =useState(null);
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    // const fetchMenu=async ()=>{
    //     const menu=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2463915&lng=78.1739242&restaurantId="+resId+"&isMenuUx4=true&submitAction=ENTER");
    //     const json=await menu.json();
    //     console.log(json);
    //     setResInfo(json); 
    // }
    // if(resInfo===null) return <Shimmer/>
    // const {name,cloudinaryImageId,costForTwoMessage,cuisines} =resInfo?.data?.cards[2]?.card?.card?.info;
    return (
        <div>
            <h1> name </h1>
        </div>
    );
}
export default Restaurant;