import React from 'react';
import './OldUsers.modules.css';
import google from '../../../Assets/Icons/google.png';

const OldUsers = (props) => {
    const { handleSubmit, newUser, handleBlur, setNewUser, handleForm, googleSignIn } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onBlur={handleBlur} placeholder="example@gmail.com" required /> <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="example => 'a-z' + '0-9' + 'a-z' > 8" required /> <br />
                <button type="submit" className="submit-btn">Login</button>
            </form>

            {/* For the toggle/conditional checkbox */}
            <div className="toggle-checkbox">
                <small>You have no account? </small>
                <small onClick={() => setNewUser(!newUser)} style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>click</small>
            </div>

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