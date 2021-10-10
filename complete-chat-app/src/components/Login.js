import React from 'react';
import { GoogleOutlined, FacebookOutLined } from '@ant-design/icons';
import "firebase/app";

import { auth } from "../firebase.js";
import firebase from "firebase/app";

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">

                <h2>Welcome to BogdanChat</h2>

                <div
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>

                <br/><br/>

                <div
                className="login-button facebook"
                onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;