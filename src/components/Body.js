
   import resList from "../utils/moc_data";  // default import
   import { CDN_URL } from "../utils/constant"; // named import

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
         <img src={CDN_URL + res?.cloudinaryImageId }/>
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

 export default Body;