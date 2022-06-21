import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from "react-redux";


const Products = (props) => {
    const products = useSelector(state => state.addProduct.products)

    console.log(products)
    return (<section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
            {products.map(product => (<ProductItem
                id={product.id}
                key={product.id}
                title={product.title}
                price={+product.price}
                description={product.description}
            />))}
            </ul>
        </section>);
};

export default Products;
