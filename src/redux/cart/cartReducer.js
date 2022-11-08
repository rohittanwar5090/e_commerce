import {addItemToCart , removeItemFromCart } from './cartUtils'


const initialState = {
    hidden: true,
    cartItems: []

}

const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
               cartItems : addItemToCart(state.cartItems , action.payload)
            }
        case 'REMOVE_ITEM' :
            return{
                ...state ,
                cartItems : removeItemFromCart(state.cartItems , action.payload)
            }
        case 'CLEAR': 
                 
            return{
                ...state ,
                cartItems : state.cartItems.filter((item)=> item.id !== action.payload)                                   
            }
        default:
            return state;
    }
}


export default cartReducer