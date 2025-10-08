import Router from "./Router.jsx";
import {useEffect, useState} from "react";
import Loader from "./components/Helper/Loader.jsx";
import CustomCursor from "./components/HomeOne/CustomCursor.jsx";
import GlobalParticles from "./components/GlobalParticles.jsx";
import CustomCursor2 from "./components/HomeOne/CustomCursor2.jsx";
import Socials from "./components/Socialicons.jsx";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>

                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
             <Router />
            </div>
            <CustomCursor2/>
            <Socials/>
            <GlobalParticles particleCount={20} maxSpeed={0.45} />
            <CustomCursor
                hideNative={true}
                accent="#ff5a5f"
                dotSize={10}
                outlineSize={28}
                smoothing={0.22}
      />
        </>
    );
}

export default App;
