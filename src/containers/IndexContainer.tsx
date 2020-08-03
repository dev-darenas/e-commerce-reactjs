import React  from 'react';
import Slider from '../components/slider';
import PopularProducts from '../components/popularProducts';
import Header from '../components/header';

const IndexContainer = () => {
  return (
    <div>
      <Header />
      <Slider />
      <hr/>
      <h2 className="has-text-centered"> Mas populares </h2>
      <PopularProducts />
    </div>
  )
}

export default IndexContainer;
