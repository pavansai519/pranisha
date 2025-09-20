import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Blog from './components/AboutUs/Blog.jsx';
import PrMedia from './components/Pr&Media.jsx';
import Cloud from './components/Cloud/Cloud.jsx';
import Ai from './components/Ai.jsx';
import Brading from './components/Branding.jsx';
import DigitalMarketing from './components/DigitalMarketing.jsx';
import WebDevelopment from './components/WebDevelopment.jsx';


import Contact from "./components/ContactPages/Contact.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Error from "./components/ErrorPages/Error.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },     
      
      {
        path: "/about",
        element: <AboutUs />
      },
      
     {
      path:"/branding",
      element:<Brading/>
     },
    
     {
      path:"/digitalmarketing",
      element:<DigitalMarketing/>
     },

     {
      path:"/webdevelopment",
      element:<WebDevelopment/>
     },

     {
      path:"/aboutus",
      element:<AboutUs/>
     },
     
    
     {
      path:"/blog",
      element:<Blog/>
     },
      
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/ai",
        element:<Ai/>
      },
      
     {
      path:"/Pr-media",
      element:<PrMedia/>
     },
     {
      path:"/cloud",
      element:<Cloud/>
     },
     
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
