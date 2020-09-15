//@ts-nocheck
import { Dispatch } from 'redux';
import { ProductTypes } from '../types';
import { wooApi, PROXY_URL } from '../../config';
import axios from 'axios';
import {
  FetchProducts,
  FetchCategoryProducts,
  FetchProductById,
  FetchProductsByIds
} from './product_interfaces';

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        PROXY_URL
      );

      dispatch<FetchProducts>({
        type: ProductTypes.fetchProducts,
        payload: response.data[0].data.productPromo
      });
     //  console.log('response ' + JSON.stringify(response.data[0].data.productPromo));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCategoryProducts = (
  categoryId: string,
  callback?: () => void
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        PROXY_URL
      );

      dispatch<FetchCategoryProducts>({
        type: ProductTypes.fetchCategoryProducts,
        payload: response.data[0].data.category
      });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProductById = (id: string, callback?: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        PROXY_URL
      );

      dispatch<FetchProductById>({
        type: ProductTypes.fetchProductById,
        payload: response.data[0].data.productPromo
      });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProductsByIds = (ids: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        PROXY_URL
      );

      dispatch<FetchProductsByIds>({
        type: ProductTypes.fetchProductsByIds,
        payload: response.data[0].data.productPromo
      });
    } catch (error) {
      console.log(error);
    }
  };
};
