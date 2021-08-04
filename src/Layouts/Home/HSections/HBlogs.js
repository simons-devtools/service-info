import React, { useEffect } from 'react';
import '../HStylies/HBlogs.modules.css';
import { Container } from '@material-ui/core';
import HBContent from '../HComponents/HBContent';
import { useState } from 'react';

const HBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const newBlogs = blogs.slice(0).reverse();
    const fixedBlogs = newBlogs.splice(0, 3);

    // Loaded the blog post for home page:
    useEffect(() => {
        fetch('https://hnomism52server.herokuapp.com/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <section>
            <Container>
                <div className="blog-header">
                    <h1>My blog services</h1>
                    <p>This is my blog sample section. You can also learn web development on my blog services</p>
                </div>
                <div className="blogs-content">
                    {
                        fixedBlogs.map(blog => <HBContent
                            key={blog._id}
                            blog={blog}
                        />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default HBlogs;