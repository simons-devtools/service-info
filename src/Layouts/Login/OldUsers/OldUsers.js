import React from 'react';
import './OldUsers.modules.css';
import logo from '../../../Assets/Icons/logo.png';
import { Container } from '@material-ui/core';

const OldUsers = ({ user, googleSignIn, googleSignOut }) => {
    return (
        <Container>
            <div className="login-wrapper">
                <img src={logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo qui consequuntur aspernatur quis ex esse sit cum velit saepe dolor?</p>
                <h3>Login your google verification account</h3>
                {
                    user.isSiggedIn ? <button onClick={googleSignOut}>Sign Out Now</button> :
                        <button onClick={googleSignIn} style={{ padding: "10px 30px" }}>Sign In Now</button>
                }
            </div>
        </Container>
    );
};

export default OldUsers;