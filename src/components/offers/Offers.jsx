import React from 'react';
import './offers.css'
import { Link } from 'react-router-dom'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive Offers</h1>
                <p>The BEST SELLERS FOR YOU</p>
                <Link to='/best-sellers'>Check Now</Link>
            </div>
        </div>
    );
};

export default Offers;