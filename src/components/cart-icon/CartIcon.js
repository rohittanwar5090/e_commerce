import React, { useState, useMemo, useEffect } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.css'
import {selectCartItemsCount } from '../../redux/cart/cartSelector'
import { toggleCartHidden } from '../../redux/cart/cartAction'
import { useDispatch, useSelector } from 'react-redux';


function CartIcon() {
  const cart = useSelector((state) =>  state)

  let itemCount =  selectCartItemsCount(cart)

  const dispatch = useDispatch();

  
  return (
    <div className='cart-icon' onClick={() =>{dispatch(toggleCartHidden())}}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default CartIcon