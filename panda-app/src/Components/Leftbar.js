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
        { key: "eg", value: "Egypt" },
        { key: "in", value: "India" },
        { key: "id", value: "Indonesia" }];

    const [singlecountry, setsinglecountry] = useState(null);

    const setCountry = (key) => {
        dispatch(fetchNews(key))
        setsinglecountry(key);
    }

    const setCountryfromDropdown = (e) => {
        dispatch(fetchNews(e.target.value))

    }


    return (
        <div className="row">
            <div className="col-sm-12 all-border web-display scroll-panel">
                {countries !== null &&
                    countries.map((country) => (
                        <div
                            className={singlecountry === country.key ? "p-2 left-panel-item setcolor" : "p-2 left-panel-item"}
                            onClick={() => setCountry(country.key)}>{country.value}</div>
                    ))}
            </div>
            <div className="col-sm-12 mobile-display">

                <select onChange={setCountryfromDropdown}>
                    <option value="">Please select any country</option>
                    {countries !== null &&
                        countries.map((country) => (
                            <option value={country.key}>{country.value}</option>

                        ))}
                </select>
            </div>
        </div>
    );
}

export default Leftbar;