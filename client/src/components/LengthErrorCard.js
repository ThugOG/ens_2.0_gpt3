import React, { useState } from "react";

const LengthErrorCard = () => {
  const [showExtra, setShowExtra] = useState(false);
  const handleClick = () => {
    setShowExtra(!showExtra);
  };
  return (
    <div className="error_card">
      <div className="warning_heading">
        <h3>Warning</h3>
        <img src="https://img.icons8.com/dusk/25/null/warning-shield.png" />
      </div>
      <div className="error_card_card">
        <div className="left_error_card">
          <p>Name is too short.Names must be at least 3 characters long</p>
          <button onClick={handleClick}>Show Details</button>
        </div>
        {showExtra ? <div className="error_card_card_extra"></div> : null}
      </div>
    </div>
  );
};

export default LengthErrorCard;
