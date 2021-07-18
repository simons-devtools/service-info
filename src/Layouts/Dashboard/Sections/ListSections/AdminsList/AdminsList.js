import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';

const AdminsList = () => {
    const [admins, setAdmins] = useState([]);

    // Loaded the all admins:
    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(response => response.json())
            .then(data => setAdmins(data))
    }, [])
    // console.log(admins);

    return (
        <div className="list-container">
            <h2>Admins list contents</h2>
            <ul>
                {
                    admins.map(admin => <li key={admin._id}> {admin.email}</li>)
                }
            </ul>
        </div >
    );
};

export default AdminsList;