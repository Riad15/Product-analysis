import React from 'react';
import useReview from '../../hooks/useReview'
import User from '../User/User';
import './Home.css'

const Home = (props) => {
    const [users, setUsers] = useReview();
    const shortUsers = users.slice(0, 3);
    return (
        <div>
            <div className='home-container'>
                <div className='title'>
                    <h1><span className='title-1st-part'>To Make Life Easier, </span><br />
                        <span className='title-2nd-part'>We Are by Your Side.</span></h1>
                    <p className='product-info'>This is a smart watch. So that there are innumerable features. It can easily measure the distance traveled. Blood pressure can be measured. All kinds of work can be done including phone calls, WhatsApp messages.</p>
                </div>
                <div>
                    <img src="./picture/watch.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='review-title'>Customers Review : </h1>
                <div className='carts'>
                    {
                        shortUsers.map(user => <User
                            key={user.id}
                            user={user}
                        ></User>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;