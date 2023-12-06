import React, { useContext } from 'react';
import './css/shopCategory.css'
import Item from '../components/items/item';
import { useParams, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const ShopCategory = (props) => {

    const { all_product } = useContext(ShopContext)
    const {productGender, productCategory} = useParams()

    const products = productGender
    ? all_product.filter(product => product.gender.toLowerCase() === productGender)
    : all_product

    const products_data = productCategory
    ? products.filter(product => product.category.toLowerCase() === productCategory)
    : products

    return (
        <div className='shop-category'>
            
            <img className="shop-category-banner" src={props.banner} alt='' />
            <div className="shopcategory-products">
                {
                products_data.map((item, index) => {
                    return <Item item={item} key={index} />
                })
                }
            </div>
        </div>
    );
};

export default ShopCategory;