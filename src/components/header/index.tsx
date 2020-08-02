import React, { useState, useEffect } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import './styles.scss';

const Header = () => {
  const [header, setHeader] = useState("header")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      setHeader("header")
    } else if (window.scrollY > 70) {
      setHeader("header_scrolled")
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

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
          <Navbar.Item href="#">
            Inicio
          </Navbar.Item>
          <Navbar.Item href="#">
            Tienda
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;