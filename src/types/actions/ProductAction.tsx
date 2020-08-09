import { Product } from '../Product';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_POPULAR_PRODUCTS = 'GET_POPULAR_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';

export interface GetProduct {
  type: typeof GET_PRODUCT,
  product: Product
}

export interface GetProductsAction {
  type: typeof GET_PRODUCTS,
  products: Product[]
}

export interface GetPopularProductsAction {
  type: typeof GET_POPULAR_PRODUCTS,
  products: Product[]
}

export type ProductActionTypes = GetProductsAction
| GetPopularProductsAction | GetProduct
