import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { Container } from '@material-ui/core';
import LoginMain from './LoginMain/LoginMain';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSiggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    // Google Sign In Func
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((res) => {
                const { photoURL, displayName, email } = res.user;
                const siggedInUser = {
                    isSiggedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(siggedInUser);
                storeAuthToken(); // Store Auth Token
                setTimeout(() => {
                    alert('Now you are successfully signed in.');
                }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                // Send token to your backend via HTTPS
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Google Sign Out Func
    const googleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const siggedOutUser = {
                    isSiggedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(siggedOutUser);
                setLoggedInUser(siggedOutUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <LoginMain
                user={user}
                googleSignIn={googleSignIn}
            />
        </Container>
    );
};

export default Login;