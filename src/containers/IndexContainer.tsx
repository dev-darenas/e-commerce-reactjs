import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Header from '../components/header';

const slider = (
  <AwesomeSlider 
    animation="foldOutAnimation"
  >
    <div data-src="/images/laia.jpeg" />
    <div data-src="/images/laia_3.jpeg" />
    <div data-src="/images/laia_6.jpeg" />
  </AwesomeSlider>
);

const IndexContainer = () => {
  return (
    <div>
      <Header />
      { slider }
    </div>
  )
}

export default IndexContainer;
