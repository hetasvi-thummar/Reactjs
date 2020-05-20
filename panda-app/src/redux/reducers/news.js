const initialState = {
    loading: false,
    news: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS_FETCH_PENDING":
            return { ...state, loading: true, news: null };
        case "NEWS_FETCH_SUCCESS":
            return { ...state, loading: false, news: action.news };
        default:
            return { ...state };
    }
};
export default postsReducer;