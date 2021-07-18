import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const BlogsList = () => {
    const [blogs, setBlogs] = useState([]);

    // Loaded the all blog:
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs);

    return (
        <div className="list-container">
            <h2>Blogs list contents</h2>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th><SettingsEthernetIcon
                        style={{ verticalAlign: 'middle' }} />
                    </th>
                </tr>
                {
                    blogs.map(blog =>
                        <tr>
                            <td><img src={blog.image} alt="" /></td>
                            <td>{blog.author}</td>
                            <td>{blog.title}</td>
                            <td>{blog.category}</td>
                            <td>{blog.date}</td>
                            <td><MoreVertIcon /></td>
                        </tr>
                    )
                }
            </table>
        </div >
    );
};

export default BlogsList;