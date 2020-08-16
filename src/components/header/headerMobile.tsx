import React from 'react';
import { Level } from 'react-bulma-components';

const style = { textAlign: 'center' };

const HeaderMobile = () => {
  return (
    <Level renderAs="nav">
      <Level.Item style={style}>
        <img src="/images/icons/logo.png" alt="Laias" className="logo" />
      </Level.Item>
    </Level>
  )
}

export default HeaderMobile;
