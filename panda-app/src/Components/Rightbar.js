import React from 'react';
import moment from 'moment';

const Rightbar = ({ singlenews }) => {
    const { title, description, urlToImage, publishedAt, url } = singlenews;

    const date = moment(publishedAt).fromNow()
    // console.log(date);


    return (
        <div className={title === undefined ? "display-none scroll-panel" : ""}>
            <div><h4>{title}</h4></div>
            <div>{date}</div>
            <div><img src={urlToImage} className="newsimg"></img></div>
            <div>{description}</div>
            <div><a href={url}>{title === undefined ? "" : "Read More"}</a></div>

        </div>

    );
}
export default Rightbar;