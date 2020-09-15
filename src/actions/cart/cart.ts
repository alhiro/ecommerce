import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import { CartTypes } from '../types';
import {
  AddToCart,
  RemoveFromCart,
  UpdateCartItemCount
} from './cart_interfaces';

export const addToCart = (
    id: string, 
    imageUrl: string,
    title: string,
    price: string,
    loved: string,
    description: string,
    count = 1
  ) => {
  return (dispatch: Dispatch) => {
    dispatch<AddToCart>({
      type: CartTypes.addToCart,
      payload: { 
        id,
        imageUrl,
        title,
        price,
        loved,
        description,
        count
      }
    });
  };
};

export const removeFromCart = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch<RemoveFromCart>({
      type: CartTypes.removeFromCart,
      payload: id
    });
  };
};

export const updateCartItemCount = (
    id: string, 
    imageUrl: string,
    title: string,
    price: string,
    loved: string,
    description: string,
    count: number
) => {
  return (dispatch: Dispatch) => {
    dispatch<UpdateCartItemCount>({
      type: CartTypes.updateCartItemCount,
      payload: { 
        id,
        imageUrl,
        title,
        price,
        loved,
        description,
        count
      }
    });
  };
};
