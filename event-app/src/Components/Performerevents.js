import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleperformer } from "../Redux/actions/events";
import "../events.css";
import { useParams } from "@reach/router";
import { Button } from "reactstrap";
import moment from "moment";

const Performerevents = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, singleperformer } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    singleperformer: state.postsReducer.singleperformer,
  }));
  console.warn(params.slug);

  useEffect(() => {
    dispatch(fetchSingleperformer(params.slug));
  }, [dispatch, params.slug]);

  console.log("hello");

  return (
    <>
      <div className="container-md  mt-5">
        <div className="row pl-5 ">
          <h5>Upcoming Events</h5>
        </div>

        <div className="row mt-5">
          <div className="col-sm-8">
  {singleperformer === null ? <div>No Data Found!!!</div> 
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
        </div>
      </div>
    </>
  );
};

export default Performerevents;
