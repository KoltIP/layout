import React from 'react';
import ProductItem from './ProductItem';
import classes from '../styles/Products.css';

const ProductsList = (props) => {
    
    const products = props.products;
    const choose = props.choose;
    console.log(choose);
    return(  
    <table className='tableProduct'>
        <thead></thead>
        <tbody>
            {products.map 
            (
                (item, index) => <ProductItem key={index} product={item} />
            )}
        </tbody>
        <tfoot></tfoot>
    </table>
    )    
}
export default ProductsList;