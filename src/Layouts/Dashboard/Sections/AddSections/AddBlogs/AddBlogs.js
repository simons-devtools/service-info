import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../AddStyles.modules.css.css';
import Loader from '../../../../Default/Loader/Loader';
import Notification from '../../../../Default/Notification/Notification';

const AddEcommerce = () => {
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);
    const [message, setMessage] = useState({ isSuccess: false, text: '' });

    // For the loading func:
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 1000);
    };

    // Handle form Submition:
    const onSubmit = (data) => {
        handleToggle();
        const blogsData = {
            title: data.title,
            category: data.category,
            author: data.author,
            date: data.month,
            image: photoUrl,
            description: data.description,
            topics: data.topic,
            tags: [
                data.tag1,
                data.tag2,
                data.tag3,
                data.tag4,
            ],
        };
        const url = `https://hnomism52server.herokuapp.com/addBlogs`;
        // console.log(blogsData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogsData)
        })
            .then(res => {
                setMessage({
                    isSuccess: res,
                    text: 'Your are successfully done',
                });
            });
    };

    // Handle Images Upload:
    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);
        const photoData = new FormData();
        photoData.set('key', '7d2598c0cf9adb7c67d11745142e540b'); // For the img hosting provider site api key here!!
        photoData.append('image', e.target.files[0])

        // GET imgbb photo-url and POST to MDB server:
        axios.post('https://api.imgbb.com/1/upload', photoData)
            .then(function (response) {
                setPhotoUrl(response.data.data.display_url);
                // console.log(response.data.data.display_url); // for img url
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="form-main-div">
            <h2>Add blogs to the cloud storage</h2>
            <small>Note: Topics must be have [ 1. creative-design / 2. font-end / 3. back-end / 4. data-storage / 5. basic-javaScript ]</small>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-contents">
                    <div className="left-input">
                        <input type="title" placeholder="Title" {...register("title", { required: true })} /> <br />
                        <input type="category" placeholder="Category" {...register("category", { required: true })} /> <br />
                        <input type="author" placeholder="Author" {...register("author", { required: true })} /> <br />
                        <input type="topic" placeholder="Topic" {...register("topic", { required: true })} /> <br />
                        <input type="month" {...register("month", { required: true })} /> <br />
                    </div>

                    <div className="middle-input">
                        <input type="file" onChange={handleImageUpload} /> <br />
                        <input type="tag1" placeholder="Tag1" {...register("tag1", { required: true })} /> <br />
                        <input type="tag2" placeholder="Tag2" {...register("tag2", { required: true })} /> <br />
                        <input type="tag3" placeholder="Tag3" {...register("tag3", { required: true })} /> <br />
                        <input type="tag4" placeholder="Tag4" {...register("tag4", { required: true })} /> <br />
                    </div>

                    <div className="right-input">
                        <textarea type="description" placeholder="Blog Description" {...register("description", { required: true })} />
                        <button type="submit" className="submit-button">Post now</button>
                    </div>
                </div>
            </form>
            <Loader open={open} />
            {message.isSuccess && <Notification message={message} />}
        </div>
    );
};

export default AddEcommerce;