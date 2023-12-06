import React, { useEffect, useState } from 'react';
import './productDisplay.css'
import star_icon from '../asset/star_icon.png'
import star_dull_icon from '../asset/star_dull_icon.png'
import { useCart } from 'react-use-cart';
import ImageSlider from './ImageSlider'



const ProductDisplay = ({product}) => {

    const [selectedSize, setSelectedSize] = useState('')
    product.size = selectedSize
    const [num, setNum] = useState(1)
    const { addItem } = useCart()
    const [spanSize, setSpanSize] = useState('S')

    function decreaseNum(){
        const initialNum = num === 1;
        const decreasedNum = initialNum ? initialNum : num - 1
        setNum(decreasedNum)
    }

    function handleAddBtn(){
        setSpanSize(selectedSize)
        selectedSize !== '' && addItem(product, num)
    }

    return (
        <div className='productdisplay'>
            <div className="productudisplay-left">
                 <div className="productdisplay-img-list">
                    {
                        product.smallImgs.map(image => (
                            <div>
                                <img 
                                    src={image} 
                                    alt="" 
                                />
                            </div>
                        ))
                    }
                </div>
                
                <div className='productdisplay-main-img'>
                    <ImageSlider product={product}/>       
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-rigth-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-new">${product.price}</div>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div className = {selectedSize === 'S' && 'active'} onClick={() => {setSelectedSize('S'); setSpanSize('S')}} >S</div>
                        <div className = {selectedSize === 'M' && 'active'} onClick={() => {setSelectedSize('M'); setSpanSize('M')}}>M</div>
                        <div className = {selectedSize === 'L' && 'active'} onClick={() => {setSelectedSize('L'); setSpanSize('L')}}>L</div>
                        <div className = {selectedSize === 'XL' && 'active'} onClick={() => {setSelectedSize('XL'); setSpanSize('XL')}}>XL</div>
                        <div className = {selectedSize === 'XXL' && 'active'} onClick={() => {setSelectedSize('XXL'); setSpanSize('XXL')}}>XXL</div>
                    </div>
                </div>
                {
                    <div className='input-button-container'>
                        <div className="quantity-container">
                            <div className='minus' onClick={decreaseNum}>-</div>
                            <input  type="text" value={num > 1 ? num : 1} />
                            <div className='plus' onClick={() => {setNum(num+1)}}>+</div>
                        </div> 
                        <button onClick={handleAddBtn}>ADD TO CART</button>
                        {spanSize === '' && <span style={{color: 'red'}}>Please Select a Size</span>}
                    </div>
                }
                <div className="productdisplay-right-descriptiion">
                    {product.description}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;