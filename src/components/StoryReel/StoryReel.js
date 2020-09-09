import React from "react";
import './StoryReel.css';



import Story from "../Story/Story";



import user_1 from "../../assets/img/user_1.jpg";
import user_2 from "../../assets/img/user_2.jpg";
import user_3 from "../../assets/img/user_3.jpg";
import user_4 from "../../assets/img/user_4.jpg";
import user_5 from "../../assets/img/user_5.jpg";



import story_1 from "../../assets/img/Story_1.jpg";
import story_2 from "../../assets/img/Story_2.jpg";
import story_3 from "../../assets/img/Story_3.jpg";
import story_4 from "../../assets/img/Story_4.jpg";
import story_5 from "../../assets/img/Story_5.jpg";





function StoryReel() {
    return (
        <div className="StoryReel">
            <Story 
                storyImage={story_1}
                profileSrc={user_1}
                title="Flouheforst"
            />
            <Story 
                storyImage={story_2}
                profileSrc={user_2}
                title="Htdhcvm"
            />
            <Story 
                storyImage={story_3}
                profileSrc={user_3}
                title="Sonny Sangha"
            />
            <Story 
                storyImage={story_4}
                profileSrc={user_4}
                title="Frankie"
            />
            <Story 
                storyImage={story_5}
                profileSrc={user_5}
                title="Nah"
            />
       
        </div>
    );
}

export default StoryReel;
