import React from 'react';
import './OldUsers.modules.css';

const OldUsers = ({ user, googleSignIn, googleSignOut }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Google authentication</h1>
            {
                user.isSiggedIn ? <button onClick={googleSignOut}>Google Sign Out</button> :
                    <button onClick={googleSignIn} style={{ padding: "10px 30px" }}>Google Sign In</button>
            }
        </div>
    );
};

export default OldUsers;