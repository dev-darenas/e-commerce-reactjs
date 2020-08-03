import React  from 'react';
import Header from '../components/header';
import Slider from '../components/slider';
import PopularProducts from '../components/popularProducts';

const IndexContainer = () => {
  return (
    <div>
      <Header />
      <Slider />
      <hr/>
      <PopularProducts />
    </div>
  )
}

export default IndexContainer;
