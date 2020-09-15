import { CategoryTypes } from '../types';

export interface ProductCategory {
  id: number;
  imageUrl: string;
  name: string;
}

export interface FetchCategories {
  type: CategoryTypes.fetchCategories;
  payload: ProductCategory[];
}

export interface FetchCategory {
  type: CategoryTypes.fetchCategory;
  payload: ProductCategory;
}
