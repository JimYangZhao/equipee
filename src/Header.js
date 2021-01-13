import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className='header'>
            <img 
                className="header_icon"
                src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                alt="logo-icon"
            />

            <div className='header_center'>
                <input type="text" />
                <SearchIcon />

            </div>
            <div className='header_right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
