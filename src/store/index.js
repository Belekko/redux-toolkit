// import {combineReducers, createStore} from "redux";
// import {uiSlice} from "./reducers/uiSlice";

// const rootReducer= combineReducers({ui:uiSlice,})

// export const store=createStore(rootReducer)

import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";

const store = configureStore({reducer:{ui: uiSlice.reducer}})

export default store