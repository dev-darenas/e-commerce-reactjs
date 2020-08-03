import React from 'react';
import './App.scss';
import Routes from './Routes';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
