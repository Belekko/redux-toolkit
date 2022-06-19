 const TOGGLE='TOGGLE'

export function toggle(){
    return {
        type: TOGGLE
    }
}


const initialState={
    cardIsVisible: false
}


export const uiReducer=(prevState=initialState, action)=>{
    if(action.type === TOGGLE){
        return {
            cartIsVisible: !prevState.cardIsVisible
        }
    }
}