import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, news } = useSelector(state => ({
        loading: state.postsReducer.loading,
        news: state.postsReducer.news
    }));
    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    console.log(loading, news);
    return (
        <div className="container">
            <div className="row">
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                            <div>
                                {news !== null &&
                                    news.map(news => (
                                        <div key={news.id}>
                                            <div>{news.author}</div>
                                            <div>{news.content}</div>
                                            <div>{news.description}</div>
                                            <div>{news.publishedAt}</div>
                                        </div>
                                    ))}
                            </div>
                        )}
                </div>
            </div>
        </div>


    );
};

export default Home;