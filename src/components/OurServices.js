import React, {useState} from 'react';
import {Media} from 'react-bootstrap';
import pic1 from '../assets/images/services/1.jpg';
import pic2 from '../assets/images/services/2.jpg';
import pic3 from '../assets/images/services/3.jpg';
import pic4 from '../assets/images/services/4.jpg';
import pic5 from '../assets/images/services/5.jpg';
import pic6 from '../assets/images/services/6.jpg';
import pic7 from '../assets/images/services/7.jpg';
import pic8 from '../assets/images/services/8.jpg';
import pic9 from '../assets/images/services/9.jpg';
import pic10 from '../assets/images/services/10.jpg';
import pic11 from '../assets/images/services/11.jpg';
import pic12 from '../assets/images/services/12.jpg';
import pic13 from '../assets/images/services/13.jpg';
import pic14 from '../assets/images/services/14.jpg';
import pic15 from '../assets/images/services/15.jpg';
import pic16 from '../assets/images/services/16.jpg';
import pic17 from '../assets/images/services/17.jpg';
import pic18 from '../assets/images/services/18.jpg';
import pic19 from '../assets/images/services/19.jpg';
import pic20 from '../assets/images/services/20.jpg';

function OurServices(props) {
    const [stalls, setStalls] = useState([
        {
            id: 0,
            title: 'בר יוגורט עם תוספות',
            image: pic1,
            description: 'יוגורט מפנק עם תוספות מגוונות, שוקולדים, פירות אקזוטיים, אגוזים ורטבים מיוחדים'
        },
        {
            id: 1,
            title: 'וופל בלגי על מקל',
            image: pic2,
            description: 'וופל בלגי ייחודי על מקל עם ציפוי שוקולד ותוספות'
        },
        {
            id: 2,
            title: 'קרפ צרפתי',
            image: pic3,
            description: 'קרפ צרפתי מבצק  טעים עם תוספות מגוונות לבחירה'
        },
        {
            id: 3,
            title: 'פנקייק',
            image: pic4,
            description: 'פנקייקים קטנים וגדולים עם תוספות ורטבים'
        },
        {
            id: 4,
            title: 'כדורי האושר',
            image: pic5,
            description: 'כדורי פנקייק במילוי אצבעות קינדר (ניתן גם להכין פרווה ללא אצבעות קינדר)'
        },
        {
            id: 5,
            title: 'שייקים',
            image: pic6,
            description: 'שייקים מובחרים מפירות טריים ושוקולדים'
        },
        {
            id: 6,
            title: 'מוזלי בריאות',
            image: pic7,
            description: 'מוזלי מפנק עם פירות, גרנולה ורכיבים בריאים וטעימים'
        },
        {
            id: 7,
            title: 'גלידה אמיקאית',
            image: pic8,
            description: 'גלידה אמריקאית בטעמי שוקולד ווניל עם ציפויי סוכריות ושוקולד'
        },
        {
            id: 8,
            title: 'פופקורן',
            image: pic9,
            description: 'פופקורן חם טעים וטרי שנעשה במקום'
        },
        {
            id: 9,
            title: 'שערות סבתא',
            image: pic10,
            description: 'שערות סבתא על מקל בטעמים שונים וצבעים מיוחדים'
        },
        {
            id: 10,
            title: 'ארוחת אסאי',
            image: pic11,
            description: 'מקפא אסאי בשילוב מנגו / בננה / אננס וכו׳ ומבחר תוספות'
        },
        {
            id: 11,
            title: 'דוכן פירות / קיאק פירות',
            image: pic12,
            description: 'דוכני פירות עם פירות העונה, אקזוטיים, טריים, חתוכים וטעימים שמעוצבים בטוב טעם'
        },
        {
            id: 12,
            title: 'סופגניות מעוצבות / דונאטס',
            image: pic13,
            description: 'סופגניות ודונאטס מעוצבות בטעמים מיוחדים וייחודיים שיש רק אצלנו'
        },
        {
            id: 13,
            title: 'משקאות חמים',
            image: pic14,
            description: 'בר משקאות חמים לכל אירוע'
        },
        {
            id: 14,
            title: 'פונדו',
            image: pic15,
            description: 'מפלי שוקולד חום ולבן נוזליים ועשירים שמלווים בפירות ושוקולדים מובחרים'
        },
        {
            id: 15,
            title: 'דוכן מתוקים / קינוחים אישיים',
            image: pic16,
            description: 'דוכן מתוקים עם הדברים הכי טעימים שיש, מרשמלו, חמצוצים, נשיקות ועוד המון דברים טעימים שמעוצבים בטוב טעם'
        },
        {
            id: 16,
            title: 'פוקצות / פיצות - טבון / תנור',
            image: pic17,
            description: 'פיצות ופוקצות שמוכנות בתנור ויוצאות חמות וטריות לאורחים שלכם עם מגוון תוספות'
        },
        {
            id: 17,
            title: 'פלאפל טיגון במקום',
            image: pic18,
            description: 'פלאפל ישראלי אמיתי שמטוגן במקום ומגיע בפיתה עשירה בסלטים'
        },
        {
            id: 18,
            title: 'פריקסה',
            image: pic19,
            description: 'פריקסה אסלי מלחמניות טריות ואיכותיות יחד עם כל התוספות שמשאירות טעם של עוד'
        },
        {
            id: 19,
            title: 'שתייה קלה',
            image: pic20,
            description: 'שתייה קלה בבקבוקים ובפחיות לכל אירוע'
        }
    ]);

    const menu = stalls.map( (stall => {
        return(
            <Media className='mediaMenu col-md-6'>
            <img
              width={100}
              height={100}
              className="menuImg"
              src={stall.image}
              alt={stall.title}
            />
            <Media.Body>
              <h6 className='cardtext2'>{stall.title}</h6>
              <p className='cardtext2 font-link'>
                {stall.description}
              </p>
            </Media.Body>
          </Media>
        )
    }))

    return (
<div>
              <div className='contact'>
            <div className="container">
            <h5 className='adr font-link'>השירותים שלנו</h5>
            <div className="row align-items-start contact">
                <div className='ro2'>
                {menu}
                </div>

</div>
        </div>
        </div>
        </div>
    );
}

export default OurServices;