// import {combineReducers, createStore} from "redux";
// import {uiSlice} from "./slices/uiSlice";

// const rootReducer= combineReducers({ui:uiSlice,})

// export const store=createStore(rootReducer)

import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import cartSlice from "./slices/cartSlice";
import addProductSlice from "./slices/addProductSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        addProduct: addProductSlice.reducer
    }
})

export default store