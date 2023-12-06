import React, { useState } from 'react';
import './css/loginSignup.css'

const LoginSignup = () => {

    const [action, setAction] = useState('Sign up')

    return (
        <div className='login-signup'>
            <div className="loginsignup-container">
                <h1>{action}</h1>
                <div className="loginsignup-fields">
                    {
                        action === 'Sign up' && <input type='text' placeholder='Your Name'/>
                    }
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Submit</button>
                {
                    action === 'Sign up' 
                      ? <p className="loginsignup-login">Already have an account? <span onClick={() => {setAction('Sign in')}}>Sign in</span></p>
                      : <p className="loginsignup-login">Don't have an account? <span onClick={() => {setAction('Sign up')}}>Sign up</span></p>
                }
            </div>
        </div>
    );
};

export default LoginSignup;