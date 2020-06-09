import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Leftbar, Middlebar, Title } from '../Components';

const Home = () => {

    return (
        <div className="container">
            <div className="row">
                <Title></Title></div>
            <div className="row mr-1">
                <div className="col-sm-2">
                    <Leftbar></Leftbar>
                </div>
                <div className="col-sm-10">
                    <Middlebar></Middlebar>
                </div>
            </div>

        </div >
    );
};

export default Home;