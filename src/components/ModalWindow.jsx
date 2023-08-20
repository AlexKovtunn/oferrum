import React, { useState } from 'react';

const ModalWindow = ({ onClickModal }) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || !email.includes('@')) {
      setIsEmailValid(false);
      return;
    }

    onClickModal();
  };

  return (
    <div className="modal-window__container">
      <div className="burger-menu__blur"></div>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-window__wrap">
          <div className="modal-window__close" onClick={onClickModal}></div>
          <div className="modal-window__content">
            <h2 className="modal-window__title">Начни прямо сейчас!</h2>
            <p className="modal-window__subtitle">
              Получи все нужные навыки для заработка на NFT всего за 28 дней!
            </p>

            <form className="modal-window__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className={`modal-window__input ${!isEmailValid ? 'invalid' : ''}`}
                placeholder="Ваш email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(true);
                }}
                name="email"
              />

              {!isEmailValid && (
                <p className="modal-window__error-message">Пожалуйста, введите корректный email</p>
              )}

              <input
                type="submit"
                className="hero__text-btn modal-window__submit"
                value="Оплатить"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
