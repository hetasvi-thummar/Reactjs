import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import panda from '../images/p1.png';
import '../panda.css';
import { Navbar, NavItem, NavLink, NavbarToggler, Nav, Collapse, Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faListAlt, faPaw, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <div className="row border">
            <div className="col-sm-8">
                <div className="pt-3">
                    <img className="panda-img" src={panda} alt="panda"></img>
                    <label>Panda</label>
                </div>
            </div>

            <div className="col-sm-4 pl-5">
                <Navbar color="faded" light expand="md">
                    <NavbarToggler onClick={toggleNavbar} />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar >
                            <NavItem className="icons"><FontAwesomeIcon icon={faPlus} /></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faListAlt} /></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faPaw} /></NavItem>
                            <NavItem>
                                <NavLink href="#"><Button color="light">Log in</Button></NavLink>
                            </NavItem>
                            <NavItem className="pr-3">
                                <NavLink href="#"><Button color="success">Sign up</Button></NavLink>
                            </NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faEllipsisH} /></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>

    );
}

export default Header;
