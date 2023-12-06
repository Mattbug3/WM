import React, { useState } from 'react';
import './navbar.css'
import logo from '../asset/wm-logo.png'
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { CaretDown, CaretRight, List, ShoppingCart, X } from 'phosphor-react'


const Navbar = () => {

    const [display, setDisplay] = useState(false)
    const [menList, setMenList] = useState(false)
    const [womenList, setWomenList] = useState(false)
    const [active, setActive] = useState(false)
    const { totalItems, isEmpty } = useCart()

    return (
            <div className="navbar">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <ul className= {active ? "menu active" : "menu"}>
                    <li 
                        className='menu-item close_icon' 
                        onClick={() => {setActive(false)}}
                    >
                        <X size={36} />
                    </li>
                    <li className="menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li 
                        className="menu-item"
                        onMouseEnter={() => setDisplay(true)}
                        onMouseLeave={() => setDisplay(false)}
                    >
                        <Link 
                            className="sub-btn"
                            to="/shop"
                            onClick={() => setDisplay(!display)}
                            >Shop
                            <CaretDown />
                        </Link>
                        <ul className={display ? "sub-menu display" : "sub-menu"}>
                            <li 
                                className="sub-item more"
                                onMouseEnter={() => setMenList(true)}
                                onMouseLeave={() => setMenList(false)}
                            >
                                <Link 
                                    className="more-btn" 
                                    to='/shop/men'
                                    onClick={() => setMenList(!menList)}
                                >   men<CaretRight className={menList ? 'down' : ""} />
                                </Link>
                                <ul className={menList ? "more-menu menList" : "more-menu"}>
                                    <li className="more-item">
                                        <Link to='/shop/men/jackets_coats'>Jackets & Coats</Link>
                                    </li>
                                    <li className="more-item">
                                        <Link to='/shop/men/shirts'>Shirts</Link>
                                    </li>
                                    <li className="more-item">
                                        <Link to='/shop/men/jumpers_hoodies'>Jumpers & Hoodies</Link>
                                    </li>
                                    <li className="more-item">
                                        <Link to='/shop/men/trousers_shorts'>Trousers & Shorts</Link>
                                    </li>
                                </ul>
                            </li>
                            <li 
                                className="sub-item more"
                                onMouseEnter={() => setWomenList(true)}
                                onMouseLeave={() => setWomenList(false)}
                            >
                                <Link 
                                    className="more-btn" 
                                    to="/shop/women"
                                    onClick={() => setWomenList(!womenList)}
                                >women<CaretRight className={womenList ? 'down' : ""} />
                                </Link>
                                <ul className={womenList ? "more-menu womenList" : "more-menu"}>
                                    <li className="more-item">
                                        <Link to="/shop/women/jackets_coats">Jackets & Coats</Link>
                                    </li>
                                    <li className="more-item">
                                        <Link to="/shop/women/dresses">Dresses</Link>
                                    </li>
                                    <li className="more-item">
                                        <Link to="/shop/women/tops">Tops</Link>
                                    </li>
                                    <li className="more-item">
                                        <Link to="/shop/women/sportswear">Spors & Active Wear</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul> 
                    </li>
                    <li className="menu-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='menu-item'>
                        <div className="cart">
                        <Link 
                            to="/cart" 
                            className="cart_icon cart-icon-none"
                        >
                            <div className='cart'>
                               <ShoppingCart size={28} />
                            </div>
                            <div className="nav-cart-count">
                                {isEmpty ? 0 : totalItems}
                            </div>
                        </Link>
                        </div>
                    </li>
                </ul>
            {/* </div> */}
            <div className='mobile'>
                    <Link 
                        to="/cart" 
                        className='cart_icon' 
                        onClick={window.scrollTo(0,0)}
                    >
                        <ShoppingCart size={36} />
                        <div className="nav-cart-count">
                            {isEmpty ? 0 : totalItems}
                        </div>
                    </Link>
                    <List 
                        className="list_icon" 
                        onClick={() =>{setActive(true)}}
                        size={36}
                    />
                </div>
        </div>   
    );
};

export default Navbar;