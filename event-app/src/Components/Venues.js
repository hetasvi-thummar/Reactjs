import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVenues } from '../Redux/actions/events';
import '../events.css';
import { Button } from 'reactstrap';
import { navigate } from '@reach/router';
import Header from './Header';
import Footer from './Footer';


const Venues = () => {

    const dispatch = useDispatch();

    const [state, setstate] = useState(null)

    const { loading, venues } = useSelector(state => ({
        loading: state.postsReducer.loading,
        venues: state.postsReducer.venues
    }));

    useEffect(() => {
        dispatch(fetchVenues())
    }, [dispatch, state]);

    console.log(loading, venues);

    return (
        <>
            <Header></Header>
            <div className="container-md  mt-5">
                <div className="row pl-5 "><h5>Venues</h5></div>
                <div className="row mt-2">
                    <div className="col-sm-8">
                        {venues !== null && venues.map(venue => (
                            <div key={venue.id}>
                                <div className="row  p-2 m-2 event-div">
                                    <div className="col-sm-3">
                                        <div className="event-title"><img className="performer-div" src={"https://unsplash.it/80/60"} alt="performer" /></div>
                                        {/* <div className="event-subtitle">{moment(event.datetime_utc).format('ddd hh:mm a')}</div>  */}
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="event-title">{venue.name}</div>
                                        <div className="event-subtitle">{venue.address},{venue.display_location}--{venue.country}</div>

                                    </div>

                                    <div className="col-sm-2">
                                        <Button color="primary" className="button " onClick={() => navigate("/Venue_events", { state: { newstate: venue.state } })}>
                                            {venue.stats.event_count !== null ? venue.stats.event_count : "Track"}
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Venues;