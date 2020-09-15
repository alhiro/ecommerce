import { Dispatch } from 'redux';
import { PROXY_URL } from '../../config';
import axios from 'axios';
import {
  FetchCategories,
  FetchCategory
} from './category_interfaces';
import { CategoryTypes } from '../types';

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        PROXY_URL
      );
      dispatch<FetchCategories>({
        type: CategoryTypes.fetchCategories,
        payload: response.data[0].data.category
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCategory = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        PROXY_URL
      );
      dispatch<FetchCategory>({
        type: CategoryTypes.fetchCategory,
        payload: response.data[0].data.category
      });
    } catch (error) {
      console.log(error);
    }
  };
};
