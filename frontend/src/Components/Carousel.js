import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '24px', color: 'white' }} />
      </div>
    );
  }

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '24px', color: 'white' }} />
      </div>
    );
  }

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        <img src="image1.jpg" alt="Slide 1" />
      </div>
      <div>
        <h3>Slide 2</h3>
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      <div>
        <h3>Slide 3</h3>
        <img src="image3.jpg" alt="Slide 3" />
      </div>
    </Slider>
  );
}

export default Carousel;
