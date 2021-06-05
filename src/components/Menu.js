import React, { useState } from 'react';
import Menu1 from '../assets/images/menu/pic1.jpg'
import Menu2 from '../assets/images/menu/pic2.jpg'
import Menu3 from '../assets/images/menu/pic3.jpg'
import Menu4 from '../assets/images/menu/pic4.jpg'
import Menu5 from '../assets/images/menu/pic5.jpg'
import Menu6 from '../assets/images/menu/pic6.jpg'
import logo from '../assets/images/logo.jpg';
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import { Carousel } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function Menu(props) {
    const [stalls, setStalls] = useState([
        {
            id: 0,
            name: 'דוכני קינוחים לאירועים',
            image: Menu1,
            description: 'בלה בלה בלה'
        },
        {
            id: 1,
            name: 'קינוחי קונדיטוריה',
            image: Menu2,
            description: 'בלה בלה בלה'
        },
        {
            id: 2,
            name: 'דוכני מזון מהיר',
            image: Menu3,
            description: 'בלה בלה בלה'
        },
        {
            id: 3,
            name: 'אירועי קונספט',
            image: Menu4,
            description: 'בלה בלה בלה'
        },
        {
            id: 5,
            name: 'שתייה חמה וקלה',
            image: Menu5,
            description: 'בלה בלה בלה'
        },
        {
            id: 6,
            name: 'מארזים / שי לעובד / שירות אריזה',
            image: Menu6,
            description: 'בלה בלה בלה'
        }
    ]);

    //map the menu
    const menu = stalls.map( (stall => {
        return(
            <div key={stall.id} className="col-12 col-md m-1">
            <Card className='cardd'>
            <CardImg src={stall.image} alt={stall.name} className='menuImg'/>
            <CardBody>
            <CardTitle className='cardt3'>{stall.name}</CardTitle>
            {/* <CardText className='cardtext3'>{stall.description}</CardText> */}
            </CardBody>
            </Card>
              </div>
        )
    }))


    return (
        <div>
        <div className="container">
        <div className="row row-header">
                <img src={logo} height="180" width="210" alt='בר יוגו דוכנים לאירועים'/>
                </div>
                <div className='row'>
                    <div className='container'>
                <p className='headT'>בר-יוגו - שירותי דוכני מזון וקינוחים לכל סוגי האירועים</p>
                </div>
        </div>
        <div className='row row-header'>
            <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block caru w-80 m-auto carImg"
      src={pic2}
      height='350'
    //   alt="First slide"
    />
    <Carousel.Caption>
      {/* <h2 className='txtImg'>דוכני קינוחים לאירועים</h2> */}
      {/* <p>בלה בלה בלה בלה בלה בלה בלה</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block caru w-80 m-auto  carImg"
      height='350'
      src={pic1}
    //   alt="Second slide"
    />
    <Carousel.Caption>
    {/* <h3>בלה בלה בלה</h3>
      <p>בלה בלה בלה בלה בלה בלה בלה</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block caru w-80 m-auto caru carImg"
      height='350'
      src={pic3}
    //   alt="Third slide"
    />
    <Carousel.Caption>
    {/* <h3>בלה בלה בלה</h3>
      <p>בלה בלה בלה בלה בלה בלה בלה</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </div>
        <div className="container">
            <div className="row row-header contact">
                  {menu}
            </div>
          </div>
          </div>
    );
}

export default Menu;