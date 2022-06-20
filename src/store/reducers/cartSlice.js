// {
//     productId:0,
//         name: '',
//     price:'',
//     totalPrice:'',
//     quantity: 0,
// }


import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,

}

export  const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        }
    }
})

export const cartActions=cartSlice.actions
export default cartSlice