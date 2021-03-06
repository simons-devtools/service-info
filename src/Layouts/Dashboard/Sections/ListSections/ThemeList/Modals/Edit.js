import axios from "axios";
import React, { useState } from "react";
import './ModalStyles.modules.css';
import { useForm } from "react-hook-form";

const Edit = ({ singleTheme, modalClose, setMessage, handleToggle }) => {
    const { _id, name, price, category, image, date, detail, relaced, version, author, discount, brand, url, react, code } = singleTheme;
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        handleToggle();
        const modifyData = {
            name: data.name || name,
            price: data.price || price,
            brand: data.brand || brand,
            category: data.category || category,
            author: data.author || author,
            date: data.date || date,
            url: data.url || url,
            detail: data.detail || detail,
            version: data.version || version,
            image: photoUrl || image,
            discount: data.discount || discount,
            relaced: data.relaced || relaced,
            react: data.react || react,
            code: data.code || code,
        };
        // console.log(modifyData);
        fetch(`https://hnomism52server.herokuapp.com/updateTheme/${_id}`, {
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
            <h2>EDIT: {singleTheme.name}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-contents">
                    <div className="left-input">
                        <input type="name" defaultValue={name} {...register("name")} /> <br />
                        <input type="price" defaultValue={price} {...register("price")} /> <br />
                        <input type="brand" defaultValue={brand} {...register("brand")} /> <br />
                        <input type="category" defaultValue={category} {...register("category")} /> <br />
                        <input type="author" defaultValue={author} {...register("author")} /> <br />
                        <input type="date" defaultValue={date} {...register("date")} /> <br />
                    </div>

                    <div className="middle-input">
                        <input type="url" defaultValue={url} {...register("url")} /> <br />
                        <input type="version" defaultValue={version} {...register("version")} /> <br />
                        <input type="file" onChange={handleImageUpload} /> <br />
                        <input type="discount" defaultValue={discount} {...register("discount")} /> <br />
                        <input type="month" defaultValue={relaced} {...register("relaced")} /> <br />
                        <input type="react" defaultValue={react} {...register("react")} /> <br />
                        <input type="code" defaultValue={code} {...register("code")} /> <br />
                    </div>

                    <div className="right-input">
                        <textarea type="detail" defaultValue={detail} {...register("detail")} />
                        <button type="submit" className="submit-button">Update now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;