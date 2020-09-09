import React from "react";


import './Header.css';

import user from "../../assets/img/user.jpg"


import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";

const Header = () => {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="Header">
            <div className="Header__left">
                <FacebookIcon className="logo" />
                <div className="Header__search">
                    <SearchIcon className="Header__search-icon-search"/>
                    <input className="Header__search-input" placeholder="Search"></input>
                </div>
            </div>
            <div className="Header__middle">
                <HomeIcon />
                <FlagIcon />
                <SubscriptionsIcon />
                <SupervisedUserCircleIcon />
                <StorefrontIcon />
            </div>
            <div className="Header__right">
                <Avatar src={user.photoURL} />
                <span className="Header__right-name">{user.displayName}</span>
            </div>
        </div>
    )
}

export default Header;