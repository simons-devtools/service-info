import React from 'react';
import './BlogPage.modules.css';
import image1 from '../../../Assets/Blog-images/blog-post-1.jpg';
import image2 from '../../../Assets/Blog-images/blog-post-2.jpg';
import image3 from '../../../Assets/Blog-images/blog-post-3.jpg';
import { Container } from '@material-ui/core';
import BlogContent from './Compons/BlogContent';
import Widget from '../Widget/Widget';

const BlogPage = () => {
    const blogs = [
        { "_id": 1, "title": "What and why react.js", "image": image1, "features": "" },
        { "_id": 2, "title": "What and why node.js", "image": image2, "features": "" },
        { "_id": 3, "title": "What and why mongodb cloud", "image": image3, "features": "" },
    ];

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
                    <Widget />
                </div>
            </section>
        </Container>
    );
};

export default BlogPage;