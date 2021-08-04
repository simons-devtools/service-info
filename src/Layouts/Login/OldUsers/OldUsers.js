import React from 'react';
import './OldUsers.modules.css';
import google from '../../../Assets/Icons/google.png';

const OldUsers = ({ user, googleSignIn, handleForm }) => {
    return (
        <div>
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
    );
};

export default OldUsers;