import React from 'react';
import Header2 from '../Default/Header2/Header2';
import SinglePage from './SinglePage/SinglePage';
import image from '../../Assets/Blog-images/blog-post-1.jpg';
import Footer from '../Default/Footer/Footer';

const BlogSingle = () => {
    const blog = {
        "_id": 1,
        "title": "What and why react.js",
        "image": image,
        "features": "",
        "tags": [
            "Business",
            "Financial",
            "Investment",
            "Consult"
        ],
    };

    return (
        <main>
            <Header2 />
            <SinglePage blog={blog} />
            <Footer />
        </main>
    );
};

export default BlogSingle;