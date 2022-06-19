 const TOGGLE='TOGGLE'

export function toggle(){
    return {
        type: TOGGLE
    }
}


const initialState={
    cartIsVisible: false
}


export const uiReducer=(prevState=initialState, action)=>{
    if(action.type === TOGGLE){
        return {
            cartIsVisible: !prevState.cartIsVisible
        }
    }
    return prevState
}