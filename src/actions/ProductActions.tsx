import { Dispatch } from 'redux';
import API from '../Api';
import { AppActions } from '../types/actions/index';
import { Product } from '../types/Product';
import {
  GET_POPULAR_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT
} from '../types/actions/ProductAction';

export const getPopularProduct = (products: Product[]): AppActions => ({
  type: GET_POPULAR_PRODUCTS,
  products,
});

export const getProduct = (product: Product): AppActions => ({
  type: GET_PRODUCT,
  product,
});

export const StartGetProduct = (product_slug:string) => (dispatch:Dispatch<AppActions>) => {
  API.get(`/products/${product_slug}`)
    .then((res) => dispatch({
      type: GET_PRODUCT,
      product: res.data.data,
    }));
};

export const StartGetPopularProducts = () => (dispatch:Dispatch<AppActions>) => {
  API.get('/products?count=5')
    .then((res) => dispatch({
      type: GET_POPULAR_PRODUCTS,
      products: res.data.data,
    }));
};

export const StartGetProducts = () => (dispatch:Dispatch<AppActions>) => {
  API.get('/products')
    .then((res) => dispatch({
      type: GET_PRODUCTS,
      products: res.data.data,
    }));
};
