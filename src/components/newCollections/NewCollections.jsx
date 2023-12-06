import React from 'react';
import './newCollections.css'
import new_collections from '../asset/new_collections'
import Item from '../items/item';

const NewCollections = () => {
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

export default NewCollections;