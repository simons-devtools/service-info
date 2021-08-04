import React from 'react';
import BSearch from './Compons/BSearch';
import Categories from './Compons/Categories';
import LatestPost from './Compons/LatestPost';
import Archive from './Compons/Archive';
import { useState } from 'react';
import { useEffect } from 'react';

const Widget = () => {
    const [blogs, setBlogs] = useState([]);
    const newBlogs = blogs.slice(0).reverse();

    // Loaded all blogs:
    useEffect(() => {
        fetch('https://hnomism52server.herokuapp.com/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div style={{ position: 'sticky', top: '0', margin: '18px 0' }}>
            <BSearch />
            <Categories blogs={newBlogs} />
            <LatestPost blogs={newBlogs} />
            <Archive blogs={newBlogs} />
        </div>
    );
};

export default Widget;