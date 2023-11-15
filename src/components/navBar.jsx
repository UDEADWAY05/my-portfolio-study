import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import BtnDarkMode from "./btnDarkMode";


const NavBar = () => {
    const activeLink = "nav-list__link--active"
    const normalLink = "nav-list__link"

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo"><strong>Freelancer</strong> portfolio</NavLink>
                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item"><NavLink to="/home"
                            className={
                                ({ isActive }) => isActive ? normalLink + activeLink : normalLink
                        }>Home</NavLink>
                        </li>
                        <li className="nav-list__item"><NavLink to="/projects"
                            className={
                                ({ isActive }) => isActive ? normalLink + activeLink : normalLink
                        }>
                            Projects</NavLink></li>
                        <li className="nav-list__item"><NavLink to="/contact"
                            className={ 
                            ({ isActive }) =>  isActive ? normalLink + activeLink : normalLink
                        }>Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;

