import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleperformer } from '../Redux/actions/events';
import '../events.css';
import Header from './Header';
import Footer from './Footer';


const Performer_events = (props) => {

    const dispatch = useDispatch();

    const [id, setid] = useState(null)

    const { loading, singleperformer } = useSelector(state => ({
        loading: state.postsReducer.loading,
        singleperformer: state.postsReducer.singleperformer
    }));

    useEffect(() => {
        dispatch(fetchSingleperformer(props.location.state.newid))
    }, [dispatch]);


    return (
        <>
            <Header></Header>
            <div className="container-md  mt-5">
                <div className="row pl-5 "><h5>Performers</h5></div>
                <div className="row mt-2">
                    {singleperformer !== null && singleperformer.map(performer => (
                        <div className="pl-5 pb-4">
                            <div>
                                <img className="performer-div" src={performer.image !== null ? performer.image : "https://unsplash.it/280/210"} alt="performer" />
                                <div className="pt-2"><span className="font-weight-bold pr-2">Name:</span>{performer.name}</div>
                                <div className="pt-2"><span className="font-weight-bold pr-2">Type:</span>{performer.type}</div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Performer_events;