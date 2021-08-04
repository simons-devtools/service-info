import React from 'react';
import './Profile.modules.css';
import { useContext } from 'react';
import { UserContext } from '../../../../../App';

const Profile = () => {
    const [loggedInUser] = useContext(UserContext);

    return (
        <div style={{ marginTop: '15px' }}>
            <img src={loggedInUser.photo} alt="" />
            <h4>Name: {loggedInUser.name}</h4>
            <h4>Email: {loggedInUser.email}</h4>
        </div>
    );
};

export default Profile;