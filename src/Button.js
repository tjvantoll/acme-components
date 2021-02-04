import React from 'react';

const Button = (props) => {
  return (
    <button className="acme-button">{props.children}</button>
  )
}

export default Button;
