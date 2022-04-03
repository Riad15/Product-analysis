import React from 'react';
import './User.css'

const User = (props) => {
    const { name, comment, pic, rating } = props.user;
    return (
        <div className='cart'>
            <div className='name'>
                <img src={pic} alt="" />
                <p>{name}</p>
            </div>
            <div>
                <p> {comment}</p>
                <p> Rating: {rating}</p>
            </div>

        </div>
    );
};

export default User;