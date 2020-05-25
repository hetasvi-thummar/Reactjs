import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import { useParams } from '@reach/router';

const Home = () => {

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

    const [singlenews, Setsinglenews] = useState(null);

    var marvelHeroes = news.filter(function (hero) {
        return hero.author == "Clarín.com";
    });


    const countries = [
        { key: "ar", value: "Argentina" },
        { key: "au", value: "Australia" },
        { key: "be", value: "Belgium" },
        { key: "br", value: "Brazil" },
        { key: "ca", value: "Canada" },
        { key: "co", value: "Colombia" },
        { key: "cn", value: "China" },
        { key: "eg", value: "Egypt" },
        { key: "hk", value: "Hong Kong" },
        { key: "in", value: "India" },
        { key: "id", value: "Indonesia" }];

    return (
        <div className="container-md border">
            <div className="row border">Menu</div>
            <div className="row border">
                <div className="col-sm-2 border"><div>
                    {countries !== null &&
                        countries.map((country) => (
                            <div onClick={() => dispatch(fetchNews(country.key))}>{country.value}</div>
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
                                            <div key={news.id} onClick={() => dispatch(fetchNews())}>
                                                <div>{news.source.name}</div>
                                                <div>{news.title}</div>
                                            </div>
                                        ))}
                                </div>
                            )}
                    </div>
                </div>
                <div className="col-sm-6 border">
                    <div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                                <div>
                                    <div>{singlenews.title}</div>

                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;