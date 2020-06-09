import React from 'react';
import moment from 'moment';

const Rightbar = ({ singlenews }) => {

    const { title, description, urlToImage, publishedAt, url } = singlenews;

    const date1 = moment(publishedAt).fromNow();

    return (
        <>
            <div className="pb-2">News</div>

            <div className={title === undefined ? "display-none row right-panel-item" : " row right-panel-item"}>
                <div className="col-sm-2 p-2">
                    <img src={urlToImage} className="newsimg" alt=""></img>
                </div>
                <div className="col-sm-10 p-2">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <h6>{date1}</h6>
                    {/* <a href={url}>{title === undefined ? "" : "Read More"}</a> */}
                </div>
            </div>
        </>

    );
}
export default Rightbar;