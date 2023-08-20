import React from 'react';

const BurgerMenu = ({ logoSvg, burgerActive, onClickBurgerBtn }) => {
  return (
    <div className="header__burger-menu burger-menu">
      <div
        className={burgerActive ? 'burger-menu__btn active' : 'burger-menu__btn'}
        onClick={onClickBurgerBtn}></div>
      <div className="burger-menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="header__logo">
          <img src={logoSvg} className="header__logo-pic" alt="logo" />
        </div>

        <ul className="burger-menu__list">
          <li className="header__list-item" onClick={onClickBurgerBtn}>
            <a href="#hero">Главная</a>
          </li>

          <li className="header__list-item">
            <a href="#education" onClick={onClickBurgerBtn}>
              Что даст обучение
            </a>
          </li>

          <li className="header__list-button" onClick={onClickBurgerBtn}>
            <span>Личный кабинет</span>
          </li>
        </ul>
      </div>
      <div className={burgerActive ? 'burger-menu__blur' : 'none'}></div>
    </div>
  );
};

export default BurgerMenu;
