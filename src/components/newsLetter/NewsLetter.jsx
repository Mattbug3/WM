import React, { useEffect, useState } from 'react';
import './newsLetter.css'
import { Link } from 'react-router-dom';

const NewsLetter = () => {
    const [emial, setEmail] = useState('')

    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            <div>
                <input type="email" placeholder='Your Email Address' required onChange={(e) => setEmail(e.target.value)}/>
                {emial !== '' ? <Link to='/success'>Subscribe</Link>: <Link to=''>Subscribe</Link>}
            </div>
        </div>
    );
};

export default NewsLetter;