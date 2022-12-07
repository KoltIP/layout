import React from 'react';
import classes from '../styles/Menu.css'
import { useState } from 'react';
import IconSwitch from '../components/IconSwitch';

const Menu = (props) => {

    const action = props.action;   
    const select = props.select;
    const icon = (select === true) ? "view_list" : "view_module";

    return(     
        <IconSwitch icon={icon} action={action} select = {select}/>
    )    
}
export default Menu;