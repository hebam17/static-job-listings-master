import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
