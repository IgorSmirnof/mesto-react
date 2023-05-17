import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  // const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    // setIsImagePopupOpen(true);
    console.log(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    // setIsImagePopupOpen(false)
    console.log('closeAllPopups')
  }

  return (
    <div className="body-root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onClose = {closeAllPopups}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-name"
          className="popup__input popup__input_field_name"
          minLength="2"
          maxLength="40"
          required
          placeholder=" Введите имя"
          name="name"
        />
        <span className="input-name-error input-error"></span>

        <input
          id="input-description"
          className="popup__input popup__input_field_description"
          minLength="2"
          maxLength="200"
          required
          placeholder=" Вид деятельности"
          name="description"
        />
        <span className="input-description-error input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="image_add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-place"
          className="popup__input popup__input_field_place"
          minLength="2"
          maxLength="30"
          required
          placeholder=" Название"
          name="place"
        />
        <span className="input-place-error input-error"></span>
        <input
          id="input-link"
          className="popup__input popup__input_field_link"
          type="url"
          required
          placeholder=" Ссылка на картинку"
          name="link"
        />
        <span className="input-link-error input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-avatar"
          className="popup__input popup__input_avatar"
          minLength="2"
          required
          placeholder=" Введите ссылку на изображение"
          type="url"
          name="avatar"
        />
        <span className="input-avatar-error input-error"></span>
      </PopupWithForm>

      {/* <PopupWithForm
        title='Вы уверены?'
        name='close'
      >
      <div className="popup popup_delete">
        <form
          className="popup__container"
          autoComplete="off"
          name="form-delete"
        >
          <button type="button" className="popup__close button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button-save button">Да</button>
        </form>
      </div>
      
      </PopupWithForm> */}
      
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
