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

  function handleEditAvatarClick() {
    console.log("handleEditAvatarClick");
    document.querySelector('.popup_avatar').classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_profile').classList.add("popup_opened");
    //popup_profile();
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_image_add').classList.add("popup_opened");
    console.log("AddPlaceClick");
  }

  // function popup_profile() {
  //   console.log("popup_profile");
  //   return (
  //     // </div>
  //   );
  // }

  return (
    <div className="body-root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm/>
      <ImagePopup/>
      
      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        isOpen={isEditAvatarPopupOpen}
        //onClose={closeAllPopups}
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


      {/* <div className="popup popup_profile">
        <form
          className="popup__container"
          autoComplete="off"
          name="form-profile"
        >
          <button type="button" className="popup__close button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
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

          <button className="popup__button-save button">Сохранить</button>
        </form>
      </div> */}

      



      <div className="popup popup_image_add">
        <form className="popup__container" autoComplete="off" name="form-image">
          <button type="button" className="popup__close button"></button>
          <h2 className="popup__title">Новое место</h2>
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
          <button className="popup__button-save button">Сохранить</button>
        </form>
      </div>

      <div className="popup popup_avatar">
        <form
          className="popup__container"
          autoComplete="off"
          name="form-avatar"
        >
          <button type="button" className="popup__close button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
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
          <button className="popup__button-save button">Сохранить</button>
        </form>
      </div>

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

      
    </div>
  );
}

export default App;
