import React from 'react'
import Remove from "./Remove.png";
import "./Card.css"

const Card = ({item,removeFromCart}) => {
  return (
    <div className='cart-card'>
        <div className="qty-item">
            <div className="qty">
                {item.quantity}x
            </div>
            <div className="cart-item">
            <p style={{color:'#028643',fontSize:'15px'}}>₹{item.price * item.quantity}</p>
            <p>{item.name}</p>
            </div>
        </div>
        <div className="delete-from-cart" onClick={()=>removeFromCart(item.id)}>
        <img src={Remove} />
        </div>
      
    </div>
    
    
    
  )
}

export default Card