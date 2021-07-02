import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    
                    <ul className="list-unstyled lis font-link">
                    <h5>קישורים</h5>
                        <li><Link to='/home' className="links">דף הבית</Link></li>
                        {/* <li><Link to='/ourservices' className="links">השירותים שלנו</Link></li> */}
                        <li><Link to='/gallery' className="links">גלריה</Link></li>
                        <li><Link to='/ourcustomers' className="links">בין לקוחותינו</Link></li>
                        <li><Link to='/contactus' className="links">צור קשר</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 font-link">
                    <h5>הכתובת שלנו</h5>
                    <address>
		              רחוב הזית 7,<br />
		              קרית גת, ישראל<br /><br />
		              <i className="fa fa-phone fa-lg"></i>: <a className="links" href="tel:0544555545">054-4555545</a><br />
		              <i className="fa fa-envelope fa-lg"></i>: <a className="links" href="mailto:Baryogurt@gmail.com">
                      Baryogurt@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a href="https://www.facebook.com/baryogo1" target="_blank"><i className="fa fa-facebook fa-3x"></i></a>
                        <a href="https://www.instagram.com/bar_yogo1" target="_blank"><i className="fa fa-instagram fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;