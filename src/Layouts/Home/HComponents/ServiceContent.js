import React from 'react';

const ServiceContent = (props) => {
    const { name, icon } = props.service;

    return (
        <div className="service">
            <img src={icon} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default ServiceContent;