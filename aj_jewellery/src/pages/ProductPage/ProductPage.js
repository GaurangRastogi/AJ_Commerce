import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemBar from "../../components/ItemBar/ItemBar";
import './ProductPage.css';
import TypeBar from "../../components/TypeBar/TypeBar";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";

function ProductPage() {

  const [myProducts,setMyProducts]=useState([]);
  const [modal,setModal]=useState(null);
  const getUser= async()=>{

    const response=await fetch(process.env.REACT_APP_BACKEND_URL+'user/getProductByTypes');

    const json=await response.json();

    setMyProducts(json.message);
  }

  const openProduct=(product)=>{
    setModal(product);
  }
  const closeProduct=()=>{
    setModal(null);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="productPage">
      {modal&&<Product card={modal} closeProduct={closeProduct}/>}
      <Navbar />
      <SearchBar/>
      <ItemBar title={'Product Types'}/>
      {myProducts.map((products,i)=>
         <TypeBar key={i} type={products.productType._id} products={products.elements} openProduct={openProduct}/>
      )}
      <Footer/>
    </div>
  );
}

export default ProductPage;
