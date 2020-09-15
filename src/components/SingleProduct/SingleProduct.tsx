import React from 'react';
import { Row, Col, Typography, Descriptions, Button, Card } from 'antd';
import cartNotification from './CartNotification';
import { addToCart } from '../../actions';
import { useDispatch } from 'react-redux';
import { SingleProductContext } from '../../contexts';
import './SingleProduct.less';
import { useRouter } from 'next/router';
import Meta from 'antd/lib/card/Meta';
import { HeartFilled, HeartOutlined, ShareAltOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Item } = Descriptions;

const SingleProduct = () =>  {
  const breakpoints = React.useContext(SingleProductContext);
  const dispatch = useDispatch();

  const router = useRouter();
  const productParam: any = router.query;

  // console.log('productID ' + JSON.stringify(productParam) );

  const id = `${productParam.id}`;
  const title = `${productParam.title}`;
  const description = `${productParam.description}`;
  const price = `${productParam.price}`;
  const loved = `${productParam.loved}`;
  const imageUrl = productParam.imageUrl ?? '';

  const addItemToCart = () => {
    dispatch(addToCart(
      id,
      imageUrl,
      title,
      price,
      loved,
      description,
    ));
    cartNotification();
  };

  const history = () => {
    window.history.go(-1);
  };

  return (
    <>
      <div className="go-back"><a onClick={history}><ArrowLeftOutlined/></a></div>

      <Row className="product-wrapper" justify="space-around">
        <Col
          xl={breakpoints[0].xl}
          lg={breakpoints[0].lg}
          md={breakpoints[0].md}
          sm={breakpoints[0].sm}
          className="product-image"
        >            
          <Card
            hoverable
            cover={
              imageUrl ? <img alt="example" src={imageUrl} /> : null
              }
            >
              <div className="float-icon">
                {loved ? <HeartFilled/> : <HeartOutlined/>}
                <ShareAltOutlined/>
              </div>       
          </Card>
        </Col>
        <Col
          xl={breakpoints[1].xl}
          lg={breakpoints[1].lg}
          md={breakpoints[1].md}
          sm={breakpoints[1].sm}
          className="product-description"
        >
          <Meta title={title} />
          
          <Row>
            <Text><p dangerouslySetInnerHTML={{ __html: description }} /></Text>
          </Row>
          <Row className="price-description">
            <Text>{price}</Text>
            <Button type="primary" onClick={addItemToCart}>
              Add To Cart
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SingleProduct;
