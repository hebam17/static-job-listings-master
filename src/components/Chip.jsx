import React from "react";

const Chip = ({ myClass, data }) => {
  return <div className={`my-chip ${myClass}`}>{data}</div>;
};

export default Chip;
