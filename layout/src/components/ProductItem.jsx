import React from 'react';
import classes from '../styles/Products.css'

const ProductsList = (props) => {
    const item = props.product;
    
    return(      
        <tr className='productTableItem'>
            <td><img width='100' hieght='40' src={item.img} alt={item.name}></img></td>
            <td><span className='name'>{item.name}</span></td>            
            <td>{item.color}</td>
            <td className='price'>${item.price}</td>
            <td><button className='button'>ADD TO CART</button></td>
        </tr>
    )    
}
export default ProductsList;