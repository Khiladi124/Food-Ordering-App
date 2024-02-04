import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/   restaurant";



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
            <Outlet/>
                
            
           
        </div>
    )
 }
 const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body></Body>
                   
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/restaurant/:id",
                    element:<Restaurant/>
                }
            ],
            errorElement:<Error/>
        }
    ]
 )
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);

 // conflict driven UI   - backend data is conflict\
 // nowadays all corporate follows conflict driven ui


 
//  Default Export/Import
//       export default Component;
//       import Component from "path";

//   Named Export/import
//        export const Component;
//        import {Component} from "path";


//  React Hooks
    //  useState()  -whenever a state variable changes react rerender the component itself
    //  useEffect()
// never use useState outside of the functional components,  hooks can only be called inside the components
// never useState inside a condition, for loop

// routing   install router npm i react-router-dom
// there are two types of routing 
//       client side routing - its just a one page only components getting rendered
//       server side routing - the whole page is getting loaded