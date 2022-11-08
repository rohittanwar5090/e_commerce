import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utilis';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.css';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import CartIcon from '../cart-icon/CartIcon';
import Cartdropdown from '../cartDropdown/Cartdropdown';
import {selectCurrentUser} from '../../redux/user/userSelector'
import {selectCartHidden } from '../../redux/cart/cartSelector'

function Header() {
  const value = useSelector((state) => state)
  const toggle = useSelector((state) => state) 
  let ans = selectCurrentUser(value)
  let toggler = selectCartHidden(toggle)
  
  return (
       <div className='header'>
     <Link className='logo-container' to='/'>
       <Logo className='logo' />
     </Link>
     <div className='options'>
       <Link className='option' to='/shop'>
         SHOP
       </Link>
       <Link className='option' to='/contact'>
         CONTACT
       </Link>
      {
         ans ?
         <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
         :
         <Link className='option' to='/signin'>SIGN IN </Link>
       }
       <CartIcon/>
     </div>   
     {
      toggler ? null : <Cartdropdown/>  
     }
     
   </div>
    
  )
}

export default Header


// const Header = ({currentUser}) => (  

//  
//     <div className='header'>
//     <Link className='logo-container' to='/'>
//       <Logo className='logo' />
//     </Link>
//     <div className='options'>
//       <Link className='option' to='/shop'>
//         SHOP
//       </Link>
//       <Link className='option' to='/contact'>
//         CONTACT
//       </Link>
//       {
//         currentUser ?
//         <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
//         :
//         <Link className='option' to='/signin'>SIGN IN </Link>
//       }
//     </div>
//   </div>
// );

// export default Header;