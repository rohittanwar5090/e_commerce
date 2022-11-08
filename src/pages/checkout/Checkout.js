import React from 'react'
import './Checkout.css'
import { selectCartItem, selectCartTotal } from '../../redux/cart/cartSelector'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkoutitem/CheckoutItem'
import StripeButton from '../../components/stripeButton/StripeButton'

function Checkout() {
    const cart = useSelector((state) => state)
    const cartItems = selectCartItem(cart)

    const total = selectCartTotal(cart)
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })}

            <div className='total'> TOTAL :${total}</div>
            <div className="test-warning">
                Use for paymemt 
                <br />
                4242 4242 4242 4242 , EXPIRY: 'ANY FUTURE DATE'  , CVV: 123
            </div>
            <StripeButton price ={total}/>
        </div>
    )
}

export default Checkout