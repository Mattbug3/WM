import React from 'react';
import './breadcrum.css'
import { CaretRight } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom';

const BreadCrums = ({product}) => {

    const location = useLocation()
    return (
        <div className='breadcrum'>
             <Link to='/'>Home</Link><CaretRight /><Link to='/shop'>Shop</Link><CaretRight /><Link to={`/shop/${product.gender}`}>{product.gender}</Link><CaretRight /><Link to={`/shop/${product.gender}/${product.category}`}>{product.category}</Link>
        </div>
    );
};

export default BreadCrums;