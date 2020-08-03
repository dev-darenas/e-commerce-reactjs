import React from 'react';
import { Card } from 'react-bulma-components';
import { Product } from '../../types/Product';

interface PropsCardProduct {
  product: Product,
}

const cardProduct = ({ product }:PropsCardProduct) => {
  return (
    <Card>
      <Card.Image src={`${process.env.REACT_APP_BASE_URL}${product.attributes.variant_images[0]}`} />
      <Card.Content>
        <p className='has-text-centered is-size-5' >{product.attributes.name}</p>
        <p className='has-text-centered is-size-7 has-text-weight-light' >{product.attributes.description}</p>
        <h4 className='has-text-centered' >{product.attributes.cost_price} € </h4>
      </Card.Content>
    </Card>
  )
}

export default cardProduct;
