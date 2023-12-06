import React, { useContext } from 'react';
import './cartItems.css'
import { useCart } from 'react-use-cart';
import { Trash } from 'phosphor-react';
import { Link } from 'react-router-dom'

const CartItems = () => {
    const { 
        items,
        totalItems,
        isEmpty,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()

    return (
        <div className='cartitems'>
            {items.map((item)=> {
                return (
                    <div key={item.id} className='cartitems-up'>
                        <div className="carticon-product-icon" >
                            <img src={item.image} alt=""  />
                        </div>
                        <div className="title-price-size-qty-container">
                            <div className="title-size-container">
                                <p className='item_name'>{item.name}</p>
                                <p className='size'><span>size: </span>{item.size}</p>
                            </div>
                            <div className='container'>
                                <div className='cartitems-price-quantity-container'> 
                                    <p>${item.price}</p>
                                    <div className="qty-container">
                                        <div
                                            className='plus'
                                            onClick={() => updateItemQuantity(item.id, item.quantity-1)}
                                        >-</div>
                                        <div className="cartitems-quantity">{item.quantity}</div>
                                        <div
                                            className='minus'
                                            onClick={() => updateItemQuantity(item.id, item.quantity+1)}
                                        >+</div>
                                    </div>
                                    <div className="total-price-remove-container">
                                        <p>${item.price * item.quantity}</p> 
                                        <Trash
                                            size={18}
                                            className='cartitem-remove-icon' 
                                            onClick={() => removeItem(item.id)}
                                        />
                                     </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${(Math.round(cartTotal*100)/100).toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            {
                            (Math.round(cartTotal*100)/100).toFixed(2) >= 100 
                            ? <p>Free</p>
                            :<p>$6.00</p>
                            }
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            {
                                (Math.round(cartTotal*100)/100).toFixed(2) >= 100
                                ? <h3>${(Math.round(cartTotal*100)/100).toFixed(2)}</h3>
                                : <h3>${(Math.round(cartTotal*100)/100 + 6).toFixed(2)}</h3>
                            }
                        </div>
                    </div>
                    <Link to='/'>PROCEED TO CHECKOUT</Link>
                </div>
            </div>
        </div>
    );
};

export default CartItems;