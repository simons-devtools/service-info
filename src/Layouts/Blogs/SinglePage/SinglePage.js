import React from 'react';
import './SinglePage.modules.css';
import { Container } from '@material-ui/core';
import SingleContent from './Compons/SingleContent';
import SingleTag from './Compons/SingleTag';
import SingleReview from './Compons/SingleReview';
import CommentForm from './Compons/CommentForm';
import Widget from '../Widget/Widget';

const SinglePage = ({ blog }) => {
    return (
        <Container>
            <section className="blog-single-wrapper">
                {/* Blog single contents */}
                <div className="blog-single-contents">
                    <SingleContent blog={blog} />
                    <SingleTag />
                    <SingleReview />
                    <CommentForm />
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