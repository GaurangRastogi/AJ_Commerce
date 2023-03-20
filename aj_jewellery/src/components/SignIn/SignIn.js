import React from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/AuthenticationPage/Authentication.css";

const SignIn = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const signIn = async (e) => {

    e.preventDefault();
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const response = await fetch(process.env.REACT_APP_BACKEND_URL+"user/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userCredential:email.value,
        userPassword: password.value
      }),
    });

    const json = await response.json();
    console.log(json);
    if(json.message==="User logged in successfully"){
      localStorage.setItem("user","gaurang");
      navigate('/');
    }
    else{
      console.log(json.message);
    }
  };
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-up-form cfb">
        <label>
          Email:
          <br />
          <input type="text" id="email" placeholder="name@gmail.com" />
        </label>
        <label>
          Password:
          <br />
          <input type="password" id="password" placeholder="pass@123" />
        </label>
        <br />
        <button onClick={signIn}>Sign In!</button>
      </form>
      <div className="goHome" onClick={() => goHome()}>
        <i class="fa-solid fa-xmark fa-2x"></i>
      </div>
    </div>
  );
};

export default SignIn;
