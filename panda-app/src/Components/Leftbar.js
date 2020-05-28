import React, { useState } from 'react';
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

    const [singlecountry, setsinglecountry] = useState(null);

    const setCountry = (key) => {
        dispatch(fetchNews(key))
        setsinglecountry(key);
    }

    return (
        <div className="row">
            <div className="col-sm-12 all-border">
                {countries !== null &&
                    countries.map((country) => (
                        <div
                            className={singlecountry === country.key ? "p-2 left-panel-item setcolor" : "p-2 left-panel-item"}
                            onClick={() => setCountry(country.key)}>{country.value}</div>
                    ))}
            </div>
        </div>
    );
}

export default Leftbar;