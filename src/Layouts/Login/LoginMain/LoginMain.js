import React from 'react';
import './LoginMain.modules.css';
import image from '../../../Assets/Extra-img/login.png';
import NewUsers from '../NewUsers/NewUsers';
import OldUsers from '../OldUsers/OldUsers';
import { useHistory } from 'react-router-dom';

const LoginMain = (props) => {
    const { user, googleSignIn, handleSubmit, newUser, handleBlur, setNewUser } = props;
    const history = useHistory();

    // Handle form Submition:
    const handleForm = () => {
        history.push('/');
        // const loginModal = document.getElementById("loginModal");
        // loginModal.style.display = "none";
    }

    return (
        <div>
            <div className="login-container">
                <div className="login-txt">
                    <img src={image} alt="" /> <br />
                    <h2>Welcome to my membership circle</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur dolor, iure reprehenderit quidem commodi et fugiat alias amet, cupiditate, aut id veritatis labore site.</p>
                </div>

                <div id="loginModal" className="login-wrapper">
                    <div className="login-body">
                        {newUser ?
                            < div className="create-account">
                                <h3>SignUp</h3>
                                <small>Create your new account</small>
                                <NewUsers
                                    handleSubmit={handleSubmit}
                                    handleBlur={handleBlur}
                                    handleForm={handleForm}
                                />
                            </div> :
                            <div className="login-account">
                                <h3>Login</h3>
                                <small>Login your account</small>
                                <OldUsers
                                    handleBlur={handleBlur}
                                    newUser={newUser}
                                    setNewUser={setNewUser}
                                    handleSubmit={handleSubmit}
                                    googleSignIn={googleSignIn}
                                    handleForm={handleForm}
                                />
                            </div>
                        }
                    </div>

                    {/* Displayed the error/success message */}
                    <div className="">
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'create is' : 'logged in'} successfully</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginMain;