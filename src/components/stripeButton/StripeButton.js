import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


function StripeButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LkhxDSGl27kN0Dnbo6qsyDV9zHY1zamFBwuSu6RycN2cEeavTgqaNunfLrK3Y5emaQXP4x6fXcplabSJ6jy56g200FUITe06b'
    const onToken = token =>{
        console.log(token);
        alert('Payment Succesful')
    }

  return (
    <StripeCheckout
     label='Pay Now'
     name='CRWN Clothing Ltd.'
     billingAddress
     shippingAddress
     image='https://svgshare.c om/i/CUz.svg'
     description={`Your total is $${price}`}
     amount ={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey ={publishableKey}
    />
  )
}

export default StripeButton