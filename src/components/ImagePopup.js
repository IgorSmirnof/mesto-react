import React from "react";

export default function ImagePopup() {
  return (
    <div className="popup popup_picture">
        <figure className="popup__figure">
          <button type="button" className="popup__close button"></button>
          <img src="#" alt="" className="popup__full" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
  )
}