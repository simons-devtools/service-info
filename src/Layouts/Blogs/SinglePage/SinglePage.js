import React from 'react';
import './SinglePage.modules.css';
import { Container } from '@material-ui/core';
import SingleContent from './Compons/SingleContent';
import SingleTag from './Compons/SingleTag';
import SingleReview from './Compons/SingleReview';
import CommentForm from './Compons/CommentForm';
import Widget from '../Widget/Widget';
import { useState } from 'react';
import { useEffect } from 'react';
import AuthorReview from './Compons/AuthorReview';

const SinglePage = ({ singleBlog }) => {
    const [comments, setComments] = useState([]);
    const newComments = comments.filter((comment => comment.blogID === singleBlog._id))

    // Loaded the blog single comments:
    useEffect(() => {
        fetch('https://hnomism52server.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <Container>
            <section className="blog-single-wrapper">
                {/* Blog single contents */}
                <div className="blog-single-contents">
                    <SingleContent singleBlog={singleBlog} />
                    <SingleTag singleBlog={singleBlog} />
                    {
                        newComments.length > 0 ? newComments.map(comment => <SingleReview
                            key={comment._id}
                            comment={comment}
                        />) : <AuthorReview />
                    }
                    <CommentForm singleBlog={singleBlog} />
                </div>

                {/* Blog single widgets */}
                <div className="blog-single-widgets">
                    <Widget />
                </div>
            </section>
        </Container>
    );
};

export default SinglePage;