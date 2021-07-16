import React from 'react';
import '../BlogPage/BlogPage.modules.css';
import { Container } from '@material-ui/core';
import Widget from '../Widget/Widget';
import BlogContent from '../BlogPage/Compons/BlogContent';

const BlogTopicsPage = ({ blogs }) => {
    // console.log(blogs)

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

export default BlogTopicsPage;