import React from 'react';
import './BlogPage.modules.css';
import loading from '../../../Assets/Icons/load.gif';
import { Container } from '@material-ui/core';
import BlogContent from './Compons/BlogContent';
import Widget from '../Widget/Widget';

const BlogPage = ({ blogs }) => {
    return (
        <Container>
            <section className="blog-wrapper">
                {/* Blogs contents */}
                <div className="blog-contents">
                    {
                        blogs.length <= 0 ? <img src={loading} alt="" className="loading" /> :
                            blogs.map(blog => <BlogContent key={blog._id} blog={blog} />)
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