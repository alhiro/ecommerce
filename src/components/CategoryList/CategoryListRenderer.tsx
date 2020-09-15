import React from 'react';
import CategoryList from './CategoryList';
import SkeletonList from '../SkeletonList/SkeletonList';
import { ProductCategory } from '../../actions';
import { SkeletonListContext, Breakpoints } from '../../contexts';

interface CategoryListRendererProps {
  categories: ProductCategory[];
  skeletonCount?: number;
  breakpoints: Breakpoints;
}

const CategoryListRenderer: React.FC<CategoryListRendererProps> = ({
  categories,
  skeletonCount = 0,
  breakpoints
}) => {
  return (
    <SkeletonListContext.Provider value={breakpoints}>
      {categories.length === 0 ? (
        <SkeletonList itemCount={skeletonCount} />
      ) : (
        <CategoryList categories={categories} />
      )}
    </SkeletonListContext.Provider>
  );
};

export default CategoryListRenderer;
