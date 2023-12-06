import { AddressBook, EnvelopeSimple, MapPin, Phone } from 'phosphor-react';
import './css/contact.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className='container'>
            <div className="informations">
                <h1 className="title">GET IN TOUCH</h1>
                <p className="phone"><Phone size={20} style={{color: '#088178'}}/><span>Phone:</span> +2(02)2737 6756</p>
                <p className="email"><EnvelopeSimple size={20} style={{color: '#088178'}}/><span>Email: </span> mattadil02@gmail.com</p>
                <p className="address"><MapPin size={20} style={{color: '#088178'}}/><span>Address: </span> 18 Dachang Street, Baoshan, Shanghai, China</p>
            </div>
            <div className="input-container">
                <div className="left">
                    <input type="text" placeholder='Your Name' onChange={(e) => setName(e.target.value) } required/>
                    <input type="email" placeholder='Your Email Address' onChange={(e) => setEmail(e.target.value) } required/>
                    <input type='phone' placeholder='Your Phone Number' onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div className="right">
                    <textarea cols={5} rows={7} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} required />
                </div>
            </div>
            {
                name !== '' && phone !== '' && email !== '' & message !== ''
                ? <Link to='/success'>SEND MESSAGE</Link>
                : <Link to=''>SEND MESSAGE</Link>
            }
        </div>
    );
};

export default Contact;