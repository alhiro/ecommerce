import { Carousel } from 'antd';
import './MainCarousel.less';

const MainCarousel = () => {
  return (
    <Carousel className="slide-home" autoplay>
      <div>
        <img src="/images/slide/image1.jpg" />
      </div>
      <div>
        <img src="/images/slide/image2.jpg" />
      </div>
      <div>
        <img src="/images/slide/image3.jpg" />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
