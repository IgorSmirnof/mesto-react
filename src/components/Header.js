import React from "react";
import logo from "../images/logo-blanco.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип Место Россия."
        className="header__logo"
      />
    </header>
  );
}


