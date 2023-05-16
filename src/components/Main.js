import React from "react";
import avatar__link from "../images/jacob.jpg";

export default function Main() {
  return (

    <main className="main">
      <section className="profile" aria-label="Информация о пользователе.">
        <div className="avatar">
          <img src={avatar__link} alt="Фото пользователя."
          className="avatar__img" />
        </div>
        
        <div className="profile__user">
          <div className="profile__title">
            <h1 className="profile__name">Евгений Кустофф</h1>
            <button type="button" className="profile__button-edit button"></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button type="button" className="profile__button-add button"></button>
      </section>

      <section className="elements" aria-label="Фото мест.">
        <ul className="cards">
          <template id="card">
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
          </template>
        </ul>
      </section>
    </main>

  )
}