import React from "react";
import { useLocation } from "react-router-dom";


const Header: React.FC = () => {
    const location = useLocation();
    let pageTitle = "";

    switch (true) {
        case location.pathname === "/":
            pageTitle = "Home";
            break;
        default:
            pageTitle = "";
            break;
    }

    return (
        <header className="header">
            <h2>{pageTitle}</h2>
        </header>
    );
};


export default Header;