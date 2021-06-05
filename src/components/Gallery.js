import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import p1 from '../assets/images/gallery/p1.jpg';
import p2 from '../assets/images/gallery/p2.jpg';
import p3 from '../assets/images/gallery/p3.jpg';
import p4 from '../assets/images/gallery/p4.jpg';
import p5 from '../assets/images/gallery/p5.jpg';
import p6 from '../assets/images/gallery/p6.jpg';
import p7 from '../assets/images/gallery/p7.jpg';
import p8 from '../assets/images/gallery/p8.jpg';
import p9 from '../assets/images/gallery/p9.jpg';
import p10 from '../assets/images/gallery/p10.jpg';
import p11 from '../assets/images/gallery/p11.jpg';
import p12 from '../assets/images/gallery/p12.jpg';
import p13 from '../assets/images/gallery/p13.jpg';
import p14 from '../assets/images/gallery/p14.jpg';
import p15 from '../assets/images/gallery/p15.jpg';
import  vid1Img from '../assets/videos/vid1-img.PNG';
import  vid2Img from '../assets/videos/vid2-img.PNG';
import { Player } from 'video-react';
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';

function Gallerya(props) {


    return (
        <div>
        <div>
              <div className='contact'>
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-5 offset-sm-1">
                    <div className='adr'>
                        <h5>גלריית תמונות</h5><br />
                        <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-80 m-auto carImg"
      src={p2}
      height='450'
    //   alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p1}
    //   alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p3}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p4}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p5}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p6}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p7}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p8}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p9}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p10}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p11}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p12}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p13}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p14}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80 m-auto carImg"
      height='450'
      src={p15}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                        </div>
                </div>
                <div className="col-lg-6 row-header">
                <h5>סרטונים</h5><br />
                <div className='row'>
                <div className='video carImg'>
                <Player
      // playsInline
      poster={vid1Img}
      src={vid1}
      width='100%'
      height='100%'
      fluid={false}
    />
    </div> <div className='video carImg'>
                    <Player
      // playsInline
      poster={vid2Img}
      src={vid2}
      width='100%'
      height='100%'
      fluid={false}
    />
    </div>
    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Gallerya;