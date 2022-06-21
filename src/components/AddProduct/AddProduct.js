import React, {useState} from 'react';
import styles from './AddProduct.module.css'
import {useDispatch} from "react-redux";
import {addProductActions} from "../../store/slices/addProductSlice";


const AddProduct = () => {
    const [product, setProduct] = useState({title: '', price: '', des: ''})
    const dispatch = useDispatch()


    const onChangeHandler = (e) => {
        const name = e.target.id
        setProduct(prevState => ({...prevState, [name]: e.target.value}))
    }

    const addHandler = (e) => {
        e.preventDefault()
        console.log('ok')
        dispatch(addProductActions.addProduct(product))
    }
    return (
        <div className={styles.formBlock}>
            <form onSubmit={addHandler} className={styles.form}>
                <h1>Add Product</h1>
                <div className={styles.inputBlock}>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' type='text' onChange={onChangeHandler}/>
                </div>
                <div className={styles.inputBlock}>
                    <label htmlFor='price'>Price:</label>
                    <input id='price' type='number' onChange={onChangeHandler}/>
                </div>
                <div className={styles.inputBlock}>
                    <label htmlFor='des'>description</label>
                    <input id='des' type='textarea' onChange={onChangeHandler}/>
                </div>
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default AddProduct;