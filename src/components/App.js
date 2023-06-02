import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getInitialCards()])
      .then(([user, card]) => {
        setCurrentUser(user);
        setCards(card);

        // console.log(user);
      })
      .catch((err) => console.log(err));
  }, []); // <----<< [] -- при монтировании один раз!

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    console.log(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    console.log("closeAllPopups");
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // console.log(isLiked, currentUser._id)
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });

      // console.log("handleCardLike", card);
  } 

  function handleCardDelete(card) {
    api.deleteCardApi(card._id)
      .then(() => {
        setCards(state => state.filter((c) => c._id !== card._id));
        // console.log(id, card); //          <-------------<<
      })
      .catch((err) => console.log("error delete card :" + err))
      ;
  };

  function handleUpdateUser(value) {
    // console.log(value);
    // alert(name, about);
    api.setUserInfoApi(value)    
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups()
      })   // *  <--------------<< 
      .catch((err) => console.log(err))
  };

  function handleUpdateAvatar(value) {
    console.log(value);
    // alert(name, about);
    api.setUserAvatar(value)    
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups()
    })
    .catch((err) => console.log(err));
  };
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body-root">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
          // onCardLike={console.log("handleCardLike")}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        
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

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
