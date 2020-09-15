import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Product } from '../../actions';
import { Row, Col, Card, Typography, Button } from 'antd';
import { SkeletonListContext } from '../../contexts';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Text } = Typography;
const { Meta } = Card;

interface SaleProductItemProps {
  product: Product;
}

const SaleProductItem: React.FC<SaleProductItemProps> = ({ product }) => {
  const { xl, md, sm, lg, xs } = React.useContext(SkeletonListContext);
  const {
    id,
    imageUrl,
    title,
    description,
    price,
    loved,
  } = product;
  const featured_image = imageUrl.length > 0 ? imageUrl : '';
  const product_id = `${id}`;

  return (
    <Link 
      href={{
        pathname: "/product/[...product]",
        query: { 
          id: product.id,
          imageUrl: product.imageUrl,
          title: product.title,
          description: product.description,
          price: product.price,
          loved: product.loved
        },
      }} 
      as={`/product/${product_id}`} 
    >
      <Col xl={xl} lg={lg} md={md} sm={sm} xs={xs} className="centered-col">        
        <Card
          hoverable
          cover={
            featured_image ? <img alt="example" src={featured_image} /> : null
          }
        >
          <div className="float-icon">{loved ? <HeartFilled/> : <HeartOutlined/>}</div>          
          <Meta title={title} />
          <Row>
            <Text>{price}</Text>
          </Row>
        </Card>
      </Col>
    </Link>
  );
};

export default SaleProductItem;
