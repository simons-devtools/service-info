import React, { useEffect } from 'react';
import './BlogPage.modules.css';
import { Container } from '@material-ui/core';
import BlogContent from './Compons/BlogContent';
import Widget from '../Widget/Widget';
import { useState } from 'react';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <Container>
            <section className="blog-wrapper">
                {/* Blogs contents */}
                <div className="blog-contents">
                    {
                        blogs.map(blog => <BlogContent
                            key={blog._id}
                            blog={blog}
                        />)
                    }
                </div>

                {/* Blogs widgets */}
                <div className="blog-widgets">
                    <Widget blogs={blogs} />
                </div>
            </section>
        </Container>
    );
};

export default BlogPage;