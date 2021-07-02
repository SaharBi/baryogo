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
import AboutUsImg from '../assets/images/aboutus.jpg';
import { useLocation, Link } from "react-router-dom";
import vafel1 from '../assets/images/menu/cat1/vafel/1.jpg';
import vafel2 from '../assets/images/menu/cat1/vafel/2.jpg';
import vafel3 from '../assets/images/menu/cat1/vafel/3.jpg';
import vafel4 from '../assets/images/menu/cat1/vafel/4.jpg';
import vafel5 from '../assets/images/menu/cat1/vafel/5.jpg';
import vafel6 from '../assets/images/menu/cat1/vafel/6.jpg';
import vafel7 from '../assets/images/menu/cat1/vafel/7.jpg';
import bar1 from '../assets/images/menu/cat1/bar/1.jpg';
import bar2 from '../assets/images/menu/cat1/bar/2.jpg';
import bar3 from '../assets/images/menu/cat1/bar/3.jpg';
import bar4 from '../assets/images/menu/cat1/bar/4.jpg';
import bar5 from '../assets/images/menu/cat1/bar/5.jpg';
import bar6 from '../assets/images/menu/cat1/bar/6.jpg';
import bar7 from '../assets/images/menu/cat1/bar/7.jpg';
import bar8 from '../assets/images/menu/cat1/bar/8.jpg';
import bar9 from '../assets/images/menu/cat1/bar/9.jpg';
import bar10 from '../assets/images/menu/cat1/bar/10.jpg';
import bar11 from '../assets/images/menu/cat1/bar/11.jpg';
import bar12 from '../assets/images/menu/cat1/bar/12.jpg';
import ice1 from '../assets/images/menu/cat1/ice/1.jpg';
import ice2 from '../assets/images/menu/cat1/ice/2.jpg';
import ice3 from '../assets/images/menu/cat1/ice/3.jpg';
import ice4 from '../assets/images/menu/cat1/ice/4.jpg';
import krep1 from '../assets/images/menu/cat1/krep/1.jpg';
import balls1 from '../assets/images/menu/cat1/balls/1.jpg';
import balls2 from '../assets/images/menu/cat1/balls/2.jpg';
import balls3 from '../assets/images/menu/cat1/balls/3.jpg';
import balls4 from '../assets/images/menu/cat1/balls/4.jpg';
import balls5 from '../assets/images/menu/cat1/balls/5.jpg';
import balls6 from '../assets/images/menu/cat1/balls/6.jpg';
import shake1 from '../assets/images/menu/cat1/shakes/1.jpg';
import shake2 from '../assets/images/menu/cat1/shakes/2.jpg';
import shake3 from '../assets/images/menu/cat1/shakes/3.jpg';
import shake4 from '../assets/images/menu/cat1/shakes/4.jpg';
import shake5 from '../assets/images/menu/cat1/shakes/5.jpg';
import panc1 from '../assets/images/menu/cat1/panc/1.jpg';
import panc2 from '../assets/images/menu/cat1/panc/2.jpg';
import panc3 from '../assets/images/menu/cat1/panc/3.jpg';
import panc4 from '../assets/images/menu/cat1/panc/4.jpg';
import popc1 from '../assets/images/menu/cat1/popc/1.jpg';
import popc2 from '../assets/images/menu/cat1/popc/2.jpg';
import popc3 from '../assets/images/menu/cat1/popc/3.jpg';
import popc4 from '../assets/images/menu/cat1/popc/4.jpg';
import popc5 from '../assets/images/menu/cat1/popc/5.jpg';
import fon1 from '../assets/images/menu/cat1/fondu/1.jpg';
import fon2 from '../assets/images/menu/cat1/fondu/2.jpg';
import fon3 from '../assets/images/menu/cat1/fondu/3.jpg';
import fon4 from '../assets/images/menu/cat1/fondu/4.jpg';
import fon5 from '../assets/images/menu/cat1/fondu/5.jpg';
import duh1 from '../assets/images/menu/cat1/duh/1.jpg';
import duh2 from '../assets/images/menu/cat1/duh/2.jpg';
import duh3 from '../assets/images/menu/cat1/duh/3.jpg';
import duh4 from '../assets/images/menu/cat1/duh/4.jpg';
import duh5 from '../assets/images/menu/cat1/duh/5.jpg';
import duh6 from '../assets/images/menu/cat1/duh/6.jpg';
import duh7 from '../assets/images/menu/cat1/duh/7.jpg';
import duh8 from '../assets/images/menu/cat1/duh/8.jpg';
import duh9 from '../assets/images/menu/cat1/duh/9.jpg';
import asai1 from '../assets/images/menu/cat1/asai/1.jpg';
import asai2 from '../assets/images/menu/cat1/asai/2.jpg';
import asai3 from '../assets/images/menu/cat1/asai/3.jpg';
import mozli1 from '../assets/images/menu/cat1/mozli/1.jpg';
import barad1 from '../assets/images/menu/cat1/barad/1.jpg';
import barad2 from '../assets/images/menu/cat1/barad/2.jpg';
import fruit1 from '../assets/images/menu/cat1/fruit/1.jpg';
import fruit2 from '../assets/images/menu/cat1/fruit/2.jpg';
import fruit3 from '../assets/images/menu/cat1/fruit/3.jpg';
import fruit4 from '../assets/images/menu/cat1/fruit/4.jpg';
import fruit5 from '../assets/images/menu/cat1/fruit/5.jpg';
import fruit6 from '../assets/images/menu/cat1/fruit/6.jpg';
import fruit7 from '../assets/images/menu/cat1/fruit/7.jpg';
import fruit8 from '../assets/images/menu/cat1/fruit/8.jpg';
import fruit9 from '../assets/images/menu/cat1/fruit/9.jpg';
import fruit10 from '../assets/images/menu/cat1/fruit/10.jpg';
import fruit11 from '../assets/images/menu/cat1/fruit/11.jpg';
import kru1 from '../assets/images/menu/cat1/kru/1.jpg';
import kru2 from '../assets/images/menu/cat1/kru/2.jpg';
import kru3 from '../assets/images/menu/cat1/kru/3.jpg';
import kru4 from '../assets/images/menu/cat1/kru/4.jpg';
import kru5 from '../assets/images/menu/cat1/kru/5.jpg';
import beg1 from '../assets/images/menu/cat1/beg/1.jpg';
import beg2 from '../assets/images/menu/cat1/beg/2.jpg';
import beg3 from '../assets/images/menu/cat1/beg/3.jpg';
import beg4 from '../assets/images/menu/cat1/beg/4.jpg';
import arm1 from '../assets/images/menu/cat1/arm/1.jpg';
import arm2 from '../assets/images/menu/cat1/arm/2.jpg';
import arm3 from '../assets/images/menu/cat1/arm/3.jpg';
import arm4 from '../assets/images/menu/cat1/arm/4.jpg';
import hanuka1 from '../assets/images/menu/cat1/hanuka/1.jpg';
import hanuka2 from '../assets/images/menu/cat1/hanuka/2.jpg';
import hanuka3 from '../assets/images/menu/cat1/hanuka/3.jpg';
import hanuka4 from '../assets/images/menu/cat1/hanuka/4.jpg';
import hanuka5 from '../assets/images/menu/cat1/hanuka/5.jpg';
import hanuka6 from '../assets/images/menu/cat1/hanuka/6.jpg';
import hanuka7 from '../assets/images/menu/cat1/hanuka/7.jpg';
import hanuka8 from '../assets/images/menu/cat1/hanuka/8.jpg';
import hanuka9 from '../assets/images/menu/cat1/hanuka/9.jpg';
import hanuka10 from '../assets/images/menu/cat1/hanuka/10.jpg';
import hanuka11 from '../assets/images/menu/cat1/hanuka/11.jpg';
import hanuka12 from '../assets/images/menu/cat1/hanuka/12.jpg';
import hanuka13 from '../assets/images/menu/cat1/hanuka/13.jpg';
import hanuka14 from '../assets/images/menu/cat1/hanuka/14.jpg';
import hanuka15 from '../assets/images/menu/cat1/hanuka/15.jpg';
import hanuka16 from '../assets/images/menu/cat1/hanuka/16.jpg';
import hanuka17 from '../assets/images/menu/cat1/hanuka/17.jpg';
import hanuka18 from '../assets/images/menu/cat1/hanuka/18.jpg';
import hanuka19 from '../assets/images/menu/cat1/hanuka/19.jpg';
import hanuka20 from '../assets/images/menu/cat1/hanuka/20.jpg';
import chor1 from '../assets/images/menu/cat1/chor/1.jpg';
import chor2 from '../assets/images/menu/cat1/chor/2.jpg';
import piza1 from '../assets/images/menu/cat2/piza/1.jpg';
import piza2 from '../assets/images/menu/cat2/piza/2.jpg';
import piza3 from '../assets/images/menu/cat2/piza/3.jpg';
import piza4 from '../assets/images/menu/cat2/piza/4.jpg';
import piza5 from '../assets/images/menu/cat2/piza/5.jpg';
import piza6 from '../assets/images/menu/cat2/piza/6.jpg';
import piza7 from '../assets/images/menu/cat2/piza/7.jpg';
import piza8 from '../assets/images/menu/cat2/piza/8.jpg';
import fal1 from '../assets/images/menu/cat2/fal/1.jpg';
import fal2 from '../assets/images/menu/cat2/fal/2.jpg';
import fal3 from '../assets/images/menu/cat2/fal/3.jpg';
import fal4 from '../assets/images/menu/cat2/fal/4.jpg';
import fri1 from '../assets/images/menu/cat2/fri/1.jpg';
import fri2 from '../assets/images/menu/cat2/fri/2.jpg';
import fri3 from '../assets/images/menu/cat2/fri/3.jpg';
import fri4 from '../assets/images/menu/cat2/fri/4.jpg';
import cafe1 from '../assets/images/menu/cat3/cafe/1.jpg';
import shai1 from '../assets/images/menu/cat4/shai/1.jpg';
import shai2 from '../assets/images/menu/cat4/shai/2.jpg';
import shai3 from '../assets/images/menu/cat4/shai/3.jpg';
import shai4 from '../assets/images/menu/cat4/shai/4.jpg';
import shai5 from '../assets/images/menu/cat4/shai/5.jpg';
import shai6 from '../assets/images/menu/cat4/shai/6.jpg';
import shai7 from '../assets/images/menu/cat4/shai/7.jpg';
import shai8 from '../assets/images/menu/cat4/shai/8.jpg';
import shai9 from '../assets/images/menu/cat4/shai/9.jpg';
import shai10 from '../assets/images/menu/cat4/shai/10.jpg';
import shai11 from '../assets/images/menu/cat4/shai/11.jpg';
import shai12 from '../assets/images/menu/cat4/shai/12.jpg';
import shai13 from '../assets/images/menu/cat4/shai/13.jpg';
import shai14 from '../assets/images/menu/cat4/shai/14.jpg';
import shai15 from '../assets/images/menu/cat4/shai/15.jpg';
import shai16 from '../assets/images/menu/cat4/shai/16.jpg';
import shai17 from '../assets/images/menu/cat4/shai/17.jpg';
import shai18 from '../assets/images/menu/cat4/shai/18.jpg';
import shai19 from '../assets/images/menu/cat4/shai/19.jpg';
import shai20 from '../assets/images/menu/cat4/shai/20.jpg';
import shai21 from '../assets/images/menu/cat4/shai/21.jpg';
import shai22 from '../assets/images/menu/cat4/shai/22.jpg';
import tziud1 from '../assets/images/menu/cat5/tziud/1.jpg';



function Menu(props) {
    const [stalls, setStalls] = useState([
        {
            id: 0,
            name: 'דוכני קינוחים לאירועים',
            image: Menu1,
            menu: [
              {title: "וופל בלגי על מקל", images: [vafel1,vafel2,vafel3,vafel4,vafel5,vafel6,vafel7]},
              {title: "בר יוגורט + תוספות", images: [bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8,bar9,bar10,bar11,bar12]},
              {title: "גלידה אמריקאית", images: [ice1,ice2,ice3,ice4]},
              {title: "קרפ צרפתי", images: [krep1]},
              {title: "כדורי האושר - כדורי פנקייק במילוי שוקולד", images: [balls1,balls2,balls3,balls4,balls5,balls6]},
              {title: "שייקים", images: [shake1,shake2,shake3,shake4,shake5]},
              {title: "פנקייקים", images: [panc1,panc2,panc3,panc4]},
              {title: "פופקורן ושיערות סבתא", images: [popc1,popc2,popc3,popc4,popc5]},
              {title: "פונדו שוקולד", images: [fon1,fon2,fon3,fon4,fon5]},
              {title: "דוכן מתוקים קונספט", images: [duh1,duh2,duh3,duh4,duh5,duh6,duh7,duh8,duh9]},
              {title: "גלידת | ארוחת אסאי", images: [asai1,asai2,asai3]},
              {title: "מוזלי בריאות", images: [mozli1]},
              {title: "ברד", images: [barad1,barad2]},
              {title: "דוכן פירות מעוצב | כוסות פירות | מגשי פירות | סושי פירות", images: [fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8,fruit9,fruit10,fruit11]},
              {title: "דוכן קרואסונים מיוחד", images: [kru1,kru2,kru3,kru4,kru5]},
              {title: "עגלת בייגלה מתוק | מלוח", images: [beg1,beg2,beg3,beg4]},
              {title: "דוכן ערמונים", images: [arm1,arm2,arm3,arm4]},
              {title: "דוכן צורוס", images: [chor1,chor2]},
              {title: "חנוכה בבר יוגו", images: [hanuka1,hanuka2,hanuka3,hanuka4,hanuka5,hanuka6,hanuka7,hanuka8,hanuka9,hanuka10,hanuka11,hanuka12,hanuka13,hanuka14,hanuka15,hanuka16,hanuka17,hanuka18,hanuka19,hanuka20]},
            ]
        },
        {
            id: 1,
            name: 'דוכני מזון מהיר',
            image: Menu2,
            menu: [
              {title: "טאבון פוקצות | פיצות", images: [piza1,piza2,piza3,piza4,piza5,piza6,piza7,piza8]},
              {title: "פלאפל", images: [fal1,fal2,fal3,fal4]},
              {title: "סנדוויץ טוניסאי", images: [fri1,fri2,fri3,fri4]},
            ]
        },
        {
            id: 2,
            name: 'בר קפה ושתייה קלה',
            image: Menu3,
            menu: [
              {title: "בר קפה", images: [cafe1]},

            ]
        },
        {
            id: 3,
            name: 'מארזים ושירותי אריזה',
            image: Menu4,
            menu: [
              {title: "מארזים ושירותי אריזה | שי לעובד", images: [shai1,shai2,shai3,shai4,shai5,shai6,shai7,shai8,shai9,shai10,shai11,shai12,shai13,shai14,shai15,shai16,shai17,shai18,shai19,shai20,shai21,shai22]},

            ]
        },
        {
            id: 5,
            name: 'השכרת ציוד לאירועים',
            image: Menu5,
            menu: [
              {title: "השכרת ציוד לאירועים", images: [tziud1]},

            ]
        },
        // {
        //     id: 6,
        //     name: 'מארזים / שי לעובד / שירות אריזה',
        //     image: Menu6,
        //     description: 'בלה בלה בלה'
        // }
    ]);

    //map the menu
    const menu = stalls.map( (stall => {
        return(
            <div key={stall.id} className="col-12 col-md m-1">
              <Link
  to={{
    pathname: `/view-category-details/${stall.id}`,
    state: { stalls: stall }
  }}
>
            <Card className='cardd'>
            <CardImg src={stall.image} alt={stall.name} className='menuImg'/>
            <CardBody>
            <CardTitle className='cardt3'>{stall.name}</CardTitle>
            {/* <CardText className='cardtext3'>{stall.description}</CardText> */}
            </CardBody>
            </Card>
            </Link>
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
                {/* <p className='headT font-link'>בר-יוגו - שירותי דוכני מזון וקינוחים לכל סוגי האירועים</p> */}
                </div>
        </div>


        <div className="row row-content">
                <div className="col-12 col-sm-5 offset-sm-1 font-link">
                    <div className='adr'>
                        <p className='titlee'>
                        ברוכים הבאים לבר-יוגו ! </p>


<p>
בר-יוגו מציעה שירותי דוכני מזון וקינוחים לכל סוגי האירועים בטעמים טובים ומגוונים תוך שמירה על טריות ואיכות כערך עליון.
החברה מציעה שירותי בר קינוחים מפנק שהופך כל אירוע לחוויה מיוחדת ובלתי נשכחת.
החברה בעלת ניסיון של 7 שנים, אנו נותנים מענה לאירועים קטנים כגדולים בפריסה ארצית.
הצוות שלנו הוא צוות קבוע, מקצועי ומיומן שיעניק לאורחים שלכם את השירות האיכותי ביותר.
אתם מוזמנים להכנס בתפריט לגלריה ולהתרשם מדוגמאות לאירועים שאנחנו עושים. 
המוצרים שלנו כשרים – חלבי / פרווה תוך שמירה מירבית על טעם איכותי ומיוחד.
</p>
<a className="links" href="tel:0544555545">
<p className='titlee2'>
אז למה אתם מחכים? צרו קשר עכשיו ותהפכו את האירוע שלכם לטעים יותר !
</p>
</a>


                        </div>
                </div>
                <div className="col-12 col-sm-5 offset-sm-1">
                    <img className='caru2' src={AboutUsImg} height={400} width={450}></img>
                </div>
            </div>


        {/* <div className='row row-header'>
            <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block caru w-80 m-auto carImg"
      src={pic2}
      height='350'
    //   alt="First slide"
    />
    <Carousel.Caption>
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
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div> */}
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