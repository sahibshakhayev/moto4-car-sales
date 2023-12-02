import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Heart from "../../assets/heart.png";
import User from "../../assets/user.png";
// Icons
import Plus from "../../assets/icons/plus.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="moto4 Logo" />
      </div>
      <div className="rightMenu">
        <div className="navbar">
          <ul className="menu">
            <li>Hamısı</li>
            <li>Xidmətlər</li>
            <li>Haqqımızda</li>
            <li>FAQ</li>
          </ul>
          <ul className="utils">
            <li>
              <img src={Heart} alt="heart" />
            </li>
            <li>
              <img src={User} alt="user" />
            </li>
            <li>
              <select name="language" id="language">
                <option value="az">AZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="placeButtons">
          <button className="placeWithPrognose btn">
            {/* import plus svg */}
            <img src={Plus} alt="plus" />
            <span>Proqnozlu Elan</span>
          </button>
          <button className="placeWithHand btn">
            <span>Elan Yerləşdir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
