import { createSelector } from "reselect";

const selectCart = state => {
    // console.log('from cartSelector' , state.cart);
    return (state.cart)
};

export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((accumlated, current) =>
            accumlated + current.quantity, 0)
)


export const selectCartTotal = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((accumlated, current) =>
            accumlated + current.quantity * current.price, 0)
)

// import { createSelector } from 'reselect'
// // selector
// const getBar = (state) => state.foo.bar


// // reselect function
// export const getBarState = createSelector(
//   [ getBar ],
//   (bar) => bar
// )