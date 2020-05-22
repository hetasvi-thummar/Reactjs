import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import { Button } from "reactstrap";

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



    const countries = ["Bussiness", "Entertainment", "Health", "Science", "Sport", "Technology"];
    console.log(countries);
    return (
        <div className="container-md border">
            <div className="row border">Menu</div>
            <div className="row border">
                <div className="col-sm-2 border"><div>
                    {countries !== null &&
                        countries.map((country) => (
                            <div>{country}</div>
                        ))}
                </div></div>
                <div className="col-sm-4 border">
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
                                                <div>{news.source.id}</div>
                                                <div>{news.source.name}</div>
                                                <div>{news.title}</div>
                                                <div>{news.url}</div>
                                                <div>{news.urlToImage}</div>
                                            </div>
                                        ))}
                                </div>
                            )}
                    </div>
                </div>
                <div className="col-sm-6 border"></div>
            </div>
        </div>
    );
};

export default Home;