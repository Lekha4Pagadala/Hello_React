
import React from "react";  
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
<<<<<<< HEAD
//below one creates browisng configuration inside app router
// whatever we had in configuration we have to provide it 
import { BrowserRouter, createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//instead of below code if path is / etc etc we can have outlet imported and use in applayout fun component

//   {/* we have added children in configuration  */}
//          {/* if path = /  */}
//          <Body />
//          {/* if path=/about */}
//          <About />
//          {/* if path=/contact */}
//          <Contact />
//          {/* <Body/> */}
=======





>>>>>>> 292f19097f5cbd1c87f40a029a1a1f643d6e6aa7
const AppLayout =()=>{
    return(
        <div className="app">
         <Header/>
<<<<<<< HEAD
        <Outlet />
        </div>
    )
}
// info that wil tell BrowserRouter what will happen if i call that route or url
//createBrowserRouter takes some config if path is / then applayout etc like
// once this is done i have to provide this configuration  where one component to be installed taht is router-provider
// earlier we are rendering this applayout manually we will provide it router configuration using router provider

//suppose we have to add random name after localhost url like localhost:1234\\hello then gives error  unexpected
//application error how this comes this error? react has created this unexpected error to display on page
// we can create own error page

//another feature react router dom gives access to important HOOK , hook is a fn that hook is
//useRouteError import it in error.js page why this becoz it give clear mention of error msg understnads it 
//exact where error occurs

//we had done all these router things but when we go to about or contact page we are not getting header 
//and footer in each pages where header and footer should be constant but body alone should changes how to do we should see
//for this we have to create child routes by adding children and creating about and contact has become child of
//applayout

//whenever change is in path the outlet will be filled according to the path on what page we are on like above
// we mentioned <outlet/> if we on about that will be overidden as <about/> 
//and this can be direct link by adding anchor tag and add href="/about" or href="/contact" which should not use anchor tag
// becoz it refreshes whole page we can navigate to these pages without loading whole page we use "link" from react routerdom
//link component

const appRouter=createBrowserRouter([
   {path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body />
        },
        {path:"/about",
            element:<About />
           } ,
           {path:"/contact",
            element:<Contact />
           } ,
           {path:"/restaurants/:resId", // this :resId is dynamically picking the restaurants and display a/c to the selection of restaurant
           element:<RestaurantMenu />
           } 
    ],
    // we are creating our own error page instead of Reacts error page like unexpected application error
    errorElement:<Error />
   },
//    {path:"/about",
//     element:<About />
//    } ,
//    {path:"/contact",
//     element:<Contact />
//    } 
]);
const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
// above  we are rendering this applayout manually we will provide it router configuration using router provider
//in react router page there are diff routers available along with create browser router but this create browser
//router is most recommended by react router itself

root.render(<RouterProvider router={appRouter}/>);
=======
         <Body/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
>>>>>>> 292f19097f5cbd1c87f40a029a1a1f643d6e6aa7
