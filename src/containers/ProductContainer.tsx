import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Container from 'react-bulma-components/lib/components/container';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { AppState } from '../store';
import { AppActions } from '../types/actions';
import { Product } from '../types/Product';
import { StartGetProduct } from '../actions/ProductActions'
import { useParams } from "react-router-dom";
import PopularProducts from '../components/popularProducts';
import { Columns } from 'react-bulma-components';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface LinkStateProps {
  currentProduct: Product | null
}

interface LinkDispatchProps {
  StartGetProduct: () => void;
}

type Props = LinkDispatchProps & LinkStateProps;

const ProductContainer = ({
  StartGetProduct,
  currentProduct,
}) => {

  let { slug_id } = useParams();
  const [bkImage, setBkImage] = useState('');

  useEffect(() => {
    if (currentProduct === null) {
      StartGetProduct(slug_id);
    }
    if (currentProduct !== null && bkImage === ''){
      setBkImage(currentProduct.attributes.variant_images[0])
    }
  });

  if (currentProduct === null ){ return <div /> }
  return (
    <div>
      <Header changeHeader={false} />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Columns >
          <Columns.Column size={1} >
            {
              currentProduct.attributes.carousel.map((img, index) => (
                <img
                  key={img.alt}
                  src={`${process.env.REACT_APP_BASE_URL}${img.img}`}
                  alt={img.alt}
                  onClick={() => setBkImage(currentProduct.attributes.variant_images[index])}
                />
              ))
            }
          </Columns.Column>
          <Columns.Column size={5}>
            <Zoom>
              <img
                alt="laia"
                src={`${process.env.REACT_APP_BASE_URL}${bkImage}`}
              />
            </Zoom>
          </Columns.Column>
          <Columns.Column size={5}>
            <h2 className='is-size-1'>
              { currentProduct.attributes.name }
            </h2>
            <p className='is-size-4'>
              { currentProduct.attributes.description }
            </p>
            <h3 className='is-size-3 has-text-weight-bold'>
              { currentProduct.attributes.cost_price } €
            </h3>
          </Columns.Column>
        </Columns>
        <h1 className="dancing has-text-centered is-size-2"> Mas populares </h1>
        <br />
        <PopularProducts />
      </Container>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  currentProduct: state.products.currentProduct
});

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  StartGetProduct: bindActionCreators(StartGetProduct, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(ProductContainer);
