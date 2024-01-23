import React from "react";
import ReactDOM from "react-dom/client";
 /**
  * Header
  * - Logo
  * - Nav Item
  * Body
  * - search
  * - restaurant container
  *   - retaurantCard
  *     - img
  *     - name , star rating, cuisines, time of delivery
  * 
  * Footer
  * - Links
  * - Address
  * - Contact
  */


 const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                

                <img className="logo" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"/>

              
                

            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
 }
 const RestaurantCard = (props) =>{
    console.log(props);
    return (
     <div className="card">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspw_vOK0UNosBYXruxl-7tFnuVeUmOG2zqOPiKig2vg&s" alt="Restaurant Image" />
        <div className="card-content">
            <div className="restaurant-name">{props.resName}</div>
            <div className="delivery-time">{props.time}</div>
            <div className="rating">{props.rating}</div>
            <div className="cuisines">{props.cuisine}</div>
        </div>

    </div>
    )
 }
 
 const RestaurantCard2= ({restaurant}) =>{
  const res=restaurant?.data
    return (
        <div className="card">
         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + res?.cloudinaryImageId }/>
        <div className="card-content">
          <div className="restaurant-name">{res?.name}</div>
          <div className="delivery-time">Estimated Delivery Time: {res?.deliveryTime} min</div>
          <div className="rating">Rating: {res?.avgRating}/5</div>
          <div className="cuisines">Cuisines: {restaurant?.data?.cuisines.join(", ")}</div>
        </div>
      </div>
      
    )
 }
  const ResObj = {
    resName:"KFC",
    time:"Estimated Delivery Time: 20 mins",
    rating:"Rating: 3/5",
    cuisine:"Cuisines: North Indian, Mexican, Italian"

  };
 const Body = () => {
    return(
        <div className="body">
             <div className="search-bar-container">
               <input
                 type="text"
                  placeholder="Search Restaurants"
               />
                <button >Search</button>
             </div>
            <div className="resContainer">
           
            <RestaurantCard
            resName= "Delicious Bites"
            time="Estimated Delivery Time: 30 mins"
            rating="Rating: 4.5/5"
            cuisine="Cuisines: Italian, Mexican, Asian"
            />


          {  
            resList.map((resElement ,index) => <RestaurantCard2 key={resElement.data.id} restaurant={resElement} />)
           
          }


            </div>
        </div>
    )
 }
 // we use keys in  <RestaurantCard2 key={resElement.data.id} restaurant={resElement} />) ..... it is important because otherwise React will render all the cards again and this will slow down our app whenever a new card comes as react will not know where it has to place the new card
 // dont use index of map as key but if we dont have id at backend than rather use index as key
 const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body></Body>
        </div>
    )
 }
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(AppLayout());

 // conflict driven UI   - backend data is conflict\
 // nowadays all corporate follows conflict driven ui