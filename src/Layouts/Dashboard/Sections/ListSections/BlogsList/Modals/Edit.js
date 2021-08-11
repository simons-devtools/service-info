import axios from "axios";
import React, { useState } from "react";
import './ModalStyles.modules.css';
import { useForm } from "react-hook-form";

const Edit = ({ singleBlog, modalClose, setMessage, handleToggle }) => {
    const { _id, author, category, title, description, date, topics, tags, image } = singleBlog;
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        handleToggle();
        const modifyData = {
            title: data.title || title,
            category: data.category || category,
            author: data.author || author,
            date: data.month || date,
            image: photoUrl || image,
            description: data.description || description,
            topics: data.topic || topics,
            tags: [
                data.tag1 || tags[0],
                data.tag2 || tags[1],
                data.tag3 || tags[2],
                data.tag4 || tags[3],
            ],
        };
        // console.log(modifyData);
        fetch(`https://hnomism52server.herokuapp.com/updateBlog/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(modifyData)
        })
            .then(response => {
                // console.log(response);
                modalClose('Edit');
                setMessage({
                    isSuccess: true,
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
        <div className="view-body">
            <h2>EDIT: {singleBlog.title}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-content">
                    <div className="left-input">
                        <input type="title" defaultValue={title} {...register("title")} /> <br />
                        <input type="category" defaultValue={category} {...register("category")} /> <br />
                        <input type="author" defaultValue={author} {...register("author")} /> <br />
                        <input type="topic" defaultValue={topics} {...register("topic")} /> <br />
                        <input type="month" defaultValue={date} {...register("month")} /> <br />
                    </div>

                    <div className="middles-input">
                        <input type="file" onChange={handleImageUpload} /> <br />
                        <input type="tag1" defaultValue={tags && tags[0]} {...register("tag1")} /> <br />
                        <input type="tag2" defaultValue={tags && tags[1]} {...register("tag2")} /> <br />
                        <input type="tag3" defaultValue={tags && tags[2]} {...register("tag3")} /> <br />
                        <input type="tag4" defaultValue={tags && tags[3]} {...register("tag4")} /> <br />
                    </div>

                    <div className="right-input">
                        <textarea type="description" defaultValue={description} {...register("description")} />
                        <button type="submit" className="submit-button">Update now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;