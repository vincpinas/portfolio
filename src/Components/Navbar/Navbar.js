import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from '../../Data/SidebarData';
import './Navbar.css';

function Navbar() {
    // Set the state of the navbar to active or not (Initial value of false to not show it on load.)
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <div className="navbar">
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={ showSidebar }/>
            </Link>
            <div className="NavSocials">
                <a className="NavSocialLink" id="Paypal" href="https://paypal.me/VincentPin" target="_blank" rel="noreferrer"><FaIcons.FaPaypal/><span>Buy Me A Tea</span></a>
                <a className="NavSocialLink" id="Github" href="https://github.com/vincpinas" target="_blank" rel="noreferrer"><FaIcons.FaGithub/></a>
                <a className="NavSocialLink" id="Discord" href="https://discord.gg/NaS8Z5BXxH" target="_blank" rel="noreferrer"><FaIcons.FaDiscord/></a>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={ showSidebar }>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars/>
                    </Link>
                </li>
                { SidebarData.map((item, index) => {
                    // Check if the current URL matches with any of the item path's to set it as the active link in the navbar.
                    if (window.location.href.endsWith(item.path) || window.location.href.endsWith(item.path + "/")) {
                        item.className = 'activeNavLink'
                    // If none of them match set the standard styling.
                    } else if (!window.location.href.endsWith(item.path)) {
                        item.className = 'nav-text'
                    }

                    // Set the tab title to match with the current page.
                    if (item.className === 'activeNavLink') {
                        document.title = 'Vincent Pinas • ' + item.title
                    }
                    return (
                        <li key={index} className={item.className}>
                            <Link to ={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar;
