import React from "react";
import './App.css';


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";


function App() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="facebook-clone-youtube-tutorial">
            {
                (!user) ? <Login /> : 
                (
                    <>
                        <Header />
                        <div className="facebook-clone-youtube-tutorial__body">
                            <Sidebar />
                            <Feed />
                        </div>
                    </>
                )
            }
            
        </div>
    );
}

export default App;
