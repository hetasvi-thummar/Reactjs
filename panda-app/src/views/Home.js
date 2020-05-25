import React, { useEffect } from 'react';
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

    console.log(params.countries);

    useEffect(() => {
        dispatch(fetchNews(params.country));
    }, [dispatch, params.country]);




    const countries = ["Argentina", "Australia", "Belgium", "Brazil", "Canada", "Colombia", "China", "Egypt", "Hong Kong", "India", "Indonesia", "Italy", "Japan", "Malaysia", "New Zealand", "Norway", "Poland", "Romania", "Singapore"];
    // console.log(countries);

    return (
        <div className="container-md border">
            <div className="row border">Menu</div>
            <div className="row border">
                <div className="col-sm-2 border"><div>
                    {countries !== null &&
                        countries.map((country) => (
                            <div onClick={() => dispatch(fetchNews(country))}>{country}</div>
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
                                                <div>{news.source.name}</div>
                                            </div>
                                        ))}
                                </div>
                            )}
                    </div>
                </div>
                <div className="col-sm-6 border">

                </div>
            </div>
        </div>
    );
};

export default Home;