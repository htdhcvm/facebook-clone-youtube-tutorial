import React from "react";
import {Avatar} from '@material-ui/core';
import './Story.css';


function Story({storyImage, profileSrc, title}) {
    return (
        <div className="Story" style={
            {
                backgroundImage : `url(${storyImage})`
            }
        }>
            <Avatar className="Story_avatar" src={profileSrc} />
            <h4 className="Stroy__title">{title}</h4>
        </div>
    );
}

export default Story;
