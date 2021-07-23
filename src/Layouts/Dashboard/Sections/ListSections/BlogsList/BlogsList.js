import React from 'react';
import '../ListStyles.modules.css';
import { useEffect } from 'react';
import { useState } from 'react';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import BlogListCompon from './BlogListCompon';
import View from '../Modals/View';
import Edit from '../Modals/Edit';
import Delete from '../Modals/Delete';

const BlogsList = () => {
    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [optionValue, setOptionValue] = useState('');

    // Loaded the all blog:
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    // .....
    const handleClose = (addedValue) => {
        setOptionValue(addedValue);
        if (addedValue === 'View') {
            const optionView = document.getElementById('optionView')
            optionView.style.display = 'block';
        }
        else if (addedValue === 'Edit') {
            const optionEdit = document.getElementById('optionEdit')
            optionEdit.style.display = 'block';
        }
        else if (addedValue === 'Delete') {
            const optionDelete = document.getElementById('optionDelete')
            optionDelete.style.display = 'block';
        }
        else {
            console.log('Value of null');
        }
        setAnchorEl(null);
    };

    // .....
    const modalClose = (addedClose) => {
        if (optionValue === 'View') {
            const optionView = document.getElementById('optionView')
            optionView.style.display = 'none';
        }
        else if (optionValue === 'Edit') {
            const optionEdit = document.getElementById('optionEdit')
            optionEdit.style.display = 'none';
        }
        else if (addedClose === 'Delete') {
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
            <div>
                <div id="optionView" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <View
                        singleBlog={singleBlog}
                        modalClose={modalClose}
                    />
                </div>
                <div id="optionEdit" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <Edit singleBlog={singleBlog} />
                </div>
                <div id="optionDelete" className="option">
                    <strong onClick={modalClose} className="cross">X</strong>
                    <Delete singleBlogId={singleBlog._id} />
                </div>
            </div>

            {/* ..... */}
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
                                    setSingleBlog={setSingleBlog}
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
        </div >
    );
};

export default BlogsList;