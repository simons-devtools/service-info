import React from 'react';
import { useState } from 'react';


const Archive = ({ blogs }) => {
    const [archived, setArchived] = useState([])

    // .....


    // Handle blur func:
    const handleGetMonth = (event) => {
        let newMonth = event.target.value;
        const newBlogs = blogs.filter(blog => blog.date === newMonth)
        setArchived(newBlogs);
    }
    console.log(archived);

    // Archived styles:
    const heading = {
        color: '#999',
        fontSize: '20px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginTop: '30px',
    }

    return (
        <div>
            <h2 className={heading}>Archived</h2>
            <input onBlur={handleGetMonth} type="month" name="month" id="month" />
        </div>
    );
}
export default Archive;