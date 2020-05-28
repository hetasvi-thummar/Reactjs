import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import { useParams } from '@reach/router';
import { Rightbar } from '../Components';


const Middlebar = () => {
    const dispatch = useDispatch();

    const params = useParams();

    const { loading, news } = useSelector(state => ({
        loading: state.postsReducer.loading,
        news: state.postsReducer.news
    }));

    useEffect(() => {
        dispatch(fetchNews(params.country));
    }, [dispatch, params.country]);
    console.log(news);

    const [singlenews, setsinglenews] = useState({});


    return (
        <div className="row">
            <div className="col-sm-4 all-border scroll-panel">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                        <>
                            {news !== null &&
                                news.map(news => (
                                    <div key={news.id} className={news.title === singlenews.title ? "middle-panel-item setcolor" : "middle-panel-item"}>
                                        <div><h5>{news.source.name}</h5></div>
                                        <div>{news.title}</div>
                                        <div><a href="#1" onClick={() => setsinglenews(news)}>Read More</a></div>
                                    </div>
                                ))}
                        </>
                    )}
            </div>
            <div className="col-sm-8 all-border scroll-panel">
                <Rightbar singlenews={singlenews}></Rightbar>
            </div>
        </div>
    )

}

export default Middlebar;
