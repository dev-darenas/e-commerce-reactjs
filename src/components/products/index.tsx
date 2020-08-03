import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { AppState } from '../../store';
import { AppActions } from '../../types/actions';
import { Product } from '../../types/Product';
import { StartGetProducts } from '../../actions/ProductActions'
import CardProduct from '../../components/cardProduct'
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';

interface LinkStateProps {
  products: {
    PopularProducts: Product[];
  }
}

interface LinkDispatchProps {
  StartGetProducts: () => void;
}

type Props = LinkDispatchProps & LinkStateProps;

const PopularProduct = ({
  StartGetProducts,
  products,
}) => {
  useEffect(() => {
    if (products.products.length === 0) {
      StartGetProducts();
    }
  });

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Todos los productos</h1>
      <hr />
      <Columns variableGap={{ mobile: 1, tablet: 0, desktop: 3, widescreen: 8, fullhd: 2 }} >
        {
          products.products.map((product:Product) => (
            <Columns.Column size={3} >
              <CardProduct key={`key_card_product_${product.id}`} product={product} />
            </Columns.Column>
          ))
        }
      </ Columns>
      <br />
    </Container>
  )
}

const mapStateToProps = (state: AppState) => ({
  products: state.products
});

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  StartGetProducts: bindActionCreators(StartGetProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(PopularProduct);
