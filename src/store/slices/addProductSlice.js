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

const addProductSlice = createSlice({
    name: 'addProduct',
    initialState,
    reducers:{

    }

})

export const addProductActions=addProductSlice.actions
export default addProductSlice