import React from 'react';
import './footer.css'
import footer_logo from '../asset/logo-no-background.png'
import { InstagramLogo, LinkedinLogo, PinterestLogo, YoutubeLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to='/'>about us</Link></li>
                            <li><Link to='/'>our services</Link></li>
                            <li><Link to='/'>privacy policy</Link></li>
                            <li><Link to='/'>affiliate program</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><Link to='/'>FAQ</Link></li>
                            <li><Link to='/'>shipping</Link></li>
                            <li><Link to='/'>returns</Link></li>
                            <li><Link to='/'>order status</Link></li>
                            <li><Link to='/'>payment options</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online Shop</h4>
                        <ul>
                            <li><Link to='/'>dresses</Link></li>
                            <li><Link to='/'>jumpers & hoodies</Link></li>
                            <li><Link to='/'>trousers</Link></li>
                            <li><Link to='/'>soprts & active wear</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className='social-icons'>
                            <Link to='/'><InstagramLogo size={20}/></Link>
                            <Link to='/'><PinterestLogo size={20}/></Link>
                            <Link to='/'><LinkedinLogo size={20}/></Link>
                            <Link to='/'><YoutubeLogo size={20}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;