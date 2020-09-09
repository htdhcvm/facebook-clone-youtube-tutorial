import React, {useState, useEffect } from "react";
import './Feed.css';

import StoryReel from "../StoryReel/StoryReel";
import MessangerSender from "../MessangerSender/MessangerSender";
import Post from "../Post/Post";

import db from "../../firebase";


function Feed() {
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        db.collection("posts").onSnapshot( snapshot => {
            console.log(snapshot);
            setPosts(()=> snapshot.docs.map( doc => ({id : doc.id, data : doc.data()})));

        })
    }, [])


    return (
        <div className="Feed">
            <StoryReel />
            <MessangerSender />
            {
                posts.map((post) => (
                    <Post 
                        key={post.id}
                        profilePic={post.data.profilePic}
                        image={post.data.image}
                        userName={post.data.userName}
                        timestamp={post.data.timestamp}
                        message={post.data.message}
                    />
                ))
            }
           
        </div>
    );
}

export default Feed;
