import React from 'react';
import classes from '../styles/Menu.css'
import { useState } from 'react';
import IconSwitch from '../components/IconSwitch';

const Menu = (props) => {

    const action = props.action;   
    const select = props.select;
    const icon = (select > 1) ? "view_list" : "view_module";

    return(     
        <IconSwitch icon={icon} action={action}/>
    )    
}
export default Menu;