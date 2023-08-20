import React from 'react';
import card1 from '../assets/1.png';
import card2 from '../assets/2.png';
import card3 from '../assets/3.png';
import card4 from '../assets/4.png';
import EducationCard from './EducationCard';

const Education = () => {
  const educactionCards = [
    { img: card1, desc: 'Откроешь свой первый криптокошелек и научишься с ним работать' },
    { img: card2, desc: 'Поймёшь, как выбирать правильные дропы' },
    { img: card3, desc: 'Построишь план по быстрому приумножению заработанных средств' },
    { img: card4, desc: 'Узнаешь кто такие холдеры и флипперы' },
  ];

  return (
    <section className="education" id="education">
      <div className="education__overlay1"></div>
      <div className="education__overlay2"></div>
      <div className="education__overlay3"></div>
      <div className="education__overlay4"></div>
      <div className="education__overlay5"></div>
      <div className="container">
        <div className="education__wrapper">
          <h1 className="education__title">Что даст тебе обучение?</h1>
          <div className="education__flex-wrap">
            <div className="education__flex">
              {educactionCards.map((card, index) => (
                <EducationCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
