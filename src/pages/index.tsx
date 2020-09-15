import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../components/MainLayout/MainLayout';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import CategoryListRenderer from '../components/CategoryList/CategoryListRenderer';
import ProductListRenderer from '../components/ProductList/ProductListRenderer';
import SimpleHeading from '../components/SimpleHeading';
import { fetchCategories, fetchProducts } from '../actions';
import { useCategorySelector, useProductSelector } from '../selectors';

import { Card, Col, Input, Row, Typography } from 'antd';
import { HeartFilled, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { SkeletonListContext } from '../contexts';

const { Text } = Typography;
const { Meta } = Card;

const Home = () => {
  const dispatch = useDispatch();
  const { saleProducts } = useProductSelector();
  const { mainCategories } = useCategorySelector();
  const { xl, md, sm, lg, xs } = React.useContext(SkeletonListContext);
 
  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <MainLayout title="SehatQ Dashboard">
      <Row>
        <Input onChange={handleSearch} className="search-top" size="large" placeholder="Search product..." prefix={<SearchOutlined />} />
      </Row>
      <Row>
        {searchTerm ? saleProducts.filter(data => data.title.toLowerCase().includes(searchTerm)).map(filter => (
          <Link
            key={filter.id}
            href={{
              pathname: "/product/[...product]",
              query: {
                id: filter.id,
                imageUrl: filter.imageUrl,
                title: filter.title,
                description: filter.description,
                price: filter.price,
                loved: filter.loved
              },
            }}
            as={`/product/${filter.id}`}
          >
            <Col className="centered-col search-list">
              <Card                
                hoverable
                cover={
                  filter.imageUrl ? <img alt="example" src={filter.imageUrl} /> : null
                }
              >
                <div className="float-icon">{filter.loved ? <HeartFilled /> : <HeartOutlined />}</div>
                <Meta title={filter.title} />
                <Row>
                  <Text>{filter.price}</Text>
                </Row>
              </Card>
            </Col>
          </Link>
        )) : 
          <div 
            style={{
              textAlign: 'center',
              padding: '20px',
              width: '100%'
            }}>Please Search toLowerCase by title (for sample)...
          </div>
        }
      </Row>

      <MainCarousel />

      <SimpleHeading title="List Categories" level={3} />
      <CategoryListRenderer
        categories={mainCategories}
        skeletonCount={1}
        breakpoints={{
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24
        }}
      />

      <SimpleHeading title="List Products" level={3} />
      <ProductListRenderer
        skeleton
        skeletonCount={4}
        products={saleProducts}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />
    </MainLayout>
  );
};

export default Home;
