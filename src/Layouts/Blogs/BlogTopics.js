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

    // Loaded the (same-topics) blogs:
    useEffect(() => {
        fetch(`https://hnomism52server.herokuapp.com/bloggers/${blogTopics}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogTopics])

    return (
        <main>
            <Header2 />
            <BlogTopicsPage blogs={blogs} />
            <Footer />
        </main>
    );
};

export default BlogTopics;