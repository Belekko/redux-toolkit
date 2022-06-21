import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
        id: "p1", price: 6, title: "My First Book", description: "The first book i ever wrote ",
    },
        {
        id: "p2", price: 2, title: "My Second Book", description: "The first book i ever wrote ",
    },]
}

let idNum=2


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

// export const getProductData=