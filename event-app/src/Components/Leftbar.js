import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../Redux/actions/events';
import moment from 'moment';
import '../events.css';
import { Card, CardLink, CardTitle, CardSubtitle, CardBody, Button, CardImg, CardImgOverlay } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCouch } from "@fortawesome/free-solid-svg-icons";
import header from '../Components/images/header1.jpeg';



const Leftbar = () => {

    const dispatch = useDispatch();

    const { loading, events } = useSelector(state => ({
        loading: state.postsReducer.loading,
        events: state.postsReducer.events
    }));

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch]);

    console.log(loading, events);

    const date = events === null || events === undefined ? "" : moment("datetime_utc").format('MMMM Do YYYY, hh:mm a');
    console.log(date);

    return (
        <>
            <div className="container-md border">
                <div className="row  mt-4">
                    <div className="col-sm-8">
                        {events !== null && events.map(event => (
                            <div key={event.id}>
                                <div className="row  p-2 m-2 event-div">
                                    <div className="col-sm-3">
                                        <div>{date}</div>
                                        <div>{event.datetime_utc}</div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div>{event.title}</div>
                                        <div>{event.venue.name}-{event.venue.display_location}</div>
                                    </div>
                                    <div className="col-sm-2">{event.stats.average_price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-sm-4 pl-5 pr-5">
                        <div className="row p-4">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faCouch} className="pr-2 icon" />Buyer Guarantee <br></br>We will make it right</CardTitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faCheck} className="pr-2 iconright" />Canceled events refunded</CardSubtitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faCheck} className="pr-2 iconright" />Guaranteed get-in</CardSubtitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faCheck} className="pr-2 iconright" /> Delivered in time</CardSubtitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faCheck} className="pr-2 iconright" />Same seats as your order</CardSubtitle>
                                </CardBody>
                                <CardBody>
                                    <CardLink href="#">Learn More</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="row p-4">
                            <Card>
                                <CardImg width="100%" src={header} alt="Card image cap" />
                                <CardImgOverlay>
                                    <CardBody>
                                        <CardTitle>Get Upcoming Events updates and discover similar events.</CardTitle>
                                        <Button>Go somewhere</Button>
                                    </CardBody>
                                </CardImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leftbar;