import {
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT,
  ProductActionTypes
} from '../types/actions/ProductAction';
import { Product } from '../types/Product';

const initialData: {
  products: Product[],
  PopularProducts: Product[],
  currentProduct: Product | null
} = {
  products: [],
  PopularProducts: [],
  currentProduct: null
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
    case GET_PRODUCT:
      return { ...state, currentProduct: action.product };
    default:
      return state;
  }
};

export default projectReducer;
