import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Icon } from '@material-ui/core';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
function Header({photoURL}) {
    return (
        <div className="header">
           <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"/>
                <span>Drive</span>
           </div>

           <div className="header__search">
               <Icon>
                   <SearchIcon/>
               </Icon>
                <input type="text" placeholder="Search in Drive"/>
               <Icon>
                   <FormatAlignCenterIcon/>
               </Icon>
           </div>

           <div class="header__icons">
               <span>
                <Icon>
                    <HelpOutlineIcon/>
                </Icon>
                <Icon>
                    <SettingsIcon/>
                </Icon>
                </span>
                <Icon>
                    <AppsIcon/>
                </Icon>
                <Avatar src={photoURL}/>
           </div>
        </div>
    )
}

export default Header
