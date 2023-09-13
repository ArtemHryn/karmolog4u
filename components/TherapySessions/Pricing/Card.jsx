import React from "react";

function Card({ content }) {
  return (
    <div>
      <div>
        <h4>
          {content.title}
          <span>{content.addTitle}</span>
        </h4>
        <h3>{content.price}</h3>
      </div>
      <button>{content.button}</button>
    </div>
  );
}

export default Card;
