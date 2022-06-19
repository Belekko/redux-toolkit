import {combineReducers, createStore} from "redux";
import {uiReducer} from "./reducers/uiReducer";

const rootReducer= combineReducers({ui:uiReducer,})

export const store=createStore(rootReducer)