import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../../Toaster/Toaster";
function CartPage() {
  const navigate = useNavigate();
  const userId=localStorage.getItem("userId");

  const cartItemsOfUser = async ()=>{
    
    const response = await fetch(process.env.REACT_APP_BACKEND_URL+`user/cartItems/${userId}`);

    const json = await response.json();

    const cartItems=json.message;

    console.log(cartItems);
  }
  useEffect(() => {
    if (userId=== ""){
        makeToast("warning","Please SignIn!!")
        navigate("/signin");
        return;
    }
    cartItemsOfUser();
    
  }, []);


  return (
    <div className="cartPage">
        <p>Cart Page</p>
    </div>
  )
}

export default CartPage;
