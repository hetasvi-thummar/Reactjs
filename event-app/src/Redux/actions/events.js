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