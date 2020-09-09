import React from "react";
import './SidebarRow.css';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function SidebarRow({ src, Icon, title }) {
    return (
        <div className="SidebarRow">
            {
                ( src ) ? <img className="SidebarRow__logo" alt="user" src={src}/> :
                (src && Icon) ? <AccountCircleIcon/> :
                null
            }

            { 
                (Icon) ? <Icon /> :
                null
            }
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;