import React from 'react';

const Hero = ({ onClickModal }) => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__text">
          <h1 className="hero__text-title">
            Не упусти возможность войти в <span>прибыльную нишу</span>
          </h1>

          <p className="hero__text-subtitle">
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </p>

          <div className="hero__text-btn" onClick={onClickModal}>
            <span>Начать зарабатывать на NFT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
