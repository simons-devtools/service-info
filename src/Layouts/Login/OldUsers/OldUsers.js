import React from 'react';
import './OldUsers.modules.css';
import image from '../../../Assets/Extra-img/login.png';
import google from '../../../Assets/Icons/google.png';
import { Container } from '@material-ui/core';

const OldUsers = ({ googleSignIn }) => {
    const handleForm = () => {
        const loginModal = document.getElementById("loginModal");
        loginModal.style.display = "none";
    }

    return (
        <Container>
            <div className="login-container">
                <div className="login-txt">
                    <img src={image} alt="" /> <br />
                    <h2>Welcome to my membership circle</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur dolor, iure reprehenderit quidem commodi et fugiat alias amet, cupiditate, aut id veritatis labore site.</p>
                </div>

                <div id="loginModal" className="login-wrapper">
                    <div className="create-account">
                        <h3>SignUp</h3>
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
                        <h3>Login</h3>
                        <small>Login your account</small>
                        <div className="own-account">
                            <input type="email" placeholder="Email" /> <br />
                            <input type="password" placeholder="Password" /> <br />
                            <button type="submit" className="submit-btn">Login</button>
                        </div>
                        <small>Or_ signIn google account</small>
                        <div onClick={handleForm} className="provider-account">
                            <span onClick={googleSignIn}>
                                <img src={google} alt="" />
                                <button>Sign In Google Account</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OldUsers;