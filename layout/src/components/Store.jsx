import React,{useState} from 'react';
import Menu from './Menu';
import ProductsList from './ProductsList';

const Store = (props) => {
    
    const [select,setSelect] = useState(0);

    const products = props.products;
    const cards = props.cardsLayout;
    

    const Show = () =>
    {   
        const buffer = select;
        setSelect(buffer+1);         
        
        if (select>2)
        {
            console.log("Сброс");
            setSelect(1);
        }
    }
    
    return(  
    <div>
        <Menu cards = {cards} select={select} action={Show} />
        <ProductsList products = {products} choose={select}/>
    </div>
    )    
}
export default Store;