const initialState = {
    loading: false,
    events: null,


};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EVENTS_FETCH_PENDING":
            return { ...state, loading: true, events: null };
        case "EVENTS_FETCH_SUCCESS":
            return { ...state, loading: false, events: action.events };

        default:
            return { ...state };
    }
};
export default postsReducer;