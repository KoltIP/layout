import React from 'react';
import ProductItem from './ProductItem';
import classes from '../styles/Products.css';

const ProductsList = (props) => {
    
    const products = props.products;
    const choose = props.choose;

    const divClass = choose === true ? 'productsFlexRow' :'productsFlexColumn';
    return( 
            <div className={divClass}>
                {products.map 
                (                    
                    (item, index) => 
                    <div className='size'>
                        <ProductItem
                            key={index}
                            product={item}
                        />
                    </div>
                )}
            </div>
        )    
}
export default ProductsList;