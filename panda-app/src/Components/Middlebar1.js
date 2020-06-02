import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import { useParams } from '@reach/router';
import { Rightbar1 } from '../Components';


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

    // const setsinglenewsfromDropdown = (e) => {
    //     const single = news.find((item) => item.title === e.target.value);
    //     setsinglenews(single);
    // }


    return (
        <>
            <div className="row web-display">
                <div className="col-sm-5 all-border scroll-panel  ">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                            <>
                                {news !== null &&
                                    news.map(news => (
                                        <div key={news.id} className={news.title === singlenews.title ? "middle-panel-item setcolor" : "middle-panel-item"}>
                                            <h5>{news.source.name}</h5>
                                            <p>{news.title}</p>
                                            <a href="#1" onClick={() => setsinglenews(news)}>Read More</a>
                                        </div>
                                    ))}
                            </>
                        )}
                </div>

                <div className="col-sm-7 all-border scroll-panel right-panel-item">

                    <Rightbar1 singlenews={singlenews}></Rightbar1>
                </div>
            </div>

            <div className="row mobile-display">

                <div className="col-sm-4">
                    {loading ? (
                        <div className="pl-3">loading</div>
                    ) : (
                            // <select onChange={setsinglenewsfromDropdown}>
                            //     <option value="">Please select any news</option>
                            //     {news !== null &&
                            //         news.map(news => (
                            //             <option value={news.title}>
                            //                 {news.title}
                            //             </option>
                            //         ))}
                            // </select>

                            <>

                                {
                                    singlenews.title === undefined ? (
                                        news !== null &&
                                        news.map(news => (
                                            <div key={news.id} className={news.title === singlenews.title ? "middle-panel-item setcolor" : "middle-panel-item"}>
                                                {console.log(`singlenews.title : ${singlenews.title}`)}
                                                <div><h5>{news.source.name}</h5></div>
                                                <div>{news.title}</div>
                                                <div><a href="#1" onClick={() => setsinglenews(news)}>Read More</a></div>
                                            </div>

                                        ))

                                    ) : (
                                            <>
                                                <div className="pl-3"><a href="#1" onClick={() => setsinglenews({})}>Back</a></div>
                                                <Rightbar1 singlenews={singlenews} className="right-panel-item"></Rightbar1>
                                            </>
                                        )
                                }
                            </>


                        )}
                </div>
            </div>
        </>
    )

}

export default Middlebar;
