import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerformers } from '../Redux/actions/events';
import '../events.css';
import { navigate } from '@reach/router';
import Header from './Header';
import Footer from './Footer';


const Performers = () => {

    const dispatch = useDispatch();

    const [id, setid] = useState(null)

    const { loading, performers } = useSelector(state => ({
        loading: state.postsReducer.loading,
        performers: state.postsReducer.performers
    }));

    useEffect(() => {
        dispatch(fetchPerformers())
    }, [dispatch]);

    console.log(performers)

    return (
        <>
            <Header></Header>
            <div className="container-md  mt-5">
                <div className="row pl-5 "><h5>Performers</h5></div>
                <div className="row mt-2">
                    {performers !== null && performers.map(performer => (
                        <div className="pl-5 pb-4">
                            <div>
                                <img className="performer-div" src={performer.image !== null ? performer.image : "https://unsplash.it/280/210"} alt="performer" />
                                <div className="pt-2 font-weight-bold" onClick={() => navigate("/Performer_events", { state: { newid: performer.id } })}>{performer.name}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Performers;