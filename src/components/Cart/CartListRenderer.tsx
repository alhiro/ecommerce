import React from 'react';
import { Product } from '../../actions';
import CartList from './CartList';
import SkeletonList from '../SkeletonList/SkeletonList';
import { useRouter } from 'next/router';

interface CartListRendererProps {
  cartProducts: any[];
  totalItems: number;
}

const CartListRenderer: React.FC<CartListRendererProps> = ({
  cartProducts,
  totalItems
}) => {
  const router = useRouter();
  const productParam: any = router.query;

  console.log('cartProducts ' + JSON.stringify(totalItems) );
  
  return (
    <>
      {cartProducts && totalItems > 0 ? (
        <CartList products={cartProducts} />
      ) : (
        <SkeletonList itemCount={totalItems} />
      )}
    </>
  );
};

export default CartListRenderer;
