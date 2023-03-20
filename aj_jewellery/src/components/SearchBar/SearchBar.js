import React from 'react';
import './SearchBar.css';



function SearchBar() {

  const searchProduct =()=>{
    const product=document.getElementById("productData");
    product.value="";
  }
  return (
    <div className='searchBar'>
        <input type={"text"} placeholder={"Search Products"} id="productData"/>
        <i className="fa-solid fa-magnifying-glass fa-2x"  onClick={()=>searchProduct()}/>
    </div>

  )
}

export default SearchBar