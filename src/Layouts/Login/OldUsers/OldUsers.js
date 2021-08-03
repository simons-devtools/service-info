import React from 'react';
import './OldUsers.modules.css';
import google from '../../../Assets/Icons/google.png';
import { Container } from '@material-ui/core';

const OldUsers = ({ user, googleSignIn, googleSignOut }) => {
    return (
        <Container>
            <div className="login-container">
                <div className="login-txt">
                    <h2>This is login head</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas iusto, dolorem libero mollitia sit architecto porro voluptatibus debitis odit?</p>
                </div>

                <div className="login-wrapper">
                    <div className="create-account">
                        <h3>SignUp_</h3>
                        <small>Create your new account</small>
                        <form action="#">
                            <input type="firstname" placeholder="First name" /> <br />
                            <input type="lastname" placeholder="Last name" /> <br />
                            <input type="email" placeholder="Email address" /> <br />
                            <input type="password" placeholder="New password" /> <br />
                            <button type="submit" className="submit-btn">Sign Up</button>
                        </form>
                    </div>

                    <div className="login-account">
                        <h3>Login_</h3>
                        <small>Login your account</small>
                        <div className="own-account">
                            <input type="email" placeholder="Email" /> <br />
                            <input type="password" placeholder="Password" /> <br />
                            <button type="submit" className="submit-btn">Login</button>
                        </div>
                        <small>Or_ login your google account</small>
                        <div className="provider-account">
                            <img src={google} alt="" />
                            <button onClick={googleSignIn}>Google Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OldUsers;