import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from "../firebase.js";
import firebase from "firebase/app";

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">

                <img alt="logo" className="logo-img" src="https://img.icons8.com/color/48/000000/chat--v1.png"/><h2>Welcome to BogdanChat</h2>

                <div
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>

                {/*<br/><br/>*/}

                {/*<div*/}
                {/*className="login-button facebook"*/}
                {/*onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}*/}
                {/*>*/}
                {/*    <FacebookOutlined /> Sign in with Facebook*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Login;