import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../AddStyles.modules.css.css';

const AddEcommerce = () => {
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        const themesData = {
            name: data.name,
            price: data.price,
            brand: data.brand,
            category: data.category,
            author: data.author,
            date: data.date,
            url: data.url,
            detail: data.detail,
            version: data.version,
            image: photoUrl,
            discount: data.discount,
        };
        const url = `http://localhost:5000/addThemes`;
        // console.log(themesData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(themesData)
        })
            .then(res => {
                alert('Your theme is added to the mongodb products storage!');
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
            <h2>Add themes to the cloud storage</h2>
            <small>Note: Category must be have [ 1. single / 2. multiple / 3. ecommerce ]</small>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-contents">
                    <div className="left-input">
                        <input type="name" placeholder="Name" {...register("name", { required: true })} /> <br />
                        <input type="price" placeholder="Price" {...register("price", { required: true })} /> <br />
                        <input type="brand" placeholder="Brand" {...register("brand", { required: true })} /> <br />
                        <input type="category" placeholder="Category" {...register("category", { required: true })} /> <br />
                        <input type="author" placeholder="Author" {...register("author", { required: true })} /> <br />
                    </div>
                    <div className="middle-input">
                        <input type="file" onChange={handleImageUpload} /> <br />
                        <input type="date" {...register("date", { required: true })} /> <br />
                        <input type="url" placeholder="Url" {...register("url", { required: true })} /> <br />
                        <input type="version" placeholder="Version" {...register("version", { required: true })} /> <br />
                        <input type="discount" placeholder="Discount" {...register("discount", { required: true })} /> <br />
                    </div>
                    <div className="right-input">
                        <textarea type="detail" placeholder="Theme detail" {...register("detail", { required: true })} />
                        <button type="submit" className="submit-button">Post now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEcommerce;