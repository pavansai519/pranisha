import Router from "./Router.jsx";
import {useEffect, useState} from "react";
import Loader from "./components/Helper/Loader.jsx";
import CustomCursor from "./components/HomeOne/CustomCursor.jsx";
import GlobalParticles from "./components/GlobalParticles.jsx";
import Socials from "./components/Socialicons.jsx";
import Preloader from "./components/Preloader.jsx";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    return (
        <>
        {/* <Preloader/> */}
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>

                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
             <Router />
            </div>
           
            <Socials/>
            <GlobalParticles particleCount={15} maxSpeed={0.45} />
            <CustomCursor
               
      />
        </>
    );
}

export default App;
