const initialState = {
  loading: false,
  events: null,
  performers: null,
  venues: null,
  singleperformer: null,
  singlevenue: null,
  pages: null,
  venuespages: null,
  eventpages: null,
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
      return {
        ...state,
        loading: false,
        singleperformer: action.singleperformer,
      };
    case "SINGLEVENUE_FETCH_PENDING":
      return { ...state, loading: true, singlevenue: null };
    case "SINGLEVENUE_FETCH_SUCCESS":
      return { ...state, loading: false, singlevenue: action.singlevenue };
    case "PAGES_FETCH_PENDING":
      return { ...state, loading: true, pages: null };
    case "PAGES_FETCH_SUCCESS":
      return { ...state, loading: false, pages: action.pages };
    case "VENUEPAGES_FETCH_PENDING":
      return { ...state, loading: true, venuepages: null };
    case "VENUEPAGES_FETCH_SUCCESS":
      return { ...state, loading: false, venuepages: action.venuepages };
    case "EVENTPAGES_FETCH_PENDING":
      return { ...state, loading: true, eventpages: null };
    case "EVENTPAGES_FETCH_SUCCESS":
      return { ...state, loading: false, eventpages: action.eventpages };
    default:
      return { ...state };
  }
};
export default postsReducer;
