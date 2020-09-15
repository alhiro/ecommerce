import React from 'react';
import { Layout, Row } from 'antd';
import '../CategoryList/CategoryList.less';

interface MainRowLayoutProps {
  children: React.ReactNode;
  rowClassName?: string;
}

const MainRowLayout: React.FC<MainRowLayoutProps> = ({
  children,
  rowClassName
}) => {
  return (
    <Layout className="boxed-width slide">
      <Row className={rowClassName} gutter={[24, 24]}>
        {children}
      </Row>
    </Layout>
  );
};

export default MainRowLayout;
