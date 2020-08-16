import React from 'react';
import { Level } from 'react-bulma-components';

const style = { textAlign: 'center' };

const HeaderMobile = () => {
  return (
    <div>
      <Level className="header-level" renderAs="nav">
        <Level.Item style={style}>
          <img src="/images/icons/logo.png" alt="Laias" className="logo" />
        </Level.Item>
      </Level>
      <Level className="header-level" renderAs="nav">
        <Level.Item style={style}>
          <a href="/" >Inicio</a>
          <a href="/store" >Tienda</a>
        </Level.Item>
      </Level>
    </div>
  )
}

export default HeaderMobile;
