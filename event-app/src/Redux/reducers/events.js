const initialState = {
    loading: false,
    events: null,
    performers: null,
    venues: null,
    singleperformer: null,
    singlevenue: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EVENTS_FETCH_PENDING":
            return { ...state, loading: true, events: null };
        case "EVENTS_FETCH_SUCCESS":
            return { ...state, loading: false, events: action.events };
        case "PERFORMERS_FETCH_PENDING":
            return { ...state, loading: true, performers: null };
        case "PERFORMERS_FETCH_SUCCESS":
            return { ...state, loading: false, performers: action.performers };
        case "VENUES_FETCH_PENDING":
            return { ...state, loading: true, venues: null };
        case "VENUES_FETCH_SUCCESS":
            return { ...state, loading: false, venues: action.venues };
        case "SINGLEPERFORMER_FETCH_PENDING":
            return { ...state, loading: true, singleperformer: null };
        case "SINGLEPERFORMER_FETCH_SUCCESS":
            return { ...state, loading: false, singleperformer: action.singleperformer };
        case "SINGLEVENUE_FETCH_PENDING":
            return { ...state, loading: true, singlevenue: null };
        case "SINGLEVENUE_FETCH_SUCCESS":
            return { ...state, loading: false, singlevenue: action.singlevenue };
        default:
            return { ...state };
    }
};
export default postsReducer;