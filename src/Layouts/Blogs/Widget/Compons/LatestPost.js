import React from 'react';
import './LatestPost.modules.css';
import { Link } from 'react-router-dom';
import image1 from '../../../../Assets/Blog-images/blog-post-1.jpg'
import image2 from '../../../../Assets/Blog-images/blog-post-2.jpg'
import image3 from '../../../../Assets/Blog-images/blog-post-3.jpg'
import image4 from '../../../../Assets/Blog-images/blog-post-3.jpg'
import image5 from '../../../../Assets/Blog-images/blog-post-1.jpg'
import image6 from '../../../../Assets/Blog-images/blog-post-2.jpg'

const LatestPost = () => {
    const posts = [
        { "_id": 1, "image": image1 },
        { "_id": 2, "image": image2 },
        { "_id": 3, "image": image3 },
        { "_id": 4, "image": image4 },
        { "_id": 5, "image": image5 },
        { "_id": 6, "image": image6 },
    ];

    return (
        <div className="posts-wrapper">
            <h2>Latest posts</h2>
            <ul className="posts-body">
                {
                    posts.map((post) => <li key={post._id}>
                        <Link to="/blogs">
                            <img src={post.image} alt="img" />
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LatestPost;