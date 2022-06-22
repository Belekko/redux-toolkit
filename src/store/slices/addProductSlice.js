import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./uiSlice";
import {BASE_URL} from "../../utils/constants/general";

const initialState = {
    products: [{
        id: "p1", price: 6, title: "My First Book", description: "The first book i ever wrote ",
    }, {
        id: "p2", price: 2, title: "My Second Book", description: "The first book i ever wrote ",
    },]
}

let idNum = 2


const addProductSlice = createSlice({
    name: 'addProduct',
    initialState,
    reducers:{
        addProduct(state, action) {
            idNum++
            state.products.push({
                id: 'p'+idNum ,
                price: action.payload.price,
                title: action.payload.title,
                description: action.payload.des
            })
        }
    }
})

export const addProductActions=addProductSlice.actions
export default addProductSlice

export const postProductData = (productData) => {
    return (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending", title: "Sending...", message: "Sending data o cart !",
        }));
        fetch(`${BASE_URL}/products.json`, {
            method: 'POST', body: JSON.stringify(productData)
        }).then(response => {
            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
            dispatch(uiActions.showNotification({
                status: "success", title: "Success !", message: "Sent cart data successfully !",
            }))
        }).catch((error) => {
            dispatch(uiActions.showNotification({
                status: "error", title: "Error !", message: error.message,
            }));
        })
        dispatch(addProductActions.addProduct(productData))
    }
}