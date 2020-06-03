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
        { key: "id", value: "Indonesia" },
        { key: "gr", value: "Greece" },
        { key: "il", value: "Israel" },
        { key: "jp", value: "Japan" }];

    const [singlecountry, setsinglecountry] = useState(null);

    const setCountry = (key) => {
        dispatch(fetchNews(key))
        setsinglecountry(key);
    }

    const setCountryfromDropdown = (e) => {
        dispatch(fetchNews(e.target.value))

    }

    return (
        <>
            <div className="col-sm-12 all-border web-display scroll-panel">
                {countries !== null &&
                    countries.map((country) => (
                        <div className={singlecountry === country.key ? " left-panel-item setcolor" : "left-panel-item pl-4"}
                            onClick={() => setCountry(country.key)}>{country.value}</div>
                    ))}
            </div>

            <div className="col-sm-12 mobile-display left-panel-item">
                <select onChange={setCountryfromDropdown}>
                    <option value="">Please select any country</option>
                    {countries !== null &&
                        countries.map((country) => (
                            <option value={country.key}>{country.value}</option>

                        ))}
                </select>
            </div>
        </>
    );
}

export default Leftbar;