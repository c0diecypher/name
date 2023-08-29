import "./main.css";
import React from "react";


function Header() {
  return (
    <header>
      <div className="father">
        <p className="usercard">username</p>
        <a href="https://t.me/zipperwear" className="btnurl">
          <div className="button-telegram-channel">
            <p className="widget-text">zipperwear</p>
            <p className="widget-text-low"> наш телеграм канал</p>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
