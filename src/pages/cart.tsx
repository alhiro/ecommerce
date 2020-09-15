import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CartListRenderer from '../components/Cart/CartListRenderer';
import { useCartSelector, useProductSelector } from '../selectors';
import { fetchProductsByIds } from '../actions';
import { calculateTotalPrice, getCartIds } from '../helpers';
import { CartContext, SkeletonListContext } from '../contexts';
import './cart.less';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Cart = () => {
  const { items, totalItems } = useCartSelector();
  const { cartProducts }: any = useProductSelector();
  const itemsLength = items.length;

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsLength > 0) {
      const cartItemIds = getCartIds(items);
      dispatch(fetchProductsByIds(cartItemIds));

      console.log('cartItemIds ' + JSON.stringify(cartItemIds)) // list id in cart
      console.log('items ' + JSON.stringify(items)) // list items in cart
      console.log('totalItems ' + JSON.stringify(totalItems)) // total items
      console.log('cartProducts ' + JSON.stringify(cartProducts)) // total items
    }
  }, [itemsLength]);

  const history = () => {
    window.history.go(-1);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(items));
  });

  return (
    <CartContext.Provider
      value={{
        totalPrice
      }}
    >
      <div className="go-back"><a onClick={history}><ArrowLeftOutlined/></a></div>
      
      <SkeletonListContext.Provider
        value={{ xl: 14, lg: 24, md: 24, sm: 24, xs: 24 }}
      >
        <MainLayout title={`SehatQ - Cart`}>
          <Row className="cart-wrapper boxed-width">
            <Col xl={14} lg={24} md={24} sm={24} xs={24}>
              {cartProducts && totalItems > 0 ? (
                <CartListRenderer
                  cartProducts={items}
                  totalItems={totalItems}
                />
              ) : (
                <Row>
                  <Title level={4}>No Product in Cart</Title>
                </Row>
              )}                
            </Col>
          </Row>
        </MainLayout>
      </SkeletonListContext.Provider>
    </CartContext.Provider>
  );
};

export default Cart;
