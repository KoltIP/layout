import React,{useState} from 'react';
import Menu from './Menu';
import ProductsList from './ProductsList';
// import icons from 'https://fonts.googleapis.com/icon?family=Material+Icons';

const Store = (props) => {
    const [select,setSelect] = useState(1);
    const [choose,setChoose] = useState(props.cardsLayout.xs);

    const products = props.products;
    const cards = props.cardsLayout;
    

    const Show = () =>
    {        
        var buffer = select+1;
        setSelect =({select:buffer});
        if (select == 1 || select>4)
        {
            setSelect(1);
            setChoose(cards.xs);
        }
        if (select == 2)
            setChoose(cards.sm);
        if (select == 3)
            setChoose(cards.md);
        if (select >= 4)
            setChoose(cards.lg);   
        console.log(select);     
    }
    
    return(  
    <div>
        <Menu cards = {cards} select={select} action={Show} />
        <ProductsList products = {products} choose={choose}/>
    </div>
    )    
}
export default Store;