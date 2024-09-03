import React from 'react';
import { MdMenu } from "react-icons/md";
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <MdMenu className="menu"/>
            <h2>FLAMES CALCULATOR</h2>
        </div>
    )
}

export default Header;