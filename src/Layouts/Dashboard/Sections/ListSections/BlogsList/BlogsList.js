import React from 'react';
import '../ListStyles.modules.css';
import { useEffect } from 'react';
import { useState } from 'react';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import Options from './Options';
import View from './Modals/View';
import Edit from './Modals/Edit';
import Delete from './Modals/Delete';
import Notification from '../../../../Default/Notification/Notification';

const BlogsList = () => {
    const [blogs, setBlogs] = useState([]);
    const newBlogs = blogs.slice(0).reverse();
    const [singlePost, setSinglePost] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [optionValue, setOptionValue] = useState('');
    const [message, setMessage] = useState({ isSuccess: false, text: '' });

    // Loaded the all blog:
    useEffect(() => {
        fetch('https://hnomism52server.herokuapp.com/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    // Options close and Modal open:
    const handleClose = (addedValue) => {
        if (addedValue === 'View') {
            setOptionValue(addedValue);
            const optionView = document.getElementById('optionView')
            optionView.style.display = 'block';
        }
        else if (addedValue === 'Edit') {
            setOptionValue(addedValue);
            const optionEdit = document.getElementById('optionEdit')
            optionEdit.style.display = 'block';
        }
        else if (addedValue === 'Delete') {
            setOptionValue(addedValue);
            const optionDelete = document.getElementById('optionDelete')
            optionDelete.style.display = 'block';
        }
        else {
            setOptionValue('');
        }
        setAnchorEl(null);
    };

    // Modal close:
    const modalClose = (addedValue) => {
        // console.log(addedValue);
        if (optionValue === 'View') {
            const optionView = document.getElementById('optionView')
            optionView.style.display = 'none';
        }
        else if (optionValue === 'Edit' || addedValue === 'Edit') {
            const optionEdit = document.getElementById('optionEdit')
            optionEdit.style.display = 'none';
        }
        else if (addedValue === 'Delete') {
            const optionDelete = document.getElementById('optionDelete')
            optionDelete.style.display = 'none';
        }
        else {
            setOptionValue('');
        }
    }

    return (
        <div>
            <h2>Blogs list contents</h2>
            {/* Modal content below */}
            <div>
                <div id="optionView" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <View
                        singleBlog={singlePost}
                        modalClose={modalClose}
                    />
                </div>
                <div id="optionEdit" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <Edit
                        singleBlog={singlePost}
                        modalClose={modalClose}
                        setMessage={setMessage}
                    />
                </div>
                <div id="optionDelete" className="option">
                    <Delete
                        singleBlogId={singlePost._id}
                        modalClose={modalClose}
                        setMessage={setMessage}
                    />
                </div>
            </div>

            {/* Main content below */}
            <div className="list-container">
                <table>
                    <tr className="mobile">
                        <th>Blog Images</th>
                        <th>Author</th>
                        <th>Blog Posts Title</th>
                        <th>Blogs Category</th>
                        <th>Date</th>
                        <th><SettingsEthernetIcon
                            style={{ verticalAlign: 'middle' }} />
                        </th>
                    </tr>
                    {
                        newBlogs.map(blog =>
                            <tr>
                                <td><img src={blog.image} alt="" /></td>
                                <td>{blog.author}</td>
                                <td>{blog.title}</td>
                                <td>{blog.category}</td>
                                <td>{blog.date}</td>
                                <td><Options
                                    post={blog}
                                    setSinglePost={setSinglePost}
                                    handleClose={handleClose}
                                    anchorEl={anchorEl}
                                    setAnchorEl={setAnchorEl}
                                    open={open}
                                /></td>
                            </tr>
                        )
                    }
                </table>
            </div>
            {message.isSuccess && <Notification message={message} />}
        </div>
    );
};

export default BlogsList;