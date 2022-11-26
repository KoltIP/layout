import React from 'react';
import ProductItem from './ProductItem';
import classes from '../styles/Products.css';

const ProductsList = (props) => {
    
    const products = props.products;
    const choose = props.choose;

    const divClass = choose > 6 ? 'productsFlexRow' :'productsFlexColumn';
    const itemClass = choose > 6 ? 'productsFlexColumn':'productsFlexRow';
    return(  
            <div className={divClass}>
                {products.map 
                (
                    (item, index) => 
                    <ProductItem
                        key={index}
                        product={item}
                        className = {itemClass}
                    />
                )}
            </div>
        )    
}
export default ProductsList;