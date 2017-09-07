import React from 'react';

import './style.css';

const Button = (props) => {
  return (
      <div className="db-button">{props.children}</div>
  );
};

export default Button;