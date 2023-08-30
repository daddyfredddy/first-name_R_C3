import React from "react";

const Button = ({ Login, Signin }) => {
  return (
    <div>
      <button id="click">{Login}</button>
      <button id="click">{Signin}</button>
    </div>
  );
};

export default Button;
