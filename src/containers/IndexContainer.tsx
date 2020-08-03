import React  from 'react';
import Slider from '../components/slider';
import PopularProducts from '../components/popularProducts';

const IndexContainer = () => {
  return (
    <div>
      <Slider />
      <hr/>
      <h2 className="has-text-centered"> Mas populares </h2>
      <PopularProducts />
    </div>
  )
}

export default IndexContainer;
