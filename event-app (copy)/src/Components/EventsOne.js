import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents, fetchEventpages } from "../Redux/actions/events";
import moment from "moment";
import "../events.css";
import { Button } from "reactstrap";

const Events = () => {
  const dispatch = useDispatch();

  const [page, setpage] = useState(2);
  const [limit, setlimit] = useState(5);

  //   const [filterdata, setfilterdata] = useState(null);

  const { loading, eventpages } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    eventpages: state.postsReducer.eventpages,
  }));

  useEffect(() => {
    dispatch(fetchEventpages(page));
  }, [dispatch]);

  console.log(eventpages);

  const loadmore = (page) => {
    dispatch(fetchEventpages(page));
    setlimit(limit + 5);
    setpage(page + 1);

    //   if (eventpages !== null) {
    //     setfilterdata(eventpages);
    //   }
  };

  //   const mainevent = (e) => {
  //     const filteredevents = eventpages.filter((event) =>
  //       event.venue.display_location
  //         .toLowerCase()
  //         .includes(e.target.value.toLowerCase())
  //     );
  //     setfilterdata(filteredevents);
  //   };

  return (
    <>
      <div className="container-md  mt-5">
        <div className="row pl-5 ">
          <h5 className="pr-5">Upcoming Events</h5>

          <input
            type="text"
            placeholder="Search"
            className="textbox"
            // onKeyUp={(e) => mainevent(e)}
          ></input>
        </div>

        <div className="row mt-5">
          <div className="col-sm-8">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                {eventpages !== null &&
                  eventpages.slice(0, limit).map((event) => (
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
                          <div>{event.performers.slug}</div>
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
                <div className="text-center">
                  <Button color="primary" onClick={() => loadmore(page)}>
                    Load More
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
