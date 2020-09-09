import React from "react";
import './Post.css';

import {Avatar} from '@material-ui/core';


import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import TelegramIcon from '@material-ui/icons/Telegram';
import ImportExportIcon from '@material-ui/icons/ImportExport';



function Post({profilePic, image, userName, timestamp, message}) {
    return (
        <div className="Post">
            <div className="Post__top">
                <Avatar src={profilePic} className="Post__avatar"/>
                <div className="Post__topInfo">
                    <h3>{userName}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="Post__bottom">
                <p>{message}</p>
            </div>

            <div className="Post__image">
                <img src={image} alt="" />
            </div>


            <div className="Post__options">
                <div className="Post__option">
                    <FavoriteIcon />
                    <span>Like</span>
                </div>
                <div className="Post__option">
                    <ChatBubbleIcon />
                    <span>Comment</span>
                </div>
                <div className="Post__option">
                    <TelegramIcon />
                    <span>Share</span>
                </div>

                <div className="Post__option">
                    <ImportExportIcon />
                </div>

                
            </div>

            
        </div>
    );
}

export default Post;
