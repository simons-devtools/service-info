import React from 'react';
import Header2 from '../Default/Header2/Header2';
import Footer from '../Default/Footer/Footer';
import BlogPage from './BlogPage/BlogPage';
import { useState } from 'react';
import { useEffect } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <main>
            <Header2 />
            <BlogPage blogs={blogs} />
            <Footer />
        </main>
    );
};

export default Blog;