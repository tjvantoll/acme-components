import React from 'react';

const Input = ({ className, ...otherProps }) => {
  className = className + ' acme-input';
  return (
    <input
      {...otherProps}
      className={className}
    />
  )
}

export default Input;
