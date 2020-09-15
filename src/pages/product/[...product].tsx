import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout/MainLayout';
import SingleProductRenderer from '../../components/SingleProduct/SingleProductRenderer';
import { useProductSelector } from '../../selectors';
import { fetchProductById } from '../../actions';
import { Col } from 'antd';

const Product = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { product: productParam } = router.query;

  // console.log('product ID ' + productParam )

  const productId = productParam ? productParam[0] : null;

  const { currentProduct } = useProductSelector();
  const currentProductId = `${currentProduct?.id ?? ''}`;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== currentProductId) {
      setLoading(true);
      dispatch(
        fetchProductById(productId, () => {
          setLoading(false);
        })
      );
    }
  }, [productId]);

  return (
    <Col title={`SehatQ Product - ${productParam}`}>
      <SingleProductRenderer
        loading={isLoading}
        breakpoints={[
          { xl: 10, lg: 10, md: 10, sm: 24, xs: 0 },
          { xl: 14, lg: 14, md: 14, sm: 24, xs: 0 }
        ]}
      />
    </Col>
  );
};

export default Product;
