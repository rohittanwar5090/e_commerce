import React from 'react'
import './CartItem.css'

function CartItem({item}) {  
   
  return (
    <div className='cart-item'>
        <img src={item.imageUrl} alt="" />
        <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity}*${item.price}</span>
        </div>
    </div>
  )
}

export default CartItem