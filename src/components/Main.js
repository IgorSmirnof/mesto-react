import React from "react";
//import avatar__link from "../images/jacob.jpg";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCards()])
      .then(([user, card]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(card);
        console.log(card)
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main className="main">
      <section className="profile" aria-label="Информация о пользователе.">
        <div className="avatar" onClick={onEditAvatar}>
          <img
            // src={avatar__link}
            src={userAvatar}
            alt="Фото пользователя."
            className="avatar__img"
          />
        </div>

        <div className="profile__user">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__button-edit button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button-add button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Фото мест.">
        <ul className="cards">

          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}

          {/* <template id="card">
            <li className="card">
              <img src="#" alt="" className="card__image" />
              <button type="button" className="card__basura button"></button>
              <div className="card__subtitle">
                <h2 className="card__place"> </h2>
                <div className="card__like-wrap">
                  <button type="button" className="card__like button"></button>
                  <span className="card__like-qty"></span>
                </div>
              </div>
            </li>
          </template> */}
        </ul>
      </section>
    </main>
  );
}
