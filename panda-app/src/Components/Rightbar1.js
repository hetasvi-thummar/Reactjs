import React from 'react';
import moment from 'moment';

const Rightbar = ({ singlenews }) => {
    const { title, description, urlToImage, publishedAt, url } = singlenews;

    const date1 = moment(publishedAt).fromNow();
    console.log(date1);

    const date = moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a');
    console.log(date);



    return (
        <div className={title === undefined ? "display-none scroll-panel right-panel-item" : "right-panel-item"}>

            <h4>{title}</h4>
            {/* <h6>{publishedAt}</h6>
            <h6>{date}</h6> */}
            <h6>{date1}</h6>
            <img src={urlToImage} className="newsimg"></img>
            <h6>{description}</h6>
            <a href={url}>{title === undefined ? "" : "Read More"}</a>

        </div >

    );
}
export default Rightbar;