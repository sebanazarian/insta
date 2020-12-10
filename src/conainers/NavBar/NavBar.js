import './NavBar.scss';
import React, { useEffect,useState } from 'react';
import Icon from '../Icon/Icon';


const Navbar = () => {
  const handleClick = (e)=>{
    alert(e.target.outerHTML)
  }


  return ( 
    <div id='NavBar'>
      <Icon iconName="camera" callback={handleClick} />
      <p>Instagram</p>
      <Icon iconName="comment-dots" callback={handleClick} />
    </div>
   );
}


export default Navbar;