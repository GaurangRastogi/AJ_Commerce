import React from 'react';
import './Button.css';
function Button({value,utility=()=>(console.log("Button Clicked"))}) {
  return (
    <button type='submit' id="button" onClick={()=>utility()}>{value}</button>
  )
}

export default Button