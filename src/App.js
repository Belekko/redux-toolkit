import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import {uiActions} from "./store/slices/uiSlice";
// import {BASE_URL} from "./utils/constants/general";
import {sendCartData} from "./store/slices/cartSlice";
import AddProduct from "./components/AddProduct/AddProduct";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.ui.cartIsVisible);
    const notification = useSelector((state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(uiActions.hideNotification())
        }, 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [notification])

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        dispatch(sendCartData(cart))
    }, [cart, dispatch]);

    return (
        <>
        {notification && (<Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
        />)}
        <Layout>
            {isShow && <Cart/>}
            <Products/>
            <AddProduct/>

        </Layout>
    </>);
}

export default App;
