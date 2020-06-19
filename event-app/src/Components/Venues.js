import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVenues, fetchVenuepages } from "../Redux/actions/events";
import "../events.css";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";

import Title from "./Title";
import FooterOne from "./FooterOne";

const Venues = () => {
  const [combinedata, setcombinedata] = useState(null);
  const dispatch = useDispatch();

  const [state, setstate] = useState(null);
  const [page, setpage] = useState(2);

  const { loading, venues } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    venues: state.postsReducer.venues,
  }));

  const { venuepages } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    venuepages: state.postsReducer.venuepages,
  }));

  useEffect(() => {
    dispatch(fetchVenues(page));
    setcombinedata(venues);
  }, [dispatch, state]);

  const setpages = (page) => {
    dispatch(fetchVenuepages(page));
    setpage(page + 1);
    if (venuepages !== null) {
      setcombinedata([...combinedata, ...venuepages.venues]);
    }
    console.log(`combinedata:${JSON.stringify(combinedata)}`);
  };

  return (
    <>
      <Title></Title>
      <div className="container-md  mt-5">
        <div className="row pl-5 ">
          <h5>Venues</h5>
        </div>
        <div className="row mt-2">
          {combinedata !== null &&
            combinedata.map((venue) => (
              <div className="pl-5 pb-4">
                <div>
                  <img
                    className="performer-div"
                    src={"https://unsplash.it/280/210"}
                    alt="performer"
                  />
                  <div
                    className="pt-2 font-weight-bold"
                    onClick={() =>
                      navigate("/Venueevents", {
                        state: { newstate: venue.state },
                      })
                    }
                  >
                    {venue.name}
                    <div>
                      <span>State:</span>
                      {venue.state}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div>
          <Button onClick={() => setpages(page)}>Load More</Button>
        </div>
      </div>
      <FooterOne></FooterOne>
    </>
  );
};

export default Venues;
