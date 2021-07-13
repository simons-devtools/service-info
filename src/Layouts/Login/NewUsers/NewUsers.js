import React from 'react';
import './NewUsers.modules.css';

const NewUsers = () => {
    return (
        <div className="form-container">
            <h2>Login new users content</h2>
            <form action="">
                <input type="username" name="" id="" />
                <input type="email" name="" id="" /> <br />
                <input type="password" name="" id="" />
                <input type="tel" name="" id="" /> <br />
                <input type="url" name="" id="" />
                <textarea name="" id="" cols="50" rows="20"></textarea>
                <button type="submit">Submit now</button>
            </form>
        </div>
    );
};

export default NewUsers;