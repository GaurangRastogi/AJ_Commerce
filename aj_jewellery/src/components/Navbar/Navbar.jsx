import React from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [hamburger, setHamburger] = useState(true);

  const navigate = useNavigate();

  const goHomePage=()=>{
    navigate("/");
  }
  const goSignIn = () => {
    navigate("/signin");
  };

  const goProductPage = () => {
    navigate("/products");
  };

  const getProfile = () => {
    console.log("navigate to profile Model=> also has signOut option");
  };


  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt={"Logo"} />
        <p id="cursive">AJ Jewellers</p>
      </div>
      <div className="links">
        <span onClick={()=>goHomePage()}>Home</span>
        <span onClick={() => goProductPage()}>Product</span>
        <span>Cart</span>
        {localStorage.getItem("user") === "" ? (
          <span onClick={() => goSignIn()}>SignIn</span>
        ) : (
          <span onClick={()=>getProfile()}>{localStorage.getItem("user")[0].toUpperCase()+localStorage.getItem("user").substring(1)}</span>
        )}
      </div>

      <div id="hamburger">
        {hamburger ? (
          <i
            className="fa-solid fa-bars fa-2xl"
            onClick={() => setHamburger(false)}
          />
        ) : (
          <div className="hamburgerLinks">
            <i
              className="fa-solid fa-xmark fa-2xl"
              onClick={() => setHamburger(true)}
              style={{ marginLeft: "30px" }}
            />
            <p  onClick={()=>goHomePage()}>Home</p>
            <p onClick={() => goProductPage()}>Product</p>
            <p>Cart</p>
            {localStorage.getItem("user") === "" ? (
              <p onClick={() => goSignIn()}>SignIn</p>
            ) : (
              <p onClick={() => getProfile()}>{localStorage.getItem("user")[0].toUpperCase()+localStorage.getItem("user").substring(1)}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
