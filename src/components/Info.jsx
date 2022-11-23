import React from "react";
import Chip from "./Chip";

const Info = ({ card }) => {
  return (
    <div className="info">
      {/* top section */}
      <div className="top">
        <div className="company">{card.company}</div>
        {card.new && <Chip myClass={"new"} data="NEW!" />}

        {card.featured && <Chip myClass={"featured"} data="FEATURED" />}
      </div>
      {/* ///////////// */}

      {/* mid section */}
      <div className="mid">
        <div className="pos">{card.position}</div>
      </div>
      {/* //////////// */}

      {/* bottom section */}
      <div className="bottom">
        <div className="extra">{card.postedAt}</div>
        <div className="extra">{card.contract}</div>
        <div>{card.location}</div>
      </div>
      {/* ///////////// */}
    </div>
  );
};

export default Info;
