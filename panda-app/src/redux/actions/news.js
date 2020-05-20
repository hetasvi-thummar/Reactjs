import axios from "axios";

export const fetchNews = () => {
    return dispatch => {
        dispatch({ type: "NEWS_FETCH_PENDING" });

        axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=885cd10f94b44af2b723eed9b8278d23").then(res => {
            dispatch({ type: "NEWS_FETCH_SUCCESS", news: res.data.articles });
        });
    };
};