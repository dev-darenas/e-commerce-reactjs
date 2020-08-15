import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { AppState } from '../../store';
import { AppActions } from '../../types/actions';
import { Product } from '../../types/Product';
import { StartGetPopularProducts } from '../../actions/ProductActions'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import CardProduct from '../../components/cardProduct'
import { isBrowser } from "react-device-detect";

interface LinkStateProps {
  products: {
    PopularProducts: Product[];
  }
}

interface LinkDispatchProps {
  StartGetPopularProducts: () => void;
}

type Props = LinkDispatchProps & LinkStateProps;

const PopularProduct = ({
  StartGetPopularProducts,
  products,
}) => {
  useEffect(() => {
    if (products.PopularProducts.length === 0) {
      StartGetPopularProducts();
    }
  });

  return (
    <Carousel
      slidesPerPage={isBrowser? 3 : 1}
      infinite
      centered
      clickToChange
      autoPlay={2000}
      animationSpeed={1000}
    >
      {
        products.PopularProducts.map((product:Product) => (
          <CardProduct key={`key_card_product_${product.id}`} product={product} />
        ))
      }
    </Carousel>
  )
}

const mapStateToProps = (state: AppState) => ({
  products: state.products
});

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  StartGetPopularProducts: bindActionCreators(StartGetPopularProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(PopularProduct);
