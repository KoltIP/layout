import React from 'react';
import classes from '../styles/Products.css'

const ProductsList = (props) => {

    const item = props.product;    

    return( 
        <div className='item'>
            <img width='200' hieght='150' src={item.img} alt={item.name} className='elem'></img>
            <span className='name elem'>{item.name}</span>            
            <span className='elem'>{item.color}</span>
            <span className='price elem'>${item.price}</span>
            <span><button className='button elem'>ADD TO CART</button></span>        
        </div>
    )    
}
export default ProductsList;