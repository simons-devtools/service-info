import React from 'react';
import './SingleTag.modules.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const SingleTag = (props) => {
    const { tags } = props.blog;

    return (
        <div>
            <ul className="blog-single-tag">
                {
                    tags.map(tag => <li key={tag.length}>
                        <Link to="/blog-single">{tag}</Link>
                    </li>)
                }
            </ul>

            <div className="blog-share-option">
                <h2>SHARE</h2>
                <ul>
                    <li><FacebookIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                    <li><InstagramIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                    <li><LinkedInIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                    <li><TwitterIcon className="share-icons" style={{ fontSize: 'medium' }} /></li>
                </ul>
            </div>
        </div>
    );
};

export default SingleTag;