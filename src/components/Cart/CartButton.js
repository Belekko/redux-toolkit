import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/reducers/uiSlice";


const CartButton = (props) => {
    const dispatch=useDispatch()
    const toggleHandler=()=>{
        dispatch(uiActions.toggle())
    }

    return (
        <button onClick={toggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
