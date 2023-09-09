import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./store/appView";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";


const App: React.FC = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <div className={`app ${darkMode && "dark-mode"}`} data-testid="app">
            <Sidebar />
            <div className="content">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};


export default App;
