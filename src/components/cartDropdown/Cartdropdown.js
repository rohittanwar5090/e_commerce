import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './Cartdropdown.css'
import CartItem from '../cartitem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
// import { selectCartHidden } from '../../redux/cart/cartSelector'
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartAction'

function Cartdropdown() {
  const cart = useSelector((state) => state.cart.cartItems)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cart.length ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )
            :
            (
              <span className='empty-message'>Your cart is empty</span>
            )

        }
      </div>
      <CustomButton onClick={() => {
        navigate('/checkout')
        dispatch(toggleCartHidden())
      }}>
        CHECKOUT
      </CustomButton>
    </div>
  )
}

export default Cartdropdown



