import React, { useState } from "react";
import panda from "../images/p1.png";
import "../panda.css";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions/news";
import {
  Navbar,
  NavbarToggler,
  Nav,
  Collapse,
  Button,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faListAlt,
  faPaw,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const countries = [
    { key: "ar", value: "Argentina" },
    { key: "au", value: "Australia" },
    { key: "be", value: "Belgium" },
    { key: "br", value: "Brazil" },
    { key: "ca", value: "Canada" },
    { key: "co", value: "Colombia" },
    { key: "eg", value: "Egypt" },
    { key: "in", value: "India" },
    { key: "id", value: "Indonesia" },
    { key: "gr", value: "Greece" },
    { key: "il", value: "Israel" },
    { key: "jp", value: "Japan" },
  ];

  const setCountryfromDropdown = (e) => {
    dispatch(fetchNews(e.target.value));
  };

  return (
    <Navbar light expand="md border shadow">
      <NavbarBrand className="pl-3">
        <img className="panda-img" src={panda} alt="panda"></img>
        <label>Panda</label>
      </NavbarBrand>
      <NavbarText className="dropdown">
        <select onChange={setCountryfromDropdown} className="dropbtn">
          <option value="">Please select any country</option>
          {countries !== null &&
            countries.map((country) => (
              <option value={country.key}>{country.value}</option>
            ))}
        </select>
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar></Nav>
        <NavbarText className="icons">
          <FontAwesomeIcon icon={faPlus} />
        </NavbarText>
        <NavbarText className="icons">
          <FontAwesomeIcon icon={faListAlt} />
        </NavbarText>
        <NavbarText className="icons">
          <FontAwesomeIcon icon={faPaw} />
        </NavbarText>
        <NavbarText className="pr-3">
          <Button color="light" className="btn">
            Log in
          </Button>
        </NavbarText>
        <NavbarText className="pr-3">
          <Button color="success" className="btn">
            Sign up
          </Button>
        </NavbarText>
        <NavbarText className="icons">
          <FontAwesomeIcon icon={faEllipsisH} />
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Title;
