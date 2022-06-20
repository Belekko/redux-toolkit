// {
//     productId:0,
//         name: '',
//     price:'',
//     totalPrice:'',
//     quantity: 0,
// }


import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./uiSlice";
import {BASE_URL} from "../../utils/constants/general";

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
            const existingItem = state.items.find((item) => item.itemId === newItem.id)
            state.totalQuantity++
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
        },
        removeItemFromCart(state, action) {
            const id = action.payload.id
            const existingItem = state.items.find((item) => item.itemId === id)
            state.totalQuantity--
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(el => el.itemId !== id)
            } else {
                existingItem.quantity--
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice


export const sendCartData = (cart) => {
    return (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending", title: "Sending...", message: "Sending data o cart !",
        }));
        fetch(`${BASE_URL}/cart.json`, {
            method: "PUT", body: JSON.stringify(cart),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Sending cart data failed");
                }
                dispatch(uiActions.showNotification({
                    status: "success", title: "Success !", message: "Sent cart data successfully !",
                }));
                return response.json();
        })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                dispatch(uiActions.showNotification({
                    status: "error", title: "Error !", message: error.message,
                }));
            });
    }
}