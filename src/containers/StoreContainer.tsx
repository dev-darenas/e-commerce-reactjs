import React from 'react';
import Products from '../components/products'
import Header from '../components/header';

const StoreContainer = () => {
  return (
    <div>
      <Header changeHeader={false} />
      <Products />
    </div>
  )
}

export default StoreContainer;
