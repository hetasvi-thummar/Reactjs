import React from "react";
import "../events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faMobile } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <div className="border-top">
      <Container className="p-3">
        <Row className="pb-3">
          <Col>
            <div className="pb-2">Learn More</div>
            <div className="text-secondary pb-2">SeatGeek Enterprise</div>
            <div className="text-secondary pb-2">MLs Partnership</div>
            <div className="text-secondary pb-2">Sell on SeatGeek</div>
            <div className="text-secondary pb-2">Event News</div>
          </Col>
          <Col>
            <div className="pb-2">Platform</div>
            <div className="text-secondary pb-2">API Docs</div>
            <div className="text-secondary pb-2">Dev Blog</div>
            <div className="text-secondary pb-2">Dev Community</div>
            <div className="text-secondary pb-2">Partner Program</div>
          </Col>
          <Col className="border-right">
            <div className="pb-2">Community</div>
            <div className="text-secondary pb-2">Help & Support</div>
            <div className="text-secondary pb-2">Press</div>
            <div className="text-secondary pb-2">Jobs</div>
            <div className="text-secondary pb-2">Twitter</div>
          </Col>
          <Col>
            <div className="pb-2 text-center">SeatGeek App</div>
            <div className="text-secondary pb-2">
              Send a download link to your phone
            </div>
            <div className="text-secondary pb-2 text-center">
              <input type="text"></input>
            </div>
            <div className="text-secondary pb-2">
              Message and data rates may apply
            </div>
            <div className="text-secondary pb-2"></div>
          </Col>
        </Row>
        <Row className="pt-2 border-top">
          <Col sm="8" className="text-secondary">
            <div>
              <FontAwesomeIcon icon={faCouch} className="pr-2 icon" />
              Privacy policy | Terms of use Site map | Mobile version
            </div>
          </Col>
          <Col sm="4" className="text-secondary pt-1">
            <div>© 2020 SeatGeek. All rights reserved.</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
