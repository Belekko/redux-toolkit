import React from 'react';

const AddProduct = () => {
    return (<form>
        <h1>Add Product</h1>
        <div>
            <label htmlFor='title'>Title:</label>
            <input id='title' type='text'/>
        </div>
        <div>
            <label htmlFor='price'>Price:</label>
            <input id='price' type='text'/>
        </div>
        <div>
            <label htmlFor='des'>description</label>
            <input id='des' type='textarea'/>
        </div>
        <button>Add</button>
    </form>);
};

export default AddProduct;