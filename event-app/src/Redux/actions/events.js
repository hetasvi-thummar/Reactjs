import axios from "axios";

export const fetchEvents = () => {
    return dispatch => {
        dispatch({ type: "EVENTS_FETCH_PENDING" });

        axios.get(`https://api.seatgeek.com/events?client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`)
            .then(res => {
                dispatch({ type: "EVENTS_FETCH_SUCCESS", events: res.data.events });
            });
    };
};

export const fetchPerformers = () => {
    return dispatch => {
        dispatch({ type: "PERFORMERS_FETCH_PENDING" });

        axios.get(`https://api.seatgeek.com/performers?client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`)
            .then(res => {
                dispatch({ type: "PERFORMERS_FETCH_SUCCESS", performers: res.data.performers });
            });
    };
};

export const fetchVenues = () => {
    return dispatch => {
        dispatch({ type: "VENUES_FETCH_PENDING" });

        axios.get(`https://api.seatgeek.com/venues?client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`)
            .then(res => {
                dispatch({ type: "VENUES_FETCH_SUCCESS", venues: res.data.venues });
            });
    };
};

export const fetchSingleperformer = id => {
    return dispatch => {
        dispatch({ type: "SINGLEPERFORMER_FETCH_PENDING" });

        axios.get(`https://api.seatgeek.com/performers?id=${id}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`)
            .then(res => {
                dispatch({ type: "SINGLEPERFORMER_FETCH_SUCCESS", singleperformer: res.data.performers });
            });
    };
};

export const fetchSinglevenue = state => {
    return dispatch => {
        dispatch({ type: "SINGLEVENUE_FETCH_PENDING" });

        axios.get(`https://api.seatgeek.com/venues?state=${state}&client_id=MTk3MzQ2MDd8MTU5MTYwOTU4NS45Ng`)
            .then(res => {
                dispatch({ type: "SINGLEVENUE_FETCH_SUCCESS", singlevenue: res.data.venues });
            });
    };
};