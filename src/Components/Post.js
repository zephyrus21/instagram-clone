import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="username"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{props.username}</h3>
            </div>
            <img className="post__img" src={props.imageUrl} alt="user-logo" />

            <h4 className="post__text">
                <strong>{props.username}</strong> {props.caption}
            </h4>
        </div>
    );
};

export default Post;
