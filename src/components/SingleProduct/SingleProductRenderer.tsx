import React from 'react';
import { Product } from '../../actions';
import SingleProduct from './SingleProduct';
import SingleProductSkeleton from './SingleProductSkeleton/SingleProductSkeleton';
import { SingleProductContext, Breakpoints } from '../../contexts';

interface SingleProductRendererProps {
  loading: boolean;
  breakpoints: Breakpoints[];
}

const SingleProductRenderer: React.FC<SingleProductRendererProps> = ({
  loading,
  breakpoints
}) => {
  return (
    <SingleProductContext.Provider value={breakpoints}>
      {loading ? (
        <SingleProductSkeleton />
      ) : (
        <SingleProduct />
      )}
    </SingleProductContext.Provider>
  );
};

export default SingleProductRenderer;
