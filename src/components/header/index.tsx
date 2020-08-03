import React, { useState, useEffect } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import './styles.scss';

interface PropsHeader {
  changeHeader?: Boolean,
}

const Header = ({ changeHeader=true }:PropsHeader) => {
  const [header, setHeader] = useState( changeHeader? "header" : "header_scrolled")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      setHeader("header")
    } else if (window.scrollY > 70) {
      setHeader("header_scrolled")
    } 
  }

  useEffect(() => {
    if (changeHeader) {
      window.addEventListener('scroll', listenScrollEvent);
    }
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, [changeHeader]);

  return (
    <Navbar className={header}>
      <Navbar.Brand>
        <img src="/images/icons/logo.png"
              alt="Laias"
              className="logo"
        />
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu >
        <Navbar.Container position="end">
          <Navbar.Item href="/">
            Inicio
          </Navbar.Item>
          <Navbar.Item href="/store">
            Tienda
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;