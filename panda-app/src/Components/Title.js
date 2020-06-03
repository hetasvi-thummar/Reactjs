import React, { useState } from 'react';
import panda from '../images/p1.png';
import '../panda.css';
import { Navbar, NavbarToggler, Nav, Collapse, Button, NavbarBrand, NavbarText } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faListAlt, faPaw, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (<>
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <img className="panda-img" src={panda} alt="panda"></img>
                <label>Panda</label>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar></Nav>
                <NavbarText className="icons"><FontAwesomeIcon icon={faPlus} /></NavbarText>
                <NavbarText className="icons"><FontAwesomeIcon icon={faListAlt} /></NavbarText>
                <NavbarText className="icons"><FontAwesomeIcon icon={faPaw} /></NavbarText>
                <NavbarText className="pr-3"><Button color="light" className="btn">Log in</Button></NavbarText>
                <NavbarText className="pr-3"><Button color="success" className="btn">Sign up</Button></NavbarText>
                <NavbarText className="icons"><FontAwesomeIcon icon={faEllipsisH} /></NavbarText>
            </Collapse>
        </Navbar></>
    );
}

export default Title;
