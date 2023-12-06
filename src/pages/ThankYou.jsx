import { Icon } from '@iconify/react';
import React from 'react';
import './css/thankyou.css'
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className='wrapper'>
            <Icon icon="material-symbols:mark-email-read-sharp" width='100' style={{color: '#088178'}}/>
           <h1>Thanks For Submitting</h1> 
           <p>Your message has been sent. Thank you for joining WM</p>
           <Link to='/'>Go Home</Link>
        </div>
    );
};

export default ThankYou;