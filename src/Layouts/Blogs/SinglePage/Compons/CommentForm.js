import React from "react";
import './CommentForm.modules.css';
import { useForm } from "react-hook-form";

const CommentForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="blog-comment-wrapper">
            <h2>Keep in touch</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="comment-info">
                    <input type="username" placeholder="Name" {...register("username", { required: true })} />
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