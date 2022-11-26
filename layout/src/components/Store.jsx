import React,{useState} from 'react';
import Menu from './Menu';
import ProductsList from './ProductsList';

const Store = (props) => {
    
    const [select,setSelect] = useState(1);
    const [choose,setChoose] = useState(props.cardsLayout.xs);

    const products = props.products;
    const cards = props.cardsLayout;
    

    const Show = () =>
    {      
        if (select == 1)
            setChoose(cards.xs);        
        if (select == 2)
            setChoose(cards.sm);
        if (select == 3)
            setChoose(cards.md);
        if (select == 4)
            setChoose(cards.lg);
        setSelect(select+1);       
        if (select > 4 || select<1)
            setSelect(1);   
    }
    
    return(  
    <div>
        <Menu cards = {cards} select={select} action={Show} />
        <ProductsList products = {products} choose={choose}/>
    </div>
    )    
}
export default Store;