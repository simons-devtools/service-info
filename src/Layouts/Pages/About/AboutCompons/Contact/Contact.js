import React from 'react';
import './Contact.modules.css';
import image from '../../../../../Assets/About-me/contact.jpg';
import { useForm } from "react-hook-form";
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const Contact = () => {
    const { register, handleSubmit } = useForm();

    // Handle form submit:
    const onSubmit = data => {
        const formData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            description: data.description,
        };

        fetch('https://hnomism52server.herokuapp.com/addContact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                // console.log(res);
                alert('Your information is send to the MsimonH.');
            });
    };

    return (
        <div className="contact-container">
            <div className="contact-img">
                <img src={image} alt="" />
            </div>
            <div className="contact-info">
                <h2>Just write me a letter here or_</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="name" placeholder="Name" {...register("name", { required: true })} /> <br />
                    <input type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                    <input type="phone" placeholder="Phone" {...register("phone", { required: true })} /> <br />
                    <textarea type="textarea" placeholder="Write something here....." {...register("description", { required: true })} /> <br />
                    <button type="submit" className="contact-btn">Send to me</button>
                </form>
            </div>
            <div className="contact-with-me">
                <h2>Contact with me</h2>
                <ul>
                    <li>
                        <PhoneInTalkRoundedIcon className="phone-icon" />
                        <strong>Phone</strong> <br />
                        <span>+880 1799-867752</span>
                    </li>
                    <li>
                        <WhatsAppIcon className="skype-icon" />
                        <strong>Skype Invite</strong> <br />
                        <span>join.skype.com/invite/udIuhoAzSNW1</span>
                    </li>
                    <li>
                        <MailOutlineIcon className="email-icon" />
                        <strong>Email Address</strong> <br />
                        <span>simon.hembrom52@gmail.com</span>
                    </li>
                    <li>
                        <HomeWorkIcon className="home-icon" />
                        <strong>Home Location</strong> <br />
                        <span>Tanore, Rajshahi, Dhaka BD</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;