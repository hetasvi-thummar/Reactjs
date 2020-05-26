import React from 'react';

const Rightbar = ({ singlenews }) => {
    const { title, description, url } = singlenews;
    return (
        <div>
            <div><h4>{title}</h4></div>
            <div>{description}</div>
            <div><a href="#1">{url}</a></div>
        </div>

    );
}
export default Rightbar;