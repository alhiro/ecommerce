import { ProductTypes } from '../types';

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  loved: string;
}

export interface FetchProducts {
  type: ProductTypes.fetchProducts;
  payload: Product[];
}

export interface FetchCategoryProducts {
  type: ProductTypes.fetchCategoryProducts;
  payload: Product[];
}

export interface FetchProductById {
  type: ProductTypes.fetchProductById;
  payload: Product;
}

export interface FetchProductsByIds {
  type: ProductTypes.fetchProductsByIds;
  payload: Product[];
}
