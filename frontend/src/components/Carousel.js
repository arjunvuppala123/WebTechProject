import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export const Home = () => ( 
  <Carousel>
  <Carousel.Item>
    <img
      style = {{
        paddingTop: 75,
        paddingLeft: 200,
        paddingRight: 200,
        paddingBottom: 100,
      }}
      id="carousel-img"
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Billboard_Hot_100_logo.jpg"
      alt="First slide"
      overflow="visible"
    />
    <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
          style = {{
        paddingTop: 75,
        paddingLeft: 200,
        paddingRight: 200,
        paddingBottom: 100,
      }}
      id="carousel-img"
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/en/6/68/Shawn_Mendes_-_Wonder.png" alt="Second slide"
      alt="Second slide"
      overflow="visible"
      padding= "30"
    />
    <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
          style = {{
          paddingTop: 75,
        paddingLeft: 200,
        paddingRight: 200,
        paddingBottom: 100,
      }}
      id="carousel-img"
      className="d-block w-100"
      src="https://i.ytimg.com/vi/pxCWiYFkvTg/maxresdefault.jpg"
      alt="Third slide"
      overflow="visible"
    />
    
  <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)