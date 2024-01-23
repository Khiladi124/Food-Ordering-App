import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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


 
//  Default Export/Import
//       export default Component;
//       import Component from "path";

//   Named Export/import
//        export const Component;
//        import {Component} from "path";