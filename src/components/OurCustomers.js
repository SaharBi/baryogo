import React, {useState} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Menu1 from '../assets/images/customers/1.jpg';
import Menu2 from '../assets/images/customers/2.jpg';
import Menu3 from '../assets/images/customers/3.jpg';
import Menu4 from '../assets/images/customers/4.jpg';
import Menu5 from '../assets/images/customers/5.jpg';
import Menu6 from '../assets/images/customers/6.jpg';
import Menu7 from '../assets/images/customers/7.jpg';
import Menu8 from '../assets/images/customers/8.jpg';
import Menu9 from '../assets/images/customers/9.jpg';
import Menu10 from '../assets/images/customers/10.jpg';
import Menu11 from '../assets/images/customers/11.jpg';
import Menu12 from '../assets/images/customers/12.jpg';
import Menu13 from '../assets/images/customers/13.jpg';
import Menu14 from '../assets/images/customers/14.jpg';
import Menu15 from '../assets/images/customers/15.jpg';
import Menu16 from '../assets/images/customers/16.jpg';
import Menu17 from '../assets/images/customers/17.jpg';
import Menu18 from '../assets/images/customers/18.jpg';
import Menu19 from '../assets/images/customers/19.jpg';
import Menu20 from '../assets/images/customers/20.jpg';
import Menu21 from '../assets/images/customers/21.jpg';
import Menu22 from '../assets/images/customers/22.jpg';
import Menu23 from '../assets/images/customers/23.jpg';
import Menu24 from '../assets/images/customers/24.jpg';

function OurCustomers(props) {

    const [customers, setCustomers] = useState([
        {
            id: 0,
            name: 'סודה סטרים',
            image: Menu1,
            description: 'השירות היה מדהים בלה בלה בלה בלה בלה'
        },
        {
            id: 1,
            name: 'האגודה למען החייל',
            image: Menu2,
            description: 'בלה בלה בלה'
        },
        {
            id: 2,
            name: 'מייקרוסופט',
            image: Menu3,
            description: 'בלה בלה בלה'
        },
        {
            id: 3,
            name: 'אורשר',
            image: Menu4,
            description: 'בלה בלה בלה'
        },
        {
            id: 4,
            name: 'צבר',
            image: Menu5,
            description: 'בלה בלה בלה'
        },
        {
            id: 5,
            name: 'קימברלי קלארק',
            image: Menu6,
            description: 'בלה בלה בלה'
        },
        {
            id: 6,
            name: 'האוניברסיטה הפתוחה',
            image: Menu7,
            description: 'השירות היה מדהים בלה בלה בלה בלה בלה'
        },
        {
            id: 7,
            name: 'אנדמול שיין',
            image: Menu8,
            description: 'בלה בלה בלה'
        },
        {
            id: 8,
            name: 'כאן 11',
            image: Menu9,
            description: 'בלה בלה בלה'
        },
        {
            id: 9,
            name: 'צלף',
            image: Menu10,
            description: 'בלה בלה בלה'
        },
        {
            id: 10,
            name: 'פוליכד',
            image: Menu11,
            description: 'בלה בלה בלה'
        },
        {
            id: 11,
            name: 'מוצרי מעברות',
            image: Menu12,
            description: 'בלה בלה בלה'
        },
        {
            id: 12,
            name: 'אלביט',
            image: Menu13,
            description: 'בלה בלה בלה'
        },
        {
            id: 13,
            name: 'בנק לאומי',
            image: Menu14,
            description: 'בלה בלה בלה'
        },
        {
            id: 14,
            name: 'ש.פרידמן',
            image: Menu15,
            description: 'בלה בלה בלה'
        },
        {
            id: 15,
            name: 'בונזור',
            image: Menu16,
            description: 'בלה בלה בלה'
        },
        {
            id: 16,
            name: 'מיטיגה',
            image: Menu17,
            description: 'השירות היה מדהים בלה בלה בלה בלה בלה'
        },
        {
            id: 17,
            name: 'גוד פארם',
            image: Menu18,
            description: 'בלה בלה בלה'
        },
        {
            id: 18,
            name: 'עיריית לוד',
            image: Menu19,
            description: 'בלה בלה בלה'
        },
        {
            id: 19,
            name: 'סלע',
            image: Menu20,
            description: 'בלה בלה בלה'
        },
        {
            id: 20,
            name: 'י.ח דימרי',
            image: Menu21,
            description: 'בלה בלה בלה'
        },
        {
            id: 21,
            name: 'כללית',
            image: Menu22,
            description: 'בלה בלה בלה'
        },
        {
            id: 22,
            name: 'סורוקה',
            image: Menu23,
            description: 'בלה בלה בלה'
        },
        {
            id: 23,
            name: 'סמגל',
            image: Menu24,
            description: 'בלה בלה בלה'
        },
    ]);
    
    const menu = customers.map( (customer => {
        return(
    // <Card className='gal col-lg-3 col-md-6'>
    //   <CardImg variant="top" src={customer.image} className='menuImg'/>
    //   <CardBody>
    //     <CardTitle className='cardt3'>{customer.name}</CardTitle>
    //     <CardText className='cardtext3'>
    //       {/* {customer.description} */}
    //     </CardText>
    //   </CardBody>
    // </Card>
    <div key={customer.id} className='col-4 col-md-2 p-0'>
        <img src={customer.image} width={105} height={105} className="menuImg2"/>
    </div>
        )
    }))
    
    


    return (
        <div className='container font-link'>
                <div className='row row-header contact'>
                <h5>לקוחות מרוצים</h5><br/>
                </div>
                <div className='row row-header'>
            {menu}
            </div>

        </div>
    );
}

export default OurCustomers;