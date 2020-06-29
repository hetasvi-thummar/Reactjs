import React, { useState } from "react";
import "../events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";
import {
  Row,
  Container,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
  NavbarText,
} from "reactstrap";
import title from "./images/title.jpg";

const Title = (props) => {
  // console.log(`title:${JSON.stringify(props)}`);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [mergedata, setmergedata] = useState(null);

  const [filterdata, setfilterdata] = useState(null);

  const mainevent = (e) => {
    console.log(`mergedata:${JSON.stringify(mergedata)}`);
    const filteredevents = mergedata.filter(
      (event) =>
        event.venue.display_location
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        event.datetime_utc.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilterdata(filteredevents);
  };

  return (
    <div className="text-center">
      <img src={title} className="header-img"></img>
      <Container>
        <Navbar light expand="md">
          <NavbarBrand>
            <h2>
              <FontAwesomeIcon icon={faCouch} className="pr-2" />
              <Link to={"/"} className="text-white">
                SeatGeek
              </Link>
            </h2>
          </NavbarBrand>
          <NavbarText className="pl-5">
            <input
              type="text"
              placeholder="Search"
              className="textbox"
              onKeyUp={(e) => mainevent(e)}
            ></input>
          </NavbarText>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <NavbarText>
              <Link to="/Performers" className="text-white pr-4">
                Performers
              </Link>
            </NavbarText>
            <NavbarText className="icons">
              <Link to={"/Venues"} className="text-white">
                Venues
              </Link>
            </NavbarText>
          </Collapse>
        </Navbar>
      </Container>
      <Row className=" m-4">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 text-center p-4">
          <h1>We must stand up against systemic racism.{props.name}</h1>
          <p className="p-3">
            Today and every day we unite with the Black community of SeatGeek
            employees and fans, artists and athletes who deserve social justice.
          </p>
        </div>
      </Row>
    </div>
  );
};

export default Title;
