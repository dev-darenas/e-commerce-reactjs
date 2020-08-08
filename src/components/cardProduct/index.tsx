import React, { useState } from 'react';
import { Card } from 'react-bulma-components';
import { Product } from '../../types/Product';
import './styles.scss';

interface PropsCardProduct {
  product: Product,
}

const cardProduct = ({ product }:PropsCardProduct) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bkImage, setBkImage] = useState(product.attributes.variant_images[0]);

  const setBkImageMouse = (OnMouse) => {
    if (OnMouse === 'onMouseOver' && product.attributes.variant_images[1]) {
      setBkImage(product.attributes.variant_images[1])
      return;
    }

    setBkImage(product.attributes.variant_images[0])
  }

  return (
    <Card className='card-product'>
      <Card.Image 
        src={`${process.env.REACT_APP_BASE_URL}${bkImage}`}
        onMouseOver={() => setBkImageMouse('onMouseOver')}
        onMouseOut={() => setBkImageMouse('onMouseOut')}
      />
      <Card.Content>
        <div className='title is-size-5' >
          {product.attributes.name}
        </div>
        <div >
          {product.attributes.cost_price} €
        </div>
      </Card.Content>
    </Card>
  )
}

export default cardProduct;
