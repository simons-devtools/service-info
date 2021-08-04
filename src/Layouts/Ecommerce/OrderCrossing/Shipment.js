import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { useState } from 'react';

const Shipment = ({ modalTwoApp, handleModalClose, paymentMethod }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState({ isSuccess: false, text: '' });

    // Handle form Submition:
    const onSubmit = (data) => {
        let shipmentData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
        };
        const newOrder = {
            ...loggedInUser,
            shipment: shipmentData,
            payment: paymentMethod.billing_details,
            application: modalTwoApp,
            orderId: paymentMethod.id,
            status: 'pending'
        };
        fetch('https://hnomism52server.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                setMessage({
                    isSuccess: res,
                    text: 'Your order is successfully'
                });
            });
    };

    // .....
    message.isSuccess && setTimeout(() => {
        handleModalClose(null);
    }, 3000);

    // Form elements styles:
    const input = {
        width: '93%',
        height: '30px',
        padding: '5px 10px',
        marginTop: '15px',
        border: '1px solid #66b1ee',
    };

    return (
        <div className="">
            {
                message.isSuccess ?
                    <div>
                        <h2 style={{ color: 'green' }}>{message.text}</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum vero cumque veritatis voluptas incidunt, vel id error totam voluptatibus?</p>
                    </div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Your contact information</h3>
                        <input placeholder="Your Name" type="name" {...register("name", { required: true })} style={input} /> <br />
                        <input placeholder="Your Email" type="email" {...register("email", { required: true })} style={input} /> <br />
                        <input placeholder="Your Phone" type="phone" {...register("phone", { required: true })} style={input} /> <br />
                        <input placeholder="Your address" type="address" {...register("address", { required: true })} style={input} /> <br />
                        <button type="submit" className="SubmitButton">Procced To Order</button>
                    </form>
            }
        </div>
    );
};

export default Shipment;