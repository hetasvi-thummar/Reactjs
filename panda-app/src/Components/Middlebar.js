import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Rightbar } from '.';

const Middlebar = () => {

    const { loading, news } = useSelector(state => ({
        loading: state.postsReducer.loading,
        news: state.postsReducer.news
    }));

    const [singlenews, setsinglenews] = useState({});

    useEffect(() => {
        setsinglenews({});

    }, [news]);


    return (
        <>
            <div className="row web-display">
                {console.log(`news : ${JSON.stringify(news)}`)}
                <div className="col-sm-5 all-border scroll-panel  ">{loading ? (<div>Loading...</div>) :
                    (
                        <>{news !== null &&
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
                    <Rightbar singlenews={singlenews}></Rightbar>
                </div>
            </div>

            <div className="row mobile-display">
                <div className="col-sm-4">{loading ? (<div className="pl-3">loading</div>) :
                    (<>
                        {singlenews.title === undefined ? (news !== null &&
                            news.map(news => (
                                <div key={news.id} className={news.title === singlenews.title ? "middle-panel-item setcolor" : "middle-panel-item"}>
                                    <div><h5>{news.source.name}</h5></div>
                                    <div>{news.title}</div>
                                    <div><a href="#1" onClick={() => setsinglenews(news)}>Read More</a></div>
                                </div>
                            ))
                        ) : (<>
                            <div className="pl-3"><a href="#1" onClick={() => setsinglenews({})}>Back</a></div>
                            <Rightbar singlenews={singlenews} className="right-panel-item"></Rightbar>
                        </>)
                        }
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Middlebar;
