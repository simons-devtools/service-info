import React from 'react';
import './LoginMain.modules.css';
import image from '../../../Assets/Extra-img/login.png';
import NewUsers from '../NewUsers/NewUsers';
import OldUsers from '../OldUsers/OldUsers';

const LoginMain = ({ googleSignIn }) => {
    // Handle form Submition:
    const handleForm = () => {
        const loginModal = document.getElementById("loginModal");
        loginModal.style.display = "none";
    }

    return (
        <div className="login-container">
            <div className="login-txt">
                <img src={image} alt="" /> <br />
                <h2>Welcome to my membership circle</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur dolor, iure reprehenderit quidem commodi et fugiat alias amet, cupiditate, aut id veritatis labore site.</p>
            </div>

            <div id="loginModal" className="login-wrapper">
                {/* New users */}
                <div className="create-account">
                    <h3>SignUp</h3>
                    <small>Create your new account</small>
                    <NewUsers
                        googleSignIn={googleSignIn}
                        handleForm={handleForm}
                    />
                </div>

                {/* Old users */}
                <div className="login-account">
                    <h3>Login</h3>
                    <small>Login your account</small>
                    <OldUsers
                        googleSignIn={googleSignIn}
                        handleForm={handleForm}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginMain;