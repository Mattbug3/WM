import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='text-container'>
                <h1>NEW YEAR NEW YOU</h1>
                <p>Freshen up your wardrobe with our NEW collections.</p>
            </div>
                <div className='hero-latest-btn'>
                    <Link to='/shop'>Shop Now</Link>
                </div>
        </div>
    );
};

export default Hero;