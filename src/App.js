import React from 'react';
import { Routes, Route , Navigate, useLocation, useParams } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SigninAndSignUp from './pages/SigninAndSignUp/SigninAndSignUp'
import Header from './components/header/Header';
import Checkout from './pages/checkout/Checkout';
import { auth , createUserProfileDocument} from './firebase/firebase-utilis'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {currentUserAction} from '../src/redux/user/userAction'
import CollectionOverview from './components/collectionoverview/CollectionOverview';
// import   { selectCurrentUser} from  '../../redux/cart/userSelector'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state)=> state.user.currentUser)
  
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){                        
        const useRef = await createUserProfileDocument(userAuth)                       
        useRef.onSnapshot(snapShot =>{        
          dispatch(currentUserAction({
            id: snapShot.id , 
            ...snapShot.data()
          }))                                      
        })      
      }
      else{
        dispatch(currentUserAction(userAuth))
        // setCurrentUser(userAuth)
      }     
    })              
    console.log('did mount');    
      

    return () =>{
      unsubscribeFromAuth();
      console.log('did umount');    
    }     
  }, [])

  return (
    <div>
      <Header  />           
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop/*' element={<Shop  />} />         
        <Route exact path='/checkout' element={<Checkout />} /> 
        <Route exact path='/signin' element={currentUser ? <Navigate to='/'/> : <SigninAndSignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
