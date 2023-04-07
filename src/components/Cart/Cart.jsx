import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    
    let message;
    if(cart.length ===0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Wow</h3>
            <p><small>Thanks for shopping</small></p>
        </div>
        
    }
    
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 4 ? 'orange' : 'pink'}`}>Purchase Information</p>
            {cart.length > 2 ? <span className='purple'>Buy More</span> : <span>Oops, so sad</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 3 && <p>Triple Bonus</p>
            }
            {
                cart.length === 4 || <h3>Square to holo na</h3>
            }
        </div>
    );
};

export default Cart;