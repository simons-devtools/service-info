import React from 'react';
import './OldUsers.modules.css';
import google from '../../../Assets/Icons/google.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const OldUsers = ({ googleSignIn, handleForm }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOutBtn = () => {
        setLoggedInUser({});
        history.push('/');
    }

    return (
        <div>
            <div className="own-account">
                <input type="email" placeholder="Email" /> <br />
                <input type="password" placeholder="Password" /> <br />
                <button type="submit" className="submit-btn">Login</button>
            </div>
            <small>Or_ signIn google account</small>
            <div onClick={handleForm} className="provider-account">
                {
                    loggedInUser.isSiggedIn ?
                        <span
                            onClick={handleSignOutBtn}>
                            <img src={google} alt="" />
                            <button>Sign Out Google Account</button>
                        </span> :
                        <span onClick={googleSignIn}>
                            <img src={google} alt="" />
                            <button>Sign In Google Account</button>
                        </span>
                }
            </div>
        </div>
    );
};

export default OldUsers;