import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider 
    animation="foldOutAnimation"
  >
    <div data-src="/img/laia_1.jpeg">
      <h2>Hola!!</h2>
    </div>
    <div data-src="/img/laia_2.jpeg" />
    <div data-src="/img/laia_5.jpeg" />
  </AwesomeSlider>
);

function App() {
  return (
    <div></div>
  );
}

export default App;
