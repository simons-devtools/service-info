import React from 'react';
import { useState } from 'react';


const Archive = ({ blogs }) => {
    const [archived, setArchived] = useState([])
    console.log(archived);

    // Handle blur func:
    const handleGetMonth = (event) => {
        let newMonth = event.target.value;
        const newBlogs = blogs.filter(blog => blog.date === newMonth)
        setArchived(newBlogs);
    }

    return (
        <div>
            <h2 style={{
                color: '#999',
                fontSize: '20px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginTop: '30px',
            }}>Archived</h2>
            <p style={{ color: '#999' }}>Widgets new feature is comming soon.....</p>
            <input
                onBlur={handleGetMonth}
                type="month"
                style={{ width: '227px' }}
            />
        </div>
    );
}
export default Archive;