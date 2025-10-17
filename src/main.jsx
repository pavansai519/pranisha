import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ErrorBoundary>
             <HelmetProvider>
                <App />
            </HelmetProvider>
        </ErrorBoundary>
    </React.StrictMode>
);