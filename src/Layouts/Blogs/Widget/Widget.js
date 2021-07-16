import React from 'react';
import BSearch from './Compons/BSearch';
import Categories from './Compons/Categories';
import LatestPost from './Compons/LatestPost';
import Archive from './Compons/Archive';
import { useState } from 'react';
import { useEffect } from 'react';

const Widget = () => {
    const [blogs, setBlogs] = useState([])

    // Loaded all blogs:
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div style={{ position: 'sticky', top: '0', margin: '18px 0' }}>
            <BSearch />
            <Categories blogs={blogs} />
            <LatestPost blogs={blogs} />
            <Archive blogs={blogs} />
        </div>
    );
};

export default Widget;