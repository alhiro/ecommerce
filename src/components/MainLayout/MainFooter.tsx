import React from 'react';
import Link from 'next/link';
import { Layout, Row, Col, Badge, Typography } from 'antd';
import { useCartSelector } from '../../selectors';
import './MainFooter.less';

const { Text } = Typography;
const { Footer } = Layout;

const MainFooter = () => {
  const { totalItems } = useCartSelector();
  
  return (
    <Footer className="mobile-nav" style={{ textAlign: 'center' }}>
      <Row>
        <Col>
          <div className="nav-items">
            <Link href="/">
              <a>
                <Text>Home</Text>
              </a>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="nav-items">
            <Link href="/">
            <a>
              <Text>Feed</Text>
            </a>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="nav-items">
            <Link href="/cart">
              <a>
                <Badge
                  count={totalItems}
                  style={{
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                  }}
                >
                  <Text>Cart</Text>
              </Badge>
              </a>
            </Link>
          </div>          
        </Col>
        <Col>
          <div className="nav-items">
            <Link href="/profile">
            <a>
              <Text>Profile</Text>
            </a>
            </Link>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default MainFooter;
