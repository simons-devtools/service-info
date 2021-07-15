import React from 'react';
import Header2 from '../Default/Header2/Header2';
import SinglePage from './SinglePage/SinglePage';
import Footer from '../Default/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogSingle = () => {
    const { blogId } = useParams();
    const [singleBlog, setSingleBlog] = useState({});
    const [blogs, setBlogs] = useState([]);
    // console.log('Single blog=', singleBlog);

    useEffect(() => {
        fetch(`http://localhost:5000/blog-single/${blogId}`)
            .then(res => res.json())
            .then(data => setSingleBlog(data))
    }, [blogId])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <main>
            <Header2 />
            <SinglePage
                singleBlog={singleBlog}
                blogs={blogs}
            />
            <Footer />
        </main>
    );
};

export default BlogSingle;