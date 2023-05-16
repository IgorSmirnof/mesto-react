import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
    return (
      <body class="body-root">
<Header />
<Main />

    <div class="popup popup_profile">
      <form class="popup__container" autocomplete = "off" name = "form-profile">
        <button type="button" class="popup__close button"></button>
        <h2 class="popup__title">Редактировать профиль</h2>
        <input id="input-name" class="popup__input popup__input_field_name" minlength="2" maxlength="40" required placeholder = " Введите имя" name = "name"/>
        <span class="input-name-error input-error"></span>

        <input id="input-description" class="popup__input popup__input_field_description" minlength="2" maxlength="200" required placeholder = " Вид деятельности" name="description" />
        <span class="input-description-error input-error"></span>

        <button class="popup__button-save button">Сохранить</button>
      </form>
    </div>

    <div class="popup popup_image_add">
      <form class="popup__container" autocomplete = "off" name = "form-image">
        <button type="button" class="popup__close button"> </button>
        <h2 class="popup__title">Новое место</h2>
        <input id="input-place" class="popup__input popup__input_field_place"  minlength="2" maxlength="30" required placeholder = " Название" name="place" />
        <span class="input-place-error input-error"></span>
        <input id="input-link" class="popup__input popup__input_field_link" type = 'url' required placeholder = " Ссылка на картинку" name="link" />
        <span class="input-link-error input-error"></span>
        <button class="popup__button-save button">Сохранить</button>
      </form>
    </div>

    <div class="popup popup_avatar">
      <form class="popup__container" autocomplete = "off" name = "form-avatar">
        <button type="button" class="popup__close button"></button>
        <h2 class="popup__title">Обновить аватар</h2>
        <input id="input-avatar" class="popup__input popup__input_avatar" minlength="2" required placeholder = " Введите ссылку на изображение" type = 'url' name = "avatar"/>
        <span class="input-avatar-error input-error"></span>
        <button class="popup__button-save button">Сохранить</button>
      </form>
    </div>

    <div class="popup popup_delete">
      <form class="popup__container" autocomplete = "off" name = "form-delete">
        <button type="button" class="popup__close button"></button>
        <h2 class="popup__title">Вы уверены?</h2>
        <button class="popup__button-save button">Да</button>
      </form>
    </div>

    <div class="popup popup_picture">
      <figure class="popup__figure">
        <button type="button" class="popup__close button"></button>
        <img src="#" alt="" class="popup__full" />
        <figcaption class="popup__caption"></figcaption>
      </figure>
    </div>

    <Footer />

  </body>
      
    );
  }

export default App;
