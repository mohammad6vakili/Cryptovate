import React from 'react'
import "./style.scss";

const Input = ({ ...rest }) => {
  return (
    <input className="input" alt="input" {...rest} />
  )
};

export default Input;