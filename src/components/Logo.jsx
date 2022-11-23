import React from "react";

const Logo = ({ logo, company }) => {
  return (
    <div className="logo">
      <img src={logo} alt={company} />
    </div>
  );
};

export default Logo;
