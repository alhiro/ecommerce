import {
  CategoryTypes,
  ProductCategory,
  FetchCategories,
  FetchCategory
} from '../actions';

type Actions = FetchCategories | FetchCategory;

export interface CategoryState {
  mainCategories: ProductCategory[];
  category?: ProductCategory;
}

export const initialState: CategoryState = {
  mainCategories: [],
  category: undefined
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case CategoryTypes.fetchCategories:
      return { ...state, mainCategories: action.payload };
    case CategoryTypes.fetchCategory:
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
