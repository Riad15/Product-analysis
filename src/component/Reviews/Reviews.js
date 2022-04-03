import React from 'react';
import useReview from '../../useReview';
import User from '../User/User';
import './Reviews.css'

const Reviews = () => {
    const [users, setUsers] = useReview();
    return (
        <div className='carts'>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
        </div>
    );
};

export default Reviews;