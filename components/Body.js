
import resList from "../utils/moc_data";  // default import
import { CDN_URL } from "../utils/constant"; // named import
import { RestaurantCard } from "./cards";
import { RestaurantCard2 } from "./cards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer.js";


// never use useState outside of the functional components,  hooks can only be called inside the components
// never useState inside a condition, for loop
const Body = () => {
  // Normal js variables
  //    let TopRatedResList= [];



  // Local state variables - Super Powerful variable
  // we can also use this syntax
  // const arr=useState(resList);
  // const [listOfTopRatedRes,setListOfTopRatedRes]=arr;
  // or listOfTopRatedRes =arr[0],setListOfTopRatedRes=arr[1];
  const [listOfTopRatedRes, setListOfTopRatedRes] = useState(resList);
  const [searchText, setSearchText] = useState("");




  // useEffect(() => {
  // fetchData();
  // }, []);
 // //first the body will be rendered then the useEffect( ) will be called

 
  // const fetchData =  async () => {
  //   const data = await  fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.2463915&lng=78.1739242&carousel=true&third_party_vendor=1");
  //   const json=await data.json();
  //   console.log(json);
    //  setListOfTopRatedRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //  };
  //  if (listOfTopRatedRes.length === 0) {
  //   return (
  //     <Shimmer />

  //   );
  // }

  // return


  // conditional rendering
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [btnName, setBtnName] = useState("Top Rated Restaurants");
  if (listOfTopRatedRes.length === 0) {
    return (
      <Shimmer />

    );
  }
  return (
    <div className="body">

      <div className="search-bar-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // filter logic


              let filteredList = listOfTopRatedRes.filter((res) => res.data.avgRating > 4);
              if(filteredList.length===0) filteredList=resList.filter((res) => res.data.avgRating > 4);
              if(flag==false)
              {
                setBtnName("Home");
                setFlag(true);
              }else{
                setFlag(false);
                setBtnName("Top Rated Restaurants");
                filteredList=resList;
              }
              setListOfTopRatedRes(filteredList);
             

            }}
          >
            {btnName}
          </button>

        </div>
        <input
          type="text"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          onClick={() => {

            const filRes = listOfTopRatedRes.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
            filRes.length > 0 ? setListOfTopRatedRes(filRes) : setListOfTopRatedRes(listOfTopRatedRes);

          }}>Search</button>
      </div>




    <div className="resgrid">
    <div className="resContainer">

{/* <RestaurantCard
    resName= "Delicious Bites"
    time="Estimated Delivery Time: 30 mins"
    rating="Rating: 4.5/5"
    cuisine="Cuisines: Italian, Mexican, Asian"
    />


  {  
    resList.map((resElement ,index) => <RestaurantCard2 key={resElement.data.id} restaurant={resElement} />)
   
  } */}
{
  listOfTopRatedRes.map((topRatedRes, index) =>( <Link key={topRatedRes.data.id} to={"/restaurant/"+topRatedRes.data.id}><RestaurantCard2 key={topRatedRes.data.id} restaurant={topRatedRes} /> </Link>) )
}


</div>

    </div>
      
    </div>
  )
}

export default Body;