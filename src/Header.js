import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
        <div className="header__left">
            <MenuIcon />
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                    alt="" 
                />
            </Link>
        </div>
        <div className="header__input">
            <input 
                onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch} 
                placeholder="Search" 
                type="text" 
            />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
            </Link>
        </div>
        <div className="header__right">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar 
                alt="Ragip Topalli"
                src="https://avatars.githubusercontent.com/u/18445276?s=400&u=29523099e2b0638fc6f84eea6f8df7c6585b40c9&v=4"
            />
        </div>
    </div>
  )
}

export default Header