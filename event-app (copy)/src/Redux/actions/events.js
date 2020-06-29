import axios from "axios";

export const fetchEvents = () => {
  return (dispatch) => {
    dispatch({ type: "EVENTS_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/2/events?client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({ type: "EVENTS_FETCH_SUCCESS", events: res.data.events });
      });
  };
};

export const fetchPerformers = () => {
  return (dispatch) => {
    dispatch({ type: "PERFORMERS_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/2/performers?client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({
          type: "PERFORMERS_FETCH_SUCCESS",
          performers: res.data.performers,
        });
      });
  };
};

export const fetchVenues = () => {
  return (dispatch) => {
    dispatch({ type: "VENUES_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/venues?client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({ type: "VENUES_FETCH_SUCCESS", venues: res.data.venues });
      });
  };
};

export const fetchSingleperformer = (slug) => {
  console.warn(slug);
  return (dispatch) => {
    dispatch({ type: "SINGLEPERFORMER_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/2/events?performers.slug=${slug}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({
          type: "SINGLEPERFORMER_FETCH_SUCCESS",
          singleperformer: res.data.events,
        });
        // console.log(`${slug}`);
        // console.log(res.data.events);
      });
  };
};

export const fetchSinglevenue = (state) => {
  return (dispatch) => {
    dispatch({ type: "SINGLEVENUE_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/venues?state=${state}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({
          type: "SINGLEVENUE_FETCH_SUCCESS",
          singlevenue: res.data.venues,
        });
      });
  };
};

export const fetchPages = (page) => {
  console.warn(page);
  return (dispatch) => {
    dispatch({ type: "PAGES_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/2/performers?per_page=12&page=${page}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({
          type: "PAGES_FETCH_SUCCESS",
          pages: res.data,
        });
      });
  };
};

export const fetchVenuepages = (page) => {
  console.warn(page);
  return (dispatch) => {
    dispatch({ type: "VENUEPAGES_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/2/venues?per_page=12&page=${page}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({
          type: "VENUEPAGES_FETCH_SUCCESS",
          venuepages: res.data,
        });
      });
  };
};

export const fetchEventpages = (page) => {
  console.warn(page);
  return (dispatch) => {
    dispatch({ type: "EVENTPAGES_FETCH_PENDING" });

    axios
      .get(
        `https://api.seatgeek.com/2/events?per_page=12&page=${page}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`
      )
      .then((res) => {
        dispatch({
          type: "EVENTPAGES_FETCH_SUCCESS",
          eventpages: res.data,
        });
      });
  };
};
