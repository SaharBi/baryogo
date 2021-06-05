import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import miniLogo from '../assets/images/miniLogo.png';


function Header(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
        <Navbar dark className='navbar' expand="md">
          <div className="container">
            <NavbarBrand className="me-auto" href="/"><img src={miniLogo} height="40" width="50" alt='בר יוגו דוכנים לאירועים' /></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-auto" />

        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                            <NavItem>
                            <NavLink onClick={() => setCollapsed(!collapsed)} className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> דף הבית</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => setCollapsed(!collapsed)} className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> מי אנחנו</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => setCollapsed(!collapsed)} className="nav-link"  to='/ourservices'><span className="fa fa-list fa-lg"></span> השירותים שלנו</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => setCollapsed(!collapsed)} className="nav-link"  to='/gallery'><span className="fa fa-image fa-lg"></span> גלריה</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => setCollapsed(!collapsed)} className="nav-link"  to='/ourcustomers'><span className="fa fa-user fa-lg"></span> בין לקוחותינו</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => setCollapsed(!collapsed)} className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> צור קשר</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
          </div>
        </Navbar>

    </div>
    );
}

export default Header;