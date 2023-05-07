import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemBar from "../../components/ItemBar/ItemBar";
import './ProductPage.css';
import TypeBar from "../../components/TypeBar/TypeBar";

function ProductPage() {

  const [myProducts,setMyProducts]=useState([]);

  const getUser= async()=>{

    const response=await fetch('http://localhost:3001/user/getProductByTypes');

    const json=await response.json();

    setMyProducts(json.message);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="productPage">
      <Navbar />
      <SearchBar/>
      <ItemBar title={'Product Types'}/>
      {myProducts.map((products,i)=>
          <TypeBar key={i} type={products.productType._id} products={products.elements}/>
      )}
    </div>
  );
}

export default ProductPage;
