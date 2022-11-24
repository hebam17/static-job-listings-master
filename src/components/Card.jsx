import React from "react";
import Info from "./Info";
import Logo from "./Logo";
import Skills from "./Skills";

const Card = ({ card }) => {

  return (
    <div className={`card ${card.featured && "card-featured"}`}>
      <div className="info-container">
        <Logo logo={card.logo} company={card.company} />
        <Info card={card} />
      </div>
      <Skills card={card} />
    </div>
  );
};

export default Card;
