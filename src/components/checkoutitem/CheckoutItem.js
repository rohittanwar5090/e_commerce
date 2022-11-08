import React from 'react'
import './CheckoutItem.css'
import { useDispatch, } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cartAction'



function CheckoutItem({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem
  const dispatch = useDispatch()

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() =>{dispatch(removeItem(cartItem))}} className="arrow">&#10094;</div>
        <span className='value'>{quantity}</span>
        <div  onClick={()=>{dispatch(addItem(cartItem))}}  className="arrow">&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => {
        dispatch(clearItemFromCart(cartItem.id))
      }}>&#10005; </span>
    </div>
  )
}

export default CheckoutItem