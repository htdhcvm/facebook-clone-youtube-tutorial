import React from "react";
import './Sidebar.css';



import User from "../../assets/img/user.jpg";



import SidebarRow from "../SidebarRow/SidebarRow";



import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import GroupIcon from "@material-ui/icons/Group";
import MessageIcon from "@material-ui/icons/Message";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useStateValue } from "../../StateProvider";



function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="Sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/> 
            <SidebarRow Icon={AddToPhotosIcon} title="Covid-19-information"/> 
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/> 
            <SidebarRow Icon={GroupIcon} title="Frineds"/> 
            <SidebarRow Icon={MessageIcon} title="Messender"/> 
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/> 
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/> 
        </div>
    );
}

export default Sidebar;