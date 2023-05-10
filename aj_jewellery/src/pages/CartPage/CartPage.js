import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CartPage() {
  const navigate = useNavigate();
  useEffect(() => {
    //toaster -> signIn first
    if (localStorage.getItem("user") === "") 
        navigate("/signin");
  }, []);

  return (
    <div className="cartPage">
        <p>Cart Page</p>
    </div>
  )
}

export default CartPage;
