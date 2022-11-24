import React from 'react';
import classes from '../styles/Menu.css'
import { useState } from 'react';

const Menu = (props) => {

    const cards = props.cards;
    const select = props.select;
    const action = props.action;

    const Choose=()=>{
        action();
    }

    return(      
        <button onClick={Choose} className='menu'>
            Change
        </button>
    )    
}
export default Menu;