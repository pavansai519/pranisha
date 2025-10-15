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
import Events from './components/Events.jsx'
import Portfolio from "./components/Portfolio.jsx";
import Team from "./components/Team.jsx";
import Bondstreet from "./components/Portfolio/Bondstreet.jsx";
import Shr from "./components/Portfolio/shr.jsx";
import Pcg from "./components/Portfolio/pcg.jsx";
import Poh from "./components/Portfolio/Poh.jsx"; 
import Rof from "./components/Portfolio/rof.jsx"; 
import TermsAndConditions from "./components/Policy.jsx";




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
        path:"/portfolio/bondstreet",
        element:<Bondstreet/>
      },
      {
        path:"/terms-and-conditions",
        element:<TermsAndConditions/>
      },
      {
        path:"/portfolio/shr",
        element:<Shr/> 
      },
      {
        path:"/portfolio/pcg",
        element:<Pcg/>
      },
      {
        path:"/portfolio/poh",
        element:<Poh/>
      },
      {
        path:"/portfolio/rof",
        element:<Rof/>
      },
      {
      path:"/branding",
      element:<Brading/>
     },
     {
      path:"/portfolio",
      element:<Portfolio/>
     },
     {
      path:"/digitalmarketing",
      element:<DigitalMarketing/>
     },
     {
      path:"/events",
      element:<Events/>
     },
     {
      path:"/webdevelopment",
      element:<WebDevelopment/>
     },
     {
      path:"/team",
      element:<Team/>
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
