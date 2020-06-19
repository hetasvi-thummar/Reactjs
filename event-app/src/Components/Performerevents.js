import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleperformer } from "../Redux/actions/events";
import "../events.css";

import {
  Card,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import header from "../Components/images/header1.jpeg";
import moment from "moment";
import Title from "./Title";
import { FooterOne } from ".";

const Performerevents = (props) => {
  const dispatch = useDispatch();

  const [slug, setslug] = useState(null);

  const { loading, singleperformer } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    singleperformer: state.postsReducer.singleperformer,
  }));

  console.log(singleperformer);

  useEffect(() => {
    dispatch(fetchSingleperformer(props.location.state.newslug));
  }, [dispatch]);

  return (
    <>
      <Title></Title>
      <div className="container-md  mt-5">
        <div className="row pl-5 ">
          <h5>Upcoming Events</h5>
        </div>

        <div className="row mt-5">
          <div className="col-sm-8">
            {singleperformer !== null &&
              singleperformer.map((event) => (
                <div key={event.id}>
                  <div className="row  p-3 m-2 event-div">
                    <div className="col-sm-3">
                      <div className="event-title">
                        {moment(event.datetime_utc).format("MMM D")}
                      </div>
                      <div className="event-subtitle">
                        {moment(event.datetime_utc).format("ddd hh:mm a")}
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="event-title">{event.title}</div>
                      <div className="event-subtitle">
                        {event.venue.name}-{event.venue.display_location}
                      </div>
                    </div>

                    <div className="col-sm-2">
                      <Button color="primary" className="button">
                        {event.stats.lowest_price !== null
                          ? event.stats.lowest_price
                          : "Track"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-sm-4 pl-5">
            <div className="row">
              <Card className="card">
                <CardBody>
                  <CardTitle className="mb-3">
                    <h6>
                      Buyer Guarantee <br></br>We will make it right
                    </h6>
                  </CardTitle>
                  <CardSubtitle className="card-subtitle">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="pr-2 iconright"
                    />
                    Canceled events refunded
                  </CardSubtitle>
                  <CardSubtitle>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="pr-2 iconright"
                    />
                    Guaranteed get-in
                  </CardSubtitle>
                  <CardSubtitle>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="pr-2 iconright"
                    />{" "}
                    Delivered in time
                  </CardSubtitle>
                  <CardSubtitle>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="pr-2 iconright"
                    />
                    Same seats as your order
                  </CardSubtitle>
                </CardBody>
                <CardBody>
                  <CardLink href="#">Learn More</CardLink>
                </CardBody>
              </Card>
            </div>
            <div className="row p-4">
              <Card className="text-center p-2">
                <CardImg width="100%" src={header} alt="Card image cap" />
                <CardImgOverlay>
                  <CardBody>
                    <CardTitle className="text-white">
                      Get Upcoming Events updates and discover similar events.
                    </CardTitle>
                    <Button>Favourite</Button>
                  </CardBody>
                </CardImgOverlay>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <FooterOne></FooterOne>
    </>
  );
};

export default Performerevents;
