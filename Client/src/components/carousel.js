import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from "../images/carousel-1.png";
import CarouselImage2 from "../images/carousel-2.png";
import CarouselImage3 from "../images/carousel-3.png";

export default function App() {
return (
	<div className='carousel-wrapper'>
    <Carousel>

      <Carousel.Item interval={5000}>
        <div className="carousel-image-container" style={{ backgroundImage: `url(${CarouselImage3})` }}>
          <Carousel.Caption className='carousel-caption'>
            <h3 className='carousel-1-caption'>Premium NFT Merch</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="carousel-image-container" style={{ backgroundImage: `url(${CarouselImage1})` }}>
          <Carousel.Caption className='carousel-caption'>
            <h3 className='carousel-1-caption'>Premium NFT Merch</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="carousel-image-container" style={{ backgroundImage: `url(${CarouselImage2})` }}>
          <Carousel.Caption className='carousel-caption'>
            <h3 className='carousel-3-caption'>Premium NFT Merch</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
	</div>
);
}
