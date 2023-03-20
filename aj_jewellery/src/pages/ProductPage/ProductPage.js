import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import './ProductPage.css';

function ProductPage() {
  return (
    <div className="productPage">
      <Navbar />
      <SearchBar/>
      
    </div>
  );
}

export default ProductPage;
