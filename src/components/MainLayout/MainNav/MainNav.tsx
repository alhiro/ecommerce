import React from 'react';
import Link from 'next/link';
import { Layout, Row, Col, Badge, Typography } from 'antd';
import { useCartSelector } from '../../../selectors';
import './MainNav.less';

const { Text } = Typography;
const { Header } = Layout;

const MainNav = () => {
  const { totalItems } = useCartSelector();

  return (
    <Header className="main-nav">
      <Row justify="space-between">
        <Col span={2}>
          <div className="left-nav-items">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default MainNav;
