import React from "react";

function Card({ card, onCardClick }) {
  const handleCardClick = () => onCardClick(card);

  return (
    // <template id="card">
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <button type="button" className="card__basura button"></button>
      <div className="card__subtitle">
        <h2 className="card__place">{card.name}</h2>
        <div className="card__like-wrap">
          <button type="button" className="card__like button"></button>
          <span className="card__like-qty">{card.likes.length}</span>
        </div>
      </div>
    </li>
    // </template>
  );
}

export default Card;
