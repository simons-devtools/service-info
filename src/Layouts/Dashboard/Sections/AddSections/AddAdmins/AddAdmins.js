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
        const adminsData = {
            name: data.name,
            email: data.email,
            role: data.role,
            date: data.date,
            biodata: data.biodata,
            image: photoUrl,
        };
        const url = `https://hnomism52server.herokuapp.com/addAdmins`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminsData)
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
            <h2>Add admins to the cloud storage</h2>
            <small>Note: Roles must be have [ 1. manager / 2. designer / 3. developer ]</small>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-contents">
                    <div className="left-input">
                        <input type="name" placeholder="Name" {...register("name", { required: true })} /> <br />
                        <input type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                        <input type="role" placeholder="Role" {...register("role", { required: true })} /> <br />
                    </div>

                    <div className="middle-input">
                        <input type="file" onChange={handleImageUpload} /> <br />
                        <input type="date" {...register("date", { required: true })} /> <br />
                    </div>

                    <div className="right-input">
                        <textarea type="biodata" placeholder="Admin Biodata" {...register("biodata", { required: true })} />
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