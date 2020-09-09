import React, {useState} from "react";
import './MessangerSender.css';


import {Avatar} from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import {useStateValue} from "../../StateProvider";

import db from "../../firebase";
import firebase from "firebase";


function MessangerSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{user}, dispatch] = useStateValue();

    const hanldeSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message : input, 
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username : user.displayName,
            image : imageUrl
        })

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="MessangerSender">
            <div className="MessangerSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        className="MessangerSender__input"
                        placeholder={`Waht's is your mind ${user.displayName}`}
                    />
                    <input 
                        value={imageUrl}
                        onChange={event => setImageUrl(event.target.value)}
                        placeholder="image URL"
                    />

                    <button onClick={hanldeSubmit} type="submit">Hidden submit</button>
                </form>
            </div>

            <div className="MessangerSender__bottom">
                <div className="MessangerSender__option">
                    <VideocamIcon style={
                        {color : "red"}
                    }/>
                    <h3>Live Video</h3>
                </div>
                <div className="MessangerSender__option">
                    <PhotoLibraryIcon style={
                        {color : "green"}
                    }/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="MessangerSender__option">
                    <InsertEmoticonIcon style={
                        {color : "orange"}
                    }/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessangerSender;
