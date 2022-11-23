import React from "react";

export default function Searchchip({ chip, handleClose }) {
  return (
    <div className="search-chip" data-chip={chip}>
      <div className="chip-data">{chip}</div>
      <div className="chip-close" onClick={handleClose}>
        x
      </div>
    </div>
  );
}
