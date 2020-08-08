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
      <h1 className="dancing has-text-centered is-size-2"> Mas populares </h1>
      <br />
      <PopularProducts />
    </div>
  )
}

export default IndexContainer;
