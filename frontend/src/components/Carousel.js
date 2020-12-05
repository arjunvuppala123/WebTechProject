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
          <h3>Top 10!!</h3>
          <p>Check Out the top 10's of each genre!</p>
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
      src="https://upload.wikimedia.org/wikipedia/en/6/68/Shawn_Mendes_-_Wonder.png"
      alt="Second slide"
      overflow="visible"
      padding= "30"
    />
    <Carousel.Caption>
          <h3>Shaun Mendes's Wonder has just got released!!</h3>
          <p>Check out our review of Wonder!</p>
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
      src="https://i2.cinestaan.com/image-bank/1500-1500/177001-178000/177718.jpg"
      alt="Third slide"
      overflow="visible"
    />
    
  <Carousel.Caption>
          <h3>Achint Thakkar</h3>
          <p>Who is the man behind the soundtrack of SCAM 1992? Check our explore section for more!!</p>
        </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)