import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ListStyles.modules.css';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import BlogListCompon from './BlogListCompon';

const BlogsList = () => {
    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState({});
    // .....
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // Loaded the all blog:
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    // .....
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option, addedBlog) => {
        setSingleBlog(addedBlog);
        setAnchorEl(null);

        const myOption = document.getElementById('myOption');
        myOption.style.display = 'block';
        console.log(option);
        console.log(addedBlog);
    };

    return (
        <div>
            <h2>Blogs list contents</h2>
            <div id="myOption" className="option">
                <div className="option-body">
                    <h2>{singleBlog.title}</h2>
                </div>
            </div>

            <div className="list-container">
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
                                <td><BlogListCompon
                                    blog={blog}
                                    anchorEl={anchorEl}
                                    open={open}
                                    handleClick={handleClick}
                                    handleClose={handleClose}
                                /></td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div >
    );
};

export default BlogsList;