import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import JW from '/assets/john-wick-franchise-promo-horizontal-01.jpg';
import HG from '/assets/hunger-games_new.jpg';
import SAW from '/assets/jigsaw-puppet-blog-image.jpg';

const Featured = () => {
    return(
        <Container>
            <Carousel data-bs-theme="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={JW}
                        width='1200'
                        height='600'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>John Wick Franchise</h2>
                        <p>Contact Sales For More Information</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={HG}
                        width='1200'
                        height='600'
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>The Hunger Games Franchise</h2>
                        <p>Contact Sales For More Information</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SAW}
                        width='1200'
                        height='600'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Saw Franchise</h2>
                        <p>Contact Sales For More Information</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
     </Container>
  );
}

export default Featured;