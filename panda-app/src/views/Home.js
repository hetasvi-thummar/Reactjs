import React from 'react'; import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Leftbar, Middlebar } from '../Components';


const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col-sm-2">
                    <Leftbar></Leftbar>
                </div>
                <div className="col-sm-10">
                    <Middlebar></Middlebar>

                </div>
            </div>
        </div>
    );
};

export default Home;