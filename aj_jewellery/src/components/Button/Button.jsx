import React from 'react';
import './Button.css';
function Button({value}) {
  return (
    <button type='submit' id="button">{value}</button>
  )
}

export default Button