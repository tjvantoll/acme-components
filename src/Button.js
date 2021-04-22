import React from 'react';

const Button = (props) => {
  const { type } = props;
  return (
    <button
      type={type || "submit"}
      className="acme-button">
      {props.children}
    </button>
  )
}

export default Button;
