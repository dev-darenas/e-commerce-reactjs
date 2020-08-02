import {
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS,
  ProductActionTypes
} from '../types/actions/ProductAction';
import { Product } from '../types/Product';

const initialData: {
  products: Product[],
  PopularProducts: Product[],
} = {
  products: [],
  PopularProducts: []
};

const projectReducer = (
  state = initialData,
  action: ProductActionTypes,
) => {
  switch (action.type) {
    case GET_POPULAR_PRODUCTS:
      return { ...state, PopularProducts: action.products };
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default projectReducer;
