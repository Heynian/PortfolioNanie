import React from 'react'
import {MenuData} from '../data';

const Navbar=()=>{
    return(
    <nav className='app-navbar'>
        
    <h1>EPIC GAMES FORTNITE</h1>
    
    <ul className='navbar-items'>
       {MenuData.map((item)=>{
        return (
           <li><a href="{item.url}"className='navbar-links'>
           {item.title}</a>
           </li>
       )

       })}
    </ul>

    </nav>

    );
};
export default Navbar;