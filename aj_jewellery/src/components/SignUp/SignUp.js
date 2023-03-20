import React from 'react';

// styling
import '../../pages/AuthenticationPage/Authentication.css';

const SignUp = () => {

  const signUp=async (e)=>{
    e.preventDefault();
    console.log("Sign UP");
  }
  return (
    <div className="form-comp cfb">
      <h1>Create an Account!</h1>
      <form className="sign-up-form cfb">
        <label>
          Name:
          <br/>
          <input type='text' placeholder='John Doe'/>
        </label>
        <label>
          Email:
          <br/>
          <input type='text' placeholder='name@gmail.com'/>
        </label>
        <label>
          Mobile Number:
          <br/>
          <input type='number' placeholder='123456789'/>
        </label>
        <label>
          Password:
          <br/>
          <input type='password' placeholder='pass@123'/>
        </label>
        <br/>
        <button onClick={signUp}>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
