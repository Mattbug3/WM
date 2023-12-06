import React from 'react';
import './popular.css'
import data_product from '../asset/popular'
import Item from '../items/item';

const Popular = () => {

    
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-item'>
                {
                data_product.map((item, i)=>{
                  return <Item 
                   key={i} item={item} />
                })}
            </div>
        </div>
    );
};

export default Popular;