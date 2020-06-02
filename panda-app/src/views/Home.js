import React from 'react'; import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Leftbar, Middlebar, Title, Leftbar1, Middlebar1 } from '../Components';


const Home = () => {

    return (
        <>
            <Title></Title>
            <div className="row">
                <div className="col-sm-2">
                    <Leftbar1></Leftbar1>
                </div>
                <div className="col-sm-10">
                    <Middlebar1></Middlebar1>
                </div>
            </div>
        </>
    );
};

export default Home;