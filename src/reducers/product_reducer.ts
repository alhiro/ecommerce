import {
  ProductTypes,
  Product,
  FetchProducts,
  FetchCategoryProducts,
  FetchProductById,
  FetchProductsByIds
} from '../actions';

type Actions =
  | FetchProducts
  | FetchCategoryProducts
  | FetchProductById
  | FetchProductsByIds;

export interface ProductState {
  saleProducts: any[];
  categoryProducts: Product[];
  currentProduct?: Product;
  cartProducts: Product[];
}

export const initialState: ProductState = {
  saleProducts: [],
  categoryProducts: [],  
  currentProduct: undefined,
  cartProducts: []
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case ProductTypes.fetchProducts:
      return {
        ...state,
        saleProducts: action.payload
      };
    case ProductTypes.fetchCategoryProducts:
      return { ...state, categoryProducts: action.payload };
    case ProductTypes.fetchProductById:
      return { ...state, currentProduct: action.payload };
    case ProductTypes.fetchProductsByIds:
      return { ...state, cartProducts: action.payload };
    default:
      return state;
  }
}
