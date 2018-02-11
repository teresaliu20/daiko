import React from 'react';
import LinkBlock from './LinkBlock';

const LinkContainer = ({title}) => {
  return (
    <div className="link-container">
      <h2 className="header">{title}</h2>
      <div className="link-wrapper">
        <LinkBlock content="Suvir"/>
        <LinkBlock content="Martin"/>
        <LinkBlock content="Teresa"/>
      </div>
    </div>
  );
};

export default LinkContainer;
