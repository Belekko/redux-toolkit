//
// export const TOGGLE='TOGGLE'
//
// export function toggle(){
//     return {
//         type: TOGGLE
//     }
// }
//
//


// export const uiReducer=(prevState=initialState, action)=>{
//     if(action.type === TOGGLE){
//         return {
//             cartIsVisible: !prevState.cartIsVisible
//         }
//     }
//     return prevState
// }
import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartIsVisible: false,
    notification: null
}

const uiSlice= createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        hideNotification(state) {
            state.notification = null
        }
    }
})

export const uiActions=uiSlice.actions;
export default uiSlice;