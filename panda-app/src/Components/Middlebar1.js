import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Rightbar } from ".";

const Middlebar1 = () => {
  const { loading, news } = useSelector((state) => ({
    loading: state.postsReducer.loading,
    news: state.postsReducer.news,
  }));

  const [singlenews, setsinglenews] = useState({});

  useEffect(() => {
    setsinglenews({});
  }, [news]);

  return (
    <>
      <div className="row web-display">
        <div className="col-sm-3 shadow">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="pt-2 pb-2 pl-2">Browse by topic</div>
              {news !== null &&
                news.map((news) => (
                  <div
                    key={news.id}
                    className={
                      news.title === singlenews.title
                        ? "middle-panel-item "
                        : "middle-panel-item"
                    }
                  >
                    {/* <p onClick={() => setsinglenews(news)}>{news.source.name}</p> */}
                    <p onClick={() => setsinglenews(news)}>{news.title}</p>
                    {/* <a href="#1" onClick={() => setsinglenews(news)}>Read More</a> */}
                  </div>
                ))}
            </>
          )}
        </div>
        <div className="col-sm-9  right-panel-item">
          <Rightbar singlenews={singlenews}></Rightbar>
        </div>
      </div>
      <div className="row mobile-display">
        <div className="col-sm-4">
          {loading ? (
            <div className="pl-3">loading</div>
          ) : (
            <>
              {singlenews.title === undefined ? (
                news !== null &&
                news.map((news) => (
                  <div
                    key={news.id}
                    className={
                      news.title === singlenews.title
                        ? "middle-panel-item setcolor"
                        : "middle-panel-item"
                    }
                  >
                    <div>
                      <h5>{news.source.name}</h5>
                    </div>
                    <div>{news.title}</div>
                    <div>
                      <a href="#1" onClick={() => setsinglenews(news)}>
                        Read More
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="pl-3">
                    <a href="#1" onClick={() => setsinglenews({})}>
                      Back
                    </a>
                  </div>
                  <Rightbar
                    singlenews={singlenews}
                    className="right-panel-item"
                  ></Rightbar>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Middlebar1;
