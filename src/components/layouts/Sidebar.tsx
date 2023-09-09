import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faHome, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { appViewActions, selectDarkMode } from "../../store/appView";
import Icon from "../ui-elements/Icon";


const Sidebar: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="sidebar" data-testid="sidebar">
            <div className="sidebar-logo">
                {darkMode ?
                    <img src="/assets/template-logo-dark.svg" alt="Template Logo Dark" />
                    :
                    <img src="/assets/template-logo.svg" alt="Template Logo Light" />
                }
                <p>Template GmbH</p>
            </div>
            <section className="sidebar-section">
                <p className="sidebar-section-title">General</p>
                <Link data-testid="home" className={`sidebar-menu-item ${isActive("/") && "active"}`} to="/">
                    <Icon type="svg" size="xs" icon={faHome} />
                    <p>Home</p>
                </Link>
            </section>
            <section className="sidebar-section-bottom">
                <p className="sidebar-section-title">Settings</p>
                <div className="sidebar-menu-item">
                    <Icon type="toggle" icon={darkMode ? faSun : faMoon} onClick={() => dispatch(appViewActions.toggleDarkMode())} />
                </div>
            </section>
        </div>
    );
};


export default Sidebar;