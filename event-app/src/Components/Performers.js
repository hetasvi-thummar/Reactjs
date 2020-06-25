import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPerformers, fetchPages } from "../Redux/actions/events";
import "../events.css";

import { Button } from "reactstrap";
import { Link } from "@reach/router";

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

  const setpages = (page) => {
    dispatch(fetchPages(page));
    setpage(page + 1);

    if (pages !== null) {
      setalldata([...alldata, ...pages.performers]);
    }
  };

  return (
    <>
      <div className="container-md  mt-5">
        <div className="row pl-5 ">
          <h5>Performers</h5>
        </div>
        <div className="row mt-2">
          {alldata !== null &&
            alldata.map((performer) => (
              <div className="pl-5 pb-4" key={performer.id}>
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
                  <div>
                    <Link to={`/user/${performer.slug}`}>{performer.name}</Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center">
          <Button onClick={() => setpages(page)}>Load More</Button>
        </div>
      </div>
    </>
  );
};

export default Performers;
