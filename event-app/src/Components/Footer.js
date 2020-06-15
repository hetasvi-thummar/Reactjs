import React from 'react';
import "../events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faMobile, } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'reactstrap';


const Footer = () => {

    return (
        <div className="row border-top">
            <div className="container">
                <div className="row p-4 border-bottom">
                    <div className="col-sm-8 border-right">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="pb-2">Learn More</div>
                                <div className="pb-2 text-secondary">SeatGeek Enterprise</div>
                                <div className="pb-2 text-secondary">MLs Partnership</div>
                                <div className="pb-2 text-secondary">Sell on SeatGeek</div>
                                <div className="pb-2 text-secondary">Event News</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pb-2 ">Platform</div>
                                <div className="pb-2 text-secondary">API Docs</div>
                                <div className="pb-2 text-secondary">Dev Blog</div>
                                <div className="pb-2 text-secondary">Dev Community</div>
                                <div className="pb-2 text-secondary">Partner Program</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pb-2 ">Community</div>
                                <div className="pb-2 text-secondary">Help & Support</div>
                                <div className="pb-2 text-secondary">Press</div>
                                <div className="pb-2 text-secondary">Jobs</div>
                                <div className="pb-2 text-secondary">Twitter</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 pl-5">
                        <div className="row pl-5">
                            <div className="pb-2 pl-5">SeatGeek App</div>
                            <div className="pb-2 text-secondary">Send a download link to your phone</div>
                            <div className="pb-2 pl-3"><input type="text" ></input></div>
                            <div className=" pb-2 text-secondary">Message and data rates may apply</div>
                        </div>
                        <div className="row pl-5">
                            <div className="col-sm-6 text-secondary border-right">
                                <FontAwesomeIcon icon={faMobile} className=" pt-2 footer-icon" />App Store
                            </div>
                            <div className="col-sm-6 text-secondary">
                                <FontAwesomeIcon icon={faMobile} className="pt-2 footer-icon" />  Play Store
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 pt-2 text-secondary"><FontAwesomeIcon icon={faCouch} className="pr-2 icon" />
                        Privacy policy | Terms of use Site map | Mobile version</div>
                    <div className="col-sm-4 pt-2 text-secondary">
                        <div>© 2020 SeatGeek. All rights reserved.</div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Footer;
