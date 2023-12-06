import React from 'react';
import './css/bestSellers.css'
import new_collections from '../components/asset/best-sellers'
import Item from '../components/items/item';

const BestSellers = () => {
    return (
        <div className='new-collectons'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, index) => {
                    return <Item item={item} key={index}/>
                })}
            </div>
        </div>
    );
};

export default BestSellers;