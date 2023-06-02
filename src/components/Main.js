import React from "react";
import { useContext } from "react";
//import avatar__link from "../images/jacob.jpg";
//import { api } from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards
}) {
  // const [userName, setUserName] = React.useState("");
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  // const [cards, setCards] = React.useState([]);
  const currentUser = useContext(CurrentUserContext);

  // React.useEffect(() => {
  //   Promise.all([api.getUserInfoApi(), api.getInitialCards()])
  //     .then(([user, card]) => {
  //       setUserName(user.name);
  //       setUserDescription(user.about);
  //       setUserAvatar(user.avatar);
  //       setCards(card);
  //       // console.log(card);
  //     })
  //     .catch((err) => alert(err));
  // }, []); // <----<< [] -- при монтировании один раз!

  return (
    <main className="main">
      <section className="profile" aria-label="Информация о пользователе.">
        <div className="avatar" onClick={onEditAvatar}>
          <img
            // src={avatar__link}
            src={currentUser.avatar}
            alt="Фото пользователя."
            className="avatar__img"
          />
        </div>

        <div className="profile__user">
          <div className="profile__title">
            {/* <h1 className="profile__name">{userName}</h1>currentUser */}
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__button-edit button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
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
            <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
