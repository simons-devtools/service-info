import React from 'react';
import Footer from '../Default/Footer/Footer';
import BlogTopicsPage from './BlogTopicsPage/BlogTopicsPage';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header2 from '../Default/Header2/Header2';

const BlogTopics = () => {
    const { blogTopics } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bloggers/${blogTopics}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogTopics])

    // .....
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setAllBlogs(data))
    }, [])

    return (
        <main>
            <Header2 />
            <BlogTopicsPage
                blogs={blogs}
                allBlogs={allBlogs}
            />
            <Footer />
        </main>
    );
};

export default BlogTopics;