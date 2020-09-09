import React from "react";
import './Login.css';

import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider)
            .then( res => {
                console.log(res);
                dispatch({
                    type : actionTypes.SET_USER,
                    user: res.user
                })
            }).catch( err => {
                console.log(err);
            })
    }

    return (
        <div className="Login">
            <div className="Login__logo">
                <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" />
            </div>
            <button onClick={signIn} type="submit">Sign in</button>
        </div>
    )
}

export default Login;