import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { AppState } from '../../store';
import { AppActions } from '../../types/actions';
import { Product } from '../../types/Product';
import { StartGetPopularProducts } from '../../actions/ProductActions'

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
    <div>
      {
        products.PopularProducts.map((product:Product) => (
          <div key={product.id} >
            {product.attributes.name}
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  products: state.products
});

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  StartGetPopularProducts: bindActionCreators(StartGetPopularProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(PopularProduct);
