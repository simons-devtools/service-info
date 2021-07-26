import React from 'react';
import './OrderStatus.modules.css';
import { useForm } from "react-hook-form";

const OrderStatus = ({ singleOrder, handleCancel }) => {
    const { register, handleSubmit } = useForm();
    const { _id, status } = singleOrder;

    // .....
    const onSubmit = (data) => {
        const updateData = {
            status: data.status || status,
        };
        // console.log(updateData);

        fetch(`http://localhost:5000/updateOrder/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(response => {
                // console.log(response);
                alert('Your order is updated to the mongodb orders storage!');
                handleCancel();
            });
    }

    return (
        <div className="status-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Update your order status</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum beatae praesentium, nam soluta exercitationem, cupiditate labore possimus natus quibusdam odit consequuntur, dignissimos ex neque atque. Ab, tempore repellendus illo, rem voluptate exercitationem natus quam, harum quas corrupti provident vitae. Quis alias ut id itaque repudiandae! Accusamus obcaecati illum soluta?</p>
                <input type="status" defaultValue={status} {...register("status")} />
                <button type="submit" className="update-button">Update</button>
            </form>
        </div>
    );
};

export default OrderStatus;