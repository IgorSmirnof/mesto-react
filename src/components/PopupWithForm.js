import React from "react";

export default function PopupWithForm({ title, name, isOpen, onClose, children}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}` } >
        <form
          className="popup__container"
          autoComplete="off"
          name={`form-${name}`}
        >
          <button type="button" className="popup__close button"  onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          {/* <input
          id={`input-${name}`}
          className={`popup__input popup__input_${name}`}
            minLength="2"
            required
            // placeholder=" Введите ссылку на изображение"
            //type="url"
            name={`${name}`}
          /> */}
        <span className={`input-${name}-error input-error`}></span>
        {children}
          <button className="popup__button-save button" type="submit">Сохранить</button>
        </form>
      </div>
  )
}
