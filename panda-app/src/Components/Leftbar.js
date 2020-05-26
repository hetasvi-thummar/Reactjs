import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../redux/actions/news';


const Leftbar = () => {
    const dispatch = useDispatch();
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
        <div className="all-border scroll-panel">
            {countries !== null &&
                countries.map((country) => (
                    <div className="p-2 left-panel-item" onClick={() => dispatch(fetchNews(country.key))}>{country.value}</div>
                ))}
        </div>
    );
}

export default Leftbar;