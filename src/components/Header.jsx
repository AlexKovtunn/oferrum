import React from 'react';
import logoSvg from '../assets/logo.svg';
import BurgerMenu from './BurgerMenu';

const Header = ({ onClickBurgerBtn, burgerActive }) => {
  return (
    <header className="header" style={{ zIndex: burgerActive ? 34 : 30 }}>
      <div className="container">
        <div className="header__flex">
          <div className="header__logo">
            <img src={logoSvg} className="header__logo-pic" alt="logo" />
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <a href="#hero">Главная</a>
              </li>

              <li className="header__list-item">
                <a href="#education">Что даст обучение</a>
              </li>

              <li className="header__list-button">
                <span>Личный кабинет</span>
              </li>
            </ul>
          </nav>

          <BurgerMenu
            logoSvg={logoSvg}
            burgerActive={burgerActive}
            onClickBurgerBtn={onClickBurgerBtn}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
