import React from 'react';
import { notification, Button } from 'antd';
import Link from 'next/link';

const cartNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Link href="/cart">
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Go To Cart
      </Button>
    </Link>
  );

  notification.open({
    className: 'cart-notification',
    message: 'Item added to cart',
    description:
      'You have successfully added an item to your cart. To check out, click the button below.',
    top: 50,
    duration: 3,
    btn,
    key
  });
};

export default cartNotification;
