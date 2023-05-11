import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuListComposition from "../MenuItem/MenuItem";
import makeToast from "../../Toaster/Toaster";

function Navbar() {
  const [hamburger, setHamburger] = useState(true);
  const [userId,setUserId]=useState(localStorage.getItem("userId"));
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

  const goToCartPage=()=>{
    navigate('/cart');
  };

  const logOut=()=>{
    setUserId(localStorage.getItem("userId"));
  }
  useEffect(()=>{
    // just to update navbar, if logged out
  },[userId])

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt={"Logo"} />
        <p id="cursive">AJ Jewellers</p>
      </div>
      <div className="links">
        <span onClick={()=>goHomePage()}>Home</span>
        <span onClick={() => goProductPage()}>Product</span>
        <span onClick={()=>goToCartPage()}>Cart</span>
        {userId === "" ? (
          <span onClick={() => goSignIn()}>SignIn</span>
        ) : (
          //on click open the profile page and there only have the option to log out
          <span><MenuListComposition  logOut={()=>logOut()}/></span>
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
            <p onClick={()=>goToCartPage()}>Cart</p>
            {userId ? (
              <p onClick={() => goSignIn()}>SignIn</p>
            ) : (
              <p><MenuListComposition logOut={()=>logOut()}/></p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
