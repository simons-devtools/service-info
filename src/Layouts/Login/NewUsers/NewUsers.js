import React from 'react';
import './NewUsers.modules.css';

const NewUsers = ({ user, googleSignIn, handleForm }) => {
    return (
        <form action="#">
            <input type="firstname" placeholder="First name" /> <br />
            <input type="lastname" placeholder="Last name" /> <br />
            <input type="email" placeholder="Email address" /> <br />
            <input type="password" placeholder="New password" /> <br />
            <button type="submit" className="submit-btn">Sign Up</button>
        </form>
    );
};

export default NewUsers;