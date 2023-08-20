import React from 'react';

const EducationCard = ({ img, desc }) => {
  return (
    <div className="education__card">
      <div className="education__card-wrap">
        <div className="education__card-img">
          <img src={img} alt="Education-card-smile" className="education__card-pic" />
        </div>

        <p className="education__card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default EducationCard;
