import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Components/Header';
import Events from '../Components/Events';
import Performers from '../Components/Performers';
import Venues from '../Components/Venues';
import Performer_events from '../Components/Performer_events';
import Footer from '../Components/Footer';
import Venue_events from '../Components/Venue_events';




const Home = () => {


    return (
        <>
            <Header></Header>
            {/* <Performers></Performers> */}
            <Events></Events>
            {/* <Venues></Venues> */}
            {/* <Performer_events></Performer_events> */}
            {/* <Venue_events></Venue_events> */}

            <Footer></Footer>

        </>
    );
};

export default Home;