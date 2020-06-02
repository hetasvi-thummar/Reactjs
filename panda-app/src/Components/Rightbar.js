import React from 'react';
import moment from 'moment';

const Rightbar = ({ singlenews }) => {
    const { title, description, urlToImage, publishedAt, url } = singlenews;

    const date1 = moment(publishedAt).fromNow();
    console.log(date1);


    // const date = new Date();
    // console.log(date)
    // const date2 = moment(date).format("DD-MM-yyyy HH:mm:ss")
    // console.log(date2);


    return (
        <div className={title === undefined ? "display-none scroll-panel right-panel-item" : ""}>

            <div><h4>{title}</h4></div>
            <div>{date1}</div>
            <div><img src={urlToImage} className="newsimg"></img></div>
            <div>{description}</div>
            <div><a href={url}>{title === undefined ? "" : "Read More"}</a></div>

        </div>

    );
}
export default Rightbar;