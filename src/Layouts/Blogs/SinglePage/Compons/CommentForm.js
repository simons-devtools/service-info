import React from "react";
import './CommentForm.modules.css';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../../App";
import { useHistory } from "react-router-dom";

const CommentForm = ({ singleBlog }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    // Submit the blog comment:
    const onSubmit = data => {
        let commentsData = {
            name: data.name,
            email: data.email,
            website: data.website,
            comment: data.comment,
            image: loggedInUser.photo,
            blogID: singleBlog._id,
        };

        if (!loggedInUser.isSiggedIn) {
            alert('Hey! Please sign in after follow this form.');
            history.push('/account/login');
        }
        else {
            fetch('http://localhost:5000/addComments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(commentsData)
            })
                .then(res => {
                    alert('Your are successfully review my project blog.');
                    history.push('/blogs');
                });
        }
    };

    return (
        <div className="blog-comment-wrapper">
            <h2>Keep in touch</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="comment-info">
                    <input type="name" placeholder="Name" {...register("name", { required: true })} />
                    <input type="email" placeholder="Email" {...register("email", { required: true })} />
                    <input type="website" placeholder="Website" {...register("website", { required: true })} />
                </div>
                <div className="comment-detail">
                    <textarea type="comment" placeholder="Comment" {...register("comment", { required: true })} />
                    <input type="submit" value="Comment" className="cmt-submit-btn" />
                </div>
            </form>
        </div>
    );
}

export default CommentForm;