import React, { useRef } from 'react';
import Link from 'next/link';
import { ProductCategory } from '../../actions';
import { Col, Card, List } from 'antd';
import { SkeletonListContext } from '../../contexts';
const { Meta } = Card;

interface CategoryItemProps {
  category: ProductCategory;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { name, imageUrl } = category;
  const featured_image = imageUrl ?? '';

  return (
    <List className="centered-col">
      <Link
        href="#"
        key={category.id}
      >
        <a>
          <Card
            className="category-item-card"
            hoverable
            cover={
              featured_image ? <img alt="example" src={featured_image} /> : null
            }
          >
            <Meta title={name} />
          </Card>
        </a>
      </Link>
    </List>
  );
};

export default CategoryItem;
