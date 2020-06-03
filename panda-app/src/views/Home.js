import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Leftbar, Middlebar, Title } from '../Components';

const Home = () => {

    return (
        <>
            <Title></Title>
            <div className="row">
                <div className="col-sm-2">
                    <Leftbar></Leftbar>
                </div>
                <div className="col-sm-10">
                    <Middlebar></Middlebar>
                </div>
            </div>
        </>
    );
};

export default Home;