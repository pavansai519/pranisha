import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import LogoDesign from './components/ServicesPages/Logodesign.jsx';
import Packaging from './components/ServicesPages/Packaging.jsx';
import Hoarding from './components/ServicesPages/Hoarding.jsx';
import DigitalMarketingTraning from './components/AboutUs/DigitalMarketingTraning.jsx';
import Blog from './components/AboutUs/Blog.jsx';
import Seo from './components/DigitalMarketing/Seo.jsx';
import Smm from './components/DigitalMarketing/Smm.jsx';
import Lead from './components/DigitalMarketing/Lead.jsx';
import Influencer from './components/DigitalMarketing/Influencer.jsx';
import Wordpress from './components/WebDevelopment/Wordpress.jsx';
import App from './components/WebDevelopment/App.jsx';
import Reactjs from './components/WebDevelopment/Reactjs.jsx';
import Shopify from './components/E-commerce/Shopify.jsx';
import Magento from './components/E-commerce/Magento.jsx';
import Woocommerce from './components/E-commerce/Woocommerce.jsx';
import Ai from './components/Ai/Ai.jsx';
import PrMedia from './components/Prmedia/Pr&Media.jsx';
import Cloud from './components/Cloud/Cloud.jsx';

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
        path: "/services",
        element: <Services />
      },
     
      {
        path:"/branding/logodesign",
        element:<LogoDesign/>
      },
      {
        path:"/branding/packaging",
        element:<Packaging/>
      },
      {
        path:"/branding/hoarding",
        element:<Hoarding/>
      },
     {
      path:"/aboutus",
      element:<AboutUs/>
     },
     {
      path:"/digitalmarketingtraning",
      element:<DigitalMarketingTraning/>
     },
     {
      path:"/digitalmarketing/seo",
      element:<Seo/>
     },
     {
      path:"/digitalmarketing/smm",
      element:<Smm/>
     },
     {
      path:"/digitalmarketing/lead-gen",
      element:<Lead/>
     },
     {
      path:"/digitalmarketing/influencer",
      element:<Influencer/>
     },
     {
      path:"/webdevelopment/wordpress",
      element:<Wordpress/>
     },
     {
      path:"/webdevelopment/app",
      element:<App/>
     },
     {
      path:"/webdevelopment/reactjs",
      element:<Reactjs/>
     },
     {
      path:"/e-commerce/shopify",
      element:<Shopify/>
     },
     {
      path:"e-commerce/magento",
      element:<Magento/>
     },
     {
      path:"/e-commerce/woocommerce",
      element:<Woocommerce/>
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
      path:"/Pr&media",
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
