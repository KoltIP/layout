import React from 'react';
import classes from '../styles/Menu.css'
import { useState } from 'react';
import IconSwitch from '../components/IconSwitch';

const Menu = (props) => {

    const icon = props.icon;
    const action = props.action;

    const Choose=()=>{
        action();
    }

    return(      
        <button onClick={Choose}>
            <span className="material-icons">
                {icon}
            </span>
        </button>
    )    
}
export default Menu;