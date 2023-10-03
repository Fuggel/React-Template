import React from "react";
import { useLocation } from "react-router-dom";
import { routeConfig } from "../../config/routeConfig";


const Header: React.FC = () => {
    const location = useLocation();
    const currRoute = routeConfig.find((r) => r.path === location.pathname);

    return (
        <header className="header">
            <h2>{currRoute?.pageTitle}</h2>
        </header>
    );
};


export default Header;