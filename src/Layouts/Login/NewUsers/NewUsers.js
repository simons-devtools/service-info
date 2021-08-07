import React from 'react';
import './NewUsers.modules.css';

const NewUsers = (props) => {
    const { handleSubmit, handleBlur } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" onBlur={handleBlur} placeholder="UserName must be (a-z > 14)" required /> <br />
                <input type="email" name="email" onBlur={handleBlur} placeholder="example@gmail.com" required /> <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="example => 'a-z' + '0-9' + 'a-z' > 8" required /> <br />
                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default NewUsers;