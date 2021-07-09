import React from 'react';
import '../HStylies/HBlogs.modules.css';
import { Container } from '@material-ui/core';
import HBContent from '../HComponents/HBContent';
import image1 from '../../../Assets/Home-images/blog-1.jpg';
import image2 from '../../../Assets/Home-images/blog-2.jpg';
import image3 from '../../../Assets/Home-images/blog-3.jpg';

const HBlogs = () => {
    const blogs = [
        { "_id": 1, "title": "What and why is react.js", "image": image1 },
        { "_id": 2, "title": "What and why is node.js", "image": image2 },
        { "_id": 3, "title": "What is mongodb cloud.js", "image": image3 },
    ];

    return (
        <section>
            <Container>
                <div className="blog-header">
                    <h1>Ours blog services</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, libero.</p>
                </div>
                <div className="blogs-content">
                    {
                        blogs.map(blog => <HBContent
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