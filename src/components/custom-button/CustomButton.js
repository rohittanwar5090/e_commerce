import React from 'react'
import './CustomButton.css'
function CustomButton({children , isGoogleSignIn ,inverted, ...otherprops}) {
    // console.log(children);
    // console.log(otherprops);
  return (
    <>
    <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherprops}>
        {children}
    </button>
    </>
  )
}

export default CustomButton