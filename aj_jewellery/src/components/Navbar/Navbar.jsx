import React from 'react'
import './Navbar.css';
import Logo from '../../images/logo.png';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [hamburger,setHamburger]=useState(true);

  const navigate=useNavigate();
  const goSignIn = ()=>{
    navigate('/signin');
  }

  const goProductPage=()=>{
    navigate('/products');
  }
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt={"Logo"}/>
        <p id='cursive'>AJ Jewellers</p>
      </div>
      <div className='links'>
        <span>Home</span>
        <span  onClick={()=>goProductPage()}>Product</span>
        <span>Cart</span>
        <span onClick={()=>goSignIn()}>SignIn</span>
      </div>
      
  
      <div id="hamburger">
        {hamburger?<i className="fa-solid fa-bars fa-2xl" onClick={()=>setHamburger(false)}/>
        :
        <div className='hamburgerLinks'>
            <i className="fa-solid fa-xmark fa-2xl" onClick={()=>setHamburger(true)} style={{"marginLeft":"30px"}}/>
            <p>Home</p>
            <p onClick={()=>goProductPage()}>Product</p>
            <p>Cart</p>
            <p onClick={()=>goSignIn()}>SignIn</p>
        </div>
        }
      </div>
      
    </div>


  )
}

export default Navbar