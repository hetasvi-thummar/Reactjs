import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import panda from '../images/p1.png';
import '../panda.css';
import { Navbar, NavItem, NavLink, NavbarToggler, Nav, Collapse, Button, NavbarBrand, NavbarText } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faListAlt, faPaw, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <div className="row border">

            {/* <div className="pt-2">
                <img className="panda-img" src={panda} alt="panda"></img>
                <label>Panda</label>
            </div>
            <Navbar color="faded" light expand="md">
                <div className="col-sm-8">
                    <Nav>
                        <img className="panda-img" src={panda} alt="panda"></img>
                        <label>Panda</label>
                    </Nav></div>
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                    <NavbarToggler onClick={toggleNavbar} />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar >
                            <NavItem className="icons"><FontAwesomeIcon icon={faPlus} /></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faListAlt} /></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faPaw} /></NavItem>
                            <NavItem className="pr-3" href="#"><Button color="light" className="btn">Log in</Button></NavItem>
                            <NavItem className="pr-3" href="#"><Button color="success" className="btn">Sign up</Button></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faEllipsisH} /></NavItem>
                        </Nav>
                    </Collapse></div>
            </Navbar> */}

            {/* <Navbar color="faded" light expand="md">
                <NavbarBrand href="/" className="mr-auto">
                    <img className="panda-img" src={panda} alt="panda"></img>
                    <label>Panda</label>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><Button color="light" className="btn">Log in</Button></NavbarText>
                    <NavbarText><Button color="light" className="btn">Log in</Button></NavbarText>
                </Collapse>
            </Navbar> */}

            <div className="col-8 mt-2">
                <img className="panda-img" src={panda} alt="panda"></img>
                <label>Panda</label>
            </div>
            <div className="col-4 mt-1">
                <Navbar color="faded" light expand="md">

                    <NavbarToggler onClick={toggleNavbar} className=" bg-secondary" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem className="icons"><FontAwesomeIcon icon={faPlus} /></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faListAlt} /></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faPaw} /></NavItem>
                            <NavItem className="pr-3"><Button color="light" className="btn">Log in</Button></NavItem>
                            <NavItem className="pr-3"><Button color="success" className="btn">Sign up</Button></NavItem>
                            <NavItem className="icons"><FontAwesomeIcon icon={faEllipsisH} /></NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        </div>

    );
}

export default Header;
