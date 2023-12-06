import React from 'react';
import './relatedProducts.css'
import data_product from '../asset/data';
import Item from '../items/item';

const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {
                    data_product.map((item, index)=>{
                        return <Item item={item} key={index} />
                    })
                }
            </div>
        </div>
    );
};

export default RelatedProducts;