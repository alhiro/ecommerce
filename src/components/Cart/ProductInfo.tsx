import React from 'react';
import Link from 'next/link';
import { Product } from '../../actions';
import { Typography } from 'antd';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;

interface ProductInfoProps {
  product: any;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
   
  const id = `${product.id}`;
  const title = `${product.title}`;
  const description = `${product.description}`;
  const price = `${product.price}`;
  const loved = `${product.loved}`;
  const imageUrl = product.imageUrl ?? '';

  const router = useRouter();
  const productParam: any = router.query;

  console.log('productID ' + JSON.stringify(productParam) );
  
  return (
    <>
      <div className="featured-pp">
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
          as={`/product/${id}`} 
        >
          <a>{imageUrl && <img src={imageUrl} />}</a>
        </Link>
      </div>
      <div className="description">
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
          as={`/product/${id}`}
        >
          <a>
            <Title level={5}>{title}</Title>
            <div>              
              <Text>{price}</Text>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductInfo;
