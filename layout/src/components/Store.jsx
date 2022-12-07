import React,{useState} from 'react';
import Menu from './Menu';
import ProductsList from './ProductsList';

const Store = (props) => {
    
    const [select,setSelect] = useState(false);

    const products = props.products;
    const cards = props.cardsLayout;
    

    const Show = (select) =>
    {   
        setSelect(!select); 
    }
    
    return(  
    <div>
        <Menu cards = {cards} select={select} action={(select)=>{Show(select)}} />
        <ProductsList products = {products} choose={select}/>
    </div>
    )    
}
export default Store;