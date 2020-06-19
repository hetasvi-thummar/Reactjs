import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPerformers, fetchPages } from "../Redux/actions/events";
import "../events.css";
import { navigate } from "@reach/router";

import { Button } from "reactstrap";
import Title from "./Title";
import FooterOne from "./FooterOne";

const Performers = () => {
  const [alldata, setalldata] = useState(null);
  const dispatch = useDispatch();

  const [slug, setslug] = useState(null);

  const [page, setpage] = useState(2);

  const { loading, performers } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    performers: state.postsReducer.performers,
  }));

  const { pages } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    pages: state.postsReducer.pages,
  }));

  useEffect(() => {
    dispatch(fetchPerformers(page));
    setalldata(performers);
  }, [dispatch, slug]);

  // useEffect(() => {
  //   dispatch(fetchPages(page));
  // }, [dispatch]);

  const setpages = (page) => {
    // alert(newpage);
    // if (newpage === null) {
    //   newpage = 0;
    // }
    dispatch(fetchPages(page));
    setpage(page + 1);

    if (pages !== null) {
      setalldata([...alldata, ...pages.performers]);
      // performers.push(performers.setalldata);
    }
    console.log(`alldata:${JSON.stringify(alldata)}`);
  };

  return (
    <>
      <Title></Title>
      <div className="container-md  mt-5">
        <div className="row pl-5 ">
          <h5>Performers</h5>
        </div>
        <div className="row mt-2">
          {alldata !== null &&
            alldata.map((performer) => (
              <div className="pl-5 pb-4">
                <div>
                  <img
                    className="performer-div"
                    src={
                      performer.image !== null
                        ? performer.image
                        : "https://unsplash.it/280/210"
                    }
                    alt="performer"
                  />
                  <div
                    className="pt-2 font-weight-bold pname"
                    onClick={() =>
                      navigate(`/Performerevents/`, {
                        state: { newslug: performer.slug },
                      })
                    }
                  >
                    {performer.name}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center">
          <Button onClick={() => setpages(page)}>Load More</Button>
        </div>
      </div>

      <FooterOne></FooterOne>
    </>
  );
};

export default Performers;
