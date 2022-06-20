import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/slices/uiSlice";


const CartButton = (props) => {
    const cartQuantity=useSelector(state => {
       return  state.cart.totalQuantity
    })
    const dispatch=useDispatch()
    const toggleHandler=()=>{
        dispatch(uiActions.toggle())
    }

    return (
        <button onClick={toggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
