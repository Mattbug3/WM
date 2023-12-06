import React, { useState } from 'react';
import './item.css'
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react'

const Item = (props) => {
    const { image, name, price, id } = props.item

    return (
        <div className='item'>
            <Link to={`/product/${id}`}>
                <div className="image-container">
                    <img 
                        onClick={window.scrollTo(0,0) } 
                        key={id}
                        src={
                            image
                        } alt="" 
                    />
                </div>
            
                <div className='name-price-cart-container'>
                    <p className='name'>{name}</p>
                    <div className="item-prices-cart-container">
                        <div className="item-price-new">
                            ${price}
                        </div>
                        <div className='shopping-cart-container'>
                            <ShoppingCart size={window.screen.width <= 535 ? 18 : 27} />
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    );
};

export default Item;