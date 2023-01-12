import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import AppsIcon from '@mui/icons-material/Apps';




function Header({photoURL}) {
  return (
    <div class="header">
      <div  className="header__logo">
        <img src="./image/drive-img.svg"/>
        <span>Drive</span>
      </div>

      <div  className="header__search">
        <SearchIcon/>
        <input type="text" placeholder="Search n Drive "/>
        <FormatAlignCenterIcon/>
      </div>

      <div  className="header__options">
        <span>
        <HelpOutlineIcon/>
        <SettingsIcon/>
        </span>

        <span>
        <AppsIcon/>
        <Avatar src={photoURL}/>
        </span>
      </div>
    </div>
  )
}

export default Header
