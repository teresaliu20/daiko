import React from 'react';

const InfoContainer = ({title, info}) => {
  return (
    <div className="info-line">
      <h2 className="header">{title}</h2>
      <p className="content">{info}</p>
    </div>
  );
};

export default InfoContainer;
