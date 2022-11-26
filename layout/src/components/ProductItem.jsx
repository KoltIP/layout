import React from 'react';
import classes from '../styles/Products.css'

const ProductsList = (props) => {
    const item = props.product;
    

    return( 
        <div>
            <img width='200' hieght='150' src={item.img} alt={item.name}></img>
            <span className='name'>{item.name}</span>            
            <span>{item.color}</span>
            <span className='price'>${item.price}</span>
            <span><button className='button'>ADD TO CART</button></span>        
        </div>
    )    
}
export default ProductsList;