import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faHome, faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { appViewActions, selectDarkMode } from "../../store/appView";
import Icon from "../ui-elements/Icon";
import ToggleSwitch from "../ui-elements/ToggleSwitch";


const Sidebar: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    const isActive = (path: string) => location.pathname === path;

    const iconStyles: React.CSSProperties = {
        position: "absolute",
        top: "2px",
        fontSize: "1.4rem",
        color: "#fff"
    };

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
                    <ToggleSwitch
                        onChange={() => dispatch(appViewActions.toggleDarkMode())}
                        checked={darkMode}
                        testId="dark-mode"
                        uncheckedIcon={<Icon icon={faMoon} type="custom" style={{ ...iconStyles, right: 5 }} />}
                        checkedIcon={<Icon icon={faLightbulb} type="custom" style={{ ...iconStyles, left: 6 }} />}
                    />
                </div>
            </section>
        </div>
    );
};


export default Sidebar;