import React, { useContext, useState } from 'react';
import "firebase/auth";
import firebase from "firebase/app";
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
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false); // Checkbox Toggle.
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); // set the context APIs.
    const [user, setUser] = useState({
        isSiggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        success: '',
        error: '',
    });
    const { email, password } = user;

    // Google Sign In Func
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((res) => {
                const { photoURL, displayName, email } = res.user;
                const siggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    isSiggedIn: true,
                    success: true,
                    error: '',
                }
                setLoggedInUser(siggedInUser);
                storeAuthToken(); // Store Auth Token
                setTimeout(() => alert('Now you are successfully signed in'), 2000);
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
                    photo: '',
                    success: false,
                    error: '',
                }
                setLoggedInUser(siggedOutUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Email and Password valided with regular-expretion
    // ------------------------------------------------------
    // onBlur email && pass valided func:
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); // string + @ + string + . + string === spsimon@gmail.com
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8; // any keyword > 8;
            const passwordHasNumber = /\d{1}/.test(e.target.value); // Number (0-9);
            isFieldValid = isPasswordValid && passwordHasNumber; // keyword + number === pass52word (mixed);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // Conditionally submit the form func:
    const handleSubmit = (e) => {
        // For the new users:
        if (newUser && email && password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
                    // console.log('Res user', res.user);
                    const { name, email, photo } = { ...user };
                    const newUserInfo = {
                        name: name,
                        email: email,
                        photo: photo,
                        isSiggedIn: true,
                        success: true,
                        error: '',
                    }
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    updateUserProfile(name);
                    setTimeout(() => {
                        history.replace(from);
                    }, 2000);
                })
                .catch((error) => {
                    const { name, email, photo } = { ...user };
                    const newUserInfo = {
                        name: name,
                        email: email,
                        photo: photo,
                        isSiggedIn: false,
                        success: false,
                        error: error.message,
                    }
                    setUser(newUserInfo);
                });
        }

        // For the old users:
        if (!newUser && email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    // console.log('Res user', res.user);
                    const { displayName, email, photoURL } = res.user;
                    const newUserInfo = {
                        name: displayName,
                        email: email,
                        photo: photoURL,
                        isSiggedIn: true,
                        success: true,
                        error: '',
                    }
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    setTimeout(() => {
                        history.replace(from);
                    }, 2000);
                })
                .catch((error) => {
                    const { name, email, photo } = { ...user };
                    const newUserInfo = {
                        name: name,
                        email: email,
                        photo: photo,
                        isSiggedIn: false,
                        success: false,
                        error: error.message,
                    }
                    setUser(newUserInfo);
                });
        }

        e.preventDefault(); // Stop the reload page
    }


    // Finally update user profile func:
    const updateUserProfile = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({ displayName: name })
            .then((res) => {
                console.log('User profile updated', res);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // .....
    // console.log('User', user);
    console.log('LoggedInUser', loggedInUser.error);

    return (
        <Container>
            <LoginMain
                user={user}
                newUser={newUser}
                googleSignIn={googleSignIn}
                googleSignOut={googleSignOut}
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
                setNewUser={setNewUser}
            />
        </Container>
    );
};

export default Login;