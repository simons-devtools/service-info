import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Shipment = ({ modalTwoApp, orderId, handleModalClose }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    // Handle form Submition:
    const onSubmit = (data) => {
        let shipmentData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
        };
        const newOrder = { ...loggedInUser, shipment: shipmentData, application: modalTwoApp, orderId: orderId, status: 'pending' };
        // console.log(newOrder); // No 01
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                // console.log('From server response', res) // No 02
                alert('Your order is successfully');
                handleModalClose();
            });
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Your contact information</h3>
                <input placeholder="Your Name" type="name" {...register("name", { required: true })} /> <br />
                <input placeholder="Your Email" type="email" {...register("email", { required: true })} /> <br />
                <input placeholder="Your Phone" type="phone" {...register("phone", { required: true })} /> <br />
                <button type="submit" className="overall-btn">Submit now</button>
            </form>
        </div>
    );
};

export default Shipment;