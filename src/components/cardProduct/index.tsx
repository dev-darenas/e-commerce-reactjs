import React from 'react';
import { Card, Content } from 'react-bulma-components';
import { Product } from '../../types/Product';

interface PropsCardProduct {
  product: Product,
}

const cardProduct = ({ product }:PropsCardProduct) => {
  return (
    <Card>
      <Card.Image src={`${process.env.REACT_APP_BASE_URL}${product.attributes.variant_images[0]}`} />
      <Card.Content>
        <Content>
          {product.attributes.name}
          <h4>{product.attributes.cost_price}</h4>
        </Content>
      </Card.Content>
    </Card>
  )
}

export default cardProduct;
