
import resList from "../utils/moc_data";  // default import
import { CDN_URL } from "../utils/constant"; // named import

export const RestaurantCard = (props) =>{
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

export const RestaurantCard2= ({restaurant}) =>{
const res=restaurant?.data;
 return (
     <div className="card">
      <img src={CDN_URL + res?.cloudinaryImageId }/>
     <div className="card-content">
       <div className="restaurant-name">{res?.name}</div>
       <div className="delivery-time">Estimated Delivery Time: {res?.deliveryTime} min</div>
       <div className="rating">Rating: {res?.avgRating}/5</div>
       <div className="cuisines">Cuisines: {res?.cuisines.join(", ")}</div>
     </div>
   </div>
   
 )
}