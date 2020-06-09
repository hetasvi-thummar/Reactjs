import React from 'react';
import "../events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {


    return (
        <div className="header">
            <div className="container">
                <div className="row pt-3">
                    <div className="col-sm-3"><h2><FontAwesomeIcon icon={faCouch} className="pr-2" />SeatGeek</h2></div>
                    <div className="col-sm-7  pt-2"><input type="text" placeholder="Search" className="textbox"></input></div>
                    <div className="col-sm-2"><h4>Login</h4></div>
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 text-center p-4">
                        <h1>We must stand up against systemic racism.</h1>
                        <p className="p-3">Today and every day we unite with the Black community of SeatGeek employees and fans, artists and athletes who deserve social justice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
