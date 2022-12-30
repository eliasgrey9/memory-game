import React from "react";
import "./singleCard.css";

//card prop was passed in from App.js
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          className="back"
          src="https://t3.ftcdn.net/jpg/00/83/49/58/360_F_83495813_CjoJWbKFscED2dBV5m2aOQzc7petf41i.jpg"
          alt="card back"
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
};

export default SingleCard;
